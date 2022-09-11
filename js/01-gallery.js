import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



// Реализация делегирования на div.gallery и получение url большого
// изображения 
// .Подключение скрипта и стилей библиотеки модального окна
// basicLightbox.Используй CDN сервис jsdelivr и добавь в проект ссылки 
// на минифицированные(.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. 
// Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента < img > в модальном окне перед
// открытием.Используй готовую разметку модального окна с изображением из 
// примеров библиотеки basicLightbox.

const galleryDiv = document.querySelector('.gallery')
const galleryMarkup = createGalaryItems(galleryItems); 

galleryDiv.insertAdjacentHTML('beforeend', galleryMarkup)
galleryDiv.addEventListener('click', clickOnGalleryDiv)

function createGalaryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('');
}




function clickOnGalleryDiv(event) { 
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) { 
        return
    } else {
        const selectedImage = event.target.dataset.source;
        console.log(event.target.dataset.source);
        needitElements(selectedImage)

        // instance.show(event.target.dataset.source)
    }
    
    
}
function needitElements(source) { 
    const instance = basicLightbox.create(
    `
    <img src="${source}">
`,
    {
    onShow: () => {
        window.addEventListener('keydown', close);
    },

    }
    );
    instance.show();
    function close(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
    }
}

// const instance = basicLightbox.create(`
//     <img src='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg'>
//     ` 
// )


    


// document.addEventListener("keydown", event => {
    
//     if (event.key === "Escape") { 
//         instance.close()
//         console.log('нужная кнопка')
//     }
// });