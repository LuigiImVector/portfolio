function heightBackground() {
    // var altezzaPagina = document.getElementsByTagName("html")[0].offsetHeight;

    // /*
    // Capire se lasciare:
    // Essendo che c'è top:-5% ho aggiunto un 3% (margin-bottom dell'ul) in modo che non tagli il background a caso
    // */
    // altezzaPagina += altezzaPagina*0.03;

    // document.getElementsByClassName("background")[0].style.height = altezzaPagina + "px";
}

function changeImg(id) {
    var preview = document.getElementById("project-preview");
    preview.style.backgroundImage = 'url("../'+ progetti[id][3] + '")';
}

function loadElements() {
    let list = document.getElementById("list");

    progetti.forEach((element, index) => {
        // list.innerHTML = list.innerHTML + `<li><a href="../${element[4]}" id="${index}" onmouseover="changeImg(this.id)" target="_blank">${element[0]}</a></li>`;
        list.innerHTML = list.innerHTML + `<li><a href="${element[1]}" id="${index}" onmouseover="changeImg(this.id)" target="_blank">${element[0]}</a></li>`;
    });
}

function updateElements() {
    progetti.forEach((element, index) => {
        document.getElementById(index).addEventListener('mousemove', animateit);
        document.getElementById(index).addEventListener('mouseleave', animateit);
    });
}

// var imgSrc = ["../img/content/gym-timer.png", "../img/content/vektoreview.png", "../img/content/er-giochetto.png", "../img/content/portfolio.png", "../img/content/partite-bot.jpg", "../img/content/no-signal.png"];

window.addEventListener('load', function() { 
    heightBackground();
    loadElements();
    updateElements();
});

window.addEventListener('resize', function() { 
    heightBackground();
});