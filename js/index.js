document.addEventListener('DOMContentLoaded', function() {
 
    
    {
        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');
    
        burger.addEventListener('click', function(){
            // если мы так добавляем класс, то он перезаписывает все существующие тут классы
            // sidebarMenu.className = 'rollUp';
            // а если вот так класс добавим, то класс просто добавится
            // sidebarMenu.classList.add('rollUp');
            // но так как по клику нам надо еще и закрыть то
            sidebarMenu.classList.toggle('rollUp');
            // а так мы поменяем три полоски на крестик
            burger.classList.toggle('active');
        });
    
        sidebarMenu.addEventListener('click', e =>{
            let target = e.target;
            // closest - ищет по дереву наверх
            target = target.closest('a[href="#"]');
            // target !== null
            if (target) {
                const parentTarget = target.parentElement;
                // добавляем активный класс к меню
                sidebarMenu.querySelectorAll('li').forEach((elem) => {
                    if(elem === parentTarget) {
                        elem.classList.add('active');
                    }else{
                        elem.classList.remove('active');
                    }
     
                })
            }
        })
    }
     
    });  

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 10, 
    speed: 5000,
    effect: 'slide',
    autoplay: {
        delay: 5000,
      }, 
      centeredSlides: true,
 
  }) ;
 
