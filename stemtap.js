

$(document)
.ready(function() {
    var t1 = gsap.timeline();
    stemtap_animation(t1);
    t1.play();
})

function stemtap_animation(timeline) {
    //stemtap logo animation
    gsap.set("#ripple1, #ripple2, #ripple4, #ripple0",
                  {opacity: 0, scale: 0, transformOrigin: "center"});
    gsap.set("#ripple3", {opacity: 0});
    gsap.set("#tap", {transformOrigin: "center"});
    gsap.set("#stem-s", {transformOrigin: "100% 50%"});
    gsap.set("#tap-t", {transformOrigin: "0% 50%"});
    
    var shift  = 2.5,
        shrink = 3,
        rebump = 5,
        back   = 5.9;
    
    // tap bump
    timeline.pause()
    .to("#tap",    0.1, {scale: 0.85, ease: Power3.easeOut})
    .to("#tap",     0.8, {scale: 1,    ease: Bounce.easeOut})
    
    //ripples
    .to("#ripple4", 1,    {opacity: 0.7, scale: 1.3}, 0.3)
    .to("#ripple4", 0.45, {opacity: 0},               0.8)
    .to("#ripple3", 1.4,  {opacity: 0.57},             1.1)
    .to("#ripple2", 1,    {opacity: 0.7, scale: 1},   0.8)
    .to("#ripple1", 0.8,  {opacity: 1, scale: 1},   1.3)
    .set("#ripple4", {scale: 0})
    
    //shift
    .to("#stem-s", 1, {x: 66, ease:Power2.easeInOut}, shift)
    .to("#tap-t",  1, {x: 22, ease:Power1.easeInOut}, shift)
    .to("#stem-t, #stem-e, #stem-m, #tap-a, #tap-p",
                   1, {opacity: 0}, shift)
    .to("#ripple-group", 1, {x: -50}, shift+0.5)
    .to("#ripple-inner", 1, {x: 50}, shift+0.5)
    
    //shrink
    .to("#stem-s, #tap-t", 1, {fill: "#FFF"}, shrink)
    .to("#ripple0", 1, {opacity: 1, scale: 0.52, ease:Power2.easeInOut}, shrink)
    .to("#ripple1", 1, {scale: 0}, shrink)
    .to("#ripple2", 1, {scale: 0.36, strokeWidth: 5.5, ease:Power2.easeInOut}, shrink)
    .to("#ripple3", 1, {scale: 0.7, x: 26, y: 16, ease:Power3.easeInOut}, shrink)
    
    //rebump
    .to("#stem-s, #tap-t", 0.1, {scale: 0.85, ease:Power3.easeOut}, rebump)
    .to("#ripple0", 0.1, {scale: 0.48, ease:Power1.easeOut}, rebump)
    .to("#stem-s, #tap-t", 0.8, {scale: 1, ease:Bounce.easeOut}, rebump+0.1)
    .to("#ripple0", 0.8, {scale: 0.52, ease:Bounce.easeOut}, rebump+0.1)
    
    .to("#ripple4", 1, {scale: 1.3, opacity: 0.8}, rebump+0.1)
    .to("#ripple4", 0.45, {opacity: 0}, rebump+0.6)
    
    //reverse
    .to("#stem-s, #tap-t", 1, {fill: "#000"}, back)
    .to("#ripple0", 1, {opacity: 0, scale: 1, ease:Power2.easeInOut}, back)
    .to("#ripple1", 1, {scale: 1}, back)
    .to("#ripple2", 1, {scale: 1, strokeWidth: 2, ease:Power2.easeInOut}, back)
    .to("#ripple3", 1, {scale: 1, x: 0, y: 0, ease:Power3.easeInOut}, back)
    
    //shift text back
    .to("#stem-s", 1, {x: 0, ease:Power2.easeInOut}, back)
    .to("#tap-t",  1, {x: 0, ease:Power3.easeInOut}, back)
    .to("#stem-t, #stem-e, #stem-m, #tap-a, #tap-p",
                   1, {opacity: 1}, back+0.5)
    .to("#ripple-group", 1, {x: 0}, back)
    .to("#ripple-inner", 1, {x: 0}, back)
    
    .set("#ripple0", {scale: 0})
    .call(function() {
      $("#tap").click(function(){
          timeline.restart()
      })
    })
    //.timeScale(0.25)
}
