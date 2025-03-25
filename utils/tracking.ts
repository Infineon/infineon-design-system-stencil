const TRACKING_DELAY = 2000;

export const trackComponent = (componentName: string) => {
  const domain = window.location.hostname;
  const sessionKey = `tracked_${componentName}_${domain}`;

  // Temporary debug
  console.log(`Tracking init for ${componentName}`, {
    sessionKey,
    storedValue: sessionStorage.getItem(sessionKey)
  });

  if (sessionStorage.getItem(sessionKey)) {
    console.log(`Skipping ${componentName} - already tracked`);
    return;
  }

  setTimeout(async () => {
    if (sessionStorage.getItem(sessionKey)) {
      console.log(`Post-delay check: ${componentName} already tracked`);
      return;
    }

    const instances = document.querySelectorAll(componentName).length;
    console.log(`Found ${instances} instances of ${componentName}`);
    
    if (instances === 0) {
      console.warn(`No instances of ${componentName} found`);
      return;
    }

    // Generate session ID
    let sessionId = sessionStorage.getItem('tracking_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('tracking_session_id', sessionId);
      console.log(`New session ID: ${sessionId}`);
    }

    try {
      const response = await fetch('http://localhost:5000/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId
        },
        body: JSON.stringify({
          component: componentName,
          domain,
          instances
        }),
        keepalive: true
      });

      console.log(`Tracking response for ${componentName}:`, response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Only mark as tracked if successful
      sessionStorage.setItem(sessionKey, 'true');
      console.log(`Successfully tracked ${componentName}`);

    } catch (error) {
      console.error(`Tracking failed for ${componentName}:`, error);
      // Remove session key to allow retry
      sessionStorage.removeItem(sessionKey);
    }
  }, TRACKING_DELAY);
};