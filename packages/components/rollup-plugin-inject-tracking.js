module.exports = function injectMatomo() {
  return {
    name: 'inject-matomo-plugin',
    generateBundle(options, bundle) {
      const matomoScript = `
        (function() {
          var _paq = window._paq = window._paq || [];
          if (!_paq.initialized) {
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            var componentName = window.location.pathname.split('/').pop(); // Extract component name from URL
            _paq.push(['trackEvent', 'Component', 'View', componentName]); // Track component view as an event
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            var u="https://webstats-matomo-tst.icp.infineon.com/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '82']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            _paq.initialized = true;
          }
        })();
      `;

      const targetFile = 'infineon-design-system-stencil.esm.js'; // Specify your target entry file here

      for (const fileName of Object.keys(bundle)) {
        const chunk = bundle[fileName];
        if (chunk.type === 'chunk' && fileName.endsWith(targetFile)) {
          console.log("chunk: ", chunk, "-fileName: ", fileName);

          chunk.code += matomoScript;
        }
      }
    }
  };
};