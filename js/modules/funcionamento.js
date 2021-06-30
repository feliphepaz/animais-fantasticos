export default class Funcionamento {
  constructor(funcSelector, classActive) {
    this.funcionamento = document.querySelector(funcSelector);
    this.classActive = classActive;
  }

  getOpen() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  getActual() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getHours();
  }

  isOpen() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1]);

    return this.semanaAberto && this.horarioAberto;
  }

  activeFunc() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.classActive);
    }
  }

  init() {
    if (this.funcionamento) {
      this.getOpen();
      this.getActual();
      this.activeFunc();
    }
    return this;
  }
}
