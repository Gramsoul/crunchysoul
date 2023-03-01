import './style.css'
import './src/css/header.css'
import './src/css/overlay.css'
import './src/css/contenido.css'
import './src/css/divisor.css'
import './src/css/video.css'
import './src/css/twitter.css'
import './src/css/footer.css'





const   visual = document.querySelector('.rotate'),
        selector = document.querySelectorAll('.cuad');

const   imagenes = document.querySelectorAll('.photo');

const   menu = document.querySelector('.trigger'),
        body = document.querySelector('body'),
        overlay = document.querySelector('.overlay'),
        menu_over = document.querySelector('.menu_overlay');

const acordeon = overlay.querySelector('.acordeon');

const change = () => {
    imagenes.forEach(img => {
        img.classList.toggle('photo_inv');
    });
};

const auto = () => {
    selector.forEach(element => {
        element.classList.toggle('active_cuad');
    })
    change();
}


visual.addEventListener('click', auto);

menu.addEventListener('click', (event) =>{
    body.classList.toggle('block');
    overlay.classList.toggle('block');
    menu_over.classList.toggle('estirar');
    
    if (overlay.classList.contains('block')){
        menu.style.backgroundColor = '#161616';
    } else {
            menu.style.backgroundColor ='#272727';
    }
})

overlay.addEventListener('click', (x) =>{
    if(x.target.matches('.overlay')){
        body.classList.remove('block');
        overlay.classList.remove('block');
        menu_over.classList.remove('estirar');
    }

    if(x.target.matches('.genres')){
        acordeon.classList.toggle('descomprimir');
    }
})
setInterval(auto, 10000);