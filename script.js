const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

var tl=gsap.timeline();
tl.from(".nav a, .nav h4",{

    y:-100,
    duration:0.5,
    opacity:0,
    delay:0.5,
    ease:'power5'
})
tl.from(".logo ", {
    x:-200,
    opacity:0,
    
})

tl.from(".logo-h5",{
    y:40,
    x:50,
    opacity:0,
    
})
tl.from(".chotiheadings, .herofooter",{
    y:20,
    opacity:0,
    duration:1,
    
});

function mousemovefollower(xscale, yscale){
window.addEventListener('mousemove', function(details){
    this.document.querySelector("#mincircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
})

} 

function circlekro(){
var xscale=1;
var yscale=1;

var xprev=0;
var yprev=0;
    window.addEventListener('mousemove', function(dets){
      var xdiff =  dets.clientX - xprev;
      var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev =dets.clientY;
         xscale = gsap.utils.clamp(.8,1.2, xdiff);
        yscale = gsap.utils.clamp(.8,1.2, ydiff);

        mousemovefollower(xscale, yscale);
    
    })
}
mousemovefollower();
circlekro();

document.querySelectorAll(".elem").forEach(function (elem){
    
    var rotate = 0;
    var difference = 0;

    elem.addEventListener("mouseleave", function (details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
     
     
         difference = details.clientX - rotate;
          rotate = details.clientX;
          
     
     
        gsap.to(elem.querySelector("img"),{
         opacity:0,
         ease:'power3',
        
        })
     })

elem.addEventListener("mousemove", function (details){
   var diff = details.clientY - elem.getBoundingClientRect().top;


    difference = details.clientX - rotate;
     rotate = details.clientX;
     


   gsap.to(elem.querySelector("img"),{
    opacity:1,
    ease:'power3', 
    y: diff,
    x: details.clientX,
    rotate: gsap.utils.clamp(-20,20, difference * 5),
   })
})

})

