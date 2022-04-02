class UI {
  constructor() {
    this.slipId = document.querySelector("#slipId")
    this.advice = document.querySelector(".advice")
  }

  showAdvice(slip) {
    this.slipId.textContent = `#${slip.id}`
    this.advice.textContent = `${slip.advice}`
  }
}
