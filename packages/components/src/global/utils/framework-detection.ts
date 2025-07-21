export const detectFramework = (): string => {
  const win = window as any;

  console.log('here', win)

  if(!!win.React || !!document.querySelector('[data-reactroot], [data-reactid]') ||
   Array.from(document.querySelectorAll('*')).some((e: any) => e._reactRootContainer !== undefined || Object.keys(e).some(k => k.startsWith('__reactContainer')))
  ) { 
    console.log('React.js');
    return 'React'
  }
  
 
  if(!!win.angular ||
    !!document.querySelector('.ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]') ||
    !!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]')
  ) {
    console.log('Angular.js');
    return 'Angular'
  }
  

  if (!!win.getAllAngularRootElements || !!win.ng?.coreTokens?.NgZone) {
    console.log('Angular');
    return 'Angular'
  }
  
  if(!!win.__VUE__) {
    console.log('Vue.js');
    return 'Vue'
  }

  console.log('vanilla')
  return 'vanilla'
};