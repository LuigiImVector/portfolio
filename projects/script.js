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

window.addEventListener('load', function() { 
    loadElements();
    updateElements();
});