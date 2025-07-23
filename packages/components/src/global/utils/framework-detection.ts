export const detectFramework = (): string => {
  const win = window as any;

  if(!!win.React || !!document.querySelector('[data-reactroot], [data-reactid]') ||
   Array.from(document.querySelectorAll('*')).some((e: any) => e._reactRootContainer !== undefined || Object.keys(e).some(k => k.startsWith('__reactContainer')))
  ) { 
    return 'React'
  }
  
 
  if(!!win.angular ||
    !!document.querySelector('.ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]') ||
    !!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]')
  ) {
    return 'Angular'
  }
  

  if (!!win.getAllAngularRootElements || !!win.ng?.coreTokens?.NgZone) {
    return 'Angular'
  }
  
  if(!!win.__VUE__) {
    return 'Vue'
  }

  return 'vanilla'
};