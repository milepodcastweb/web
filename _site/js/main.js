import SmoothScroll from './smoothScroll.js'

(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let TOGGLE_MENU = false;

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)

  function init() {
    new SmoothScroll({ target: document, speed: 40, smooth: 16 })
  }

  const navItems = document.querySelectorAll('.nav-item')
  const letters = 'ABVGDEŽZIJKLMNOPRSTĆUFHCČŠ'

  for (let index = 0; index < navItems.length; index++) {
    const element = navItems[index];

    element.addEventListener('click', (e) => {
      const goTo = document.getElementById(e.target.dataset.scrollElement)
      goTo.scrollIntoView({ behavior: 'smooth' })
    })
    
    element.onmouseover = event => {
      let itterations = 0
      const interval = setInterval(() => {
        event.target.innerText =  event.target.innerText.split('')
                                  .map((letter, idx) => {
                                    if(idx < itterations )
                                      return event.target.dataset.value[idx]
                                    return letters[Math.floor(Math.random() * 26)]
                                  })
                                  .join('')

        if(itterations >= event.target.dataset.value.length) 
          clearInterval(interval)

        itterations += 1 / 3
      }, 30)
    }
  }


  const blob = document.getElementById('blob-parent')

  const animateBlob = e => {
    const x = e.clientX - blob.offsetWidth / 2,
          y = e.clientY - blob.offsetHeight / 2

    const blobKeyframes = {
      transform: `translate(${x}px, ${y}px)`
    }

    blob.animate(blobKeyframes, {
      duration: 3000,
      fill: 'forwards'
    })
  }

  if(screen.width > 500) {
    document.body.onmousemove = e => {
      animateBlob(e)
    }
  }


  const trailer = document.getElementById('trailer'),
        servicesSection = document.getElementById('services')
  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
    }

    trailer.animate(keyframes, {
      duration: 800,
      fill: 'forwards'
    })
  }
  
  window.onmousemove = e => {
    const interactable = e.target.closest('.interactable'),
          interacting = interactable !== null

    if(e.target.closest('a') || e.target.closest('.iframe-container')) {
      trailer.classList.add('hide')
    } else {
      trailer.classList.remove('hide')
    }
      
    animateTrailer(e, interacting)

    trailer.dataset.type = interacting ? interactable.dataset.type : ''

    if(interacting){
      const iconType = interactable.dataset.type
      const icons = document.querySelectorAll('.trailer-icon')

      icons.forEach(icon => {
        if(icon.id === `trailer-${iconType}`){
          if(icon.classList.contains('hidden'))
            icon.classList.remove('hidden')
        }
        else{
          if(!icon.classList.contains('hidden'))
            icon.classList.add('hidden')
        }
      })
    }
  }

  const horizontalSections = gsap.utils.toArray('section.horizontal')
  horizontalSections.forEach(function (sec, i) {  
    
    let thisPinWrap = sec.querySelector('.pin-wrap');
    let thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
    
    let getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

    gsap.fromTo(thisAnimWrap, { 
      x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
    }, { 
      x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
      ease: "none",
      scrollTrigger: {
        trigger: sec,   
        start: "top top",
        end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        //anticipatePin: 1,
        scrub: true,
        //markers: true,
      }
    });
  }); 


  const burger = document.querySelector('.burger')
  const closeBurger = document.querySelector('.close-burger')

  burger.addEventListener('click', e => {
    document.body.classList.add('open-menu')
  })
  closeBurger.addEventListener('click', e => {
    document.body.classList.remove('open-menu')
  })





  if(screen.width < 500){
    window.onscroll = (e) => {
      const mobileLogo = document.querySelector('header .logo')
      if(window.scrollY > 100){
        mobileLogo.classList.remove('w-20')
        mobileLogo.classList.add('w-16')
      }
      else{
        mobileLogo.classList.add('w-20')
        mobileLogo.classList.remove('w-16')
      }
    }
  }


  

  // document.body.addEventListener('onload', init())

  window.onload = () => {
    window.scrollTo(0, 0);
  }

  
})()