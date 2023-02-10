/***** TITLE *****/

const elems = document.querySelectorAll('.tilt');

const universalTilt = UniversalTilt.init({
    elements: elems,
    settings: {
        exclude: /(iPod|iPhone|iPad|Android)/,
        shine: false,
        //reverse: true
        scale: 1.1,
        max: 10,
        perspective: 5000
    },
    callbacks: {
        // callbacks...
    }
});

/***** WHEEL & CO *****/

const incremento = 135; // deg + 135 per incrementare la velocità
var deg = 0;

function spin() {
    var tmp = Math.floor(Math.random() * 8);

    deg += (tmp*incremento)*3;

    document.getElementById("ruota").style.transform = "rotate("+deg+"deg)";

    setTimeout(function() {
        tmp = Math.floor(Math.random() * progetti.length);

        document.getElementById("name").innerHTML = progetti[tmp][0];
        document.getElementById("url").innerHTML = progetti[tmp][1];
        document.getElementById("url").href = progetti[tmp][1];
        document.getElementById("description").innerHTML = progetti[tmp][2] + `<a href="${progetti[tmp][4]}" id="read-more"">[...]</a>`;
        document.getElementById("read-more").addEventListener('mousemove', animateit);
        document.getElementById("read-more").addEventListener('mouseleave', animateit);

        document.getElementById("background-opacity").classList.remove("opacityOff");
        document.getElementById("background-opacity").classList.add("opacityOn");
        document.getElementById("box-preview").classList.remove("opacityOff");
        document.getElementById("box-preview").classList.add("opacityOn");
    }, 3000); //Transition time wheel                 
}

function opacityOn() {
    document.getElementById("background-opacity").classList.add("opacityOff");
    document.getElementById("background-opacity").classList.remove("opacityOn");

    document.getElementById("box-preview").classList.add("opacityOff");
    document.getElementById("box-preview").classList.remove("opacityOn");
}

/***** HALF WORD in the DESCRIPTION *****/

function marginBottomAuto() {
    // altezzaParola = document.getElementById("last-word").offsetHeight;

    // altezzaParola = altezzaParola/3;

    // document.getElementById("presentazione").style.marginBottom = "-" + altezzaParola + "px";
}

window.addEventListener('load', function(event) { 
    marginBottomAuto();
});

window.addEventListener('resize', function(event) { 
    marginBottomAuto();
});


/***** ANIMATION BAR *****/

document.addEventListener('aos:in', ({ detail }) => {
    Array.from(document.getElementById("animation-competenze").querySelectorAll(".progress")).forEach(function (item, index) {
        item.classList.remove("animationBar");
    })
});

document.addEventListener('aos:in:animation-competenze', ({ detail }) => {
    Array.from(document.getElementById("animation-competenze").querySelectorAll(".progress")).forEach(function (item, index) {
        item.classList.add("animationBar");
    })
});
