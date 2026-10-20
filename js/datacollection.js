
function collectData() {
    const data = {
        browser: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookiesEnabled: navigator.cookieEnabled,
        screenWidth: screen.width,
        screenHeight: screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        cpuCores: navigator.hardwareConcurrency ?? "Unknown",
        deviceMemory: navigator.deviceMemory ?? "Unknown",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        page: window.location.pathname,
        timestamp: new Date().toISOString()
    };

    // visits
    const visits = JSON.parse(localStorage.getItem("visits") || "[]");
    visits.push(data);

    // Save everything
    localStorage.setItem("visits", JSON.stringify(visits));

    console.log("Data collected:", data);
}
collectData();
