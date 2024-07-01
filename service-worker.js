self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Oops! You are offline.");
    })
  );
});
