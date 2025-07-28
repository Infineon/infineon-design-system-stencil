let frameworkCache: string | null = null;

export const detectFramework = (): string => {
  if (frameworkCache) return frameworkCache;
  
  const win = window as any;
  const doc = document;

  // Check for React
  if (win.React) {
    frameworkCache = 'React';
    return frameworkCache;
  }
  
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

  // Check for Angular
  if (win.ng || win.getAllAngularRootElements) {
    frameworkCache = 'Angular';
    return frameworkCache;
  }
  
  if (doc.querySelector('[ng-version], [ng-app]')) {
    frameworkCache = 'Angular';
    return frameworkCache;
  }
  
  // Check for Vue
  if (win.Vue || win.__VUE__) {
    frameworkCache = 'Vue';
    return frameworkCache;
  }
  
  if (doc.querySelector('[data-v-app]')) {
    frameworkCache = 'Vue';
    return frameworkCache;
  }

  // Default to Vanilla
  frameworkCache = 'Vanilla';
  return frameworkCache;
};