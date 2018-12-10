var text = document.querySelector("#text");
var btn = document.querySelector("#react");
var output = document.querySelector("#output");

btn.addEventListener("click", function() {
  let c = text.value.toLowerCase();
  let reply = "";
  if (c.match("hello")) {
    reply = "Hello Sumon";
  } else if (c.match("what's your name?")) {
    reply = "My name is Sumon";
  } else if (c.match("what's your department name?")) {
    reply = "Computer Science and Technology";
  } else if (c.match("what's your university name?")) {
    reply = "Jessore University of Science and Technology";
  } else {
    reply = "Sorry Sir";
  }
  output.innerHTML = reply;
  var msg = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(msg);
});
