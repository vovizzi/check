let offsetHeight = document.querySelector('main').offsetHeight;
console.log('Высота:', offsetHeight);
let offsetWidth = document.querySelector('main').clientWidth;
console.log('Ширина:', offsetWidth);

let overall_image = document.querySelector('.overall-image')


  if (window.innerWidth === 768) {
    overall_image.remove()
  }