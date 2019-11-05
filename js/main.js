const dropBoi = {
    curviness: 1,
    autoRotate: true,
    values: [
        {x: 50, y: 800}
    ]
};
const wooWo = {
    values: [
        {opacity: 1, scale: 2}
    ]
};

const tween = new TimelineLite();
const tween2 = new TimelineLite();

tween.add(
    TweenLite.to(".boi", 1, {
        bezier: dropBoi,
        ease: Power1.easeIn
    })
);

tween2.add(
    TweenLite.to(".scream", 1,{
        bezier: wooWo,
        ease: Power1.easeIn
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".fallBoy",
    duration: 3000,
    triggerHook: 0
})
 .setTween(tween)
 .setPin(".fallBoy")
 .addTo(controller);

 const scene2 = new ScrollMagic.Scene({
    triggerElement: ".fallBoy",
    duration: 3000,
    triggerHook: 0
})
 .setTween(tween2)
 .addTo(controller);