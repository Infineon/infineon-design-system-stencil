let frameworkCache: string | null = null;

export const detectFramework = (): string => {
  if (frameworkCache) return frameworkCache;
  
  // Check for non-browser environments
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    frameworkCache = 'non-browser';
    return frameworkCache;
  }

  const win = window as any;
  const doc = document;

  const isJest = typeof process !== 'undefined' && 
                 process.env && 
                 process.env.NODE_ENV === 'test';
  if (isJest) {
    frameworkCache = 'jest';
    return frameworkCache;
  }

  const isStorybook = win.location.search.includes('viewMode') || 
                      win.location.href.includes('viewMode') ||
                      win.__STORYBOOK_ENV__;
  
  if (isStorybook) {
    frameworkCache = 'Storybook';
    return frameworkCache;
  }

  const isLocalhost = ['localhost', '127.0.0.1'].includes(win.location.hostname);
  if (isLocalhost) {
    frameworkCache = 'localhost';
    return frameworkCache;
  }

  // 5. Framework detection logic with timing safeguards
  try {
    // Universal timing-safe checks
    const isDOMReady = document.readyState === 'complete';
    setTimeout(() => {
      console.log('document.readyState', document.readyState)
    }, 1000);
    
    // React detection
    if (win.React || win.ReactDOM) {
      frameworkCache = 'React';
      return frameworkCache;
    }
    
    if(isDOMReady) { 
      // Check for React 16+ roots
      const reactRoots = doc.querySelector('[data-reactroot], [data-reactid]');
      if (reactRoots) {
        frameworkCache = 'React';
        return frameworkCache;
      }
      
      // Check for React 18+ root containers
      const rootContainers = Array.from(doc.querySelectorAll('body > div'));
      const hasReactRoot = rootContainers.some(container => {
        const keys = Object.keys(container);
        return keys.some(key => key.startsWith('__reactContainer'));
      });
      
      if (hasReactRoot) {
        frameworkCache = 'React';
        return frameworkCache;
      }
    }
    
    // Angular detection
    if (win.ng || win.getAllAngularRootElements) {
      frameworkCache = 'Angular';
      return frameworkCache;
    }
    
    if (isDOMReady && doc.querySelector('[ng-version], [ng-app]')) {
      frameworkCache = 'Angular';
      return frameworkCache;
    }
    
    // Vue detection
    if (win.Vue || win.__VUE__) {
      frameworkCache = 'Vue';
      return frameworkCache;
    }
    
    if (isDOMReady && doc.querySelector('[data-v-app]')) {
      frameworkCache = 'Vue';
      return frameworkCache;
    }

    // Default to Vanilla
    if (isDOMReady) {
      frameworkCache = 'Vanilla';
      return frameworkCache;
    }
    
    frameworkCache = 'pending';
    return frameworkCache;
  } catch (e) {
    frameworkCache = 'error';
    return frameworkCache;
  }
};