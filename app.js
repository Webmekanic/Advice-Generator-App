const advice = new Advice()
const ui = new UI()

// Get Advice
const dice = document.querySelector(".dice")

dice.addEventListener("click", () => {
  advice
    .get("https://api.adviceslip.com/advice")
    .then((data) => {
      console.log(data)
      ui.showAdvice(data)
    })
    .catch((err) => console.log(err))
})
