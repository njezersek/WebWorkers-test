if (window.Worker) { // Check if Browser supports the Worker api.
	var myWorker = new Worker("worker.js"); //Create a new worker

	myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker

	myWorker.onmessage = function(e) { // Getting response from worker
		console.log(e.data);
	};
}
