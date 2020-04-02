window.addEventListener('load', function(){
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
})

window.addEventListener('DOMContentLoaded',function(){

    var status = 'lower200';
    var menu = document.querySelector('.menu');
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

})