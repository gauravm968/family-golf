var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");

//body
document.addEventListener("mousemove", function (dets){   //destination -> mouse events
    // console.log(dets.x);   //move cursor on x axis 
    // console.log(dets.y);   //move cursor on y axis
    crsr.style.left = dets.x + "px";      
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 250 + "px";
    crsrBlur.style.top = dets.y - 250 + "px";
});

// cursor comes on navbar elements
var h4_all = document.querySelectorAll("#nav h4");
h4_all.forEach(function(element) {
    element.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    element.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "95C11E";
    });
})

//------- when scroll black background on navbar -----------
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    // above changes work on scroll basis
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        // loop(for changes continue works), (scrub values - true/false or 1-5) 
        // 1 -> effect smooth
        scrub: 1
    }
});

//---------- when u scroll page1 to page2 color change effect
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

// ---------- colon 1 , colon 2
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})


gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
});