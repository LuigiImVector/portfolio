function heightBackground()
{
    var altezzaPagina = document.getElementsByTagName("html")[0].offsetHeight;

    /*
    Capire se lasciare:
    Essendo che c'è top:-5% ho aggiunto un 3% (margin-bottom dell'ul) in modo che non tagli il background a caso
    */
    altezzaPagina += altezzaPagina*0.03;

    document.getElementsByClassName("background")[0].style.height = altezzaPagina + "px";
}

window.addEventListener('load', function(event) { 
    heightBackground();
});

window.addEventListener('resize', function(event) { 
    heightBackground();
});