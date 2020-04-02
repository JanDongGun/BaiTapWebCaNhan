window.addEventListener('load', function(){
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
})

window.addEventListener('DOMContentLoaded',function(){

    var status = 'lower200';
    var menu = document.querySelector('.menu');
    var menuBar = document.querySelector('.menu__bars');
    var nav = document.querySelector('.nav');
    var closeBtn = document.querySelector('.nav__close');
    var footer = document.querySelector('.footer');
    window.addEventListener('scroll',function(){
        var offset = window.pageYOffset;
        if(offset > 200){
            
            if(status === 'lower200'){
                menu.classList.add('menu--scroll');
                status = 'higher200';
            }
        }
        else{
            if(status === 'higher200'){
                menu.classList.remove('menu--scroll');
                status = 'lower200';
            }
        }

    })


    menuBar.addEventListener('click',function(){
        nav.classList.add('nav--animate');
        closeBtn.classList.add('nav__close--zoomClose');
    })

    closeBtn.addEventListener('click',function(){
        nav.classList.remove('nav--animate');
        closeBtn.classList.remove('nav__close--zoomClose');
    })

})