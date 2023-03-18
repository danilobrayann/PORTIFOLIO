function ttogermold() {
   const html = document.documentElement


if (html.classList.contains ('Light')  ) {
   html.classList.remove ('Light')

} else {

    html.classList.add('Light')
}

// PEGAR TAG DA IMAGEM
 const img = document.querySelector('#PROFILE img')

if ( html.classList.contains ('Light')  ){

   img.setAttribute('src' ,      ' ./assets/ng10.jpeg'           )
} else {

img.setAttribute ( 'src', './assets/bga.png')

}

// codigo a cima simplisficado. html.classList.toggle ('Light')
}


