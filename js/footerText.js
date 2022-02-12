(function () {
  let mssgArray = [
    "Best Lunch Value in town. ...filling, tasty, and plentiful. -David A. on Tripadvisor.com", 
    "I WILL ALWAYS COME EAT at Sahara on Main when I return home. -Chadrick D. on Yelp.com",
    "Pizza was off the charts amazing! I'll definitely be back for more! -Weston J. on Google.com",
    "Excellent food and exceptional service! ...the Gyros! -Michelle S. on Facebook.com",
    "Delicious food at an extremely good price. I will definitely return. -J.K. on Yelp.com",
    "Pizza was off the charts amazing! I'll definitely be back for more! -Weston J. on Google.com",
    "I WILL ALWAYS COME EAT at Sahara on Main when I return home. -Chadrick D. on Yelp.com"
  ];
  
  let mssgIndex = 0;
  
  function changeMssg() {
    // now grab the message and change it.
    let newMssg = mssgArray[mssgIndex];
    let mssgElement = document.getElementById("footerMessage");
    mssgElement.textContent = newMssg;
    mssgIndex++;
    if (mssgIndex >= mssgArray.length) {
      mssgIndex = 0;
    };
  }
  
  window.onload = () => setInterval(changeMssg, 4500);
})();
