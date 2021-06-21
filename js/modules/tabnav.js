export default class TabNav {
  constructor(btn, section) {
    this.tabMenu = document.querySelectorAll(btn);
    this.tabContent = document.querySelectorAll(section);
    this.active = 'ativo';
  }

  matchTab() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.active);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.active, direcao);
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.matchTab();
    }
    this.activeTab(0);
  }
}
