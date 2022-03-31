let Body = document.querySelector('body');
let Text = document.querySelector('.Test');
let TPG = document.querySelector('.TPG')

Body.addEventListener('mousemove',function(e) {
    let MWidth = Math.floor( (e.clientX - Text.offsetLeft) / (-Body.offsetWidth) * ((TPG.offsetHeight-10)/2))
    let MHeight = Math.floor( (e.clientY - Text.offsetTop) / (-Body.offsetHeight) * ((TPG.offsetHeight-10)/2))

    Text.style.textShadow = `
        ${MWidth*0.5}px ${MHeight*0.5}px 0 rgba(0, 0, 0, 0.3),
        ${MHeight}px ${MWidth}px 0 rgba(0, 0, 0, 0.3),
        ${MWidth*-0.5}px ${MHeight*-0.5}px 0 rgba(0, 0, 0, 0.3),
        ${MHeight*-1}px ${MWidth*-1}px 0 rgba(0, 0, 0, 0.3),
        ${MWidth*-1}px ${MHeight}px 0 rgba(0, 0, 0, 0.3),
        ${MHeight*-1}px ${MWidth}px 0 rgba(0, 0, 0, 0.3),
        ${MWidth}px ${MHeight*-1}px 0 rgba(0, 0, 0, 0.3),
        ${MHeight}px ${MWidth*-1}px 0 rgba(0, 0, 0, 0.3)
    `
});



