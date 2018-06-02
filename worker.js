onmessage = function(e) {
  console.log("WORKER: Main je ukazal: \""+ e.data + "\"");
  postMessage("Hello, I am worker");
}
