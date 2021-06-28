import AnimaNumeros from './anima-numeros.js';

export default class FetchAnimais {
  constructor(url, gridSelector) {
    this.url = url;
    this.gridSelector = gridSelector;
  }

  static createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async fetchAnimais() {
    try {
      const animaisResponse = await fetch(this.url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(this.gridSelector);
      animaisJSON.forEach((animal) => {
        const divAnimal = this.constructor.createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  init() {
    this.fetchAnimais();
    return this;
  }
}
