const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".anim", { y: "-100%", duration: 1.5, delay: 0.2 });
tl.to(".trans", { y: "-100%", duration: 1}, "-=1");


tl.to(".copy1", { y: "0%", duration: 0.7, stagger: 0.3 });
tl.to(".anim1", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".trans1", { y: "-100%", duration: 1}, "-=1");