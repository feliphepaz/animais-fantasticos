import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) {
      this.eventos = ['click', 'touchstart'];
    } else {
      this.eventos = events;
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add('active');
    this.menuButton.classList.add('active');
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }

  addEvent() {
    if (this.menuButton) {
      this.eventos.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
    }
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }
  }
}
