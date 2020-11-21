/* Função do scroll do header*/

$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('header').addClass('black');
    }
    else {
        $('header').removeClass('black');
    }
})

/* Função do Pop-up*/

const btnPlay = document.getElementById('btn-play');
const popup = document.getElementById('pop-up');
const close = document.getElementById('close')

function abrir(){
    popup.style.display = 'inline-block';
}

function fechar(){
    popup.style.display = 'none';
}


btnPlay.addEventListener("click", abrir);
close.addEventListener("click", fechar);

