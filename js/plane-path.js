gsap.registerPlugin(MotionPathPlugin);

const planetween = gsap.timeline();

planetween.set(".plane", {xPercent:-50, yPercent:-100, transformOrigin:"50% 50%"});
planetween.to(".plane", {
    ease: "power1.inOut",
    motionPath: {
        path: "M53.237,46.669 C53.237,46.669 182.265,41.581 214.537,45.884 359.747,65.243 476.985,329.138 138.645,350.703 -7.938,360.045 -467.122,223.884 -702.915,282.03299 -862.385,321.36 -914.234,426.10499 -907.465,598.70099 -904.685,669.58099 -862.778,831.65999 -765.547,888.28899 -400.892,1100.65099 -384.978,797.56199 -491.687,730.25899 -590.895,667.67699 -851.71,836.51499 -531.743,1024.01899 -289.27,1166.10399 688.04,898.94794 688.04,898.94794 ",
        curviness: 2, 
        autoRotate: true
    }
});

const planecontroller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".wrapper",
    duration: 1300,
    triggerHook: 0
})
    //.addIndicators()
    .setTween(planetween)
    .addTo(planecontroller);
