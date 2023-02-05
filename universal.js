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
