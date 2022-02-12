    const messageArray = [
      "Now Accepting CarolinaCard!",
      "Ask About Our Lunch Specials!",
      "Now Accepting CarolinaCard!",
      "Catering for All Occasions",
      "Experience Moroccan Flavor",
      "Authentic Mediterranean Food",
      "Now Accepting CarolinaCard!",
      "Ask About Our Lunch Specials!",
      "Now Accepting CarolinaCard!",
      "Catering for All Occasions",
      "Experience Moroccan Flavor",
      "Authentic Mediterranean Food"
    ];  
      
    let messageIndex = 0;

      function changeMessage() {
        // now grab the message and change it.
        //let newMessage = messageArray[messageIndex];
        let messageElement = document.getElementById("mainMessage");
        messageArray.forEach((text, i) => {
          messageElement.textContent = text;
        });
        //messageElement.textContent = newMessage;
        messageIndex++;
        if (messageIndex >= messageArray.length) {
          messageIndex = 0;
        };
      }
    window.onload = () => setInterval(changeMessage, 3000);