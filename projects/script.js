function heightBackground()
{
    // var altezzaPagina = document.getElementsByTagName("html")[0].offsetHeight;

    // /*
    // Capire se lasciare:
    // Essendo che c'è top:-5% ho aggiunto un 3% (margin-bottom dell'ul) in modo che non tagli il background a caso
    // */
    // altezzaPagina += altezzaPagina*0.03;

    // document.getElementsByClassName("background")[0].style.height = altezzaPagina + "px";
}

function changeImg(id)
{
    var preview = document.getElementById("project-preview");
    console.log(id);
    //id = index of array
    console.log(imgSrc[id]);
    preview.style.backgroundImage = 'url("'+ imgSrc[id] + '")';
}

var imgSrc = ["../img/content/gym-timer.png", "../img/content/vektoreview.png", "../img/content/er-giochetto.png", "../img/content/portfolio.png", "../img/content/partite-bot.jpg", "../img/content/no-signal.png"];

window.addEventListener('load', function(event) { 
    heightBackground();
});

window.addEventListener('resize', function(event) { 
    heightBackground();
});