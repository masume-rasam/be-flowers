
  const hamMenu = document.querySelector('.ham-menu')
  const hamMenuClose = document.querySelector('.ham-menu-close')
  const list = document.querySelector('.list')
  
  
  hamMenu.addEventListener('click', () => {
      hamMenu.classList.add('hidden')
      hamMenuClose.classList.remove('hidden')
      list.classList.remove('hidden')
      list.classList.remove('opacity')
  })
  
  hamMenuClose.addEventListener('click', () => {
      hamMenuClose.classList.add('hidden')
      hamMenu.classList.remove('hidden')
       list.classList.add('hidden')
      list.classList.add('opacity')
  })



    // const headerTag = document.querySelector('.up1')
    // const fixed = document.querySelector('.hidden')
    
    // document.addEventListener('scroll', () => {
    //     console.log(document.documentElement.scrollTop)
    
    //     if (document.documentElement.scrollTop > 0) {
    //         headerTag.classList.add('hidden')
    //     } else {
    //         headerTag.classList.remove('hidden')
    //     }
    
    
    //     if (document.documentElement.scrollTop > 800) {
    //         fixed.classList.remove('up1')
    //     } else {
    //         fixed.classList.add('up1')
    //     }
    // })



    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    const icon = document.querySelector('.iconim')
    const icon2 = document.querySelector('.iconim3')
    icon.addEventListener('click', () => {
      
    })