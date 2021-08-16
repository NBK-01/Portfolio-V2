const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".copy", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".anim", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".trans", { y: "-100%", duration: 1}, "-=1");
