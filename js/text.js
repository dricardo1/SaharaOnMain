let messageArray = [
  "Flavors as exotic as Morocco!",
  "YES, WE ARE OPEN TO SERVE!",
  "Authentic Mediterranean  Cuisine",
  "Savour a pallette of fine tastes...",
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
