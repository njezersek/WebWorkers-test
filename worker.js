onmessage = function(e) {
  console.log("WORKER: Main je ukazal: \""+ e.data + "\"");
  let sum = 0;
  for(let i=1; i<=e.data; i++){
    sum+=i;
  }
  postMessage(sum);
}
