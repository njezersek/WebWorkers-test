function parallel(){
	if (!window.Worker)return "Worker is not suported";
	var w1 = new Worker("worker.js"); //Create a new worker
	var w2 = new Worker("worker.js"); //Create a new worker

	console.time("test");

	let konec = false;

	w1.postMessage(10000000); // Sending message as an array to the worker
	console.log("10000000 -> w1");
	w2.postMessage(10000000);
	console.log("10000000 -> w2");

	w1.onmessage = function(e) { // Getting response from worker
		console.log("MAIN: Worker 1 je odgovoril: \"" + e.data + "\"");
		if(konec)console.timeEnd("test");
		konec = true;
	};

	w2.onmessage = function(e) {
		console.log("MAIN: Worker 2 je odgovoril: \"" + e.data + "\"");
		if(konec)console.timeEnd("test");
		konec = true;
	};
}

function procedural(){
	if (!window.Worker)return "Worker is not suported";
	var w1 = new Worker("worker.js"); //Create a new worker

	console.time("test");

	let konec = false;

	w1.postMessage(10000000); // Sending message as an array to the worker
	console.log("10000000 -> w1");
	w1.postMessage(10000000);
	console.log("10000000 -> w1");

	w1.onmessage = function(e) { // Getting response from worker
		console.log("MAIN: Worker 1 je odgovoril: \"" + e.data + "\"");
		if(konec)console.timeEnd("test");
		konec = true;
	};
}
