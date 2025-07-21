export const detectFramework = (): string => {
  const win = window as any;

  console.log('here')

  if(!!win.React || !!document.querySelector('[data-reactroot], [data-reactid]') ||
   Array.from(document.querySelectorAll('*')).some((e: any) => e._reactRootContainer !== undefined || Object.keys(e).some(k => k.startsWith('__reactContainer')))
  ) { 
    console.log('React.js');
    return 'React'
  }
  
  if(!!document.querySelector('script[id=__NEXT_DATA__]')) {
    console.log('Next.js');
  }
 

  if(!!document.querySelector('[id=___gatsby]')) {
    console.log('Gatsby.js');
  }
 

  if(!!win.angular ||
    !!document.querySelector('.ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]') ||
    !!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]')
  ) {
    console.log('Angular.js');
  }
  

  if (!!win.getAllAngularRootElements || !!win.ng?.coreTokens?.NgZone) {
    console.log('Angular');
  }
  

  if(!!win.Backbone) console.log('Backbone.js');
  if(!!win.Ember) console.log('Ember.js');
  if(!!win.Vue) console.log('Vue.js');
  if(!!win.Meteor) console.log('Meteor.js');
  if(!!win.Zepto) console.log('Zepto.js');
  if(!!win.jQuery) console.log('jQuery.js');

  console.log('vanilla')
  return 'vanilla'
};