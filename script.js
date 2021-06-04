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

const incremento = 135; // deg + 135 per incrementare la velocità
var deg = 0;

var progetti = [
    ["Nome1", "https://www.example.com/", "Descrizione", "img/immagine-forse.png"],
    ["Nome2", "https://www.example.com/", "Descrizione", "img/immagine-forse.png"],
    ["Nome3", "https://www.example.com/", "Descrizione", "img/immagine-forse.png"],
    ["Nome4", "https://www.example.com/", "Descrizione", "img/immagine-forse.png"]
];

function spin() {
    var tmp = Math.floor(Math.random() * 10);

    deg += (tmp*incremento)*2;

    document.getElementById("ruota").style.transform = "rotate("+deg+"deg)";

    setTimeout(function() {
        tmp = Math.floor(Math.random() * progetti.length);

        document.getElementById("name").innerHTML = progetti[tmp][0];
        document.getElementById("url").href = progetti[tmp][1];
        document.getElementById("description").innerHTML = progetti[tmp][2];


        document.getElementById("box-preview").classList.remove("opacityOff");
        document.getElementById("box-preview").classList.add("opacityOn");
    }, 3000); //Transition time ruota

                 
}

document.getElementById("close").onclick = function () {
    document.getElementById("box-preview").classList.add("opacityOff");
    document.getElementById("box-preview").classList.remove("opacityOn");
}

function marginBottomAuto()
{
    altezzaParola = document.getElementById("last-word").offsetHeight;

    altezzaParola = altezzaParola/3;

    document.getElementById("presentazione").style.marginBottom = "-" + altezzaParola + "px";
}

window.addEventListener('load', function(event) { 
    marginBottomAuto();
});

window.addEventListener('resize', function(event) { 
    marginBottomAuto();
});

document.addEventListener('aos:in', ({ detail }) => {
    Array.from(document.getElementById("container-competenze").querySelectorAll(".progress")).forEach(function (item, index) {
        item.classList.remove("animationBar");
    })
});

document.addEventListener('aos:in:container-competenze', ({ detail }) => {
    Array.from(document.getElementById("container-competenze").querySelectorAll(".progress")).forEach(function (item, index) {
        item.classList.add("animationBar");
    })
});