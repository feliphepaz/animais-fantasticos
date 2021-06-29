import ScrollSuave from './modules/scroll-suave.js';
import AnimaScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import FetchAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]', 'Localização da loja');
tooltip.init();

const fetchAnimais = new FetchAnimais('./animaisapi.json', '.numeros-grid');
fetchAnimais.init();

const fetchBitcoin = new FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
fetchBitcoin.init();

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
