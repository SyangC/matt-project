document.getElementsByTagName("body")[0].addEventListener("wheel", onScroll);
var frontPercent = 0;
var increment = 5;
var pos = 0;
var frontElem = document.getElementById("test");
var id = null;

function onScroll(event) {
    console.log("fires");
    if(event.deltaY > 0) {
        // console.log("wheel down")
    }
    else if(event.deltaY < 0) {
        // console.log("wheel up")
    }
    else {
        // console.log("nowt")
    }

    event.preventDefault();
    frontElem.scrollLeft = 30;
}

// function translate(elem, x ) {
//     var max = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
//     var left = parseInt( css( elem, 'left' ), 10 )
//     dx = left - x,
//     i = 1,
//     count = 200,
//     delay = 20;

//     if ( i >= count ) { return; }
//     i += 1;
//     elem.style.left = ( left - ( dx * i / count ) ).toFixed( 0 ) + 'px';
//     setTimeout(delay);
// }

// function css( element, property ) {
//     return window.getComputedStyle( element, null ).getPropertyValue( property );
// }