function addWorker(){
	if (!window.Worker)return "Worker is not suported";
	var w = new Worker("worker.js"); //Create a new worker

	w.postMessage(10000000); // Sending message as an array to the worker
	console.log("10000000 ->");
	w.postMessage(1);
	console.log("1 ->");

	w.onmessage = function(e) { // Getting response from worker
		console.log("MAIN: Worker je odgovoril: \"" + e.data + "\"");
	};
}

addWorker();
