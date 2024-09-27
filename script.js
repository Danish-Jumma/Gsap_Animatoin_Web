let tl = gsap.timeline();
tl.from(".h2",{
    opacity:0,
    y:-50,
    duration:1,
});
tl.from("h4",{
    y:-50,
    opacity:0,
    duration:1.3,
    stagger: 0.1
});
tl.to(".h3",{
    y:0,
    duration:1.2,
    stagger: 0.1,
})
