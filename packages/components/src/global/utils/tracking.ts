declare global {
  interface Window {
    btntConfig?: any;
    btntQueue?: any[];
    btnt?: (data: object) => void; 
  }
}

function initializeTracking() { 
    (function (t, r, kk, n, pp) {
      if (typeof window.btntConfig !== "object") {
        window.btntConfig = {
        domain: "https://ssgtm.infineon.com",
        withCookies: true,
        maxBatchSize: 10
        };
      }

      if (window["btnt"]) return;

      window["btnt"] = function (z) {
        if (typeof z !== "object") {
          z = {};
        }
        if (typeof window.btntQueue !== "object") {
          window.btntQueue = [];
        }
        window.btntQueue.push(z);
      };

      n = t.createElement(r);
      pp = t.getElementsByTagName(r)[0];
      n.async = 1;
      n.src = window.btntConfig.domain + "/btnt.js";
      pp.parentNode.insertBefore(n, pp);
      
    })(document, "script", );
  }

  export function trackComponent(componentName: string) {
  if (!window.btnt) initializeTracking();
  
  window.btnt({
    event_name: "component_initialized",
    component_name: componentName
  });
 } 

  export default trackComponent