export default class Tooltip {
  constructor(tooltipSelect, tooltipText) {
    this.tooltips = document.querySelectorAll(tooltipSelect);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    if (tooltipText === undefined) {
      this.tooltipText = 'Insira o texto do tooltip como segundo argumento';
    } else {
      this.tooltipText = tooltipText;
    }
  }

  createTooltip() {
    if (!this.newTooltip) {
      this.newTooltip = document.createElement('span');
      this.newTooltip.innerText = this.tooltipText;
      this.newTooltip.classList.add('tooltip');
      document.body.appendChild(this.newTooltip);
    }
  }

  mouseMove(event) {
    this.createTooltip();
    this.tooltips.forEach((tooltip) => {
      if (event.target === tooltip) {
        this.newTooltip.classList.remove('hidden-tooltip');
        const x = event.clientX;
        const y = event.clientY;
        this.newTooltip.style.top = `${y - (-20)}px`;
        this.newTooltip.style.left = `${x}px`;
      }
    });
  }

  mouseOver() {
    window.addEventListener('mousemove', this.mouseMove);
  }

  mouseOut() {
    this.newTooltip.classList.add('hidden-tooltip');
    window.removeEventListener('mousemove', this.mouseMove);
  }

  init() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.mouseOver);
      tooltip.addEventListener('mouseout', this.mouseOut);
    });
    return this;
  }
}
