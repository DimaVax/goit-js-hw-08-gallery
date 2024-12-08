const galleryList = document.querySelector(".js-gallery");
const galleryExit = document.querySelector('.lightbox__button')
const backdrop = document.querySelector('.js-lightbox')
const modalImage = document.querySelector('.lightbox__image')
const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

function createGallery() {
  const element = galleryItems
    .map(
      (photo) =>
        `<li class="gallery__item">
            <img class="gallery__image" src="${photo.preview}" data-source="${photo.original}" alt="Tulips"/>
        </li>`
    )
    .join("");
  galleryList.innerHTML = element;
  return element;
}
createGallery();

galleryList.addEventListener("click", openPhotoModal);

// function openPhotoModal(e) {
//   // backdrop.classList.add('is-open')
//   console.log(backdrop)
// }
function openPhotoModal(e) {
    if(e.target.closest('li') || e.target.nodeName === 'LI'){
    backdrop.classList.add("is-open");
    galleryList.removeEventListener("click", openPhotoModal);
    galleryExit.addEventListener("click", closePhotoModal);

    const parent = e.target.closest('li')
    const productPhoto = parent.lastElementChild.dataset.source
    modalImage.src = productPhoto;
  }

}

function closePhotoModal(e) {
  backdrop.classList.remove("is-open");
  galleryExit.removeEventListener("click", closePhotoModal);
  galleryList.addEventListener("click", openPhotoModal);
}