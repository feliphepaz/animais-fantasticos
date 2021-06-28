export default class AnimaNumeros {
  constructor(objectSelect, observerTarget, objectClass) {
    this.numeros = document.querySelectorAll(objectSelect);
    this.observerTarget = document.querySelector(observerTarget);
    this.objectClass = objectClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += inscremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.objectClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  init() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
    return this;
  }
}
