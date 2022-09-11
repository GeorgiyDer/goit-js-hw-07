import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryUl = document.querySelector('.gallery')
const galleryMarkup = createGalaryItems(galleryItems); 

galleryUl.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalaryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
    `;
    }).join('');
}


new SimpleLightbox('.gallery a', {captionDelay: 250});

// lightbox.on('show.simplelightbox', function () {
// 	console.log();
// });