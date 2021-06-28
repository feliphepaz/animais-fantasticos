export default class FetchBitcoin {
  constructor(url, targetSelector) {
    this.url = url;
    this.targetSelector = targetSelector;
  }

  init() {
    fetch(this.url).then(response => response.json()).then((bitcoin) => {
      const btcPreco = document.querySelector(this.targetSelector);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch(erro => console.log(Error(erro)));
  }
}
