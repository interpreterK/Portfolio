var bubbles_left = document.querySelector(".Bubbles_Left")
var bubbles_right = document.querySelector(".Bubbles_Right")
var title = document.querySelector(".Title")
var f1 = 0
var f2 = 0
function float1() {
    f1 += .05
    bubbles_left.style.top = (5 * Math.cos(f1) + 16) + 'px'
}
function float2() {
    f2 += .05
    bubbles_right.style.top = (8.5 * Math.cos(f2) + 50) + 'px'
}
document.addEventListener('mousemove', m => {
    var X = (m.pageX * 1 / 100)
    var Y = (m.pageY * 1 / 100)
    bubbles_left.style.transform = 'translate3d(' + -X + 'px, ' + -Y + 'px, 0)'
    bubbles_right.style.transform = 'translate3d(' + X + 'px, ' + Y + 'px, 0)'
    title.style.transform = 'translate3d(' + X / 2 + 'px,' + Y / 2 + 'px, 0)'
})
window.setInterval(float1, 1000/60)
window.setInterval(float2, 1000/60)