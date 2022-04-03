let b1f1 = document.querySelector('.building1floor1');
let b1f2 = document.querySelector('.building1floor2');
let b1f3 = document.querySelector('.building1floor3');
let b1f4 = document.querySelector('.building1floor4');

b1f1.style.display = 'none';
b1f3.style.display = 'none';
b1f4.style.display = 'none';

let b1f1list = document.querySelector('.b1floor1');
let b1f2list = document.querySelector('.b1floor2');
let b1f3list = document.querySelector('.b1floor3');
let b1f4list = document.querySelector('.b1floor4');

b1f1list.onclick = function() {
    b1f1.style.display = 'block';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
}
b1f2list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'block';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
}
b1f3list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'block';
    b1f4.style.display = 'none';
}
b1f4list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'block';
}