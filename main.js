const menu = document.querySelector('.header-menu');

//console.log(menu);

const burguerButton = document.querySelector('#burguer-button');
//console.log(burguerButton);

burguerButton.addEventListener('click', hideShow);

function hideShow() {
        menu.classList.add('is-active');
}

// var nombre = "Marlon";
// console.log(nombre);