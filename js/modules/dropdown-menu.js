import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.handleClick = this.handleClick.bind(this);
    this.class = 'active';
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.class);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.class);
    });
  }

  addEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEvents();
    }
    return this;
  }
}
