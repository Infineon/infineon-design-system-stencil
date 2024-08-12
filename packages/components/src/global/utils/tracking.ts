// global/utils/tracking.ts
const componentQueue: string[] = [];
const BATCH_INTERVAL = 5000; // 5 seconds

function sendBatch() {
  if (componentQueue.length > 0) {
    const componentsToSend = [...componentQueue];
    componentQueue.length = 0; // Clear the queue

    if (window._paq) {
      window._paq.push(['trackEvent', 'Component', 'View', componentsToSend.join(', ')]);
    } else {
      console.error("Matomo _paq array is not defined");
    }
  }
}

export function trackComponentView(componentName: string) {
  if (!componentQueue.includes(componentName)) {
    componentQueue.push(componentName);
  }
}


// Set an interval to send the batch every BATCH_INTERVAL milliseconds
setInterval(sendBatch, BATCH_INTERVAL);