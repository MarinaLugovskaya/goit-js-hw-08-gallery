import gallery from './app.js';

const galleryList = document.querySelector('.js-gallery');
const modalImgRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('.lightbox');
const buttonRef = document.querySelector('[data-action="close-lightbox"]');

const markup = gallery
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a> </li>`,
  )
  .join('');

galleryList.innerHTML = markup;

galleryList.addEventListener('click', onOpenModalClick);

function onOpenModalClick(event) {
  event.preventDefault();
const target = event.target;
  if (target.nodeName !== 'IMG') {
return;
  }
    modalImgRef.src = target.dataset.source;
    modalImgRef.alt = target.alt;
    modalRef.classList.add('is-open');
  };

window.addEventListener('click', onCloseModalClick);
window.addEventListener('keyup', onCloseModalClick);

function onCloseModalClick(event) {
  const target = event.target;
  if (target.nodeName !== 'IMG' ||  event.key === 'Escape') {
    modalRef.classList.remove('is-open');

    modalImgRef.src = '';
    modalImgRef.alt = '';
  }
  };