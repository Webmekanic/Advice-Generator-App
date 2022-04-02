const advice = new Advice()

// Get Advice
advice
  .get("https://api.adviceslip.com/advice")
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
