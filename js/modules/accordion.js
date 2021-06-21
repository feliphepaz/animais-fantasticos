export default class initAccordion {
  constructor(link) {
    this.accordionList = document.querySelectorAll(link);
  }

  handleAccordion() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.activeAccordion);
    });
  }

  activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  init() {
    if (this.accordionList.length) {
      this.accordionList[0].classList.add('ativo');
      this.accordionList[0].nextElementSibling.classList.toggle('ativo');
      this.handleAccordion();
    }
    return this;
  }
}
