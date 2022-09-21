let o = 0;

show_image (o);

function show_image(i){

  //переменная или индекс для перемещения(< // >)слайдов
    o += i;

  //выбрать все картины
    let images = document.getElementsByClassName('image');

  //выбрать все точки
    let dots = document.getElementsByClassName('dot');

  // спрятать все картинки
    for(i = 0; i < images.length; i++)
       images[i].style.display = 'none';
       
  // удалить активный класс из точки
    for(i = 0; i < dots.length; i++)
       dots[i].className = dots[i].className.replace(" active", "");

  // если индекс больше количества изображений (индекс равен нулю)
    if(o > images.length -1)
       o = 0;

// если индекс меньше нуля (установите его на длину изображений)
    if(o < 0)
       o = images.length - 1;

// отображать только следующее или предыдущее изображение`
    images[o].style.display = "block";

// сделать активной только текущую точкуx`
    dots[o].className += " active";
}