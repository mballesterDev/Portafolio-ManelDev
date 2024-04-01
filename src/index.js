
const fadeRight = document.querySelectorAll('.fade-right');
const fadeLeft = document.querySelectorAll('.fade-left');
const fadeTop = document.querySelectorAll('#fade-top');
const animateJump = document.querySelectorAll('.animate-jump');
const fadeRotate = document.querySelectorAll('.fade-rotate');
const animationT = document.querySelectorAll('.animationT');

fadeRight.forEach((element) => {
  const observadorFadeRight = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animate-fade-right');
        setTimeout(() => {
          entrada.target.classList.remove('animate-fade-right');
        }, 1000);
      }
    });
  });

  observadorFadeRight.observe(element);
});

fadeLeft.forEach((element) => {
  const observadorFadeLeft = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animate-fade-left');
        setTimeout(() => {
          entrada.target.classList.remove('animate-fade-left');
        }, 1000);
      }
    });
  });

  observadorFadeLeft.observe(element);
});

fadeTop.forEach((element) => {
  const observadorFadeTop = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animate-fade-top');
        setTimeout(() => {
          entrada.target.classList.remove('animate-fade-top');
        }, 1000);
      }
    });
  });

  observadorFadeTop.observe(element);
});

animateJump.forEach((element) => {
  const observadorjump = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animate-fade-down');
        setTimeout(() => {
          entrada.target.classList.remove('animate-fade-');
        }, 1000);
      }
    });
  });

  observadorjump.observe(element);
});

fadeRotate.forEach((element) => {
  const observadorFadeBottom = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animate-rotate-y');
        setTimeout(() => {
          entrada.target.classList.remove('animate-rotate-y');
        }, 1000);
      }
    });
  });

  observadorFadeBottom.observe(element);
});

const titles = gsap.utils.toArray('.animationT');
const tl = gsap.timeline({ repeat: -1, yoyo: true });

titles.forEach((title) => {
  tl
    .from(title, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,

    }, "<")
    .to(title, {
      opacity: 0,
      y: -80,
      rotateX: 90,
      stagger: 0.02,

    }, "<1.7");
});