const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
console.log(galleryEl);

const makeElementsOfGalery = ({ url, alt }) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery-item');

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery-image');
  imageEl.width = 640;
  imageEl.src = `${url}`;
  imageEl.alt = `${alt}`;

  itemEl.appendChild(imageEl);
  return itemEl;
  galleryEl.appendChild(itemEl);
}
// console.log(makeElementsOfGalery(images[0]));

const elements = images.map(makeElementsOfGalery);
console.log(elements);
galleryEl.append(...elements);





// const imageCreate = ({
//   url,
//   alt
// }) => {
//   return
//   <li>
//     <img src="${url}" alt="${alt}"></img>
//   </li>
//   ;
// };

// console.log(imageCreate(images[0]));
// galleryEl.insertAdjacentHTML('beforeend', );