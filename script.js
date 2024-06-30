gsap.to('.preloader' ,{
  
})


function show() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

show()


let tp = gsap.timeline();

tp.from('#nav_top li , #nav_top img , #nav_top i', {
  y: -200,
  opacity: 0,
  duration: 1,
  ease: 'back.out'
})

tp.from('#ice', {
  scale: 0,
  rotate: 180 ,
  opacity: 0,
  duration: .5,
  ease: 'back.out'
}, 'i')

tp.from('#bg-logo', {
  y: 200,
  duration: 1,
  delay: -.5,
  opacity: 0
}, 'i')


gsap.to("#bottle", {
  rotate: 0,
  scrollTrigger: {
    trigger: "#bottle",
    scroller: "#main",
    start: "top 8%",
    end: "top -150%",
    scrub: true,
    pin: true

  }
})

gsap.to("#bottle", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "#main",
    start: "top -50%",
    end: "top -500%",
    scrub: true,
    pin: true,
  }
})



let tp2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "0% 40%",
    end: "0% -10%",
    scrub: true,
  }
})

tp2.from(".box p , .box .red , .box button", {
  y: 600,
  duration: 2,
}, 'a')

tp2.from(".page2-center img", {
  rotate: 0,
  left: "100%",
  opacity: 0,
  duration: 2,
  ease: 'power3.out',
  stagger : .4
}, 'a')


let tp3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "0% 60%",
    end: "center 60%",
    scrub: true,
  }
})

tp3.from(".left img", {
  left: '100%',
  top: '40%',
  rotate: 0,
  duration: 5,
  ease: 'power4.out'
}, 'b')

tp3.from('.zero', {
  left: '-20%',
  duration: 2,
  // opacity: 0,
  ease: 'power4.out',
  stagger: 0.2
}, 'b')

tp3.from('.right .part2', {
  left: '100%',
  duration: 2,
  opacity: 0,
  ease: 'power1.out',
}, 'b')



var page4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: " top center",
    end: "center -60%",
    scrub: 1,
    pin: true,
  }
})

page4
.to("#lineone",{
    marginTop: "-120vh",
},'baba')
.to("#linetwo",{
    marginTop: "20vh",
},'baba');


var p5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top center",
    end: "top top",
    scrub:true
  },
})

p5.from('#page5 img',{
  y:-900,
  duration:1,
  stagger : .3
  // ease:'power3.in'
})

var p6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page6",
    scroller: "#main",
    start: "top center",
    end: "top top",
    scrub:true
  },
})

p6.from('#card1' , {
  x: -300,
  duration: 1,
  opacity : 0 ,
  ease: 'power4.out',
} , 'c')
p6.from('#card3' , {
  x: 300,
  duration: 1,
  opacity : 0 ,
  ease: 'power4.out',
},'c')


