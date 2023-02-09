/***** GLOBAL *****/
var progetti = [
    ["Er Giochetto", "https://luigiimvector.github.io/ErGiochetto/", "2D parody game developed in pure JavaScript, without library", "img/content/er-giochetto.png", "content/er-giochetto/index.html"],
    ["Socus", "https://socus.netlify.app/", "Simple website for fast reading", "img/content/socus.png", "content/socus/index.html"],
    ["scrnsht", "https://github.com/LuigiImVector/scrnsht", "Website to take custom screenshots, useful for Twitter", "img/content/scrnsht.png", "content/scrnsht/index.html"],
    ["Capture Website API", "https://github.com/LuigiImVector/capture-website-api", "API to take custom screenshots, integrates with scrnsht (my other project)", "img/content/api.png", "content/api/index.html"],
    ["Free programming books - Telegram bot", "https://t.me/freeprogrammingbooks_bot", "Unofficial Telegram bot for EbookFoundation/free-programming-books", "img/content/fpb.png", "content/fpb/index.html"],
    ["Football Telegram Bot", "https://t.me/partitecalciobot", "A useful telegram bot to find out the current day's soccer matches", "img/content/partite-bot.jpg", "content/partite-bot/index.html"],
    ["VektoReview", "https://github.com/LuigiImVector/VektoReview", "Website for my (inactive) blog where I review applications", "img/content/vektoreview.png", "content/vektoreview/index.html"],
    // ["Portfolio", "https://luigizoccali.it", "Website about myself", "img/content/portfolio.png", "content/portfolio/index.html"],
    ["Portfolio", "https://luigizoccali.it", "Website about myself", "img/content/portfolio.png", "/"],
    ["Gym", "http://gymtimer.altervista.org/", "My first website, a timer useful for gyms and workouts", "img/content/gym-timer.png", "content/gym-timer/index.html"],
    ["Github Badge", "https://github.com/LuigiImVector/github-badge", "Various type of badges for the README", "img/content/github-badge.png", "content/github-badge/index.html"]
];

/***** CUSTOM CURSOR *****/

const hoverThis = document.querySelectorAll('.hover-this');
const link = document.querySelectorAll('a');
const cursor = document.querySelector('.cursor');

function animateit (e) {
    cursor.style.transform = 'translate(-50%, -50%) scale(8)';
    if (e.type === 'mouseleave') cursor.style.transform = '';
};

function editCursor (e) {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};

hoverThis.forEach(b => b.addEventListener('mousemove', animateit));
hoverThis.forEach(b => b.addEventListener('mouseleave', animateit));
link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));
window.addEventListener('mousemove', editCursor);
