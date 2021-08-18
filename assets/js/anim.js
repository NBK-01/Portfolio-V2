const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".anim", { y: "-100%", duration: 1.5, delay: 0.2 });
tl.to(".trans", { y: "-100%", duration: 1}, "-=1");
