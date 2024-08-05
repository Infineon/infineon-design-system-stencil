
//rollup-plugin-inject-tracking.js
module.exports = function injectMatomo() {
  return {
    name: 'inject-matomo-plugin',
    generateBundle(options, bundle) {
      const entryPoints = [
        'infineon-design-system-stencil.esm.js', // Plain JS entry point
        'loader.js' // Vue wrapper entry point (replace with actual file name)
      ];

      const matomoScript = `
      (function() {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          if (window.location.href.includes('storybook')) {
            console.log('Matomo tracking is disabled in Storybook');
            return;
          }  
        var _paq = window._paq = window._paq || [];
          if (!_paq.initialized) {
            // // Enable debug mode
            // window._paqDebug = true;
            // console.log("Matomo debug mode enabled");

            document.addEventListener('componentView', function(event) {
              const componentName = event.detail.componentName;
              _paq.push(['trackEvent', 'Component', 'View', componentName]);
              console.log('Event pushed to _paq:', ['trackEvent', 'Component', 'View', componentName]);
            });

            _paq.push(['trackPageView']);
 
            _paq.push(['enableLinkTracking']);
 
            var u = "https://webstats-matomo-tst.icp.infineon.com/";
            _paq.push(['setTrackerUrl', u + 'matomo.php']);
 
            _paq.push(['setSiteId', '82']);
 
            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
            g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
 
            _paq.initialized = true;

            // // Dispatch a test event to verify tracking
            // document.dispatchEvent(new CustomEvent('componentView', { detail: { componentName: 'TestComponent' } }));
            // console.log("Test componentView event dispatched");
          }
        }
      })();
      `;


      const targetFile = 'infineon-design-system-stencil.esm.js'; // Specify your target entry file here

      for (const fileName of Object.keys(bundle)) {
        const chunk = bundle[fileName];
        if (chunk.type === 'chunk' &&  entryPoints.includes(fileName)) {
          console.log("Injecting Matomo script into:", fileName);
          chunk.code += matomoScript;
        }
      }
    }
  };
};