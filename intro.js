const intro = gsap.timeline({defaults: {ease: 'power1.out'}});

intro.fromTo('.landingtext', {opacity: 0}, {opacity: 1, duration: 3},)
intro.fromTo('.logos', {opacity: 0}, {opacity: 1, duration: 3})
intro.fromTo('.navlinks', {opacity: 0}, {opacity: 1, duration: 3}, "-=2.5")

