let offsetHeight = document.querySelector('main').offsetHeight;
console.log('Высота:', offsetHeight);
let offsetWidth = document.querySelector('main').clientWidth;
console.log('Ширина:', offsetWidth);

// Переключение кнопки

 let images = document.querySelectorAll('.overall-image-2 img');
console.log(images)
 let current = 0;

 function slider() {
  for(let i =0; i<images.length; i++) {
      images[i].classList.add('opacity0');
  }
    images[current].classList.remove('opacity0');
    current++;
  if(current == 2) {
      current = 0
  }

 }

 slider()
//  document.querySelector('.overall-image-2')

let button = document.querySelector('.btn-switch')
button.onclick = slider