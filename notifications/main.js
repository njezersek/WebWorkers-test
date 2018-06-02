let counter = 0;

function permission(){
  Notification.requestPermission().then(function(result) {
    console.log();
    output.innerHTML += "You have "+result+" permission for notifications!\n";
  });
}

function notification(){
  let img = "icon.png";
  let body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let n = new Notification("Testno sporocilo "+counter+++"!", {body: body, icon: img, tag: "test"});

  setTimeout(()=>n.close(), 1000);

  n.onclick = onclick;
  n.onclose = onclose;
  n.onshow = onshow;
}

function onclick(){
  output.innerHTML += "You have clicked on notification!\n";
}

function onclose(){
  output.innerHTML += "You have closed notification!\n";
}

function onshow(){
  output.innerHTML += "Notification was shown!\n";
}
