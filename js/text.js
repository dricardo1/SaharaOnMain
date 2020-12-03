let messageArray = [
  "Now Accepting CarolinaCa$h!",
  "Experience Moroccan Flavor",
  "Now Accepting CarolinaCa$h!",
  "Authentic Mediterranean Food",
];
let messageIndex = 0;

function changeMessage() {
  // now grab the message and change it.
  let newMessage = messageArray[messageIndex];
  let messageElement = document.getElementById("mainMessage");
  messageElement.textContent = newMessage;
  messageIndex++;
  if (messageIndex >= messageArray.length) {
    messageIndex = 0;
  }
}

window.onload = () => setInterval(changeMessage, 4000);
