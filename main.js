function addWorker(){
	if (!window.Worker)return "Worker is not suported";
	var w = new Worker("worker.js"); //Create a new worker

	w.postMessage("Naredi nekaj!"); // Sending message as an array to the worker

	w.onmessage = function(e) { // Getting response from worker
		console.log("MAIN: Worker je odgovoril: \"" + e.data + "\"");
	};
}

addWorker();
