declare global {
  interface Window {
    btntConfig?: any;
    btntQueue?: any[];
    btnt?: (data: object) => void;
  }
}

const isTestEnvironment = typeof process !== 'undefined' &&
  process.env &&
  process.env.NODE_ENV === 'test';

function initializeTracking() {
  if (isTestEnvironment) {
    if (!window.btnt) { 
      window.btnt = () => { };
    }
    return;
  }

  (function (t, r, _kk, n, pp) {
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

    // Add safety check for test environments
    pp = t.getElementsByTagName(r)[0];
    if (pp && pp.parentNode) {
      n.async = 1;
      n.src = window.btntConfig.domain + "/btnt.js";
      pp.parentNode.insertBefore(n, pp);
    }
  })(document, "script");
}

export function trackComponent(componentName: string, environment: string) {
  const skipEnvironments = ['jest', 'localhost', 'error', 'pending'];
  if (skipEnvironments.includes(environment)) {
    return;
  }

  if (!window.btnt) initializeTracking();

  window.btnt({
    event_name: "component_initialized",
    component_name: componentName,
    environment: environment
  });
}

export default trackComponent;