addEventListener("fetch", event => {
  console.log({ event });
  event.respondWith(handle(event.request));
});

function handle(req) {
  return new Response("hello");
}
