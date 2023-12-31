if (document.querySelector('.reveal')) {
  ScrollReveal().reveal('.reveal', {
    distance: '150px',
    duration: 1300,
    origin: 'bottom',
    easing: 'cubic-bezier(.17,1.05,.88,1)'
  });
}
if (document.querySelector('.reveal-delay-1s')) {
  ScrollReveal().reveal('.reveal-delay-1s', {
    delay: 600,
    distance: '150px',
    duration: 1300,
    origin: 'bottom',
    easing: 'ease-in-out'
  });
}
if (document.querySelector('.reveal-left')) {
  ScrollReveal().reveal('.reveal-left', {
    distance: '150px',
    origin: 'left',
    opacity: 0,
    delay: 150,
    duration: 1100,
    easing: 'ease-in-out'
  })
}
if (document.querySelector('.reveal-right')) {
  ScrollReveal().reveal('.reveal-right', {
    distance: '150px',
    origin: 'right',
    opacity: 0,
    delay: 150,
    duration: 1100,
    easing: 'ease-in-out'
  })
}
if (document.querySelector('.reveal-right-delay-1s')) {
  ScrollReveal().reveal('.reveal-right-delay-1s', {
    distance: '150px',
    origin: 'right',
    opacity: 0,
    delay: 600,
    duration: 1300,
    easing: 'ease-in-out'
  })
}

if (window.innerWidth < 450) {
  if (document.querySelector('.reveal')) {
    ScrollReveal().reveal('.reveal', {
      distance: '80px',
      duration: 1100,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-200')) {
    ScrollReveal().reveal('.reveal-delay-200', {
      delay: 130,
      distance: '120px',
      duration: 1100,
      origin: 'bottom',
      easing: 'cubic-bezier(0.3,1.05,1,1)'
    });
  }
  if (document.querySelector('.reveal-delay-300')) {
    ScrollReveal().reveal('.reveal-delay-300', {
      delay: 200,
      distance: '80px',
      duration: 1200,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-400')) {
    ScrollReveal().reveal('.reveal-delay-400', {
      delay: 230,
      distance: '120px',
      duration: 1100,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-500')) {
    ScrollReveal().reveal('.reveal-delay-500', {
      delay: 360,
      distance: '80px',
      duration: 1100,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-600')) {
    ScrollReveal().reveal('.reveal-delay-600', {
      delay: 400,
      distance: '80px',
      duration: 1200,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-700')) {
    ScrollReveal().reveal('.reveal-delay-700', {
      delay: 430,
      distance: '80px',
      duration: 1200,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-4000')) {
    ScrollReveal().reveal('.reveal-delay-4000', {
      delay: 130,
      distance: '80px',
      duration: 1200,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-left')) {
    ScrollReveal().reveal('.reveal-left', {
      distance: '80px',
      origin: 'bottom',
      opacity: 0,
      duration: 1100,
      easing: 'ease-in-out'
    })
  }
  if (document.querySelector('.reveal-right')) {
    ScrollReveal().reveal('.reveal-right', {
      distance: '80px',
      origin: 'bottom',
      opacity: 0,
      duration: 1100,
      easing: 'ease-in-out'
    })
  }
}