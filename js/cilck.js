let b1f1 = document.querySelector('.building1floor1');
let b1f2 = document.querySelector('.building1floor2');
let b1f3 = document.querySelector('.building1floor3');
let b1f4 = document.querySelector('.building1floor4');
let b2f1 = document.querySelector('.building2floor1');
let b2f2 = document.querySelector('.building2floor2');
let b2f3 = document.querySelector('.building2floor3');
let b2f4 = document.querySelector('.building2floor4');
let b2f5 = document.querySelector('.building2floor5');
let b2f6 = document.querySelector('.building2floor6');

b1f1.style.display = 'none';
b1f3.style.display = 'none';
b1f4.style.display = 'none';
b2f1.style.display = 'none';
b2f2.style.display = 'none';
b2f3.style.display = 'none';
b2f4.style.display = 'none';
b2f5.style.display = 'none';
b2f6.style.display = 'none';

let b1f1list = document.querySelector('.b1floor1');
let b1f2list = document.querySelector('.b1floor2');
let b1f3list = document.querySelector('.b1floor3');
let b1f4list = document.querySelector('.b1floor4');
let b2f1list = document.querySelector('.b2floor1');
let b2f2list = document.querySelector('.b2floor2');
let b2f3list = document.querySelector('.b2floor3');
let b2f4list = document.querySelector('.b2floor4');
let b2f5list = document.querySelector('.b2floor5');
let b2f6list = document.querySelector('.b2floor6');

b1f2list.classList.add("сlickToChangeColorDropdown");

b1f1list.onclick = function() {
    b1f1.style.display = 'block';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.add("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b1f2list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'block';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.add("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b1f3list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'block';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.add("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b1f4list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'block';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.add("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b2f1list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'block';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.add("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b2f2list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'block';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.add("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b2f3list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'block';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.add("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b2f4list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'block';
    b2f5.style.display = 'none';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.add("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b2f5list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'block';
    b2f6.style.display = 'none';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.add("сlickToChangeColorDropdown");
    b2f6list.classList.remove("сlickToChangeColorDropdown");
}
b2f6list.onclick = function() {
    b1f1.style.display = 'none';
    b1f2.style.display = 'none';
    b1f3.style.display = 'none';
    b1f4.style.display = 'none';
    b2f1.style.display = 'none';
    b2f2.style.display = 'none';
    b2f3.style.display = 'none';
    b2f4.style.display = 'none';
    b2f5.style.display = 'none';
    b2f6.style.display = 'block';
    b1f1list.classList.remove("сlickToChangeColorDropdown");
    b1f2list.classList.remove("сlickToChangeColorDropdown");
    b1f3list.classList.remove("сlickToChangeColorDropdown");
    b1f4list.classList.remove("сlickToChangeColorDropdown");
    b2f1list.classList.remove("сlickToChangeColorDropdown");
    b2f2list.classList.remove("сlickToChangeColorDropdown");
    b2f3list.classList.remove("сlickToChangeColorDropdown");
    b2f4list.classList.remove("сlickToChangeColorDropdown");
    b2f5list.classList.remove("сlickToChangeColorDropdown");
    b2f6list.classList.add("сlickToChangeColorDropdown");
}



// 1b - 2floor --------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath210 = document.getElementById('path-1-210');
const iconClickText210 = document.getElementById('text-1-210');
const iconClickText210desc = document.getElementById('desc210');
function funcIconClick210(event) {
    if (event.target.closest('#path-1-210')) {
        iconClickPath210.classList.add('сlickToChangeColor');
        iconClickText210desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-210')) {
        iconClickPath210.classList.remove('сlickToChangeColor');
        iconClickText210desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-210')) {
        iconClickText210.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-210')) {
        iconClickText210.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12210')) {
        iconClickPath210.classList.add('сlickToChangeColor');
        iconClickText210desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12210')) {
        iconClickText210.classList.add('сlickToChangeTextColor');
    }
    iconClickPath210.removeEventListener("click", funcIconClick210);
}
document.addEventListener("click", funcIconClick210);

const iconClickPath209 = document.getElementById('path-1-209');
const iconClickText209 = document.getElementById('text-1-209');
const iconClickText209desc = document.getElementById('desc209');
function funcIconClick209(event) {
    if (event.target.closest('#path-1-209')) {
        iconClickPath209.classList.add('сlickToChangeColor');
        iconClickText209desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-209')) {
        iconClickPath209.classList.remove('сlickToChangeColor');
        iconClickText209desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-209')) {
        iconClickText209.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-209')) {
        iconClickText209.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12209')) {
        iconClickPath209.classList.add('сlickToChangeColor');
        iconClickText209desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12209')) {
        iconClickText209.classList.add('сlickToChangeTextColor');
    }
    iconClickPath209.removeEventListener("click", funcIconClick209);
}
document.addEventListener("click", funcIconClick209);

const iconClickPath208 = document.getElementById('path-1-208');
const iconClickText208 = document.getElementById('text-1-208');
const iconClickText208desc = document.getElementById('desc208');
function funcIconClick208(event) {
    if (event.target.closest('#path-1-208')) {
        iconClickPath208.classList.add('сlickToChangeColor');
        iconClickText208desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-208')) {
        iconClickPath208.classList.remove('сlickToChangeColor');
        iconClickText208desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-208')) {
        iconClickText208.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-208')) {
        iconClickText208.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12208')) {
        iconClickPath208.classList.add('сlickToChangeColor');
        iconClickText208desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12208')) {
        iconClickText208.classList.add('сlickToChangeTextColor');
    }
    iconClickPath208.removeEventListener("click", funcIconClick208);
}
document.addEventListener("click", funcIconClick208);

const iconClickPath207 = document.getElementById('path-1-207');
const iconClickText207 = document.getElementById('text-1-207');
const iconClickText207desc = document.getElementById('desc207');
function funcIconClick207(event) {
    if (event.target.closest('#path-1-207')) {
        iconClickPath207.classList.add('сlickToChangeColor');
        iconClickText207desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-207')) {
        iconClickPath207.classList.remove('сlickToChangeColor');
        iconClickText207desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-207')) {
        iconClickText207.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-207')) {
        iconClickText207.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12207')) {
        iconClickPath207.classList.add('сlickToChangeColor');
        iconClickText207desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12207')) {
        iconClickText207.classList.add('сlickToChangeTextColor');
    }
    iconClickPath207.removeEventListener("click", funcIconClick207);
}
document.addEventListener("click", funcIconClick207);

const iconClickPath205 = document.getElementById('path-1-205');
const iconClickText205 = document.getElementById('text-1-205');
const iconClickText205desc = document.getElementById('desc205');
function funcIconClick205(event) {
    if (event.target.closest('#path-1-205')) {
        iconClickPath205.classList.add('сlickToChangeColor');
        iconClickText205desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-205')) {
        iconClickPath205.classList.remove('сlickToChangeColor');
        iconClickText205desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-205')) {
        iconClickText205.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-205')) {
        iconClickText205.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12205')) {
        iconClickPath205.classList.add('сlickToChangeColor');
        iconClickText205desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12205')) {
        iconClickText205.classList.add('сlickToChangeTextColor');
    }
    iconClickPath205.removeEventListener("click", funcIconClick205);
}
document.addEventListener("click", funcIconClick205);

const iconClickPath204 = document.getElementById('path-1-204');
const iconClickText204 = document.getElementById('text-1-204');
const iconClickText204desc = document.getElementById('desc204');
function funcIconClick204(event) {
    if (event.target.closest('#path-1-204')) {
        iconClickPath204.classList.add('сlickToChangeColor');
        iconClickText204desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-204')) {
        iconClickPath204.classList.remove('сlickToChangeColor');
        iconClickText204desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-204')) {
        iconClickText204.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-204')) {
        iconClickText204.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12204')) {
        iconClickPath204.classList.add('сlickToChangeColor');
        iconClickText204desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12204')) {
        iconClickText204.classList.add('сlickToChangeTextColor');
    }
    iconClickPath204.removeEventListener("click", funcIconClick204);
}
document.addEventListener("click", funcIconClick204);

const iconClickPath203 = document.getElementById('path-1-203');
const iconClickText203 = document.getElementById('text-1-203');
const iconClickText203desc = document.getElementById('desc203');
function funcIconClick203(event) {
    if (event.target.closest('#path-1-203')) {
        iconClickPath203.classList.add('сlickToChangeColor');
        iconClickText203desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-203')) {
        iconClickPath203.classList.remove('сlickToChangeColor');
        iconClickText203desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-203')) {
        iconClickText203.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-203')) {
        iconClickText203.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12203')) {
        iconClickPath203.classList.add('сlickToChangeColor');
        iconClickText203desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12203')) {
        iconClickText203.classList.add('сlickToChangeTextColor');
    }
    iconClickPath203.removeEventListener("click", funcIconClick203);
}
document.addEventListener("click", funcIconClick203);

const iconClickPath225 = document.getElementById('path-1-225');
const iconClickText225 = document.getElementById('text-1-225');
const iconClickText225desc = document.getElementById('desc225');
function funcIconClick225(event) {
    if (event.target.closest('#path-1-225')) {
        iconClickPath225.classList.add('сlickToChangeColor');
        iconClickText225desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-225')) {
        iconClickPath225.classList.remove('сlickToChangeColor');
        iconClickText225desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-225')) {
        iconClickText225.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-225')) {
        iconClickText225.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12225')) {
        iconClickPath225.classList.add('сlickToChangeColor');
        iconClickText225desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12225')) {
        iconClickText225.classList.add('сlickToChangeTextColor');
    }
    iconClickPath225.removeEventListener("click", funcIconClick225);
}
document.addEventListener("click", funcIconClick225);

// 1 - 226
const iconClickPath226 = document.getElementById('path-1-226');
const iconClickText226 = document.getElementById('text-1-226');
const iconClickText226desc = document.getElementById('desc226');
function funcIconClick226(event) {
    if (event.target.closest('#path-1-226')) {
        iconClickPath226.classList.add('сlickToChangeColor');
        iconClickText226desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-226')) {
        iconClickPath226.classList.remove('сlickToChangeColor');
        iconClickText226desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-226')) {
        iconClickText226.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-226')) {
        iconClickText226.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12226')) {
        iconClickPath226.classList.add('сlickToChangeColor');
        iconClickText226desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12226')) {
        iconClickText226.classList.add('сlickToChangeTextColor');
    }
    iconClickPath226.removeEventListener("click", funcIconClick226);
}
document.addEventListener("click", funcIconClick226);

const iconClickPath227 = document.getElementById('path-1-227');
const iconClickText227 = document.getElementById('text-1-227');
const iconClickText227desc = document.getElementById('desc227');
function funcIconClick227(event) {
    if (event.target.closest('#path-1-227')) {
        iconClickPath227.classList.add('сlickToChangeColor');
        iconClickText227desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-227')) {
        iconClickPath227.classList.remove('сlickToChangeColor');
        iconClickText227desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-227')) {
        iconClickText227.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-227')) {
        iconClickText227.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12227')) {
        iconClickPath227.classList.add('сlickToChangeColor');
        iconClickText227desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12227')) {
        iconClickText227.classList.add('сlickToChangeTextColor');
    }
    iconClickPath227.removeEventListener("click", funcIconClick227);
}
document.addEventListener("click", funcIconClick227);

const iconClickPath227a = document.getElementById('path-1-227a');
const iconClickText227a = document.getElementById('text-1-227a');
const iconClickText227adesc = document.getElementById('desc227a');
function funcIconClick227a(event) {
    if (event.target.closest('#path-1-227a')) {
        iconClickPath227a.classList.add('сlickToChangeColor');
        iconClickText227adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-227a')) {
        iconClickPath227a.classList.remove('сlickToChangeColor');
        iconClickText227adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-227a')) {
        iconClickText227a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-227a')) {
        iconClickText227a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12227a')) {
        iconClickPath227a.classList.add('сlickToChangeColor');
        iconClickText227adesc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12227a')) {
        iconClickText227a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath227a.removeEventListener("click", funcIconClick227a);
}
document.addEventListener("click", funcIconClick227a);

const iconClickPath228 = document.getElementById('path-1-228');
const iconClickText228 = document.getElementById('text-1-228');
const iconClickText228desc = document.getElementById('desc228');
function funcIconClick228(event) {
    if (event.target.closest('#path-1-228')) {
        iconClickPath228.classList.add('сlickToChangeColor');
        iconClickText228desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-228')) {
        iconClickPath228.classList.remove('сlickToChangeColor');
        iconClickText228desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-228')) {
        iconClickText228.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-228')) {
        iconClickText228.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12228')) {
        iconClickPath228.classList.add('сlickToChangeColor');
        iconClickText228desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12228')) {
        iconClickText228.classList.add('сlickToChangeTextColor');
    }
    iconClickPath228.removeEventListener("click", funcIconClick228);
}
document.addEventListener("click", funcIconClick228);

const iconClickPath229 = document.getElementById('path-1-229');
const iconClickText229 = document.getElementById('text-1-229');
const iconClickText229desc = document.getElementById('desc229');
function funcIconClick229(event) {
    if (event.target.closest('#path-1-229')) {
        iconClickPath229.classList.add('сlickToChangeColor');
        iconClickText229desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-229')) {
        iconClickPath229.classList.remove('сlickToChangeColor');
        iconClickText229desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-229')) {
        iconClickText229.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-229')) {
        iconClickText229.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12229')) {
        iconClickPath229.classList.add('сlickToChangeColor');
        iconClickText229desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12229')) {
        iconClickText229.classList.add('сlickToChangeTextColor');
    }
    iconClickPath229.removeEventListener("click", funcIconClick229);
}
document.addEventListener("click", funcIconClick229);

const iconClickPath230 = document.getElementById('path-1-230');
const iconClickText230 = document.getElementById('text-1-230');
const iconClickText230desc = document.getElementById('desc230');
function funcIconClick230(event) {
    if (event.target.closest('#path-1-230')) {
        iconClickPath230.classList.add('сlickToChangeColor');
        iconClickText230desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-230')) {
        iconClickPath230.classList.remove('сlickToChangeColor');
        iconClickText230desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-230')) {
        iconClickText230.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-230')) {
        iconClickText230.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12230')) {
        iconClickPath230.classList.add('сlickToChangeColor');
        iconClickText230desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12230')) {
        iconClickText230.classList.add('сlickToChangeTextColor');
    }
    iconClickPath230.removeEventListener("click", funcIconClick230);
}
document.addEventListener("click", funcIconClick230);

const iconClickPath231 = document.getElementById('path-1-231');
const iconClickText231 = document.getElementById('text-1-231');
const iconClickText231desc = document.getElementById('desc231');
function funcIconClick231(event) {
    if (event.target.closest('#path-1-231')) {
        iconClickPath231.classList.add('сlickToChangeColor');
        iconClickText231desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-231')) {
        iconClickPath231.classList.remove('сlickToChangeColor');
        iconClickText231desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-231')) {
        iconClickText231.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-231')) {
        iconClickText231.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12231')) {
        iconClickPath231.classList.add('сlickToChangeColor');
        iconClickText231desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12231')) {
        iconClickText231.classList.add('сlickToChangeTextColor');
    }
    iconClickPath231.removeEventListener("click", funcIconClick231);
}
document.addEventListener("click", funcIconClick231);

const iconClickPath222 = document.getElementById('path-1-222');
const iconClickText222 = document.getElementById('text-1-222');
const iconClickText222desc = document.getElementById('desc222');
function funcIconClick222(event) {
    if (event.target.closest('#path-1-222')) {
        iconClickPath222.classList.add('сlickToChangeColor');
        iconClickText222desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-222')) {
        iconClickPath222.classList.remove('сlickToChangeColor');
        iconClickText222desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-222')) {
        iconClickText222.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-222')) {
        iconClickText222.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12222')) {
        iconClickPath222.classList.add('сlickToChangeColor');
        iconClickText222desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12222')) {
        iconClickText222.classList.add('сlickToChangeTextColor');
    }
    iconClickPath222.removeEventListener("click", funcIconClick222);
}
document.addEventListener("click", funcIconClick222);

const iconClickPath221 = document.getElementById('path-1-221');
const iconClickText221 = document.getElementById('text-1-221');
const iconClickText221desc = document.getElementById('desc221');
function funcIconClick221(event) {
    if (event.target.closest('#path-1-221')) {
        iconClickPath221.classList.add('сlickToChangeColor');
        iconClickText221desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-221')) {
        iconClickPath221.classList.remove('сlickToChangeColor');
        iconClickText221desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-221')) {
        iconClickText221.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-221')) {
        iconClickText221.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12221')) {
        iconClickPath221.classList.add('сlickToChangeColor');
        iconClickText221desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12221')) {
        iconClickText221.classList.add('сlickToChangeTextColor');
    }
    iconClickPath221.removeEventListener("click", funcIconClick221);
}
document.addEventListener("click", funcIconClick221);

const iconClickPath315 = document.getElementById('path-1-315');
const iconClickText315 = document.getElementById('text-1-315');
const iconClickText315desc = document.getElementById('desc221a');
function funcIconClick315(event) {
    if (event.target.closest('#path-1-315')) {
        iconClickPath315.classList.add('сlickToChangeColor');
        iconClickText315desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-315')) {
        iconClickPath315.classList.remove('сlickToChangeColor');
        iconClickText315desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-315')) {
        iconClickText315.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-315')) {
        iconClickText315.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12221a')) {
        iconClickPath315.classList.add('сlickToChangeColor');
        iconClickText315desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12221a')) {
        iconClickText315.classList.add('сlickToChangeTextColor');
    }
    iconClickPath315.removeEventListener("click", funcIconClick315);
}
document.addEventListener("click", funcIconClick315);

const iconClickPath220 = document.getElementById('path-1-220');
const iconClickText220 = document.getElementById('text-1-220');
const iconClickText220desc = document.getElementById('desc220');
function funcIconClick220(event) {
    if (event.target.closest('#path-1-220')) {
        iconClickPath220.classList.add('сlickToChangeColor');
        iconClickText220desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-220')) {
        iconClickPath220.classList.remove('сlickToChangeColor');
        iconClickText220desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-220')) {
        iconClickText220.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-220')) {
        iconClickText220.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12220')) {
        iconClickPath220.classList.add('сlickToChangeColor');
        iconClickText220desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12220')) {
        iconClickText220.classList.add('сlickToChangeTextColor');
    }
    iconClickPath220.removeEventListener("click", funcIconClick220);
}
document.addEventListener("click", funcIconClick220);

const iconClickPath219 = document.getElementById('path-1-219');
const iconClickText219 = document.getElementById('text-1-219');
const iconClickText219desc = document.getElementById('desc219');
function funcIconClick219(event) {
    if (event.target.closest('#path-1-219')) {
        iconClickPath219.classList.add('сlickToChangeColor');
        iconClickText219desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-219')) {
        iconClickPath219.classList.remove('сlickToChangeColor');
        iconClickText219desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-219')) {
        iconClickText219.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-219')) {
        iconClickText219.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12219')) {
        iconClickPath219.classList.add('сlickToChangeColor');
        iconClickText219desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12219')) {
        iconClickText219.classList.add('сlickToChangeTextColor');
    }
    iconClickPath219.removeEventListener("click", funcIconClick219);
}
document.addEventListener("click", funcIconClick219);

const iconClickPath216 = document.getElementById('path-1-216');
const iconClickText216 = document.getElementById('text-1-216');
const iconClickText216desc = document.getElementById('desc216');
function funcIconClick216(event) {
    if (event.target.closest('#path-1-216')) {
        iconClickPath216.classList.add('сlickToChangeColor');
        iconClickText216desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-216')) {
        iconClickPath216.classList.remove('сlickToChangeColor');
        iconClickText216desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-216')) {
        iconClickText216.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-216')) {
        iconClickText216.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12216')) {
        iconClickPath216.classList.add('сlickToChangeColor');
        iconClickText216desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12216')) {
        iconClickText216.classList.add('сlickToChangeTextColor');
    }
    iconClickPath216.removeEventListener("click", funcIconClick216);
}
document.addEventListener("click", funcIconClick216);

const iconClickPath215 = document.getElementById('path-1-215');
const iconClickText215 = document.getElementById('text-1-215');
const iconClickText215desc = document.getElementById('desc215');
function funcIconClick215(event) {
    if (event.target.closest('#path-1-215')) {
        iconClickPath215.classList.add('сlickToChangeColor');
        iconClickText215desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-215')) {
        iconClickPath215.classList.remove('сlickToChangeColor');
        iconClickText215desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-215')) {
        iconClickText215.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-215')) {
        iconClickText215.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12215')) {
        iconClickPath215.classList.add('сlickToChangeColor');
        iconClickText215desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12215')) {
        iconClickText215.classList.add('сlickToChangeTextColor');
    }
    iconClickPath215.removeEventListener("click", funcIconClick215);
}
document.addEventListener("click", funcIconClick215);

const iconClickPath213 = document.getElementById('path-1-213');
const iconClickText213 = document.getElementById('text-1-213');
const iconClickText213desc = document.getElementById('desc213');
function funcIconClick213(event) {
    if (event.target.closest('#path-1-213')) {
        iconClickPath213.classList.add('сlickToChangeColor');
        iconClickText213desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-213')) {
        iconClickPath213.classList.remove('сlickToChangeColor');
        iconClickText213desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-213')) {
        iconClickText213.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-213')) {
        iconClickText213.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12213')) {
        iconClickPath213.classList.add('сlickToChangeColor');
        iconClickText213desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12213')) {
        iconClickText213.classList.add('сlickToChangeTextColor');
    }
    iconClickPath213.removeEventListener("click", funcIconClick213);
}
document.addEventListener("click", funcIconClick213);

const iconClickPath212 = document.getElementById('path-1-212');
const iconClickText212 = document.getElementById('text-1-212');
const iconClickText212desc = document.getElementById('desc212');
function funcIconClick212(event) {
    if (event.target.closest('#path-1-212')) {
        iconClickPath212.classList.add('сlickToChangeColor');
        iconClickText212desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-212')) {
        iconClickPath212.classList.remove('сlickToChangeColor');
        iconClickText212desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-212')) {
        iconClickText212.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-212')) {
        iconClickText212.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12212')) {
        iconClickPath212.classList.add('сlickToChangeColor');
        iconClickText212desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12212')) {
        iconClickText212.classList.add('сlickToChangeTextColor');
    }
    iconClickPath212.removeEventListener("click", funcIconClick212);
}
document.addEventListener("click", funcIconClick212);

const iconClickPath211 = document.getElementById('path-1-211');
const iconClickText211 = document.getElementById('text-1-211');
const iconClickText211desc = document.getElementById('desc211');
function funcIconClick211(event) {
    if (event.target.closest('#path-1-211')) {
        iconClickPath211.classList.add('сlickToChangeColor');
        iconClickText211desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-211')) {
        iconClickPath211.classList.remove('сlickToChangeColor');
        iconClickText211desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-211')) {
        iconClickText211.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-211')) {
        iconClickText211.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12211')) {
        iconClickPath211.classList.add('сlickToChangeColor');
        iconClickText211desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12211')) {
        iconClickText211.classList.add('сlickToChangeTextColor');
    }
    iconClickPath211.removeEventListener("click", funcIconClick211);
}
document.addEventListener("click", funcIconClick211);

// 1 - 201
const iconClickPath201 = document.getElementById('path-1-201');
const iconClickText201 = document.getElementById('text-1-201');
const iconClickText201desc = document.getElementById('desc201');
function funcIconClick201(event) {
    if (event.target.closest('#path-1-201')) {
        iconClickPath201.classList.add('сlickToChangeColor');
        iconClickText201desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-201')) {
        iconClickPath201.classList.remove('сlickToChangeColor');
        iconClickText201desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-201')) {
        iconClickText201.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-201')) {
        iconClickText201.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12201')) {
        iconClickPath201.classList.add('сlickToChangeColor');
        iconClickText201desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12201')) {
        iconClickText201.classList.add('сlickToChangeTextColor');
    }
    iconClickPath201.removeEventListener("click", funcIconClick201);
}
document.addEventListener("click", funcIconClick201);

const iconClickPath251 = document.getElementById('path-1-251');
const iconClickText251 = document.getElementById('text-1-251');
const iconClickText251desc = document.getElementById('desc251');
function funcIconClick251(event) {
    if (event.target.closest('#path-1-251')) {
        iconClickPath251.classList.add('сlickToChangeColor');
        iconClickText251desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-251')) {
        iconClickPath251.classList.remove('сlickToChangeColor');
        iconClickText251desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-251')) {
        iconClickText251.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-251')) {
        iconClickText251.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12251')) {
        iconClickPath251.classList.add('сlickToChangeColor');
        iconClickText251desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12251')) {
        iconClickText251.classList.add('сlickToChangeTextColor');
    }
    iconClickPath251.removeEventListener("click", funcIconClick251);
}
document.addEventListener("click", funcIconClick251);

const iconClickPath254 = document.getElementById('path-1-254');
const iconClickText254 = document.getElementById('text-1-254');
const iconClickText254desc = document.getElementById('desc254');
function funcIconClick254(event) {
    if (event.target.closest('#path-1-254')) {
        iconClickPath254.classList.add('сlickToChangeColor');
        iconClickText254desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-254')) {
        iconClickPath254.classList.remove('сlickToChangeColor');
        iconClickText254desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-254')) {
        iconClickText254.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-254')) {
        iconClickText254.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12254')) {
        iconClickPath254.classList.add('сlickToChangeColor');
        iconClickText254desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12254')) {
        iconClickText254.classList.add('сlickToChangeTextColor');
    }
    iconClickPath254.removeEventListener("click", funcIconClick254);
}
document.addEventListener("click", funcIconClick254);

const iconClickPath256 = document.getElementById('path-1-256');
const iconClickText256 = document.getElementById('text-1-256');
const iconClickText256desc = document.getElementById('desc255');
function funcIconClick256(event) {
    if (event.target.closest('#path-1-256')) {
        iconClickPath256.classList.add('сlickToChangeColor');
        iconClickText256desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-256')) {
        iconClickPath256.classList.remove('сlickToChangeColor');
        iconClickText256desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-256')) {
        iconClickText256.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-256')) {
        iconClickText256.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12255')) {
        iconClickPath256.classList.add('сlickToChangeColor');
        iconClickText256desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12255')) {
        iconClickText256.classList.add('сlickToChangeTextColor');
    }
    iconClickPath256.removeEventListener("click", funcIconClick256);
}
document.addEventListener("click", funcIconClick256);

const iconClickPath1276extra = document.getElementById('path-1-276-extra');
const iconClickText1276extra = document.getElementById('text-1-276-extra');
const iconClickText1276extradesc = document.getElementById('desc257a');
function funcIconClick1276extra(event) {
    if (event.target.closest('#path-1-276-extra')) {
        iconClickPath1276extra.classList.add('сlickToChangeColor');
        iconClickText1276extradesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-276-extra')) {
        iconClickPath1276extra.classList.remove('сlickToChangeColor');
        iconClickText1276extradesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-276-extra')) {
        iconClickText1276extra.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-276-extra')) {
        iconClickText1276extra.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12257a')) {
        iconClickPath1276extra.classList.add('сlickToChangeColor');
        iconClickText1276extradesc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12257a')) {
        iconClickText1276extra.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1276extra.removeEventListener("click", funcIconClick1276extra);
}
document.addEventListener("click", funcIconClick1276extra);

const iconClickPath257 = document.getElementById('path-1-257');
const iconClickText257 = document.getElementById('text-1-257');
const iconClickText257desc = document.getElementById('desc257');
function funcIconClick257(event) {
    if (event.target.closest('#path-1-257')) {
        iconClickPath257.classList.add('сlickToChangeColor');
        iconClickText257desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-257')) {
        iconClickPath257.classList.remove('сlickToChangeColor');
        iconClickText257desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-257')) {
        iconClickText257.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-257')) {
        iconClickText257.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12257')) {
        iconClickPath257.classList.add('сlickToChangeColor');
        iconClickText257desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12257')) {
        iconClickText257.classList.add('сlickToChangeTextColor');
    }
    iconClickPath257.removeEventListener("click", funcIconClick257);
}
document.addEventListener("click", funcIconClick257);

const iconClickPath257a = document.getElementById('path-1-257a');
const iconClickText257a = document.getElementById('text-1-257a');
const iconClickText257adesc = document.getElementById('desc256');
function funcIconClick257a(event) {
    if (event.target.closest('#path-1-257a')) {
        iconClickPath257a.classList.add('сlickToChangeColor');
        iconClickText257adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-257a')) {
        iconClickPath257a.classList.remove('сlickToChangeColor');
        iconClickText257adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-257a')) {
        iconClickText257a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-257a')) {
        iconClickText257a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12256')) {
        iconClickPath257a.classList.add('сlickToChangeColor');
        iconClickText257adesc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12256')) {
        iconClickText257a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath257a.removeEventListener("click", funcIconClick257a);
}
document.addEventListener("click", funcIconClick257a);

const iconClickPath258 = document.getElementById('path-1-258');
const iconClickText258 = document.getElementById('text-1-258');
const iconClickText258desc = document.getElementById('desc258');
function funcIconClick258(event) {
    if (event.target.closest('#path-1-258')) {
        iconClickPath258.classList.add('сlickToChangeColor');
        iconClickText258desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-258')) {
        iconClickPath258.classList.remove('сlickToChangeColor');
        iconClickText258desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-258')) {
        iconClickText258.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-258')) {
        iconClickText258.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12258')) {
        iconClickPath258.classList.add('сlickToChangeColor');
        iconClickText258desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12258')) {
        iconClickText258.classList.add('сlickToChangeTextColor');
    }
    iconClickPath258.removeEventListener("click", funcIconClick258);
}
document.addEventListener("click", funcIconClick258);

const iconClickPath261 = document.getElementById('path-1-261');
const iconClickText261 = document.getElementById('text-1-261');
const iconClickText261desc = document.getElementById('desc261');
function funcIconClick261(event) {
    if (event.target.closest('#path-1-261')) {
        iconClickPath261.classList.add('сlickToChangeColor');
        iconClickText261desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-261')) {
        iconClickPath261.classList.remove('сlickToChangeColor');
        iconClickText261desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-261')) {
        iconClickText261.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-261')) {
        iconClickText261.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12261')) {
        iconClickPath261.classList.add('сlickToChangeColor');
        iconClickText261desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12261')) {
        iconClickText261.classList.add('сlickToChangeTextColor');
    }
    iconClickPath261.removeEventListener("click", funcIconClick261);
}
document.addEventListener("click", funcIconClick261);

const iconClickPath262 = document.getElementById('path-1-262');
const iconClickText262 = document.getElementById('text-1-262');
const iconClickText262desc = document.getElementById('desc262');
function funcIconClick262(event) {
    if (event.target.closest('#path-1-262')) {
        iconClickPath262.classList.add('сlickToChangeColor');
        iconClickText262desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-262')) {
        iconClickPath262.classList.remove('сlickToChangeColor');
        iconClickText262desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-262')) {
        iconClickText262.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-262')) {
        iconClickText262.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12262')) {
        iconClickPath262.classList.add('сlickToChangeColor');
        iconClickText262desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12262')) {
        iconClickText262.classList.add('сlickToChangeTextColor');
    }
    iconClickPath262.removeEventListener("click", funcIconClick262);
}
document.addEventListener("click", funcIconClick262);

const iconClickPath263 = document.getElementById('path-1-263');
const iconClickText263 = document.getElementById('text-1-263');
const iconClickText263desc = document.getElementById('desc263');
function funcIconClick263(event) {
    if (event.target.closest('#path-1-263')) {
        iconClickPath263.classList.add('сlickToChangeColor');
        iconClickText263desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-263')) {
        iconClickPath263.classList.remove('сlickToChangeColor');
        iconClickText263desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-263')) {
        iconClickText263.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-263')) {
        iconClickText263.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12263')) {
        iconClickPath263.classList.add('сlickToChangeColor');
        iconClickText263desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12263')) {
        iconClickText263.classList.add('сlickToChangeTextColor');
    }
    iconClickPath263.removeEventListener("click", funcIconClick263);
}
document.addEventListener("click", funcIconClick263);

const iconClickPath264 = document.getElementById('path-1-264');
const iconClickText264 = document.getElementById('text-1-264');
const iconClickText264desc = document.getElementById('desc264');
function funcIconClick264(event) {
    if (event.target.closest('#path-1-264')) {
        iconClickPath264.classList.add('сlickToChangeColor');
        iconClickText264desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-264')) {
        iconClickPath264.classList.remove('сlickToChangeColor');
        iconClickText264desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-264')) {
        iconClickText264.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-264')) {
        iconClickText264.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12264')) {
        iconClickPath264.classList.add('сlickToChangeColor');
        iconClickText264desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12264')) {
        iconClickText264.classList.add('сlickToChangeTextColor');
    }
    iconClickPath264.removeEventListener("click", funcIconClick264);
}
document.addEventListener("click", funcIconClick264);

const iconClickPath268 = document.getElementById('path-1-268');
const iconClickText268 = document.getElementById('text-1-268');
const iconClickText268desc = document.getElementById('desc268');
function funcIconClick268(event) {
    if (event.target.closest('#path-1-268')) {
        iconClickPath268.classList.add('сlickToChangeColor');
        iconClickText268desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-268')) {
        iconClickPath268.classList.remove('сlickToChangeColor');
        iconClickText268desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-268')) {
        iconClickText268.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-268')) {
        iconClickText268.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12268')) {
        iconClickPath268.classList.add('сlickToChangeColor');
        iconClickText268desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12268')) {
        iconClickText268.classList.add('сlickToChangeTextColor');
    }
    iconClickPath268.removeEventListener("click", funcIconClick268);
}
document.addEventListener("click", funcIconClick268);

const iconClickPath267 = document.getElementById('path-1-267');
const iconClickText267 = document.getElementById('text-1-267');
const iconClickText267desc = document.getElementById('desc267');
function funcIconClick267(event) {
    if (event.target.closest('#path-1-267')) {
        iconClickPath267.classList.add('сlickToChangeColor');
        iconClickText267desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-267')) {
        iconClickPath267.classList.remove('сlickToChangeColor');
        iconClickText267desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-267')) {
        iconClickText267.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-267')) {
        iconClickText267.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12267')) {
        iconClickPath267.classList.add('сlickToChangeColor');
        iconClickText267desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12267')) {
        iconClickText267.classList.add('сlickToChangeTextColor');
    }
    iconClickPath267.removeEventListener("click", funcIconClick267);
}
document.addEventListener("click", funcIconClick267);

const iconClickPath269 = document.getElementById('path-1-269');
const iconClickText269 = document.getElementById('text-1-269');
const iconClickText269desc = document.getElementById('desc269');
function funcIconClick269(event) {
    if (event.target.closest('#path-1-269')) {
        iconClickPath269.classList.add('сlickToChangeColor');
        iconClickText269desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-269')) {
        iconClickPath269.classList.remove('сlickToChangeColor');
        iconClickText269desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-269')) {
        iconClickText269.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-269')) {
        iconClickText269.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12269')) {
        iconClickPath269.classList.add('сlickToChangeColor');
        iconClickText269desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12269')) {
        iconClickText269.classList.add('сlickToChangeTextColor');
    }
    iconClickPath269.removeEventListener("click", funcIconClick269);
}
document.addEventListener("click", funcIconClick269);

const iconClickPath270 = document.getElementById('path-1-270');
const iconClickText270 = document.getElementById('text-1-270');
const iconClickText270desc = document.getElementById('desc270');
function funcIconClick270(event) {
    if (event.target.closest('#path-1-270')) {
        iconClickPath270.classList.add('сlickToChangeColor');
        iconClickText270desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-270')) {
        iconClickPath270.classList.remove('сlickToChangeColor');
        iconClickText270desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-270')) {
        iconClickText270.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-270')) {
        iconClickText270.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12270')) {
        iconClickPath270.classList.add('сlickToChangeColor');
        iconClickText270desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12270')) {
        iconClickText270.classList.add('сlickToChangeTextColor');
    }
    iconClickPath270.removeEventListener("click", funcIconClick270);
}
document.addEventListener("click", funcIconClick270);

const iconClickPath271 = document.getElementById('path-1-271');
const iconClickText271 = document.getElementById('text-1-271');
const iconClickText271desc = document.getElementById('desc271');
function funcIconClick271(event) {
    if (event.target.closest('#path-1-271')) {
        iconClickPath271.classList.add('сlickToChangeColor');
        iconClickText271desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-271')) {
        iconClickPath271.classList.remove('сlickToChangeColor');
        iconClickText271desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-271')) {
        iconClickText271.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-271')) {
        iconClickText271.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12271')) {
        iconClickPath271.classList.add('сlickToChangeColor');
        iconClickText271desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12271')) {
        iconClickText271.classList.add('сlickToChangeTextColor');
    }
    iconClickPath271.removeEventListener("click", funcIconClick271);
}
document.addEventListener("click", funcIconClick271);

const iconClickPath272 = document.getElementById('path-1-272');
const iconClickText272 = document.getElementById('text-1-272');
const iconClickText272desc = document.getElementById('desc272');
function funcIconClick272(event) {
    if (event.target.closest('#path-1-272')) {
        iconClickPath272.classList.add('сlickToChangeColor');
        iconClickText272desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-272')) {
        iconClickPath272.classList.remove('сlickToChangeColor');
        iconClickText272desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-272')) {
        iconClickText272.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-272')) {
        iconClickText272.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12272')) {
        iconClickPath272.classList.add('сlickToChangeColor');
        iconClickText272desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12272')) {
        iconClickText272.classList.add('сlickToChangeTextColor');
    }
    iconClickPath272.removeEventListener("click", funcIconClick272);
}
document.addEventListener("click", funcIconClick272);

const iconClickPath1holl = document.getElementById('path-1-holl');
const iconClickText1holl = document.getElementById('text-1-holl');
const iconClickText1holldesc = document.getElementById('desc273');
function funcIconClick1holl(event) {
    if (event.target.closest('#path-1-holl')) {
        iconClickPath1holl.classList.add('сlickToChangeColor');
        iconClickText1holldesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-holl')) {
        iconClickPath1holl.classList.remove('сlickToChangeColor');
        iconClickText1holldesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-holl')) {
        iconClickText1holl.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-holl')) {
        iconClickText1holl.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12273')) {
        iconClickPath1holl.classList.add('сlickToChangeColor');
        iconClickText1holldesc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12273')) {
        iconClickText1holl.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1holl.removeEventListener("click", funcIconClick1holl);
}
document.addEventListener("click", funcIconClick1holl);

const iconClickPath275 = document.getElementById('path-1-275');
const iconClickText275 = document.getElementById('text-1-275');
const iconClickText275desc = document.getElementById('desc275');
function funcIconClick275(event) {
    if (event.target.closest('#path-1-275')) {
        iconClickPath275.classList.add('сlickToChangeColor');
        iconClickText275desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-275')) {
        iconClickPath275.classList.remove('сlickToChangeColor');
        iconClickText275desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-275')) {
        iconClickText275.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-275')) {
        iconClickText275.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12275')) {
        iconClickPath275.classList.add('сlickToChangeColor');
        iconClickText275desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12275')) {
        iconClickText275.classList.add('сlickToChangeTextColor');
    }
    iconClickPath275.removeEventListener("click", funcIconClick275);
}
document.addEventListener("click", funcIconClick275);

const iconClickPath276 = document.getElementById('path-1-276');
const iconClickText276 = document.getElementById('text-1-276');
const iconClickText276desc = document.getElementById('desc276');
function funcIconClick276(event) {
    if (event.target.closest('#path-1-276')) {
        iconClickPath276.classList.add('сlickToChangeColor');
        iconClickText276desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-276')) {
        iconClickPath276.classList.remove('сlickToChangeColor');
        iconClickText276desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-276')) {
        iconClickText276.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-276')) {
        iconClickText276.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12276')) {
        iconClickPath276.classList.add('сlickToChangeColor');
        iconClickText276desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12276')) {
        iconClickText276.classList.add('сlickToChangeTextColor');
    }
    iconClickPath276.removeEventListener("click", funcIconClick276);
}
document.addEventListener("click", funcIconClick276);

const iconClickPath277 = document.getElementById('path-1-277');
const iconClickText277 = document.getElementById('text-1-277');
const iconClickText277desc = document.getElementById('desc277');
function funcIconClick277(event) {
    if (event.target.closest('#path-1-277')) {
        iconClickPath277.classList.add('сlickToChangeColor');
        iconClickText277desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-277')) {
        iconClickPath277.classList.remove('сlickToChangeColor');
        iconClickText277desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-277')) {
        iconClickText277.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-277')) {
        iconClickText277.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12277')) {
        iconClickPath277.classList.add('сlickToChangeColor');
        iconClickText277desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12277')) {
        iconClickText277.classList.add('сlickToChangeTextColor');
    }
    iconClickPath277.removeEventListener("click", funcIconClick277);
}
document.addEventListener("click", funcIconClick277);

const iconClickPath279 = document.getElementById('path-1-279');
const iconClickText279 = document.getElementById('text-1-279');
const iconClickText279desc = document.getElementById('desc278');
function funcIconClick279(event) {
    if (event.target.closest('#path-1-279')) {
        iconClickPath279.classList.add('сlickToChangeColor');
        iconClickText279desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-279')) {
        iconClickPath279.classList.remove('сlickToChangeColor');
        iconClickText279desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-279')) {
        iconClickText279.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-279')) {
        iconClickText279.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12278')) {
        iconClickPath279.classList.add('сlickToChangeColor');
        iconClickText279desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12278')) {
        iconClickText279.classList.add('сlickToChangeTextColor');
    }
    iconClickPath279.removeEventListener("click", funcIconClick279);
}
document.addEventListener("click", funcIconClick279);

const iconClickPath1217 = document.getElementById('path-1-217');
const iconClickText1217 = document.getElementById('text-1-217');
const iconClickText1217desc = document.getElementById('desc217');
function funcIconClick1217(event) {
    if (event.target.closest('#path-1-217')) {
        iconClickPath1217.classList.add('сlickToChangeColor');
        iconClickText1217desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-217')) {
        iconClickPath1217.classList.remove('сlickToChangeColor');
        iconClickText1217desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-217')) {
        iconClickText1217.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-217')) {
        iconClickText1217.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12217')) {
        iconClickPath1217.classList.add('сlickToChangeColor');
        iconClickText1217desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12217')) {
        iconClickText1217.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1217.removeEventListener("click", funcIconClick1217);
}
document.addEventListener("click", funcIconClick1217);

const iconClickPath1218 = document.getElementById('path-1-218');
const iconClickText1218 = document.getElementById('text-1-218');
const iconClickText1218desc = document.getElementById('desc218');
function funcIconClick1218(event) {
    if (event.target.closest('#path-1-218')) {
        iconClickPath1218.classList.add('сlickToChangeColor');
        iconClickText1218desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-218')) {
        iconClickPath1218.classList.remove('сlickToChangeColor');
        iconClickText1218desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-218')) {
        iconClickText1218.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-218')) {
        iconClickText1218.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-12218')) {
        iconClickPath1218.classList.add('сlickToChangeColor');
        iconClickText1218desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-12218')) {
        iconClickText1218.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1218.removeEventListener("click", funcIconClick1218);
}
document.addEventListener("click", funcIconClick1218);

// 1b - 1floor ----------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath114 = document.getElementById('path-1-114');
const iconClickText114 = document.getElementById('text-1-114');
const iconClickText114desc = document.getElementById('desc114');
function funcIconClick114(event) {
    if (event.target.closest('#path-1-114')) {
        iconClickPath114.classList.add('сlickToChangeColor');
        iconClickText114desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-114')) {
        iconClickPath114.classList.remove('сlickToChangeColor');
        iconClickText114desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-114')) {
        iconClickText114.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-114')) {
        iconClickText114.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11114')) {
        iconClickPath114.classList.add('сlickToChangeColor');
        iconClickText114desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11114')) {
        iconClickText114.classList.add('сlickToChangeTextColor');
    }
    iconClickPath114.removeEventListener("click", funcIconClick114);
}
document.addEventListener("click", funcIconClick114);

const iconClickPath113 = document.getElementById('path-1-113');
const iconClickText113 = document.getElementById('text-1-113');
const iconClickText113desc = document.getElementById('desc113');
function funcIconClick113(event) {
    if (event.target.closest('#path-1-113')) {
        iconClickPath113.classList.add('сlickToChangeColor');
        iconClickText113desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-113')) {
        iconClickPath113.classList.remove('сlickToChangeColor');
        iconClickText113desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-113')) {
        iconClickText113.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-113')) {
        iconClickText113.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11113')) {
        iconClickPath113.classList.add('сlickToChangeColor');
        iconClickText113desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11113')) {
        iconClickText113.classList.add('сlickToChangeTextColor');
    }
    iconClickPath113.removeEventListener("click", funcIconClick113);
}
document.addEventListener("click", funcIconClick113);

const iconClickPath104 = document.getElementById('path-1-104');
const iconClickText104 = document.getElementById('text-1-104');
const iconClickText104desc = document.getElementById('desc104');
function funcIconClick104(event) {
    if (event.target.closest('#path-1-104')) {
        iconClickPath104.classList.add('сlickToChangeColor');
        iconClickText104desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-104')) {
        iconClickPath104.classList.remove('сlickToChangeColor');
        iconClickText104desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-104')) {
        iconClickText104.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-104')) {
        iconClickText104.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11104')) {
        iconClickPath104.classList.add('сlickToChangeColor');
        iconClickText104desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11104')) {
        iconClickText104.classList.add('сlickToChangeTextColor');
    }
    iconClickPath104.removeEventListener("click", funcIconClick104);
}
document.addEventListener("click", funcIconClick104);

const iconClickPath1105 = document.getElementById('path-1-105');
const iconClickText1105 = document.getElementById('text-1-105');
const iconClickText1105desc = document.getElementById('desc105');
function funcIconClick1105(event) {
    if (event.target.closest('#path-1-105')) {
        iconClickPath1105.classList.add('сlickToChangeColor');
        iconClickText1105desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-105')) {
        iconClickPath1105.classList.remove('сlickToChangeColor');
        iconClickText1105desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-105')) {
        iconClickText1105.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-105')) {
        iconClickText1105.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11105')) {
        iconClickPath1105.classList.add('сlickToChangeColor');
        iconClickText1105desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11105')) {
        iconClickText1105.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1105.removeEventListener("click", funcIconClick1105);
}
document.addEventListener("click", funcIconClick1105);

const iconClickPath103 = document.getElementById('path-1-103');
const iconClickText103 = document.getElementById('text-1-103');
const iconClickText103desc = document.getElementById('desc103');
function funcIconClick103(event) {
    if (event.target.closest('#path-1-103')) {
        iconClickPath103.classList.add('сlickToChangeColor');
        iconClickText103desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-103')) {
        iconClickPath103.classList.remove('сlickToChangeColor');
        iconClickText103desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-103')) {
        iconClickText103.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-103')) {
        iconClickText103.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11103')) {
        iconClickPath103.classList.add('сlickToChangeColor');
        iconClickText103desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11103')) {
        iconClickText103.classList.add('сlickToChangeTextColor');
    }
    iconClickPath103.removeEventListener("click", funcIconClick103);
}
document.addEventListener("click", funcIconClick103);

const iconClickPath102 = document.getElementById('path-1-102');
const iconClickText102 = document.getElementById('text-1-102');
const iconClickText102desc = document.getElementById('desc102');
function funcIconClick102(event) {
    if (event.target.closest('#path-1-102')) {
        iconClickPath102.classList.add('сlickToChangeColor');
        iconClickText102desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-102')) {
        iconClickPath102.classList.remove('сlickToChangeColor');
        iconClickText102desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-102')) {
        iconClickText102.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-102')) {
        iconClickText102.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11102')) {
        iconClickPath102.classList.add('сlickToChangeColor');
        iconClickText102desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11102')) {
        iconClickText102.classList.add('сlickToChangeTextColor');
    }
    iconClickPath102.removeEventListener("click", funcIconClick102);
}
document.addEventListener("click", funcIconClick102);

const iconClickPath101 = document.getElementById('path-1-101');
const iconClickText101 = document.getElementById('text-1-101');
const iconClickText101desc = document.getElementById('desc101');
function funcIconClick101(event) {
    if (event.target.closest('#path-1-101')) {
        iconClickPath101.classList.add('сlickToChangeColor');
        iconClickText101desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-101')) {
        iconClickPath101.classList.remove('сlickToChangeColor');
        iconClickText101desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-101')) {
        iconClickText101.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-101')) {
        iconClickText101.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11101')) {
        iconClickPath101.classList.add('сlickToChangeColor');
        iconClickText101desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11101')) {
        iconClickText101.classList.add('сlickToChangeTextColor');
    }
    iconClickPath101.removeEventListener("click", funcIconClick101);
}
document.addEventListener("click", funcIconClick101);

const iconClickPath151 = document.getElementById('path-1-151');
const iconClickText151 = document.getElementById('text-1-151');
const iconClickText151desc = document.getElementById('desc151');
function funcIconClick151(event) {
    if (event.target.closest('#path-1-151')) {
        iconClickPath151.classList.add('сlickToChangeColor');
        iconClickText151desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-151')) {
        iconClickPath151.classList.remove('сlickToChangeColor');
        iconClickText151desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-151')) {
        iconClickText151.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-151')) {
        iconClickText151.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11151')) {
        iconClickPath151.classList.add('сlickToChangeColor');
        iconClickText151desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11151')) {
        iconClickText151.classList.add('сlickToChangeTextColor');
    }
    iconClickPath151.removeEventListener("click", funcIconClick151);
}
document.addEventListener("click", funcIconClick151);

const iconClickPath152 = document.getElementById('path-1-152');
const iconClickText152 = document.getElementById('text-1-152');
const iconClickText152desc = document.getElementById('desc152');
function funcIconClick152(event) {
    if (event.target.closest('#path-1-152')) {
        iconClickPath152.classList.add('сlickToChangeColor');
        iconClickText152desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-152')) {
        iconClickPath152.classList.remove('сlickToChangeColor');
        iconClickText152desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-152')) {
        iconClickText152.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-152')) {
        iconClickText152.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11152')) {
        iconClickPath152.classList.add('сlickToChangeColor');
        iconClickText152desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11152')) {
        iconClickText152.classList.add('сlickToChangeTextColor');
    }
    iconClickPath152.removeEventListener("click", funcIconClick152);
}
document.addEventListener("click", funcIconClick152);

const iconClickPath152a = document.getElementById('path-1-152a');
const iconClickText152a = document.getElementById('text-1-152a');
const iconClickText152adesc = document.getElementById('desc152a');
function funcIconClick152a(event) {
    if (event.target.closest('#path-1-152a')) {
        iconClickPath152a.classList.add('сlickToChangeColor');
        iconClickText152adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-152a')) {
        iconClickPath152a.classList.remove('сlickToChangeColor');
        iconClickText152adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-152a')) {
        iconClickText152a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-152a')) {
        iconClickText152a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11152a')) {
        iconClickPath152a.classList.add('сlickToChangeColor');
        iconClickText152adesc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11152a')) {
        iconClickText152a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath152a.removeEventListener("click", funcIconClick152a);
}
document.addEventListener("click", funcIconClick152a);

const iconClickPath153 = document.getElementById('path-1-153');
const iconClickText153 = document.getElementById('text-1-153');
const iconClickText153desc = document.getElementById('desc153');
function funcIconClick153(event) {
    if (event.target.closest('#path-1-153')) {
        iconClickPath153.classList.add('сlickToChangeColor');
        iconClickText153desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-153')) {
        iconClickPath153.classList.remove('сlickToChangeColor');
        iconClickText153desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-153')) {
        iconClickText153.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-153')) {
        iconClickText153.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11153')) {
        iconClickPath153.classList.add('сlickToChangeColor');
        iconClickText153desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11153')) {
        iconClickText153.classList.add('сlickToChangeTextColor');
    }
    iconClickPath153.removeEventListener("click", funcIconClick153);
}
document.addEventListener("click", funcIconClick153);

const iconClickPath153a = document.getElementById('path-1-153a');
const iconClickText153a = document.getElementById('text-1-153a');
const iconClickText153adesc = document.getElementById('desc153a');
function funcIconClick153a(event) {
    if (event.target.closest('#path-1-153a')) {
        iconClickPath153a.classList.add('сlickToChangeColor');
        iconClickText153adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-153a')) {
        iconClickPath153a.classList.remove('сlickToChangeColor');
        iconClickText153adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-153a')) {
        iconClickText153a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-153a')) {
        iconClickText153a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11153a')) {
        iconClickPath153a.classList.add('сlickToChangeColor');
        iconClickText153adesc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11153a')) {
        iconClickText153a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath153a.removeEventListener("click", funcIconClick153a);
}
document.addEventListener("click", funcIconClick153a);

const iconClickPath154 = document.getElementById('path-1-154');
const iconClickText154 = document.getElementById('text-1-154');
const iconClickText154desc = document.getElementById('desc154');
function funcIconClick154(event) {
    if (event.target.closest('#path-1-154')) {
        iconClickPath154.classList.add('сlickToChangeColor');
        iconClickText154desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-154')) {
        iconClickPath154.classList.remove('сlickToChangeColor');
        iconClickText154desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-154')) {
        iconClickText154.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-154')) {
        iconClickText154.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11154')) {
        iconClickPath154.classList.add('сlickToChangeColor');
        iconClickText154desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11154')) {
        iconClickText154.classList.add('сlickToChangeTextColor');
    }
    iconClickPath154.removeEventListener("click", funcIconClick154);
}
document.addEventListener("click", funcIconClick154);

const iconClickPath155 = document.getElementById('path-1-155');
const iconClickText155 = document.getElementById('text-1-155');
const iconClickText155desc = document.getElementById('desc155');
function funcIconClick155(event) {
    if (event.target.closest('#path-1-155')) {
        iconClickPath155.classList.add('сlickToChangeColor');
        iconClickText155desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-155')) {
        iconClickPath155.classList.remove('сlickToChangeColor');
        iconClickText155desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-155')) {
        iconClickText155.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-155')) {
        iconClickText155.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11155')) {
        iconClickPath155.classList.add('сlickToChangeColor');
        iconClickText155desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11155')) {
        iconClickText155.classList.add('сlickToChangeTextColor');
    }
    iconClickPath155.removeEventListener("click", funcIconClick155);
}
document.addEventListener("click", funcIconClick155);

const iconClickPath156 = document.getElementById('path-1-156');
const iconClickText156 = document.getElementById('text-1-156');
const iconClickText156desc = document.getElementById('desc156');
function funcIconClick156(event) {
    if (event.target.closest('#path-1-156')) {
        iconClickPath156.classList.add('сlickToChangeColor');
        iconClickText156desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-156')) {
        iconClickPath156.classList.remove('сlickToChangeColor');
        iconClickText156desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-156')) {
        iconClickText156.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-156')) {
        iconClickText156.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11156')) {
        iconClickPath156.classList.add('сlickToChangeColor');
        iconClickText156desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11156')) {
        iconClickText156.classList.add('сlickToChangeTextColor');
    }
    iconClickPath156.removeEventListener("click", funcIconClick156);
}
document.addEventListener("click", funcIconClick156);

// 1 - 158
const iconClickPath158 = document.getElementById('path-1-158');
const iconClickText158 = document.getElementById('text-1-158');
const iconClickText158desc = document.getElementById('desc158a');
function funcIconClick158(event) {
    if (event.target.closest('#path-1-158')) {
        iconClickPath158.classList.add('сlickToChangeColor');
        iconClickText158desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-158')) {
        iconClickPath158.classList.remove('сlickToChangeColor');
        iconClickText158desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-158')) {
        iconClickText158.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-158')) {
        iconClickText158.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11158a')) {
        iconClickPath158.classList.add('сlickToChangeColor');
        iconClickText158desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11158a')) {
        iconClickText158.classList.add('сlickToChangeTextColor');
    }
    iconClickPath158.removeEventListener("click", funcIconClick158);
}
document.addEventListener("click", funcIconClick158);

const iconClickPath158a = document.getElementById('path-1-158a');
const iconClickText158a = document.getElementById('text-1-158a');
const iconClickText158adesc = document.getElementById('desc158');
function funcIconClick158a(event) {
    if (event.target.closest('#path-1-158a')) {
        iconClickPath158a.classList.add('сlickToChangeColor');
        iconClickText158adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-158a')) {
        iconClickPath158a.classList.remove('сlickToChangeColor');
        iconClickText158adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-158a')) {
        iconClickText158a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-158a')) {
        iconClickText158a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11158')) {
        iconClickPath158a.classList.add('сlickToChangeColor');
        iconClickText158adesc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11158')) {
        iconClickText158a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath158a.removeEventListener("click", funcIconClick158a);
}
document.addEventListener("click", funcIconClick158a);

const iconClickPath159 = document.getElementById('path-1-159');
const iconClickText159 = document.getElementById('text-1-159');
const iconClickText159desc = document.getElementById('desc159');
function funcIconClick159(event) {
    if (event.target.closest('#path-1-159')) {
        iconClickPath159.classList.add('сlickToChangeColor');
        iconClickText159desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-159')) {
        iconClickPath159.classList.remove('сlickToChangeColor');
        iconClickText159desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-159')) {
        iconClickText159.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-159')) {
        iconClickText159.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11159')) {
        iconClickPath159.classList.add('сlickToChangeColor');
        iconClickText159desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11159')) {
        iconClickText159.classList.add('сlickToChangeTextColor');
    }
    iconClickPath159.removeEventListener("click", funcIconClick159);
}
document.addEventListener("click", funcIconClick159);

const iconClickPath160 = document.getElementById('path-1-160');
const iconClickText160 = document.getElementById('text-1-160');
const iconClickText160desc = document.getElementById('desc160');
function funcIconClick160(event) {
    if (event.target.closest('#path-1-160')) {
        iconClickPath160.classList.add('сlickToChangeColor');
        iconClickText160desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-160')) {
        iconClickPath160.classList.remove('сlickToChangeColor');
        iconClickText160desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-160')) {
        iconClickText160.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-160')) {
        iconClickText160.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11160')) {
        iconClickPath160.classList.add('сlickToChangeColor');
        iconClickText160desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11160')) {
        iconClickText160.classList.add('сlickToChangeTextColor');
    }
    iconClickPath160.removeEventListener("click", funcIconClick160);
}
document.addEventListener("click", funcIconClick160);

const iconClickPath1161 = document.getElementById('path-1-161');
const iconClickText1161 = document.getElementById('text-1-161');
const iconClickText1161desc = document.getElementById('desc161');
function funcIconClick1161(event) {
    if (event.target.closest('#path-1-161')) {
        iconClickPath1161.classList.add('сlickToChangeColor');
        iconClickText1161desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-161')) {
        iconClickPath1161.classList.remove('сlickToChangeColor');
        iconClickText1161desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-161')) {
        iconClickText1161.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-161')) {
        iconClickText1161.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11161')) {
        iconClickPath1161.classList.add('сlickToChangeColor');
        iconClickText1161desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11161')) {
        iconClickText1161.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1161.removeEventListener("click", funcIconClick1161);
}
document.addEventListener("click", funcIconClick1161);

const iconClickPath1162 = document.getElementById('path-1-162');
const iconClickText1162 = document.getElementById('text-1-162');
const iconClickText1162desc = document.getElementById('desc162');
function funcIconClick1162(event) {
    if (event.target.closest('#path-1-162')) {
        iconClickPath1162.classList.add('сlickToChangeColor');
        iconClickText1162desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-162')) {
        iconClickPath1162.classList.remove('сlickToChangeColor');
        iconClickText1162desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-162')) {
        iconClickText1162.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-162')) {
        iconClickText1162.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11162')) {
        iconClickPath1162.classList.add('сlickToChangeColor');
        iconClickText1162desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11162')) {
        iconClickText1162.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1162.removeEventListener("click", funcIconClick1162);
}
document.addEventListener("click", funcIconClick1162);

const iconClickPath1162a = document.getElementById('path-1-162a');
const iconClickText1162a = document.getElementById('text-1-162a');
const iconClickText1162adesc = document.getElementById('desc162a');
function funcIconClick1162a(event) {
    if (event.target.closest('#path-1-162a')) {
        iconClickPath1162a.classList.add('сlickToChangeColor');
        iconClickText1162adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-162a')) {
        iconClickPath1162a.classList.remove('сlickToChangeColor');
        iconClickText1162adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-162a')) {
        iconClickText1162a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-162a')) {
        iconClickText1162a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11162a')) {
        iconClickPath1162a.classList.add('сlickToChangeColor');
        iconClickText1162adesc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11162a')) {
        iconClickText1162a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1162a.removeEventListener("click", funcIconClick1162a);
}
document.addEventListener("click", funcIconClick1162a);

const iconClickPath1163 = document.getElementById('path-1-163');
const iconClickText1163 = document.getElementById('text-1-163');
const iconClickText1163desc = document.getElementById('desc163');
function funcIconClick1163(event) {
    if (event.target.closest('#path-1-163')) {
        iconClickPath1163.classList.add('сlickToChangeColor');
        iconClickText1163desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-163')) {
        iconClickPath1163.classList.remove('сlickToChangeColor');
        iconClickText1163desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-163')) {
        iconClickText1163.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-163')) {
        iconClickText1163.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11163')) {
        iconClickPath1163.classList.add('сlickToChangeColor');
        iconClickText1163desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11163')) {
        iconClickText1163.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1163.removeEventListener("click", funcIconClick1163);
}
document.addEventListener("click", funcIconClick1163);

const iconClickPath167 = document.getElementById('path-1-167');
const iconClickText167 = document.getElementById('text-1-167');
const iconClickText167desc = document.getElementById('desc167');
function funcIconClick167(event) {
    if (event.target.closest('#path-1-167')) {
        iconClickPath167.classList.add('сlickToChangeColor');
        iconClickText167desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-167')) {
        iconClickPath167.classList.remove('сlickToChangeColor');
        iconClickText167desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-167')) {
        iconClickText167.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-167')) {
        iconClickText167.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11167')) {
        iconClickPath167.classList.add('сlickToChangeColor');
        iconClickText167desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11167')) {
        iconClickText167.classList.add('сlickToChangeTextColor');
    }
    iconClickPath167.removeEventListener("click", funcIconClick167);
}
document.addEventListener("click", funcIconClick167);

const iconClickPath168 = document.getElementById('path-1-168');
const iconClickText168 = document.getElementById('text-1-168');
const iconClickText168desc = document.getElementById('desc168');
function funcIconClick168(event) {
    if (event.target.closest('#path-1-168')) {
        iconClickPath168.classList.add('сlickToChangeColor');
        iconClickText168desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-168')) {
        iconClickPath168.classList.remove('сlickToChangeColor');
        iconClickText168desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-168')) {
        iconClickText168.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-168')) {
        iconClickText168.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11168')) {
        iconClickPath168.classList.add('сlickToChangeColor');
        iconClickText168desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11168')) {
        iconClickText168.classList.add('сlickToChangeTextColor');
    }
    iconClickPath168.removeEventListener("click", funcIconClick168);
}
document.addEventListener("click", funcIconClick168);

const iconClickPath169 = document.getElementById('path-1-169');
const iconClickText169 = document.getElementById('text-1-169');
const iconClickText169desc = document.getElementById('desc169');
function funcIconClick169(event) {
    if (event.target.closest('#path-1-169')) {
        iconClickPath169.classList.add('сlickToChangeColor');
        iconClickText169desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-169')) {
        iconClickPath169.classList.remove('сlickToChangeColor');
        iconClickText169desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-169')) {
        iconClickText169.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-169')) {
        iconClickText169.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11169')) {
        iconClickPath169.classList.add('сlickToChangeColor');
        iconClickText169desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11169')) {
        iconClickText169.classList.add('сlickToChangeTextColor');
    }
    iconClickPath169.removeEventListener("click", funcIconClick169);
}
document.addEventListener("click", funcIconClick169);

const iconClickPath170 = document.getElementById('path-1-170');
const iconClickText170 = document.getElementById('text-1-170');
const iconClickText170desc = document.getElementById('desc170');
function funcIconClick170(event) {
    if (event.target.closest('#path-1-170')) {
        iconClickPath170.classList.add('сlickToChangeColor');
        iconClickText170desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-170')) {
        iconClickPath170.classList.remove('сlickToChangeColor');
        iconClickText170desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-170')) {
        iconClickText170.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-170')) {
        iconClickText170.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11170')) {
        iconClickPath170.classList.add('сlickToChangeColor');
        iconClickText170desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11170')) {
        iconClickText170.classList.add('сlickToChangeTextColor');
    }
    iconClickPath170.removeEventListener("click", funcIconClick170);
}
document.addEventListener("click", funcIconClick170);

const iconClickPath171 = document.getElementById('path-1-171');
const iconClickText171 = document.getElementById('text-1-171');
const iconClickText171desc = document.getElementById('desc171');
function funcIconClick171(event) {
    if (event.target.closest('#path-1-171')) {
        iconClickPath171.classList.add('сlickToChangeColor');
        iconClickText171desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-171')) {
        iconClickPath171.classList.remove('сlickToChangeColor');
        iconClickText171desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-171')) {
        iconClickText171.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-171')) {
        iconClickText171.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11171')) {
        iconClickPath171.classList.add('сlickToChangeColor');
        iconClickText171desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11171')) {
        iconClickText171.classList.add('сlickToChangeTextColor');
    }
    iconClickPath171.removeEventListener("click", funcIconClick171);
}
document.addEventListener("click", funcIconClick171);

const iconClickPath107 = document.getElementById('path-1-107');
const iconClickText107 = document.getElementById('text-1-107');
const iconClickText107desc = document.getElementById('desc107');
function funcIconClick107(event) {
    if (event.target.closest('#path-1-107')) {
        iconClickPath107.classList.add('сlickToChangeColor');
        iconClickText107desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-107')) {
        iconClickPath107.classList.remove('сlickToChangeColor');
        iconClickText107desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-107')) {
        iconClickText107.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-107')) {
        iconClickText107.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11107')) {
        iconClickPath107.classList.add('сlickToChangeColor');
        iconClickText107desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11107')) {
        iconClickText107.classList.add('сlickToChangeTextColor');
    }
    iconClickPath107.removeEventListener("click", funcIconClick107);
}
document.addEventListener("click", funcIconClick107);

const iconClickPath108 = document.getElementById('path-1-108');
const iconClickText108 = document.getElementById('text-1-108');
const iconClickText108desc = document.getElementById('desc108');
function funcIconClick108(event) {
    if (event.target.closest('#path-1-108')) {
        iconClickPath108.classList.add('сlickToChangeColor');
        iconClickText108desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-108')) {
        iconClickPath108.classList.remove('сlickToChangeColor');
        iconClickText108desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-108')) {
        iconClickText108.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-108')) {
        iconClickText108.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11108')) {
        iconClickPath108.classList.add('сlickToChangeColor');
        iconClickText108desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11108')) {
        iconClickText108.classList.add('сlickToChangeTextColor');
    }
    iconClickPath108.removeEventListener("click", funcIconClick108);
}
document.addEventListener("click", funcIconClick108);

const iconClickPath109 = document.getElementById('path-1-109');
const iconClickText109 = document.getElementById('text-1-109');
const iconClickText109desc = document.getElementById('desc109');
function funcIconClick109(event) {
    if (event.target.closest('#path-1-109')) {
        iconClickPath109.classList.add('сlickToChangeColor');
        iconClickText109desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-109')) {
        iconClickPath109.classList.remove('сlickToChangeColor');
        iconClickText109desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-109')) {
        iconClickText109.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-109')) {
        iconClickText109.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11109')) {
        iconClickPath109.classList.add('сlickToChangeColor');
        iconClickText109desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11109')) {
        iconClickText109.classList.add('сlickToChangeTextColor');
    }
    iconClickPath109.removeEventListener("click", funcIconClick109);
}
document.addEventListener("click", funcIconClick109);

const iconClickPath112 = document.getElementById('path-1-112');
const iconClickText112 = document.getElementById('text-1-112');
const iconClickText112desc = document.getElementById('desc112');
function funcIconClick112(event) {
    if (event.target.closest('#path-1-112')) {
        iconClickPath112.classList.add('сlickToChangeColor');
        iconClickText112desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-112')) {
        iconClickPath112.classList.remove('сlickToChangeColor');
        iconClickText112desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-112')) {
        iconClickText112.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-112')) {
        iconClickText112.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-11112')) {
        iconClickPath112.classList.add('сlickToChangeColor');
        iconClickText112desc.style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-11112')) {
        iconClickText112.classList.add('сlickToChangeTextColor');
    }
    iconClickPath112.removeEventListener("click", funcIconClick112);
}
document.addEventListener("click", funcIconClick112);

// 1b - 3floor -------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath13leftup1 = document.getElementById('path-1-3-left-up-1');
const iconClickText13leftup1 = document.getElementById('text-1-3-left-up-1');
const iconClickText13leftup1desc = document.getElementById('desc307');
function funcIconClick13leftup1(event) {
    if (event.target.closest('#path-1-3-left-up-1')) {
        iconClickPath13leftup1.classList.add('сlickToChangeColor');
        iconClickText13leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-1')) {
        iconClickPath13leftup1.classList.remove('сlickToChangeColor');
        iconClickText13leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-1')) {
        iconClickText13leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-1')) {
        iconClickText13leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13307')) {
        iconClickPath13leftup1.classList.add('сlickToChangeColor');
        iconClickText13leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13307')) {
        iconClickText13leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup1.removeEventListener("click", funcIconClick13leftup1);
}
document.addEventListener("click", funcIconClick13leftup1);

const iconClickPath13leftup3 = document.getElementById('path-1-3-left-up-3');
const iconClickText13leftup3 = document.getElementById('text-1-3-left-up-3');
const iconClickText13leftup3desc = document.getElementById('desc306');
function funcIconClick13leftup3(event) {
    if (event.target.closest('#path-1-3-left-up-3')) {
        iconClickPath13leftup3.classList.add('сlickToChangeColor');
        iconClickText13leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-3')) {
        iconClickPath13leftup3.classList.remove('сlickToChangeColor');
        iconClickText13leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-3')) {
        iconClickText13leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-3')) {
        iconClickText13leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13306')) {
        iconClickPath13leftup3.classList.add('сlickToChangeColor');
        iconClickText13leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13306')) {
        iconClickText13leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup3.removeEventListener("click", funcIconClick13leftup3);
}
document.addEventListener("click", funcIconClick13leftup3);

const iconClickPath13leftup4 = document.getElementById('path-1-3-left-up-4');
const iconClickText13leftup4 = document.getElementById('text-1-3-left-up-4');
const iconClickText13leftup4desc = document.getElementById('desc305');
function funcIconClick13leftup4(event) {
    if (event.target.closest('#path-1-3-left-up-4')) {
        iconClickPath13leftup4.classList.add('сlickToChangeColor');
        iconClickText13leftup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-4')) {
        iconClickPath13leftup4.classList.remove('сlickToChangeColor');
        iconClickText13leftup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-4')) {
        iconClickText13leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-4')) {
        iconClickText13leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13305')) {
        iconClickPath13leftup4.classList.add('сlickToChangeColor');
        iconClickText13leftup4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13305')) {
        iconClickText13leftup4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup4.removeEventListener("click", funcIconClick13leftup4);
}
document.addEventListener("click", funcIconClick13leftup4);

const iconClickPath13leftup5 = document.getElementById('path-1-3-left-up-5');
const iconClickText13leftup5 = document.getElementById('text-1-3-left-up-5');
const iconClickText13leftup5desc = document.getElementById('desc304a');
function funcIconClick13leftup5(event) {
    if (event.target.closest('#path-1-3-left-up-5')) {
        iconClickPath13leftup5.classList.add('сlickToChangeColor');
        iconClickText13leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-5')) {
        iconClickPath13leftup5.classList.remove('сlickToChangeColor');
        iconClickText13leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-5')) {
        iconClickText13leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-5')) {
        iconClickText13leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13304a')) {
        iconClickPath13leftup5.classList.add('сlickToChangeColor');
        iconClickText13leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13304a')) {
        iconClickText13leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup5.removeEventListener("click", funcIconClick13leftup5);
}
document.addEventListener("click", funcIconClick13leftup5);

const iconClickPath1304 = document.getElementById('path-1-304');
const iconClickText1304 = document.getElementById('text-1-304');
const iconClickText1304desc = document.getElementById('desc304');
function funcIconClick1304(event) {
    if (event.target.closest('#path-1-304')) {
        iconClickPath1304.classList.add('сlickToChangeColor');
        iconClickText1304desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-304')) {
        iconClickPath1304.classList.remove('сlickToChangeColor');
        iconClickText1304desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-304')) {
        iconClickText1304.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-304')) {
        iconClickText1304.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13304')) {
        iconClickPath1304.classList.add('сlickToChangeColor');
        iconClickText1304desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13304')) {
        iconClickText1304.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1304.removeEventListener("click", funcIconClick1304);
}
document.addEventListener("click", funcIconClick1304);

const iconClickPath13leftup6 = document.getElementById('path-1-3-left-up-6');
const iconClickText13leftup6 = document.getElementById('text-1-3-left-up-6');
const iconClickText13leftup6desc = document.getElementById('desc303');
function funcIconClick13leftup6(event) {
    if (event.target.closest('#path-1-3-left-up-6')) {
        iconClickPath13leftup6.classList.add('сlickToChangeColor');
        iconClickText13leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-6')) {
        iconClickPath13leftup6.classList.remove('сlickToChangeColor');
        iconClickText13leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-6')) {
        iconClickText13leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-6')) {
        iconClickText13leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13303')) {
        iconClickPath13leftup6.classList.add('сlickToChangeColor');
        iconClickText13leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13303')) {
        iconClickText13leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup6.removeEventListener("click", funcIconClick13leftup6);
}
document.addEventListener("click", funcIconClick13leftup6);

const iconClickPath13leftup7 = document.getElementById('path-1-3-left-up-7');
const iconClickText13leftup7 = document.getElementById('text-1-3-left-up-7');
const iconClickText13leftup7desc = document.getElementById('desc302');
function funcIconClick13leftup7(event) {
    if (event.target.closest('#path-1-3-left-up-7')) {
        iconClickPath13leftup7.classList.add('сlickToChangeColor');
        iconClickText13leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-7')) {
        iconClickPath13leftup7.classList.remove('сlickToChangeColor');
        iconClickText13leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-7')) {
        iconClickText13leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-7')) {
        iconClickText13leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13302')) {
        iconClickPath13leftup7.classList.add('сlickToChangeColor');
        iconClickText13leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13302')) {
        iconClickText13leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup7.removeEventListener("click", funcIconClick13leftup7);
}
document.addEventListener("click", funcIconClick13leftup7);

const iconClickPath13leftup8 = document.getElementById('path-1-3-left-up-8');
const iconClickText13leftup8 = document.getElementById('text-1-3-left-up-8');
const iconClickText13leftup8desc = document.getElementById('desc301');
function funcIconClick13leftup8(event) {
    if (event.target.closest('#path-1-3-left-up-8')) {
        iconClickPath13leftup8.classList.add('сlickToChangeColor');
        iconClickText13leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-up-8')) {
        iconClickPath13leftup8.classList.remove('сlickToChangeColor');
        iconClickText13leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-up-8')) {
        iconClickText13leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-up-8')) {
        iconClickText13leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13301')) {
        iconClickPath13leftup8.classList.add('сlickToChangeColor');
        iconClickText13leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13301')) {
        iconClickText13leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftup8.removeEventListener("click", funcIconClick13leftup8);
}
document.addEventListener("click", funcIconClick13leftup8);

const iconClickPath13rightup1 = document.getElementById('path-1-3-right-up-1');
const iconClickText13rightup1 = document.getElementById('text-1-3-right-up-1');
const iconClickText13rightup1desc = document.getElementById('desc351');
function funcIconClick13rightup1(event) {
    if (event.target.closest('#path-1-3-right-up-1')) {
        iconClickPath13rightup1.classList.add('сlickToChangeColor');
        iconClickText13rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-1')) {
        iconClickPath13rightup1.classList.remove('сlickToChangeColor');
        iconClickText13rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-1')) {
        iconClickText13rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-1')) {
        iconClickText13rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13351')) {
        iconClickPath13rightup1.classList.add('сlickToChangeColor');
        iconClickText13rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13351')) {
        iconClickText13rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup1.removeEventListener("click", funcIconClick13rightup1);
}
document.addEventListener("click", funcIconClick13rightup1);

const iconClickPath13rightup2 = document.getElementById('path-1-3-right-up-2');
const iconClickText13rightup2 = document.getElementById('text-1-3-right-up-2');
const iconClickText13rightup2desc = document.getElementById('desc352');
function funcIconClick13rightup2(event) {
    if (event.target.closest('#path-1-3-right-up-2')) {
        iconClickPath13rightup2.classList.add('сlickToChangeColor');
        iconClickText13rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-2')) {
        iconClickPath13rightup2.classList.remove('сlickToChangeColor');
        iconClickText13rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-2')) {
        iconClickText13rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-2')) {
        iconClickText13rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13352')) {
        iconClickPath13rightup2.classList.add('сlickToChangeColor');
        iconClickText13rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13352')) {
        iconClickText13rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup2.removeEventListener("click", funcIconClick13rightup2);
}
document.addEventListener("click", funcIconClick13rightup2);

const iconClickPath13rightup3 = document.getElementById('path-1-3-right-up-3');
const iconClickText13rightup3 = document.getElementById('text-1-3-right-up-3');
const iconClickText13rightup3desc = document.getElementById('desc352a');
function funcIconClick13rightup3(event) {
    if (event.target.closest('#path-1-3-right-up-3')) {
        iconClickPath13rightup3.classList.add('сlickToChangeColor');
        iconClickText13rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-3')) {
        iconClickPath13rightup3.classList.remove('сlickToChangeColor');
        iconClickText13rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-3')) {
        iconClickText13rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-3')) {
        iconClickText13rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13352a')) {
        iconClickPath13rightup3.classList.add('сlickToChangeColor');
        iconClickText13rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13352a')) {
        iconClickText13rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup3.removeEventListener("click", funcIconClick13rightup3);
}
document.addEventListener("click", funcIconClick13rightup3);

const iconClickPath13rightup4 = document.getElementById('path-1-3-right-up-4');
const iconClickText13rightup4 = document.getElementById('text-1-3-right-up-4');
const iconClickText13rightup4desc = document.getElementById('desc353');
function funcIconClick13rightup4(event) {
    if (event.target.closest('#path-1-3-right-up-4')) {
        iconClickPath13rightup4.classList.add('сlickToChangeColor');
        iconClickText13rightup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-4')) {
        iconClickPath13rightup4.classList.remove('сlickToChangeColor');
        iconClickText13rightup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-4')) {
        iconClickText13rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-4')) {
        iconClickText13rightup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13353')) {
        iconClickPath13rightup4.classList.add('сlickToChangeColor');
        iconClickText13rightup4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13353')) {
        iconClickText13rightup4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup4.removeEventListener("click", funcIconClick13rightup4);
}
document.addEventListener("click", funcIconClick13rightup4);

const iconClickPath13rightup5 = document.getElementById('path-1-3-right-up-5');
const iconClickText13rightup5 = document.getElementById('text-1-3-right-up-5');
const iconClickText13rightup5desc = document.getElementById('desc354');
function funcIconClick13rightup5(event) {
    if (event.target.closest('#path-1-3-right-up-5')) {
        iconClickPath13rightup5.classList.add('сlickToChangeColor');
        iconClickText13rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-5')) {
        iconClickPath13rightup5.classList.remove('сlickToChangeColor');
        iconClickText13rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-5')) {
        iconClickText13rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-5')) {
        iconClickText13rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13354')) {
        iconClickPath13rightup5.classList.add('сlickToChangeColor');
        iconClickText13rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13354')) {
        iconClickText13rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup5.removeEventListener("click", funcIconClick13rightup5);
}
document.addEventListener("click", funcIconClick13rightup5);

const iconClickPath13rightup6 = document.getElementById('path-1-3-right-up-6');
const iconClickText13rightup6 = document.getElementById('text-1-3-right-up-6');
const iconClickText13rightup6desc = document.getElementById('desc354a');
function funcIconClick13rightup6(event) {
    if (event.target.closest('#path-1-3-right-up-6')) {
        iconClickPath13rightup6.classList.add('сlickToChangeColor');
        iconClickText13rightup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-6')) {
        iconClickPath13rightup6.classList.remove('сlickToChangeColor');
        iconClickText13rightup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-6')) {
        iconClickText13rightup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-6')) {
        iconClickText13rightup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13354a')) {
        iconClickPath13rightup6.classList.add('сlickToChangeColor');
        iconClickText13rightup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13354a')) {
        iconClickText13rightup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup6.removeEventListener("click", funcIconClick13rightup6);
}
document.addEventListener("click", funcIconClick13rightup6);

const iconClickPath1355 = document.getElementById('path-1-355');
const iconClickText1355 = document.getElementById('text-1-355');
const iconClickText1355desc = document.getElementById('desc355');
function funcIconClick1355(event) {
    if (event.target.closest('#path-1-355')) {
        iconClickPath1355.classList.add('сlickToChangeColor');
        iconClickText1355desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-355')) {
        iconClickPath1355.classList.remove('сlickToChangeColor');
        iconClickText1355desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-355')) {
        iconClickText1355.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-355')) {
        iconClickText1355.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13355')) {
        iconClickPath1355.classList.add('сlickToChangeColor');
        iconClickText1355desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13355')) {
        iconClickText1355.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1355.removeEventListener("click", funcIconClick1355);
}
document.addEventListener("click", funcIconClick1355);

const iconClickPath13rightup7 = document.getElementById('path-1-3-right-up-7');
const iconClickText13rightup7 = document.getElementById('text-1-3-right-up-7');
const iconClickText13rightup7desc = document.getElementById('desc356');
function funcIconClick13rightup7(event) {
    if (event.target.closest('#path-1-3-right-up-7')) {
        iconClickPath13rightup7.classList.add('сlickToChangeColor');
        iconClickText13rightup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-7')) {
        iconClickPath13rightup7.classList.remove('сlickToChangeColor');
        iconClickText13rightup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-7')) {
        iconClickText13rightup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-7')) {
        iconClickText13rightup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13356')) {
        iconClickPath13rightup7.classList.add('сlickToChangeColor');
        iconClickText13rightup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13356')) {
        iconClickText13rightup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup7.removeEventListener("click", funcIconClick13rightup7);
}
document.addEventListener("click", funcIconClick13rightup7);

const iconClickPath13rightup8 = document.getElementById('path-1-3-right-up-8');
const iconClickText13rightup8 = document.getElementById('text-1-3-right-up-8');
const iconClickText13rightup8desc = document.getElementById('desc357');
function funcIconClick13rightup8(event) {
    if (event.target.closest('#path-1-3-right-up-8')) {
        iconClickPath13rightup8.classList.add('сlickToChangeColor');
        iconClickText13rightup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-up-8')) {
        iconClickPath13rightup8.classList.remove('сlickToChangeColor');
        iconClickText13rightup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-up-8')) {
        iconClickText13rightup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-up-8')) {
        iconClickText13rightup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13357')) {
        iconClickPath13rightup8.classList.add('сlickToChangeColor');
        iconClickText13rightup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13357')) {
        iconClickText13rightup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightup8.removeEventListener("click", funcIconClick13rightup8);
}
document.addEventListener("click", funcIconClick13rightup8);

const iconClickPath13leftdown1 = document.getElementById('path-1-3-left-down-1');
const iconClickText13leftdown1 = document.getElementById('text-1-3-left-down-1');
const iconClickText13leftdown1desc = document.getElementById('desc320');
function funcIconClick13leftdown1(event) {
    if (event.target.closest('#path-1-3-left-down-1')) {
        iconClickPath13leftdown1.classList.add('сlickToChangeColor');
        iconClickText13leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-down-1')) {
        iconClickPath13leftdown1.classList.remove('сlickToChangeColor');
        iconClickText13leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-down-1')) {
        iconClickText13leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-down-1')) {
        iconClickText13leftdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13320')) {
        iconClickPath13leftdown1.classList.add('сlickToChangeColor');
        iconClickText13leftdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13320')) {
        iconClickText13leftdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftdown1.removeEventListener("click", funcIconClick13leftdown1);
}
document.addEventListener("click", funcIconClick13leftdown1);

const iconClickPath13leftdown2 = document.getElementById('path-1-3-left-down-2');
const iconClickText13leftdown2 = document.getElementById('text-1-3-left-down-2');
const iconClickText13leftdown2desc = document.getElementById('desc320a');
function funcIconClick13leftdown2(event) {
    if (event.target.closest('#path-1-3-left-down-2')) {
        iconClickPath13leftdown2.classList.add('сlickToChangeColor');
        iconClickText13leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-down-2')) {
        iconClickPath13leftdown2.classList.remove('сlickToChangeColor');
        iconClickText13leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-down-2')) {
        iconClickText13leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-down-2')) {
        iconClickText13leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13320a')) {
        iconClickPath13leftdown2.classList.add('сlickToChangeColor');
        iconClickText13leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13320a')) {
        iconClickText13leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftdown2.removeEventListener("click", funcIconClick13leftdown2);
}
document.addEventListener("click", funcIconClick13leftdown2);

const iconClickPath13leftdown3 = document.getElementById('path-1-3-left-down-3');
const iconClickText13leftdown3 = document.getElementById('text-1-3-left-down-3');
const iconClickText13leftdown3desc = document.getElementById('desc321');
function funcIconClick13leftdown3(event) {
    if (event.target.closest('#path-1-3-left-down-3')) {
        iconClickPath13leftdown3.classList.add('сlickToChangeColor');
        iconClickText13leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-down-3')) {
        iconClickPath13leftdown3.classList.remove('сlickToChangeColor');
        iconClickText13leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-down-3')) {
        iconClickText13leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-down-3')) {
        iconClickText13leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13321')) {
        iconClickPath13leftdown3.classList.add('сlickToChangeColor');
        iconClickText13leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13321')) {
        iconClickText13leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftdown3.removeEventListener("click", funcIconClick13leftdown3);
}
document.addEventListener("click", funcIconClick13leftdown3);

const iconClickPath13leftdown4 = document.getElementById('path-1-3-left-down-4');
const iconClickText13leftdown4 = document.getElementById('text-1-3-left-down-4');
const iconClickText13leftdown4desc = document.getElementById('desc322');
function funcIconClick13leftdown4(event) {
    if (event.target.closest('#path-1-3-left-down-4')) {
        iconClickPath13leftdown4.classList.add('сlickToChangeColor');
        iconClickText13leftdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-down-4')) {
        iconClickPath13leftdown4.classList.remove('сlickToChangeColor');
        iconClickText13leftdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-down-4')) {
        iconClickText13leftdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-down-4')) {
        iconClickText13leftdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13322')) {
        iconClickPath13leftdown4.classList.add('сlickToChangeColor');
        iconClickText13leftdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13322')) {
        iconClickText13leftdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftdown4.removeEventListener("click", funcIconClick13leftdown4);
}
document.addEventListener("click", funcIconClick13leftdown4);

const iconClickPath1323 = document.getElementById('path-1-323');
const iconClickText1323 = document.getElementById('text-1-323');
const iconClickText1323desc = document.getElementById('desc323');
function funcIconClick1323(event) {
    if (event.target.closest('#path-1-323')) {
        iconClickPath1323.classList.add('сlickToChangeColor');
        iconClickText1323desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-323')) {
        iconClickPath1323.classList.remove('сlickToChangeColor');
        iconClickText1323desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-323')) {
        iconClickText1323.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-323')) {
        iconClickText1323.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13323')) {
        iconClickPath1323.classList.add('сlickToChangeColor');
        iconClickText1323desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13323')) {
        iconClickText1323.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1323.removeEventListener("click", funcIconClick1323);
}
document.addEventListener("click", funcIconClick1323);

const iconClickPath13leftdown5 = document.getElementById('path-1-3-left-down-5');
const iconClickText13leftdown5 = document.getElementById('text-1-3-left-down-5');
const iconClickText13leftdown5desc = document.getElementById('desc324');
function funcIconClick13leftdown5(event) {
    if (event.target.closest('#path-1-3-left-down-5')) {
        iconClickPath13leftdown5.classList.add('сlickToChangeColor');
        iconClickText13leftdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-down-5')) {
        iconClickPath13leftdown5.classList.remove('сlickToChangeColor');
        iconClickText13leftdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-down-5')) {
        iconClickText13leftdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-down-5')) {
        iconClickText13leftdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13324')) {
        iconClickPath13leftdown5.classList.add('сlickToChangeColor');
        iconClickText13leftdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13324')) {
        iconClickText13leftdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftdown5.removeEventListener("click", funcIconClick13leftdown5);
}
document.addEventListener("click", funcIconClick13leftdown5);

const iconClickPath13leftdown6 = document.getElementById('path-1-3-left-down-6');
const iconClickText13leftdown6 = document.getElementById('text-1-3-left-down-6');
const iconClickText13leftdown6desc = document.getElementById('desc324a');
function funcIconClick13leftdown6(event) {
    if (event.target.closest('#path-1-3-left-down-6')) {
        iconClickPath13leftdown6.classList.add('сlickToChangeColor');
        iconClickText13leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-down-6')) {
        iconClickPath13leftdown6.classList.remove('сlickToChangeColor');
        iconClickText13leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-down-6')) {
        iconClickText13leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-down-6')) {
        iconClickText13leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13324a')) {
        iconClickPath13leftdown6.classList.add('сlickToChangeColor');
        iconClickText13leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13324a')) {
        iconClickText13leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftdown6.removeEventListener("click", funcIconClick13leftdown6);
}
document.addEventListener("click", funcIconClick13leftdown6);

const iconClickPath13rightdown1 = document.getElementById('path-1-3-right-down-1');
const iconClickText13rightdown1 = document.getElementById('text-1-3-right-down-1');
const iconClickText13rightdown1desc = document.getElementById('desc372');
function funcIconClick13rightdown1(event) {
    if (event.target.closest('#path-1-3-right-down-1')) {
        iconClickPath13rightdown1.classList.add('сlickToChangeColor');
        iconClickText13rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-down-1')) {
        iconClickPath13rightdown1.classList.remove('сlickToChangeColor');
        iconClickText13rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-down-1')) {
        iconClickText13rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-down-1')) {
        iconClickText13rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13372')) {
        iconClickPath13rightdown1.classList.add('сlickToChangeColor');
        iconClickText13rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13372')) {
        iconClickText13rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightdown1.removeEventListener("click", funcIconClick13rightdown1);
}
document.addEventListener("click", funcIconClick13rightdown1);

const iconClickPath1371 = document.getElementById('path-1-371');
const iconClickText1371 = document.getElementById('text-1-371');
const iconClickText1371desc = document.getElementById('desc371');
function funcIconClick1371(event) {
    if (event.target.closest('#path-1-371')) {
        iconClickPath1371.classList.add('сlickToChangeColor');
        iconClickText1371desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-371')) {
        iconClickPath1371.classList.remove('сlickToChangeColor');
        iconClickText1371desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-371')) {
        iconClickText1371.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-371')) {
        iconClickText1371.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13371')) {
        iconClickPath1371.classList.add('сlickToChangeColor');
        iconClickText1371desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13371')) {
        iconClickText1371.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1371.removeEventListener("click", funcIconClick1371);
}
document.addEventListener("click", funcIconClick1371);

const iconClickPath13rightdown2 = document.getElementById('path-1-3-right-down-2');
const iconClickText13rightdown2 = document.getElementById('text-1-3-right-down-2');
const iconClickText13rightdown2desc = document.getElementById('desc370');
function funcIconClick13rightdown2(event) {
    if (event.target.closest('#path-1-3-right-down-2')) {
        iconClickPath13rightdown2.classList.add('сlickToChangeColor');
        iconClickText13rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-down-2')) {
        iconClickPath13rightdown2.classList.remove('сlickToChangeColor');
        iconClickText13rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-down-2')) {
        iconClickText13rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-down-2')) {
        iconClickText13rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13370')) {
        iconClickPath13rightdown2.classList.add('сlickToChangeColor');
        iconClickText13rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13370')) {
        iconClickText13rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightdown2.removeEventListener("click", funcIconClick13rightdown2);
}
document.addEventListener("click", funcIconClick13rightdown2);

const iconClickPath1369 = document.getElementById('path-1-369');
const iconClickText1369 = document.getElementById('text-1-369');
const iconClickText1369desc = document.getElementById('desc369');
function funcIconClick1369(event) {
    if (event.target.closest('#path-1-369')) {
        iconClickPath1369.classList.add('сlickToChangeColor');
        iconClickText1369desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-369')) {
        iconClickPath1369.classList.remove('сlickToChangeColor');
        iconClickText1369desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-369')) {
        iconClickText1369.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-369')) {
        iconClickText1369.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13369')) {
        iconClickPath1369.classList.add('сlickToChangeColor');
        iconClickText1369desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13369')) {
        iconClickText1369.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1369.removeEventListener("click", funcIconClick1369);
}
document.addEventListener("click", funcIconClick1369);

const iconClickPath13rightdown3 = document.getElementById('path-1-3-right-down-3');
const iconClickText13rightdown3 = document.getElementById('text-1-3-right-down-3');
const iconClickText13rightdown3desc = document.getElementById('desc368');
function funcIconClick13rightdown3(event) {
    if (event.target.closest('#path-1-3-right-down-3')) {
        iconClickPath13rightdown3.classList.add('сlickToChangeColor');
        iconClickText13rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-down-3')) {
        iconClickPath13rightdown3.classList.remove('сlickToChangeColor');
        iconClickText13rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-down-3')) {
        iconClickText13rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-down-3')) {
        iconClickText13rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13368')) {
        iconClickPath13rightdown3.classList.add('сlickToChangeColor');
        iconClickText13rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13368')) {
        iconClickText13rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightdown3.removeEventListener("click", funcIconClick13rightdown3);
}
document.addEventListener("click", funcIconClick13rightdown3);

const iconClickPath13leftwing1part1 = document.getElementById('path-1-3-left-wing-1part-1');
const iconClickText13leftwing1part1 = document.getElementById('text-1-3-left-wing-1part-1');
const iconClickText13leftwing1part1desc = document.getElementById('desc308');
function funcIconClick13leftwing1part1(event) {
    if (event.target.closest('#path-1-3-left-wing-1part-1')) {
        iconClickPath13leftwing1part1.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-1')) {
        iconClickPath13leftwing1part1.classList.remove('сlickToChangeColor');
        iconClickText13leftwing1part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-1part-1')) {
        iconClickText13leftwing1part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-1')) {
        iconClickText13leftwing1part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13308')) {
        iconClickPath13leftwing1part1.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13308')) {
        iconClickText13leftwing1part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing1part1.removeEventListener("click", funcIconClick13leftwing1part1);
}
document.addEventListener("click", funcIconClick13leftwing1part1);

const iconClickPath13leftwing1part2 = document.getElementById('path-1-3-left-wing-1part-2');
const iconClickText13leftwing1part2 = document.getElementById('text-1-3-left-wing-1part-2');
const iconClickText13leftwing1part2desc = document.getElementById('desc309');
function funcIconClick13leftwing1part2(event) {
    if (event.target.closest('#path-1-3-left-wing-1part-2')) {
        iconClickPath13leftwing1part2.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-2')) {
        iconClickPath13leftwing1part2.classList.remove('сlickToChangeColor');
        iconClickText13leftwing1part2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-1part-2')) {
        iconClickText13leftwing1part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-2')) {
        iconClickText13leftwing1part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13309')) {
        iconClickPath13leftwing1part2.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13309')) {
        iconClickText13leftwing1part2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing1part2.removeEventListener("click", funcIconClick13leftwing1part2);
}
document.addEventListener("click", funcIconClick13leftwing1part2);

const iconClickPath13leftwing1part3 = document.getElementById('path-1-3-left-wing-1part-3');
const iconClickText13leftwing1part3 = document.getElementById('text-1-3-left-wing-1part-3');
const iconClickText13leftwing1part3desc = document.getElementById('desc310');
function funcIconClick13leftwing1part3(event) {
    if (event.target.closest('#path-1-3-left-wing-1part-3')) {
        iconClickPath13leftwing1part3.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-3')) {
        iconClickPath13leftwing1part3.classList.remove('сlickToChangeColor');
        iconClickText13leftwing1part3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-1part-3')) {
        iconClickText13leftwing1part3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-3')) {
        iconClickText13leftwing1part3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13310')) {
        iconClickPath13leftwing1part3.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13310')) {
        iconClickText13leftwing1part3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing1part3.removeEventListener("click", funcIconClick13leftwing1part3);
}
document.addEventListener("click", funcIconClick13leftwing1part3);

const iconClickPath1313 = document.getElementById('path-1-313');
const iconClickText1313 = document.getElementById('text-1-313');
const iconClickText1313desc = document.getElementById('desc313');
function funcIconClick1313(event) {
    if (event.target.closest('#path-1-313')) {
        iconClickPath1313.classList.add('сlickToChangeColor');
        iconClickText1313desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-313')) {
        iconClickPath1313.classList.remove('сlickToChangeColor');
        iconClickText1313desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-313')) {
        iconClickText1313.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-313')) {
        iconClickText1313.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13313')) {
        iconClickPath1313.classList.add('сlickToChangeColor');
        iconClickText1313desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13313')) {
        iconClickText1313.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1313.removeEventListener("click", funcIconClick1313);
}
document.addEventListener("click", funcIconClick1313);

const iconClickPath13leftwing1part4 = document.getElementById('path-1-3-left-wing-1part-4');
const iconClickText13leftwing1part4 = document.getElementById('text-1-3-left-wing-1part-4');
const iconClickText13leftwing1part4desc = document.getElementById('desc314');
function funcIconClick13leftwing1part4(event) {
    if (event.target.closest('#path-1-3-left-wing-1part-4')) {
        iconClickPath13leftwing1part4.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-4')) {
        iconClickPath13leftwing1part4.classList.remove('сlickToChangeColor');
        iconClickText13leftwing1part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-1part-4')) {
        iconClickText13leftwing1part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-1part-4')) {
        iconClickText13leftwing1part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13314')) {
        iconClickPath13leftwing1part4.classList.add('сlickToChangeColor');
        iconClickText13leftwing1part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13314')) {
        iconClickText13leftwing1part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing1part4.removeEventListener("click", funcIconClick13leftwing1part4);
}
document.addEventListener("click", funcIconClick13leftwing1part4);

const iconClickPath13leftwing2part1 = document.getElementById('path-1-3-left-wing-2part-1');
const iconClickText13leftwing2part1 = document.getElementById('text-1-3-left-wing-2part-1');
const iconClickText13leftwing2part1desc = document.getElementById('desc319');
function funcIconClick13leftwing2part1(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-1')) {
        iconClickPath13leftwing2part1.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-1')) {
        iconClickPath13leftwing2part1.classList.remove('сlickToChangeColor');
        iconClickText13leftwing2part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-1')) {
        iconClickText13leftwing2part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-1')) {
        iconClickText13leftwing2part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13319')) {
        iconClickPath13leftwing2part1.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13319')) {
        iconClickText13leftwing2part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part1.removeEventListener("click", funcIconClick13leftwing2part1);
}
document.addEventListener("click", funcIconClick13leftwing2part1);

const iconClickPath13leftwing2part3 = document.getElementById('path-1-3-left-wing-2part-3');
const iconClickText13leftwing2part3 = document.getElementById('text-1-3-left-wing-2part-3');
const iconClickText13leftwing2part3desc = document.getElementById('desc318');
function funcIconClick13leftwing2part3(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-3')) {
        iconClickPath13leftwing2part3.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-3')) {
        iconClickPath13leftwing2part3.classList.remove('сlickToChangeColor');
        iconClickText13leftwing2part3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-3')) {
        iconClickText13leftwing2part3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-3')) {
        iconClickText13leftwing2part3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13318')) {
        iconClickPath13leftwing2part3.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13318')) {
        iconClickText13leftwing2part3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part3.removeEventListener("click", funcIconClick13leftwing2part3);
}
document.addEventListener("click", funcIconClick13leftwing2part3);

const iconClickPath13leftwing2part4 = document.getElementById('path-1-3-left-wing-2part-4');
const iconClickText13leftwing2part4 = document.getElementById('text-1-3-left-wing-2part-4');
const iconClickText13leftwing2part4desc = document.getElementById('desc317');
function funcIconClick13leftwing2part4(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-4')) {
        iconClickPath13leftwing2part4.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-4')) {
        iconClickPath13leftwing2part4.classList.remove('сlickToChangeColor');
        iconClickText13leftwing2part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-4')) {
        iconClickText13leftwing2part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-4')) {
        iconClickText13leftwing2part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13317')) {
        iconClickPath13leftwing2part4.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13317')) {
        iconClickText13leftwing2part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part4.removeEventListener("click", funcIconClick13leftwing2part4);
}
document.addEventListener("click", funcIconClick13leftwing2part4);

const iconClickPath13leftwing2part5 = document.getElementById('path-1-3-left-wing-2part-5');
const iconClickText13leftwing2part5 = document.getElementById('text-1-3-left-wing-2part-5');
const iconClickText13leftwing2part5desc = document.getElementById('desc316');
function funcIconClick13leftwing2part5(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-5')) {
        iconClickPath13leftwing2part5.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-5')) {
        iconClickPath13leftwing2part5.classList.remove('сlickToChangeColor');
        iconClickText13leftwing2part5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-5')) {
        iconClickText13leftwing2part5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-5')) {
        iconClickText13leftwing2part5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13316')) {
        iconClickPath13leftwing2part5.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13316')) {
        iconClickText13leftwing2part5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part5.removeEventListener("click", funcIconClick13leftwing2part5);
}
document.addEventListener("click", funcIconClick13leftwing2part5);

const iconClickPath13leftwing2part6 = document.getElementById('path-1-3-left-wing-2part-6');
const iconClickText13leftwing2part6 = document.getElementById('text-1-3-left-wing-2part-6');
const iconClickText13leftwing2part6desc = document.getElementById('desc315');
function funcIconClick13leftwing2part6(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-6')) {
        iconClickPath13leftwing2part6.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-6')) {
        iconClickPath13leftwing2part6.classList.remove('сlickToChangeColor');
        iconClickText13leftwing2part6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-6')) {
        iconClickText13leftwing2part6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-6')) {
        iconClickText13leftwing2part6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13315')) {
        iconClickPath13leftwing2part6.classList.add('сlickToChangeColor');
        iconClickText13leftwing2part6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13315')) {
        iconClickText13leftwing2part6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part6.removeEventListener("click", funcIconClick13leftwing2part6);
}
document.addEventListener("click", funcIconClick13leftwing2part6);

const iconClickPath13rightwing1part3 = document.getElementById('path-1-3-right-wing-1part-3');
const iconClickText13rightwing1part3 = document.getElementById('text-1-3-right-wing-1part-3');
const iconClickText13rightwing1part3desc = document.getElementById('desc366');
function funcIconClick13rightwing1part3(event) {
    if (event.target.closest('#path-1-3-right-wing-1part-3')) {
        iconClickPath13rightwing1part3.classList.add('сlickToChangeColor');
        iconClickText13rightwing1part3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-3')) {
        iconClickPath13rightwing1part3.classList.remove('сlickToChangeColor');
        iconClickText13rightwing1part3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-1part-3')) {
        iconClickText13rightwing1part3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-3')) {
        iconClickText13rightwing1part3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13366')) {
        iconClickPath13rightwing1part3.classList.add('сlickToChangeColor');
        iconClickText13rightwing1part3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13366')) {
        iconClickText13rightwing1part3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing1part3.removeEventListener("click", funcIconClick13rightwing1part3);
}
document.addEventListener("click", funcIconClick13rightwing1part3);

const iconClickPath13rightwing1part4 = document.getElementById('path-1-3-right-wing-1part-4');
const iconClickText13rightwing1part4 = document.getElementById('text-1-3-right-wing-1part-4');
const iconClickText13rightwing1part4desc = document.getElementById('desc365');
function funcIconClick13rightwing1part4(event) {
    if (event.target.closest('#path-1-3-right-wing-1part-4')) {
        iconClickPath13rightwing1part4.classList.add('сlickToChangeColor');
        iconClickText13rightwing1part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-4')) {
        iconClickPath13rightwing1part4.classList.remove('сlickToChangeColor');
        iconClickText13rightwing1part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-1part-4')) {
        iconClickText13rightwing1part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-4')) {
        iconClickText13rightwing1part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13365')) {
        iconClickPath13rightwing1part4.classList.add('сlickToChangeColor');
        iconClickText13rightwing1part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13365')) {
        iconClickText13rightwing1part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing1part4.removeEventListener("click", funcIconClick13rightwing1part4);
}
document.addEventListener("click", funcIconClick13rightwing1part4);

const iconClickPath13rightwing1part5 = document.getElementById('path-1-3-right-wing-1part-5');
const iconClickText13rightwing1part5 = document.getElementById('text-1-3-right-wing-1part-5');
const iconClickText13rightwing1part5desc = document.getElementById('desc363');
function funcIconClick13rightwing1part5(event) {
    if (event.target.closest('#path-1-3-right-wing-1part-5')) {
        iconClickPath13rightwing1part5.classList.add('сlickToChangeColor');
        iconClickText13rightwing1part5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-5')) {
        iconClickPath13rightwing1part5.classList.remove('сlickToChangeColor');
        iconClickText13rightwing1part5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-1part-5')) {
        iconClickText13rightwing1part5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-5')) {
        iconClickText13rightwing1part5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13363')) {
        iconClickPath13rightwing1part5.classList.add('сlickToChangeColor');
        iconClickText13rightwing1part5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13363')) {
        iconClickText13rightwing1part5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing1part5.removeEventListener("click", funcIconClick13rightwing1part5);
}
document.addEventListener("click", funcIconClick13rightwing1part5);

const iconClickPath13rightwing2part1 = document.getElementById('path-1-3-right-wing-2part-1');
const iconClickText13rightwing2part1 = document.getElementById('text-1-3-right-wing-2part-1');
const iconClickText13rightwing2part1desc = document.getElementById('desc358');
function funcIconClick13rightwing2part1(event) {
    if (event.target.closest('#path-1-3-right-wing-2part-1')) {
        iconClickPath13rightwing2part1.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-1')) {
        iconClickPath13rightwing2part1.classList.remove('сlickToChangeColor');
        iconClickText13rightwing2part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-2part-1')) {
        iconClickText13rightwing2part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-1')) {
        iconClickText13rightwing2part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13358')) {
        iconClickPath13rightwing2part1.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13358')) {
        iconClickText13rightwing2part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing2part1.removeEventListener("click", funcIconClick13rightwing2part1);
}
document.addEventListener("click", funcIconClick13rightwing2part1);

const iconClickPath13rightwing2part2 = document.getElementById('path-1-3-right-wing-2part-2');
const iconClickText13rightwing2part2 = document.getElementById('text-1-3-right-wing-2part-2');
const iconClickText13rightwing2part2desc = document.getElementById('desc358a');
function funcIconClick13rightwing2part2(event) {
    if (event.target.closest('#path-1-3-right-wing-2part-2')) {
        iconClickPath13rightwing2part2.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-2')) {
        iconClickPath13rightwing2part2.classList.remove('сlickToChangeColor');
        iconClickText13rightwing2part2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-2part-2')) {
        iconClickText13rightwing2part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-2')) {
        iconClickText13rightwing2part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13358a')) {
        iconClickPath13rightwing2part2.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13358a')) {
        iconClickText13rightwing2part2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing2part2.removeEventListener("click", funcIconClick13rightwing2part2);
}
document.addEventListener("click", funcIconClick13rightwing2part2);

const iconClickPath13rightwing2part3 = document.getElementById('path-1-3-right-wing-2part-3');
const iconClickText13rightwing2part3 = document.getElementById('text-1-3-right-wing-2part-3');
const iconClickText13rightwing2part3desc = document.getElementById('desc359');
function funcIconClick13rightwing2part3(event) {
    if (event.target.closest('#path-1-3-right-wing-2part-3')) {
        iconClickPath13rightwing2part3.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-3')) {
        iconClickPath13rightwing2part3.classList.remove('сlickToChangeColor');
        iconClickText13rightwing2part3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-2part-3')) {
        iconClickText13rightwing2part3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-3')) {
        iconClickText13rightwing2part3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13359')) {
        iconClickPath13rightwing2part3.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13359')) {
        iconClickText13rightwing2part3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing2part3.removeEventListener("click", funcIconClick13rightwing2part3);
}
document.addEventListener("click", funcIconClick13rightwing2part3);

const iconClickPath13rightwing2part4 = document.getElementById('path-1-3-right-wing-2part-4');
const iconClickText13rightwing2part4 = document.getElementById('text-1-3-right-wing-2part-4');
const iconClickText13rightwing2part4desc = document.getElementById('desc360');
function funcIconClick13rightwing2part4(event) {
    if (event.target.closest('#path-1-3-right-wing-2part-4')) {
        iconClickPath13rightwing2part4.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-4')) {
        iconClickPath13rightwing2part4.classList.remove('сlickToChangeColor');
        iconClickText13rightwing2part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-2part-4')) {
        iconClickText13rightwing2part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-2part-4')) {
        iconClickText13rightwing2part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13360')) {
        iconClickPath13rightwing2part4.classList.add('сlickToChangeColor');
        iconClickText13rightwing2part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13360')) {
        iconClickText13rightwing2part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing2part4.removeEventListener("click", funcIconClick13rightwing2part4);
}
document.addEventListener("click", funcIconClick13rightwing2part4);

const iconClickPath1361 = document.getElementById('path-1-361');
const iconClickText1361 = document.getElementById('text-1-361');
const iconClickText1361desc = document.getElementById('desc361');
function funcIconClick1361(event) {
    if (event.target.closest('#path-1-361')) {
        iconClickPath1361.classList.add('сlickToChangeColor');
        iconClickText1361desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-361')) {
        iconClickPath1361.classList.remove('сlickToChangeColor');
        iconClickText1361desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-361')) {
        iconClickText1361.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-361')) {
        iconClickText1361.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-13361')) {
        iconClickPath1361.classList.add('сlickToChangeColor');
        iconClickText1361desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-13361')) {
        iconClickText1361.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1361.removeEventListener("click", funcIconClick1361);
}
document.addEventListener("click", funcIconClick1361);

// 1b - 4floor
const iconClickPath14leftup1 = document.getElementById('path-1-4-left-up-1');
const iconClickText14leftup1 = document.getElementById('text-1-4-left-up-1');
const iconClickText14leftup1desc = document.getElementById('desc408');
function funcIconClick14leftup1(event) {
    if (event.target.closest('#path-1-4-left-up-1')) {
        iconClickPath14leftup1.classList.add('сlickToChangeColor');
        iconClickText14leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-1')) {
        iconClickPath14leftup1.classList.remove('сlickToChangeColor');
        iconClickText14leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-1')) {
        iconClickText14leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-1')) {
        iconClickText14leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14408')) {
        iconClickPath14leftup1.classList.add('сlickToChangeColor');
        iconClickText14leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14408')) {
        iconClickText14leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup1.removeEventListener("click", funcIconClick14leftup1);
}
document.addEventListener("click", funcIconClick14leftup1);

const iconClickPath14leftup2 = document.getElementById('path-1-4-left-up-2');
const iconClickText14leftup2 = document.getElementById('text-1-4-left-up-2');
const iconClickText14leftup2desc = document.getElementById('desc407');
function funcIconClick14leftup2(event) {
    if (event.target.closest('#path-1-4-left-up-2')) {
        iconClickPath14leftup2.classList.add('сlickToChangeColor');
        iconClickText14leftup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-2')) {
        iconClickPath14leftup2.classList.remove('сlickToChangeColor');
        iconClickText14leftup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-2')) {
        iconClickText14leftup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-2')) {
        iconClickText14leftup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14407')) {
        iconClickPath14leftup2.classList.add('сlickToChangeColor');
        iconClickText14leftup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14407')) {
        iconClickText14leftup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup2.removeEventListener("click", funcIconClick14leftup2);
}
document.addEventListener("click", funcIconClick14leftup2);

const iconClickPath14leftup3a = document.getElementById('path-1-406a');
const iconClickText14leftup3a = document.getElementById('text-1-406a');
const iconClickText14leftup3adesc = document.getElementById('desc406a');
function funcIconClick14leftup3a(event) {
    if (event.target.closest('#path-1-406a')) {
        iconClickPath14leftup3a.classList.add('сlickToChangeColor');
        iconClickText14leftup3adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-406a')) {
        iconClickPath14leftup3a.classList.remove('сlickToChangeColor');
        iconClickText14leftup3adesc.style.display = 'none';
    }
    if (event.target.closest('#path-1-406a')) {
        iconClickText14leftup3a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-406a')) {
        iconClickText14leftup3a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14406a')) {
        iconClickPath14leftup3a.classList.add('сlickToChangeColor');
        iconClickText14leftup3adesc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14406a')) {
        iconClickText14leftup3a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup3a.removeEventListener("click", funcIconClick14leftup3a);
}
document.addEventListener("click", funcIconClick14leftup3a);

const iconClickPath14leftup3 = document.getElementById('path-1-4-left-up-3');
const iconClickText14leftup3 = document.getElementById('text-1-4-left-up-3');
const iconClickText14leftup3desc = document.getElementById('desc406');
function funcIconClick14leftup3(event) {
    if (event.target.closest('#path-1-4-left-up-3')) {
        iconClickPath14leftup3.classList.add('сlickToChangeColor');
        iconClickText14leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-3')) {
        iconClickPath14leftup3.classList.remove('сlickToChangeColor');
        iconClickText14leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-3')) {
        iconClickText14leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-3')) {
        iconClickText14leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14406')) {
        iconClickPath14leftup3.classList.add('сlickToChangeColor');
        iconClickText14leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14406')) {
        iconClickText14leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup3.removeEventListener("click", funcIconClick14leftup3);
}
document.addEventListener("click", funcIconClick14leftup3);

const iconClickPath14leftup4 = document.getElementById('path-1-4-left-up-4');
const iconClickText14leftup4 = document.getElementById('text-1-4-left-up-4');
const iconClickText14leftup4desc = document.getElementById('desc405');
function funcIconClick14leftup4(event) {
    if (event.target.closest('#path-1-4-left-up-4')) {
        iconClickPath14leftup4.classList.add('сlickToChangeColor');
        iconClickText14leftup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-4')) {
        iconClickPath14leftup4.classList.remove('сlickToChangeColor');
        iconClickText14leftup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-4')) {
        iconClickText14leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-4')) {
        iconClickText14leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14405')) {
        iconClickPath14leftup4.classList.add('сlickToChangeColor');
        iconClickText14leftup4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14405')) {
        iconClickText14leftup4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup4.removeEventListener("click", funcIconClick14leftup4);
}
document.addEventListener("click", funcIconClick14leftup4);

const iconClickPath14leftup5404 = document.getElementById('path-1-404');
const iconClickText14leftup5404 = document.getElementById('text-1-404');
const iconClickText14leftup5404desc = document.getElementById('desc404a');
function funcIconClick14leftup5404(event) {
    if (event.target.closest('#path-1-404')) {
        iconClickPath14leftup5404.classList.add('сlickToChangeColor');
        iconClickText14leftup5404desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-404')) {
        iconClickPath14leftup5404.classList.remove('сlickToChangeColor');
        iconClickText14leftup5404desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-404')) {
        iconClickText14leftup5404.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-404')) {
        iconClickText14leftup5404.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14404a')) {
        iconClickPath14leftup5404.classList.add('сlickToChangeColor');
        iconClickText14leftup5404desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14404a')) {
        iconClickText14leftup5404.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup5404.removeEventListener("click", funcIconClick14leftup5404);
}
document.addEventListener("click", funcIconClick14leftup5404);

const iconClickPath14leftup5 = document.getElementById('path-1-4-left-up-5');
const iconClickText14leftup5 = document.getElementById('text-1-4-left-up-5');
const iconClickText14leftup5desc = document.getElementById('desc404');
function funcIconClick14leftup5(event) {
    if (event.target.closest('#path-1-4-left-up-5')) {
        iconClickPath14leftup5.classList.add('сlickToChangeColor');
        iconClickText14leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-5')) {
        iconClickPath14leftup5.classList.remove('сlickToChangeColor');
        iconClickText14leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-5')) {
        iconClickText14leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-5')) {
        iconClickText14leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14404')) {
        iconClickPath14leftup5.classList.add('сlickToChangeColor');
        iconClickText14leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14404')) {
        iconClickText14leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup5.removeEventListener("click", funcIconClick14leftup5);
}
document.addEventListener("click", funcIconClick14leftup5);

const iconClickPath14leftup6 = document.getElementById('path-1-4-left-up-6');
const iconClickText14leftup6 = document.getElementById('text-1-4-left-up-6');
const iconClickText14leftup6desc = document.getElementById('desc403');
function funcIconClick14leftup6(event) {
    if (event.target.closest('#path-1-4-left-up-6')) {
        iconClickPath14leftup6.classList.add('сlickToChangeColor');
        iconClickText14leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-6')) {
        iconClickPath14leftup6.classList.remove('сlickToChangeColor');
        iconClickText14leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-6')) {
        iconClickText14leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-6')) {
        iconClickText14leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14403')) {
        iconClickPath14leftup6.classList.add('сlickToChangeColor');
        iconClickText14leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14403')) {
        iconClickText14leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup6.removeEventListener("click", funcIconClick14leftup6);
}
document.addEventListener("click", funcIconClick14leftup6);

const iconClickPath14leftup7 = document.getElementById('path-1-4-left-up-7');
const iconClickText14leftup7 = document.getElementById('text-1-4-left-up-7');
const iconClickText14leftup7desc = document.getElementById('desc402');
function funcIconClick14leftup7(event) {
    if (event.target.closest('#path-1-4-left-up-7')) {
        iconClickPath14leftup7.classList.add('сlickToChangeColor');
        iconClickText14leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-7')) {
        iconClickPath14leftup7.classList.remove('сlickToChangeColor');
        iconClickText14leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-7')) {
        iconClickText14leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-7')) {
        iconClickText14leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14402')) {
        iconClickPath14leftup7.classList.add('сlickToChangeColor');
        iconClickText14leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14402')) {
        iconClickText14leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup7.removeEventListener("click", funcIconClick14leftup7);
}
document.addEventListener("click", funcIconClick14leftup7);

const iconClickPath14leftup8 = document.getElementById('path-1-4-left-up-8');
const iconClickText14leftup8 = document.getElementById('text-1-4-left-up-8');
const iconClickText14leftup8desc = document.getElementById('desc401');
function funcIconClick14leftup8(event) {
    if (event.target.closest('#path-1-4-left-up-8')) {
        iconClickPath14leftup8.classList.add('сlickToChangeColor');
        iconClickText14leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-up-8')) {
        iconClickPath14leftup8.classList.remove('сlickToChangeColor');
        iconClickText14leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-up-8')) {
        iconClickText14leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-up-8')) {
        iconClickText14leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14401')) {
        iconClickPath14leftup8.classList.add('сlickToChangeColor');
        iconClickText14leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14401')) {
        iconClickText14leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftup8.removeEventListener("click", funcIconClick14leftup8);
}
document.addEventListener("click", funcIconClick14leftup8);

const iconClickPath14rightup1 = document.getElementById('path-1-4-right-up-1');
const iconClickText14rightup1 = document.getElementById('text-1-4-right-up-1');
const iconClickText14rightup1desc = document.getElementById('desc451');
function funcIconClick14rightup1(event) {
    if (event.target.closest('#path-1-4-right-up-1')) {
        iconClickPath14rightup1.classList.add('сlickToChangeColor');
        iconClickText14rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-1')) {
        iconClickPath14rightup1.classList.remove('сlickToChangeColor');
        iconClickText14rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-1')) {
        iconClickText14rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-1')) {
        iconClickText14rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14451')) {
        iconClickPath14rightup1.classList.add('сlickToChangeColor');
        iconClickText14rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14451')) {
        iconClickText14rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup1.removeEventListener("click", funcIconClick14rightup1);
}
document.addEventListener("click", funcIconClick14rightup1);

const iconClickPath14rightup2 = document.getElementById('path-1-4-right-up-2');
const iconClickText14rightup2 = document.getElementById('text-1-4-right-up-2');
const iconClickText14rightup2desc = document.getElementById('desc452');
function funcIconClick14rightup2(event) {
    if (event.target.closest('#path-1-4-right-up-2')) {
        iconClickPath14rightup2.classList.add('сlickToChangeColor');
        iconClickText14rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-2')) {
        iconClickPath14rightup2.classList.remove('сlickToChangeColor');
        iconClickText14rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-2')) {
        iconClickText14rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-2')) {
        iconClickText14rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14452')) {
        iconClickPath14rightup2.classList.add('сlickToChangeColor');
        iconClickText14rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14452')) {
        iconClickText14rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup2.removeEventListener("click", funcIconClick14rightup2);
}
document.addEventListener("click", funcIconClick14rightup2);

const iconClickPath1452 = document.getElementById('path-1-452');
const iconClickText1452 = document.getElementById('text-1-452');
const iconClickText1452desc = document.getElementById('desc452a');
function funcIconClick1452(event) {
    if (event.target.closest('#path-1-452')) {
        iconClickPath1452.classList.add('сlickToChangeColor');
        iconClickText1452desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-452')) {
        iconClickPath1452.classList.remove('сlickToChangeColor');
        iconClickText1452desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-452')) {
        iconClickText1452.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-452')) {
        iconClickText1452.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14452a')) {
        iconClickPath1452.classList.add('сlickToChangeColor');
        iconClickText1452desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14452a')) {
        iconClickText1452.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1452.removeEventListener("click", funcIconClick1452);
}
document.addEventListener("click", funcIconClick1452);

const iconClickPath14rightup3 = document.getElementById('path-1-4-right-up-3');
const iconClickText14rightup3 = document.getElementById('text-1-4-right-up-3');
const iconClickText14rightup3desc = document.getElementById('desc453');
function funcIconClick14rightup3(event) {
    if (event.target.closest('#path-1-4-right-up-3')) {
        iconClickPath14rightup3.classList.add('сlickToChangeColor');
        iconClickText14rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-3')) {
        iconClickPath14rightup3.classList.remove('сlickToChangeColor');
        iconClickText14rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-3')) {
        iconClickText14rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-3')) {
        iconClickText14rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14453')) {
        iconClickPath14rightup3.classList.add('сlickToChangeColor');
        iconClickText14rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14453')) {
        iconClickText14rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup3.removeEventListener("click", funcIconClick14rightup3);
}
document.addEventListener("click", funcIconClick14rightup3);

const iconClickPath14rightup4 = document.getElementById('path-1-4-right-up-4');
const iconClickText14rightup4 = document.getElementById('text-1-4-right-up-4');
const iconClickText14rightup4desc = document.getElementById('desc453a');
function funcIconClick14rightup4(event) {
    if (event.target.closest('#path-1-4-right-up-4')) {
        iconClickPath14rightup4.classList.add('сlickToChangeColor');
        iconClickText14rightup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-4')) {
        iconClickPath14rightup4.classList.remove('сlickToChangeColor');
        iconClickText14rightup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-4')) {
        iconClickText14rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-4')) {
        iconClickText14rightup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14453a')) {
        iconClickPath14rightup4.classList.add('сlickToChangeColor');
        iconClickText14rightup4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14453a')) {
        iconClickText14rightup4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup4.removeEventListener("click", funcIconClick14rightup4);
}
document.addEventListener("click", funcIconClick14rightup4);

const iconClickPath14rightup5 = document.getElementById('path-1-4-right-up-5');
const iconClickText14rightup5 = document.getElementById('text-1-4-right-up-5');
const iconClickText14rightup5desc = document.getElementById('desc454');
function funcIconClick14rightup5(event) {
    if (event.target.closest('#path-1-4-right-up-5')) {
        iconClickPath14rightup5.classList.add('сlickToChangeColor');
        iconClickText14rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-5')) {
        iconClickPath14rightup5.classList.remove('сlickToChangeColor');
        iconClickText14rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-5')) {
        iconClickText14rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-5')) {
        iconClickText14rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14454')) {
        iconClickPath14rightup5.classList.add('сlickToChangeColor');
        iconClickText14rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14454')) {
        iconClickText14rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup5.removeEventListener("click", funcIconClick14rightup5);
}
document.addEventListener("click", funcIconClick14rightup5);

const iconClickPath14rightup6 = document.getElementById('path-1-4-right-up-6');
const iconClickText14rightup6 = document.getElementById('text-1-4-right-up-6');
const iconClickText14rightup6desc = document.getElementById('desc455');
function funcIconClick14rightup6(event) {
    if (event.target.closest('#path-1-4-right-up-6')) {
        iconClickPath14rightup6.classList.add('сlickToChangeColor');
        iconClickText14rightup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-6')) {
        iconClickPath14rightup6.classList.remove('сlickToChangeColor');
        iconClickText14rightup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-6')) {
        iconClickText14rightup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-6')) {
        iconClickText14rightup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14455')) {
        iconClickPath14rightup6.classList.add('сlickToChangeColor');
        iconClickText14rightup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14455')) {
        iconClickText14rightup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup6.removeEventListener("click", funcIconClick14rightup6);
}
document.addEventListener("click", funcIconClick14rightup6);

const iconClickPath14rightup7 = document.getElementById('path-1-4-right-up-7');
const iconClickText14rightup7 = document.getElementById('text-1-4-right-up-7');
const iconClickText14rightup7desc = document.getElementById('desc456');
function funcIconClick14rightup7(event) {
    if (event.target.closest('#path-1-4-right-up-7')) {
        iconClickPath14rightup7.classList.add('сlickToChangeColor');
        iconClickText14rightup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-up-7')) {
        iconClickPath14rightup7.classList.remove('сlickToChangeColor');
        iconClickText14rightup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-up-7')) {
        iconClickText14rightup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-up-7')) {
        iconClickText14rightup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14456')) {
        iconClickPath14rightup7.classList.add('сlickToChangeColor');
        iconClickText14rightup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14456')) {
        iconClickText14rightup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightup7.removeEventListener("click", funcIconClick14rightup7);
}
document.addEventListener("click", funcIconClick14rightup7);

// 1b - 4floor  -  left-down
const iconClickPath14leftdown1 = document.getElementById('path-1-4-left-down-1');
const iconClickText14leftdown1 = document.getElementById('text-1-4-left-down-1');
const iconClickText14leftdown1desc = document.getElementById('desc416');
function funcIconClick14leftdown1(event) {
    if (event.target.closest('#path-1-4-left-down-1')) {
        iconClickPath14leftdown1.classList.add('сlickToChangeColor');
        iconClickText14leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-down-1')) {
        iconClickPath14leftdown1.classList.remove('сlickToChangeColor');
        iconClickText14leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-down-1')) {
        iconClickText14leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-down-1')) {
        iconClickText14leftdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14416')) {
        iconClickPath14leftdown1.classList.add('сlickToChangeColor');
        iconClickText14leftdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14416')) {
        iconClickText14leftdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftdown1.removeEventListener("click", funcIconClick14leftdown1);
}
document.addEventListener("click", funcIconClick14leftdown1);

const iconClickPath14leftdown2 = document.getElementById('path-1-4-left-down-2');
const iconClickText14leftdown2 = document.getElementById('text-1-4-left-down-2');
const iconClickText14leftdown2desc = document.getElementById('desc417');
function funcIconClick14leftdown2(event) {
    if (event.target.closest('#path-1-4-left-down-2')) {
        iconClickPath14leftdown2.classList.add('сlickToChangeColor');
        iconClickText14leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-down-2')) {
        iconClickPath14leftdown2.classList.remove('сlickToChangeColor');
        iconClickText14leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-down-2')) {
        iconClickText14leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-down-2')) {
        iconClickText14leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14417')) {
        iconClickPath14leftdown2.classList.add('сlickToChangeColor');
        iconClickText14leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14417')) {
        iconClickText14leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftdown2.removeEventListener("click", funcIconClick14leftdown2);
}
document.addEventListener("click", funcIconClick14leftdown2);

const iconClickPath14leftdown3 = document.getElementById('path-1-4-left-down-3');
const iconClickText14leftdown3 = document.getElementById('text-1-4-left-down-3');
const iconClickText14leftdown3desc = document.getElementById('desc417a');
function funcIconClick14leftdown3(event) {
    if (event.target.closest('#path-1-4-left-down-3')) {
        iconClickPath14leftdown3.classList.add('сlickToChangeColor');
        iconClickText14leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-down-3')) {
        iconClickPath14leftdown3.classList.remove('сlickToChangeColor');
        iconClickText14leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-down-3')) {
        iconClickText14leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-down-3')) {
        iconClickText14leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14417a')) {
        iconClickPath14leftdown3.classList.add('сlickToChangeColor');
        iconClickText14leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14417a')) {
        iconClickText14leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftdown3.removeEventListener("click", funcIconClick14leftdown3);
}
document.addEventListener("click", funcIconClick14leftdown3);

const iconClickPath14leftdown4 = document.getElementById('path-1-4-left-down-4');
const iconClickText14leftdown4 = document.getElementById('text-1-4-left-down-4');
const iconClickText14leftdown4desc = document.getElementById('desc418');
function funcIconClick14leftdown4(event) {
    if (event.target.closest('#path-1-4-left-down-4')) {
        iconClickPath14leftdown4.classList.add('сlickToChangeColor');
        iconClickText14leftdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-down-4')) {
        iconClickPath14leftdown4.classList.remove('сlickToChangeColor');
        iconClickText14leftdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-down-4')) {
        iconClickText14leftdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-down-4')) {
        iconClickText14leftdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14418')) {
        iconClickPath14leftdown4.classList.add('сlickToChangeColor');
        iconClickText14leftdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14418')) {
        iconClickText14leftdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftdown4.removeEventListener("click", funcIconClick14leftdown4);
}
document.addEventListener("click", funcIconClick14leftdown4);

const iconClickPath14leftdown5 = document.getElementById('path-1-4-left-down-5');
const iconClickText14leftdown5 = document.getElementById('text-1-4-left-down-5');
const iconClickText14leftdown5desc = document.getElementById('desc419');
function funcIconClick14leftdown5(event) {
    if (event.target.closest('#path-1-4-left-down-5')) {
        iconClickPath14leftdown5.classList.add('сlickToChangeColor');
        iconClickText14leftdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-down-5')) {
        iconClickPath14leftdown5.classList.remove('сlickToChangeColor');
        iconClickText14leftdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-down-5')) {
        iconClickText14leftdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-down-5')) {
        iconClickText14leftdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14419')) {
        iconClickPath14leftdown5.classList.add('сlickToChangeColor');
        iconClickText14leftdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14419')) {
        iconClickText14leftdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftdown5.removeEventListener("click", funcIconClick14leftdown5);
}
document.addEventListener("click", funcIconClick14leftdown5);

const iconClickPath14rightdown1 = document.getElementById('path-1-4-right-down-1');
const iconClickText14rightdown1 = document.getElementById('text-1-4-right-down-1');
const iconClickText14rightdown1desc = document.getElementById('desc467');
function funcIconClick14rightdown1(event) {
    if (event.target.closest('#path-1-4-right-down-1')) {
        iconClickPath14rightdown1.classList.add('сlickToChangeColor');
        iconClickText14rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-down-1')) {
        iconClickPath14rightdown1.classList.remove('сlickToChangeColor');
        iconClickText14rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-down-1')) {
        iconClickText14rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-down-1')) {
        iconClickText14rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14467')) {
        iconClickPath14rightdown1.classList.add('сlickToChangeColor');
        iconClickText14rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14467')) {
        iconClickText14rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightdown1.removeEventListener("click", funcIconClick14rightdown1);
}
document.addEventListener("click", funcIconClick14rightdown1);

const iconClickPath1466 = document.getElementById('path-1-466');
const iconClickText1466 = document.getElementById('text-1-466');
const iconClickText1466desc = document.getElementById('desc466');
function funcIconClick1466(event) {
    if (event.target.closest('#path-1-466')) {
        iconClickPath1466.classList.add('сlickToChangeColor');
        iconClickText1466desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-466')) {
        iconClickPath1466.classList.remove('сlickToChangeColor');
        iconClickText1466desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-466')) {
        iconClickText1466.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-466')) {
        iconClickText1466.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14466')) {
        iconClickPath1466.classList.add('сlickToChangeColor');
        iconClickText1466desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14466')) {
        iconClickText1466.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1466.removeEventListener("click", funcIconClick1466);
}
document.addEventListener("click", funcIconClick1466);

const iconClickPath14rightdown2 = document.getElementById('path-1-4-right-down-2');
const iconClickText14rightdown2 = document.getElementById('text-1-4-right-down-2');
const iconClickText14rightdown2desc = document.getElementById('desc465a');
function funcIconClick14rightdown2(event) {
    if (event.target.closest('#path-1-4-right-down-2')) {
        iconClickPath14rightdown2.classList.add('сlickToChangeColor');
        iconClickText14rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-down-2')) {
        iconClickPath14rightdown2.classList.remove('сlickToChangeColor');
        iconClickText14rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-down-2')) {
        iconClickText14rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-down-2')) {
        iconClickText14rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14465a')) {
        iconClickPath14rightdown2.classList.add('сlickToChangeColor');
        iconClickText14rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14465a')) {
        iconClickText14rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightdown2.removeEventListener("click", funcIconClick14rightdown2);
}
document.addEventListener("click", funcIconClick14rightdown2);

const iconClickPath14rightdown3 = document.getElementById('path-1-4-right-down-3');
const iconClickText14rightdown3 = document.getElementById('text-1-4-right-down-3');
const iconClickText14rightdown3desc = document.getElementById('desc465');
function funcIconClick14rightdown3(event) {
    if (event.target.closest('#path-1-4-right-down-3')) {
        iconClickPath14rightdown3.classList.add('сlickToChangeColor');
        iconClickText14rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-down-3')) {
        iconClickPath14rightdown3.classList.remove('сlickToChangeColor');
        iconClickText14rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-down-3')) {
        iconClickText14rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-down-3')) {
        iconClickText14rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14465')) {
        iconClickPath14rightdown3.classList.add('сlickToChangeColor');
        iconClickText14rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14465')) {
        iconClickText14rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightdown3.removeEventListener("click", funcIconClick14rightdown3);
}
document.addEventListener("click", funcIconClick14rightdown3);

const iconClickPath14rightdown4 = document.getElementById('path-1-4-right-down-4');
const iconClickText14rightdown4 = document.getElementById('text-1-4-right-down-4');
const iconClickText14rightdown4desc = document.getElementById('desc464a');
function funcIconClick14rightdown4(event) {
    if (event.target.closest('#path-1-4-right-down-4')) {
        iconClickPath14rightdown4.classList.add('сlickToChangeColor');
        iconClickText14rightdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-down-4')) {
        iconClickPath14rightdown4.classList.remove('сlickToChangeColor');
        iconClickText14rightdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-down-4')) {
        iconClickText14rightdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-down-4')) {
        iconClickText14rightdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14464a')) {
        iconClickPath14rightdown4.classList.add('сlickToChangeColor');
        iconClickText14rightdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14464a')) {
        iconClickText14rightdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightdown4.removeEventListener("click", funcIconClick14rightdown4);
}
document.addEventListener("click", funcIconClick14rightdown4);

const iconClickPath14rightdown5 = document.getElementById('path-1-4-right-down-5');
const iconClickText14rightdown5 = document.getElementById('text-1-4-right-down-5');
const iconClickText14rightdown5desc = document.getElementById('desc464');
function funcIconClick14rightdown5(event) {
    if (event.target.closest('#path-1-4-right-down-5')) {
        iconClickPath14rightdown5.classList.add('сlickToChangeColor');
        iconClickText14rightdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-down-5')) {
        iconClickPath14rightdown5.classList.remove('сlickToChangeColor');
        iconClickText14rightdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-down-5')) {
        iconClickText14rightdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-down-5')) {
        iconClickText14rightdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14464')) {
        iconClickPath14rightdown5.classList.add('сlickToChangeColor');
        iconClickText14rightdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14464')) {
        iconClickText14rightdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightdown5.removeEventListener("click", funcIconClick14rightdown5);
}
document.addEventListener("click", funcIconClick14rightdown5);

const iconClickPath14leftwing1part1 = document.getElementById('path-1-4-left-wing-1part-1');
const iconClickText14leftwing1part1 = document.getElementById('text-1-4-left-wing-1part-1');
const iconClickText14leftwing1part1desc = document.getElementById('desc409');
function funcIconClick14leftwing1part1(event) {
    if (event.target.closest('#path-1-4-left-wing-1part-1')) {
        iconClickPath14leftwing1part1.classList.add('сlickToChangeColor');
        iconClickText14leftwing1part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-1part-1')) {
        iconClickPath14leftwing1part1.classList.remove('сlickToChangeColor');
        iconClickText14leftwing1part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-1part-1')) {
        iconClickText14leftwing1part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-1part-1')) {
        iconClickText14leftwing1part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14409')) {
        iconClickPath14leftwing1part1.classList.add('сlickToChangeColor');
        iconClickText14leftwing1part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14409')) {
        iconClickText14leftwing1part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing1part1.removeEventListener("click", funcIconClick14leftwing1part1);
}
document.addEventListener("click", funcIconClick14leftwing1part1);

const iconClickPath14leftwing1part2 = document.getElementById('path-1-4-left-wing-1part-2');
const iconClickText14leftwing1part2 = document.getElementById('text-1-4-left-wing-1part-2');
const iconClickText14leftwing1part2desc = document.getElementById('desc410');
function funcIconClick14leftwing1part2(event) {
    if (event.target.closest('#path-1-4-left-wing-1part-2')) {
        iconClickPath14leftwing1part2.classList.add('сlickToChangeColor');
        iconClickText14leftwing1part2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-1part-2')) {
        iconClickPath14leftwing1part2.classList.remove('сlickToChangeColor');
        iconClickText14leftwing1part2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-1part-2')) {
        iconClickText14leftwing1part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-1part-2')) {
        iconClickText14leftwing1part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14410')) {
        iconClickPath14leftwing1part2.classList.add('сlickToChangeColor');
        iconClickText14leftwing1part2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14410')) {
        iconClickText14leftwing1part2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing1part2.removeEventListener("click", funcIconClick14leftwing1part2);
}
document.addEventListener("click", funcIconClick14leftwing1part2);

const iconClickPath14leftwing1part4 = document.getElementById('path-1-4-left-wing-1part-4');
const iconClickText14leftwing1part4 = document.getElementById('text-1-4-left-wing-1part-4');
const iconClickText14leftwing1part4desc = document.getElementById('desc411');
function funcIconClick14leftwing1part4(event) {
    if (event.target.closest('#path-1-4-left-wing-1part-4')) {
        iconClickPath14leftwing1part4.classList.add('сlickToChangeColor');
        iconClickText14leftwing1part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-1part-4')) {
        iconClickPath14leftwing1part4.classList.remove('сlickToChangeColor');
        iconClickText14leftwing1part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-1part-4')) {
        iconClickText14leftwing1part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-1part-4')) {
        iconClickText14leftwing1part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14411')) {
        iconClickPath14leftwing1part4.classList.add('сlickToChangeColor');
        iconClickText14leftwing1part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14411')) {
        iconClickText14leftwing1part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing1part4.removeEventListener("click", funcIconClick14leftwing1part4);
}
document.addEventListener("click", funcIconClick14leftwing1part4);

const iconClickPath14leftwing2part1 = document.getElementById('path-1-4-left-wing-2part-1');
const iconClickText14leftwing2part1 = document.getElementById('text-1-4-left-wing-2part-1');
const iconClickText14leftwing2part1desc = document.getElementById('desc414');
function funcIconClick14leftwing2part1(event) {
    if (event.target.closest('#path-1-4-left-wing-2part-1')) {
        iconClickPath14leftwing2part1.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-1')) {
        iconClickPath14leftwing2part1.classList.remove('сlickToChangeColor');
        iconClickText14leftwing2part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-2part-1')) {
        iconClickText14leftwing2part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-1')) {
        iconClickText14leftwing2part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14414')) {
        iconClickPath14leftwing2part1.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14414')) {
        iconClickText14leftwing2part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing2part1.removeEventListener("click", funcIconClick14leftwing2part1);
}
document.addEventListener("click", funcIconClick14leftwing2part1);

const iconClickPath14leftwing2part11 = document.getElementById('path-1-415');
const iconClickText14leftwing2part11 = document.getElementById('text-1-415');
const iconClickText14leftwing2part11desc = document.getElementById('desc415');
function funcIconClick14leftwing2part11(event) {
    if (event.target.closest('#path-1-415')) {
        iconClickPath14leftwing2part11.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part11desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-415')) {
        iconClickPath14leftwing2part11.classList.remove('сlickToChangeColor');
        iconClickText14leftwing2part11desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-415')) {
        iconClickText14leftwing2part11.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-415')) {
        iconClickText14leftwing2part11.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14415')) {
        iconClickPath14leftwing2part11.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part11desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14415')) {
        iconClickText14leftwing2part11.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing2part11.removeEventListener("click", funcIconClick14leftwing2part11);
}
document.addEventListener("click", funcIconClick14leftwing2part11);

const iconClickPath14leftwing2part4 = document.getElementById('path-1-4-left-wing-2part-4');
const iconClickText14leftwing2part4 = document.getElementById('text-1-4-left-wing-2part-4');
const iconClickText14leftwing2part4desc = document.getElementById('desc411a');
function funcIconClick14leftwing2part4(event) {
    if (event.target.closest('#path-1-4-left-wing-2part-4')) {
        iconClickPath14leftwing2part4.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-4')) {
        iconClickPath14leftwing2part4.classList.remove('сlickToChangeColor');
        iconClickText14leftwing2part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-2part-4')) {
        iconClickText14leftwing2part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-4')) {
        iconClickText14leftwing2part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14411a')) {
        iconClickPath14leftwing2part4.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14411a')) {
        iconClickText14leftwing2part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing2part4.removeEventListener("click", funcIconClick14leftwing2part4);
}
document.addEventListener("click", funcIconClick14leftwing2part4);

const iconClickPath14leftwing2part6 = document.getElementById('path-1-4-left-wing-2part-6');
const iconClickText14leftwing2part6 = document.getElementById('text-1-4-left-wing-2part-6');
const iconClickText14leftwing2part6desc = document.getElementById('desc412');
function funcIconClick14leftwing2part6(event) {
    if (event.target.closest('#path-1-4-left-wing-2part-6')) {
        iconClickPath14leftwing2part6.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-6')) {
        iconClickPath14leftwing2part6.classList.remove('сlickToChangeColor');
        iconClickText14leftwing2part6desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-2part-6')) {
        iconClickText14leftwing2part6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-6')) {
        iconClickText14leftwing2part6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14412')) {
        iconClickPath14leftwing2part6.classList.add('сlickToChangeColor');
        iconClickText14leftwing2part6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14412')) {
        iconClickText14leftwing2part6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing2part6.removeEventListener("click", funcIconClick14leftwing2part6);
}
document.addEventListener("click", funcIconClick14leftwing2part6);

const iconClickPath14rightwing1part1 = document.getElementById('path-1-4-right-wing-1part-1');
const iconClickText14rightwing1part1 = document.getElementById('text-1-4-right-wing-1part-1');
const iconClickText14rightwing1part1desc = document.getElementById('desc463');
function funcIconClick14rightwing1part1(event) {
    if (event.target.closest('#path-1-4-right-wing-1part-1')) {
        iconClickPath14rightwing1part1.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-1')) {
        iconClickPath14rightwing1part1.classList.remove('сlickToChangeColor');
        iconClickText14rightwing1part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-1part-1')) {
        iconClickText14rightwing1part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-1')) {
        iconClickText14rightwing1part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14463')) {
        iconClickPath14rightwing1part1.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14463')) {
        iconClickText14rightwing1part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing1part1.removeEventListener("click", funcIconClick14rightwing1part1);
}
document.addEventListener("click", funcIconClick14rightwing1part1);

const iconClickPath14rightwing1part3 = document.getElementById('path-1-4-right-wing-1part-3');
const iconClickText14rightwing1part3 = document.getElementById('text-1-4-right-wing-1part-3');
const iconClickText14rightwing1part3desc = document.getElementById('desc462');
function funcIconClick14rightwing1part3(event) {
    if (event.target.closest('#path-1-4-right-wing-1part-3')) {
        iconClickPath14rightwing1part3.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-3')) {
        iconClickPath14rightwing1part3.classList.remove('сlickToChangeColor');
        iconClickText14rightwing1part3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-1part-3')) {
        iconClickText14rightwing1part3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-3')) {
        iconClickText14rightwing1part3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14462')) {
        iconClickPath14rightwing1part3.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14462')) {
        iconClickText14rightwing1part3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing1part3.removeEventListener("click", funcIconClick14rightwing1part3);
}
document.addEventListener("click", funcIconClick14rightwing1part3);

const iconClickPath14rightwing1part4 = document.getElementById('path-1-4-right-wing-1part-4');
const iconClickText14rightwing1part4 = document.getElementById('text-1-4-right-wing-1part-4');
const iconClickText14rightwing1part4desc = document.getElementById('desc460a');
function funcIconClick14rightwing1part4(event) {
    if (event.target.closest('#path-1-4-right-wing-1part-4')) {
        iconClickPath14rightwing1part4.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-4')) {
        iconClickPath14rightwing1part4.classList.remove('сlickToChangeColor');
        iconClickText14rightwing1part4desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-1part-4')) {
        iconClickText14rightwing1part4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-4')) {
        iconClickText14rightwing1part4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14460a')) {
        iconClickPath14rightwing1part4.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14460a')) {
        iconClickText14rightwing1part4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing1part4.removeEventListener("click", funcIconClick14rightwing1part4);
}
document.addEventListener("click", funcIconClick14rightwing1part4);

const iconClickPath14rightwing1part5 = document.getElementById('path-1-4-right-wing-1part-5');
const iconClickText14rightwing1part5 = document.getElementById('text-1-4-right-wing-1part-5');
const iconClickText14rightwing1part5desc = document.getElementById('desc460');
function funcIconClick14rightwing1part5(event) {
    if (event.target.closest('#path-1-4-right-wing-1part-5')) {
        iconClickPath14rightwing1part5.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-5')) {
        iconClickPath14rightwing1part5.classList.remove('сlickToChangeColor');
        iconClickText14rightwing1part5desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-1part-5')) {
        iconClickText14rightwing1part5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-5')) {
        iconClickText14rightwing1part5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14460')) {
        iconClickPath14rightwing1part5.classList.add('сlickToChangeColor');
        iconClickText14rightwing1part5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14460')) {
        iconClickText14rightwing1part5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing1part5.removeEventListener("click", funcIconClick14rightwing1part5);
}
document.addEventListener("click", funcIconClick14rightwing1part5);

const iconClickPath1461 = document.getElementById('path-1-461');
const iconClickText1461 = document.getElementById('text-1-461');
const iconClickText1461desc = document.getElementById('desc461');
function funcIconClick1461(event) {
    if (event.target.closest('#path-1-461')) {
        iconClickPath1461.classList.add('сlickToChangeColor');
        iconClickText1461desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-461')) {
        iconClickPath1461.classList.remove('сlickToChangeColor');
        iconClickText1461desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-461')) {
        iconClickText1461.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-461')) {
        iconClickText1461.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14461')) {
        iconClickPath1461.classList.add('сlickToChangeColor');
        iconClickText1461desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14461')) {
        iconClickText1461.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1461.removeEventListener("click", funcIconClick1461);
}
document.addEventListener("click", funcIconClick1461);

const iconClickPath14rightwing2part1 = document.getElementById('path-1-4-right-wing-2part-1');
const iconClickText14rightwing2part1 = document.getElementById('text-1-4-right-wing-2part-1');
const iconClickText14rightwing2part1desc = document.getElementById('desc457');
function funcIconClick14rightwing2part1(event) {
    if (event.target.closest('#path-1-4-right-wing-2part-1')) {
        iconClickPath14rightwing2part1.classList.add('сlickToChangeColor');
        iconClickText14rightwing2part1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-2part-1')) {
        iconClickPath14rightwing2part1.classList.remove('сlickToChangeColor');
        iconClickText14rightwing2part1desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-2part-1')) {
        iconClickText14rightwing2part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-2part-1')) {
        iconClickText14rightwing2part1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14457')) {
        iconClickPath14rightwing2part1.classList.add('сlickToChangeColor');
        iconClickText14rightwing2part1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14457')) {
        iconClickText14rightwing2part1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing2part1.removeEventListener("click", funcIconClick14rightwing2part1);
}
document.addEventListener("click", funcIconClick14rightwing2part1);

const iconClickPath14rightwing2part2 = document.getElementById('path-1-4-right-wing-2part-2');
const iconClickText14rightwing2part2 = document.getElementById('text-1-4-right-wing-2part-2');
const iconClickText14rightwing2part2desc = document.getElementById('desc458');
function funcIconClick14rightwing2part2(event) {
    if (event.target.closest('#path-1-4-right-wing-2part-2')) {
        iconClickPath14rightwing2part2.classList.add('сlickToChangeColor');
        iconClickText14rightwing2part2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-2part-2')) {
        iconClickPath14rightwing2part2.classList.remove('сlickToChangeColor');
        iconClickText14rightwing2part2desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-2part-2')) {
        iconClickText14rightwing2part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-2part-2')) {
        iconClickText14rightwing2part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14458')) {
        iconClickPath14rightwing2part2.classList.add('сlickToChangeColor');
        iconClickText14rightwing2part2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14458')) {
        iconClickText14rightwing2part2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing2part2.removeEventListener("click", funcIconClick14rightwing2part2);
}
document.addEventListener("click", funcIconClick14rightwing2part2);

const iconClickPath14rightwing2part3 = document.getElementById('path-1-4-right-wing-2part-3');
const iconClickText14rightwing2part3 = document.getElementById('text-1-4-right-wing-2part-3');
const iconClickText14rightwing2part3desc = document.getElementById('desc459a');
function funcIconClick14rightwing2part3(event) {
    if (event.target.closest('#path-1-4-right-wing-2part-3')) {
        iconClickPath14rightwing2part3.classList.add('сlickToChangeColor');
        iconClickText14rightwing2part3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-2part-3')) {
        iconClickPath14rightwing2part3.classList.remove('сlickToChangeColor');
        iconClickText14rightwing2part3desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-2part-3')) {
        iconClickText14rightwing2part3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-2part-3')) {
        iconClickText14rightwing2part3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14459a')) {
        iconClickPath14rightwing2part3.classList.add('сlickToChangeColor');
        iconClickText14rightwing2part3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14459a')) {
        iconClickText14rightwing2part3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing2part3.removeEventListener("click", funcIconClick14rightwing2part3);
}
document.addEventListener("click", funcIconClick14rightwing2part3);

const iconClickPath1459 = document.getElementById('path-1-459');
const iconClickText1459 = document.getElementById('text-1-459');
const iconClickText1459desc = document.getElementById('desc459');
function funcIconClick1459(event) {
    if (event.target.closest('#path-1-459')) {
        iconClickPath1459.classList.add('сlickToChangeColor');
        iconClickText1459desc.style.display = 'block';
    }
    if (!event.target.closest('#path-1-459')) {
        iconClickPath1459.classList.remove('сlickToChangeColor');
        iconClickText1459desc.style.display = 'none';
    }
    if (event.target.closest('#path-1-459')) {
        iconClickText1459.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-459')) {
        iconClickText1459.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-14459')) {
        iconClickPath1459.classList.add('сlickToChangeColor');
        iconClickText1459desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-14459')) {
        iconClickText1459.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1459.removeEventListener("click", funcIconClick1459);
}
document.addEventListener("click", funcIconClick1459);

// building2floor1 --------------------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath21leftup1 = document.getElementById('path-2-1-left-up-1');
const iconClickText21leftup1 = document.getElementById('text-2-1-left-up-1');
const iconClickText21leftup1desc = document.getElementById('desc2101');
function funcIconClick21leftup1(event) {
    if (event.target.closest('#path-2-1-left-up-1')) {
        iconClickPath21leftup1.classList.add('сlickToChangeColor');
        iconClickText21leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-1')) {
        iconClickPath21leftup1.classList.remove('сlickToChangeColor');
        iconClickText21leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-1')) {
        iconClickText21leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-1')) {
        iconClickText21leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21101')) {
        iconClickPath21leftup1.classList.add('сlickToChangeColor');
        iconClickText21leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21101')) {
        iconClickText21leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup1.removeEventListener("click", funcIconClick21leftup1);
}
document.addEventListener("click", funcIconClick21leftup1);

const iconClickPath21leftup2 = document.getElementById('path-2-1-left-up-2');
const iconClickText21leftup2 = document.getElementById('text-2-1-left-up-2');
const iconClickText21leftup2desc = document.getElementById('desc2102');
function funcIconClick21leftup2(event) {
    if (event.target.closest('#path-2-1-left-up-2')) {
        iconClickPath21leftup2.classList.add('сlickToChangeColor');
        iconClickText21leftup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-2')) {
        iconClickPath21leftup2.classList.remove('сlickToChangeColor');
        iconClickText21leftup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-2')) {
        iconClickText21leftup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-2')) {
        iconClickText21leftup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21102')) {
        iconClickPath21leftup2.classList.add('сlickToChangeColor');
        iconClickText21leftup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21102')) {
        iconClickText21leftup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup2.removeEventListener("click", funcIconClick21leftup2);
}
document.addEventListener("click", funcIconClick21leftup2);

const iconClickPath21leftup3 = document.getElementById('path-2-1-left-up-3');
const iconClickText21leftup3 = document.getElementById('text-2-1-left-up-3');
const iconClickText21leftup3desc = document.getElementById('desc2103');
function funcIconClick21leftup3(event) {
    if (event.target.closest('#path-2-1-left-up-3')) {
        iconClickPath21leftup3.classList.add('сlickToChangeColor');
        iconClickText21leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-3')) {
        iconClickPath21leftup3.classList.remove('сlickToChangeColor');
        iconClickText21leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-3')) {
        iconClickText21leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-3')) {
        iconClickText21leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21103')) {
        iconClickPath21leftup3.classList.add('сlickToChangeColor');
        iconClickText21leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21103')) {
        iconClickText21leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup3.removeEventListener("click", funcIconClick21leftup3);
}
document.addEventListener("click", funcIconClick21leftup3);

const iconClickPath21leftup5 = document.getElementById('path-2-1-left-up-5');
const iconClickText21leftup5 = document.getElementById('text-2-1-left-up-5');
const iconClickText21leftup5desc = document.getElementById('desc2104');
function funcIconClick21leftup5(event) {
    if (event.target.closest('#path-2-1-left-up-5')) {
        iconClickPath21leftup5.classList.add('сlickToChangeColor');
        iconClickText21leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-5')) {
        iconClickPath21leftup5.classList.remove('сlickToChangeColor');
        iconClickText21leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-5')) {
        iconClickText21leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-5')) {
        iconClickText21leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21104')) {
        iconClickPath21leftup5.classList.add('сlickToChangeColor');
        iconClickText21leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21104')) {
        iconClickText21leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup5.removeEventListener("click", funcIconClick21leftup5);
}
document.addEventListener("click", funcIconClick21leftup5);

const iconClickPath21leftup6 = document.getElementById('path-2-1-left-up-6');
const iconClickText21leftup6 = document.getElementById('text-2-1-left-up-6');
const iconClickText21leftup6desc = document.getElementById('desc2105');
function funcIconClick21leftup6(event) {
    if (event.target.closest('#path-2-1-left-up-6')) {
        iconClickPath21leftup6.classList.add('сlickToChangeColor');
        iconClickText21leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-6')) {
        iconClickPath21leftup6.classList.remove('сlickToChangeColor');
        iconClickText21leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-6')) {
        iconClickText21leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-6')) {
        iconClickText21leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21105')) {
        iconClickPath21leftup6.classList.add('сlickToChangeColor');
        iconClickText21leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21105')) {
        iconClickText21leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup6.removeEventListener("click", funcIconClick21leftup6);
}
document.addEventListener("click", funcIconClick21leftup6);

const iconClickPath21leftup7 = document.getElementById('path-2-1-left-up-7');
const iconClickText21leftup7 = document.getElementById('text-2-1-left-up-7');
const iconClickText21leftup7desc = document.getElementById('desc2106');
function funcIconClick21leftup7(event) {
    if (event.target.closest('#path-2-1-left-up-7')) {
        iconClickPath21leftup7.classList.add('сlickToChangeColor');
        iconClickText21leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-7')) {
        iconClickPath21leftup7.classList.remove('сlickToChangeColor');
        iconClickText21leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-7')) {
        iconClickText21leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-7')) {
        iconClickText21leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21106')) {
        iconClickPath21leftup7.classList.add('сlickToChangeColor');
        iconClickText21leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21106')) {
        iconClickText21leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup7.removeEventListener("click", funcIconClick21leftup7);
}
document.addEventListener("click", funcIconClick21leftup7);

const iconClickPath21leftup8 = document.getElementById('path-2-1-left-up-8');
const iconClickText21leftup8 = document.getElementById('text-2-1-left-up-8');
const iconClickText21leftup8desc = document.getElementById('desc2107');
function funcIconClick21leftup8(event) {
    if (event.target.closest('#path-2-1-left-up-8')) {
        iconClickPath21leftup8.classList.add('сlickToChangeColor');
        iconClickText21leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-8')) {
        iconClickPath21leftup8.classList.remove('сlickToChangeColor');
        iconClickText21leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-8')) {
        iconClickText21leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-8')) {
        iconClickText21leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21107')) {
        iconClickPath21leftup8.classList.add('сlickToChangeColor');
        iconClickText21leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21107')) {
        iconClickText21leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup8.removeEventListener("click", funcIconClick21leftup8);
}
document.addEventListener("click", funcIconClick21leftup8);

const iconClickPath21rightup1 = document.getElementById('path-2-1-right-up-1');
const iconClickText21rightup1 = document.getElementById('text-2-1-right-up-1');
const iconClickText21rightup1desc = document.getElementById('desc2108');
function funcIconClick21rightup1(event) {
    if (event.target.closest('#path-2-1-right-up-1')) {
        iconClickPath21rightup1.classList.add('сlickToChangeColor');
        iconClickText21rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-up-1')) {
        iconClickPath21rightup1.classList.remove('сlickToChangeColor');
        iconClickText21rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-up-1')) {
        iconClickText21rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-up-1')) {
        iconClickText21rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21108')) {
        iconClickPath21rightup1.classList.add('сlickToChangeColor');
        iconClickText21rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21108')) {
        iconClickText21rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightup1.removeEventListener("click", funcIconClick21rightup1);
}
document.addEventListener("click", funcIconClick21rightup1);

const iconClickPath21rightup2 = document.getElementById('path-2-1-right-up-2');
const iconClickText21rightup2 = document.getElementById('text-2-1-right-up-2');
const iconClickText21rightup2desc = document.getElementById('desc2109');
function funcIconClick21rightup2(event) {
    if (event.target.closest('#path-2-1-right-up-2')) {
        iconClickPath21rightup2.classList.add('сlickToChangeColor');
        iconClickText21rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-up-2')) {
        iconClickPath21rightup2.classList.remove('сlickToChangeColor');
        iconClickText21rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-up-2')) {
        iconClickText21rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-up-2')) {
        iconClickText21rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21109')) {
        iconClickPath21rightup2.classList.add('сlickToChangeColor');
        iconClickText21rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21109')) {
        iconClickText21rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightup2.removeEventListener("click", funcIconClick21rightup2);
}
document.addEventListener("click", funcIconClick21rightup2);

const iconClickPath21rightup3 = document.getElementById('path-2-1-right-up-3');
const iconClickText21rightup3 = document.getElementById('text-2-1-right-up-3');
const iconClickText21rightup3desc = document.getElementById('desc2110');
function funcIconClick21rightup3(event) {
    if (event.target.closest('#path-2-1-right-up-3')) {
        iconClickPath21rightup3.classList.add('сlickToChangeColor');
        iconClickText21rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-up-3')) {
        iconClickPath21rightup3.classList.remove('сlickToChangeColor');
        iconClickText21rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-up-3')) {
        iconClickText21rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-up-3')) {
        iconClickText21rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21110')) {
        iconClickPath21rightup3.classList.add('сlickToChangeColor');
        iconClickText21rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21110')) {
        iconClickText21rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightup3.removeEventListener("click", funcIconClick21rightup3);
}
document.addEventListener("click", funcIconClick21rightup3);

const iconClickPath21leftdown1 = document.getElementById('path-2-1-left-down-1');
const iconClickText21leftdown1 = document.getElementById('text-2-1-left-down-1');
const iconClickText21leftdown1desc = document.getElementById('desc2128');
function funcIconClick21leftdown1(event) {
    if (event.target.closest('#path-2-1-left-down-1')) {
        iconClickPath21leftdown1.classList.add('сlickToChangeColor');
        iconClickText21leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-down-1')) {
        iconClickPath21leftdown1.classList.remove('сlickToChangeColor');
        iconClickText21leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-down-1')) {
        iconClickText21leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-down-1')) {
        iconClickText21leftdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21128')) {
        iconClickPath21leftdown1.classList.add('сlickToChangeColor');
        iconClickText21leftdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21128')) {
        iconClickText21leftdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftdown1.removeEventListener("click", funcIconClick21leftdown1);
}
document.addEventListener("click", funcIconClick21leftdown1);

const iconClickPath2127 = document.getElementById('path-2-127');
const iconClickText2127 = document.getElementById('text-2-127');
const iconClickText2127desc = document.getElementById('desc2127');
function funcIconClick2127(event) {
    if (event.target.closest('#path-2-127')) {
        iconClickPath2127.classList.add('сlickToChangeColor');
        iconClickText2127desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-127')) {
        iconClickPath2127.classList.remove('сlickToChangeColor');
        iconClickText2127desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-127')) {
        iconClickText2127.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-127')) {
        iconClickText2127.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21127')) {
        iconClickPath2127.classList.add('сlickToChangeColor');
        iconClickText2127desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21127')) {
        iconClickText2127.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2127.removeEventListener("click", funcIconClick2127);
}
document.addEventListener("click", funcIconClick2127);

const iconClickPath21leftdown2 = document.getElementById('path-2-1-left-down-2');
const iconClickText21leftdown2 = document.getElementById('text-2-1-left-down-2');
const iconClickText21leftdown2desc = document.getElementById('desc2126');
function funcIconClick21leftdown2(event) {
    if (event.target.closest('#path-2-1-left-down-2')) {
        iconClickPath21leftdown2.classList.add('сlickToChangeColor');
        iconClickText21leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-down-2')) {
        iconClickPath21leftdown2.classList.remove('сlickToChangeColor');
        iconClickText21leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-down-2')) {
        iconClickText21leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-down-2')) {
        iconClickText21leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21126')) {
        iconClickPath21leftdown2.classList.add('сlickToChangeColor');
        iconClickText21leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21126')) {
        iconClickText21leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftdown2.removeEventListener("click", funcIconClick21leftdown2);
}
document.addEventListener("click", funcIconClick21leftdown2);

const iconClickPath2125 = document.getElementById('path-2-125');
const iconClickText2125 = document.getElementById('text-2-125');
const iconClickText2125desc = document.getElementById('desc2125');
function funcIconClick2125(event) {
    if (event.target.closest('#path-2-125')) {
        iconClickPath2125.classList.add('сlickToChangeColor');
        iconClickText2125desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-125')) {
        iconClickPath2125.classList.remove('сlickToChangeColor');
        iconClickText2125desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-125')) {
        iconClickText2125.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-125')) {
        iconClickText2125.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21125')) {
        iconClickPath2125.classList.add('сlickToChangeColor');
        iconClickText2125desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21125')) {
        iconClickText2125.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2125.removeEventListener("click", funcIconClick2125);
}
document.addEventListener("click", funcIconClick2125);

const iconClickPath21leftdown3 = document.getElementById('path-2-1-left-down-3');
const iconClickText21leftdown3 = document.getElementById('text-2-1-left-down-3');
const iconClickText21leftdown3desc = document.getElementById('desc2123');
function funcIconClick21leftdown3(event) {
    if (event.target.closest('#path-2-1-left-down-3')) {
        iconClickPath21leftdown3.classList.add('сlickToChangeColor');
        iconClickText21leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-down-3')) {
        iconClickPath21leftdown3.classList.remove('сlickToChangeColor');
        iconClickText21leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-down-3')) {
        iconClickText21leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-down-3')) {
        iconClickText21leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21123')) {
        iconClickPath21leftdown3.classList.add('сlickToChangeColor');
        iconClickText21leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21123')) {
        iconClickText21leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftdown3.removeEventListener("click", funcIconClick21leftdown3);
}
document.addEventListener("click", funcIconClick21leftdown3);

const iconClickPath21leftdown5 = document.getElementById('path-2-1-left-down-5');
const iconClickText21leftdown5 = document.getElementById('text-2-1-left-down-5');
const iconClickText21leftdown5desc = document.getElementById('desc2122');
function funcIconClick21leftdown5(event) {
    if (event.target.closest('#path-2-1-left-down-5')) {
        iconClickPath21leftdown5.classList.add('сlickToChangeColor');
        iconClickText21leftdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-down-5')) {
        iconClickPath21leftdown5.classList.remove('сlickToChangeColor');
        iconClickText21leftdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-down-5')) {
        iconClickText21leftdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-down-5')) {
        iconClickText21leftdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21122')) {
        iconClickPath21leftdown5.classList.add('сlickToChangeColor');
        iconClickText21leftdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21122')) {
        iconClickText21leftdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftdown5.removeEventListener("click", funcIconClick21leftdown5);
}
document.addEventListener("click", funcIconClick21leftdown5);

const iconClickPath21leftdown6 = document.getElementById('path-2-1-left-down-6');
const iconClickText21leftdown6 = document.getElementById('text-2-1-left-down-6');
const iconClickText21leftdown6desc = document.getElementById('desc2121');
function funcIconClick21leftdown6(event) {
    if (event.target.closest('#path-2-1-left-down-6')) {
        iconClickPath21leftdown6.classList.add('сlickToChangeColor');
        iconClickText21leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-down-6')) {
        iconClickPath21leftdown6.classList.remove('сlickToChangeColor');
        iconClickText21leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-down-6')) {
        iconClickText21leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-down-6')) {
        iconClickText21leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21121')) {
        iconClickPath21leftdown6.classList.add('сlickToChangeColor');
        iconClickText21leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21121')) {
        iconClickText21leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftdown6.removeEventListener("click", funcIconClick21leftdown6);
}
document.addEventListener("click", funcIconClick21leftdown6);

const iconClickPath21leftdown7 = document.getElementById('path-2-1-left-down-7');
const iconClickText21leftdown7 = document.getElementById('text-2-1-left-down-7');
const iconClickText21leftdown7desc = document.getElementById('desc2120');
function funcIconClick21leftdown7(event) {
    if (event.target.closest('#path-2-1-left-down-7')) {
        iconClickPath21leftdown7.classList.add('сlickToChangeColor');
        iconClickText21leftdown7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-down-7')) {
        iconClickPath21leftdown7.classList.remove('сlickToChangeColor');
        iconClickText21leftdown7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-down-7')) {
        iconClickText21leftdown7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-down-7')) {
        iconClickText21leftdown7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21120')) {
        iconClickPath21leftdown7.classList.add('сlickToChangeColor');
        iconClickText21leftdown7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21120')) {
        iconClickText21leftdown7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftdown7.removeEventListener("click", funcIconClick21leftdown7);
}
document.addEventListener("click", funcIconClick21leftdown7);

const iconClickPath21rightdown1 = document.getElementById('path-2-1-right-down-1');
const iconClickText21rightdown1 = document.getElementById('text-2-1-right-down-1');
const iconClickText21rightdown1desc = document.getElementById('desc2119');
function funcIconClick21rightdown1(event) {
    if (event.target.closest('#path-2-1-right-down-1')) {
        iconClickPath21rightdown1.classList.add('сlickToChangeColor');
        iconClickText21rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-down-1')) {
        iconClickPath21rightdown1.classList.remove('сlickToChangeColor');
        iconClickText21rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-down-1')) {
        iconClickText21rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-down-1')) {
        iconClickText21rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21119')) {
        iconClickPath21rightdown1.classList.add('сlickToChangeColor');
        iconClickText21rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21119')) {
        iconClickText21rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightdown1.removeEventListener("click", funcIconClick21rightdown1);
}
document.addEventListener("click", funcIconClick21rightdown1);

const iconClickPath21rightdown2 = document.getElementById('path-2-1-right-down-2');
const iconClickText21rightdown2 = document.getElementById('text-2-1-right-down-2');
const iconClickText21rightdown2desc = document.getElementById('desc2118');
function funcIconClick21rightdown2(event) {
    if (event.target.closest('#path-2-1-right-down-2')) {
        iconClickPath21rightdown2.classList.add('сlickToChangeColor');
        iconClickText21rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-down-2')) {
        iconClickPath21rightdown2.classList.remove('сlickToChangeColor');
        iconClickText21rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-down-2')) {
        iconClickText21rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-down-2')) {
        iconClickText21rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21118')) {
        iconClickPath21rightdown2.classList.add('сlickToChangeColor');
        iconClickText21rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21118')) {
        iconClickText21rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightdown2.removeEventListener("click", funcIconClick21rightdown2);
}
document.addEventListener("click", funcIconClick21rightdown2);

const iconClickPath21rightdown3 = document.getElementById('path-2-1-right-down-3');
const iconClickText21rightdown3 = document.getElementById('text-2-1-right-down-3');
const iconClickText21rightdown3desc = document.getElementById('desc2117');
function funcIconClick21rightdown3(event) {
    if (event.target.closest('#path-2-1-right-down-3')) {
        iconClickPath21rightdown3.classList.add('сlickToChangeColor');
        iconClickText21rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-down-3')) {
        iconClickPath21rightdown3.classList.remove('сlickToChangeColor');
        iconClickText21rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-down-3')) {
        iconClickText21rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-down-3')) {
        iconClickText21rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21117')) {
        iconClickPath21rightdown3.classList.add('сlickToChangeColor');
        iconClickText21rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21117')) {
        iconClickText21rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightdown3.removeEventListener("click", funcIconClick21rightdown3);
}
document.addEventListener("click", funcIconClick21rightdown3);

const iconClickPath21rightdown4 = document.getElementById('path-2-1-right-down-4');
const iconClickText21rightdown4 = document.getElementById('text-2-1-right-down-4');
const iconClickText21rightdown4desc = document.getElementById('desc2116');
function funcIconClick21rightdown4(event) {
    if (event.target.closest('#path-2-1-right-down-4')) {
        iconClickPath21rightdown4.classList.add('сlickToChangeColor');
        iconClickText21rightdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-right-down-4')) {
        iconClickPath21rightdown4.classList.remove('сlickToChangeColor');
        iconClickText21rightdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-1-right-down-4')) {
        iconClickText21rightdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-right-down-4')) {
        iconClickText21rightdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-21116')) {
        iconClickPath21rightdown4.classList.add('сlickToChangeColor');
        iconClickText21rightdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'block';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.add("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-21116')) {
        iconClickText21rightdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21rightdown4.removeEventListener("click", funcIconClick21rightdown4);
}
document.addEventListener("click", funcIconClick21rightdown4);

// building2floor2 ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath22leftup1 = document.getElementById('path-2-2-left-up-1');
const iconClickText22leftup1 = document.getElementById('text-2-2-left-up-1');
const iconClickText22leftup1desc = document.getElementById('desc2201a');
function funcIconClick22leftup1(event) {
    if (event.target.closest('#path-2-2-left-up-1')) {
        iconClickPath22leftup1.classList.add('сlickToChangeColor');
        iconClickText22leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-1')) {
        iconClickPath22leftup1.classList.remove('сlickToChangeColor');
        iconClickText22leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-1')) {
        iconClickText22leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-1')) {
        iconClickText22leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22201a')) {
        iconClickPath22leftup1.classList.add('сlickToChangeColor');
        iconClickText22leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22201a')) {
        iconClickText22leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup1.removeEventListener("click", funcIconClick22leftup1);
}
document.addEventListener("click", funcIconClick22leftup1);

const iconClickPath22leftup2 = document.getElementById('path-2-2-left-up-2');
const iconClickText22leftup2 = document.getElementById('text-2-2-left-up-2');
const iconClickText22leftup2desc = document.getElementById('desc2201');
function funcIconClick22leftup2(event) {
    if (event.target.closest('#path-2-2-left-up-2')) {
        iconClickPath22leftup2.classList.add('сlickToChangeColor');
        iconClickText22leftup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-2')) {
        iconClickPath22leftup2.classList.remove('сlickToChangeColor');
        iconClickText22leftup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-2')) {
        iconClickText22leftup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-2')) {
        iconClickText22leftup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22201')) {
        iconClickPath22leftup2.classList.add('сlickToChangeColor');
        iconClickText22leftup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22201')) {
        iconClickText22leftup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup2.removeEventListener("click", funcIconClick22leftup2);
}
document.addEventListener("click", funcIconClick22leftup2);

const iconClickPath22leftup3 = document.getElementById('path-2-2-left-up-3');
const iconClickText22leftup3 = document.getElementById('text-2-2-left-up-3');
const iconClickText22leftup3desc = document.getElementById('desc2202');
function funcIconClick22leftup3(event) {
    if (event.target.closest('#path-2-2-left-up-3')) {
        iconClickPath22leftup3.classList.add('сlickToChangeColor');
        iconClickText22leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-3')) {
        iconClickPath22leftup3.classList.remove('сlickToChangeColor');
        iconClickText22leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-3')) {
        iconClickText22leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-3')) {
        iconClickText22leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22202')) {
        iconClickPath22leftup3.classList.add('сlickToChangeColor');
        iconClickText22leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22202')) {
        iconClickText22leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup3.removeEventListener("click", funcIconClick22leftup3);
}
document.addEventListener("click", funcIconClick22leftup3);

const iconClickPath22leftup5 = document.getElementById('path-2-2-left-up-5');
const iconClickText22leftup5 = document.getElementById('text-2-2-left-up-5');
const iconClickText22leftup5desc = document.getElementById('desc2203');
function funcIconClick22leftup5(event) {
    if (event.target.closest('#path-2-2-left-up-5')) {
        iconClickPath22leftup5.classList.add('сlickToChangeColor');
        iconClickText22leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-5')) {
        iconClickPath22leftup5.classList.remove('сlickToChangeColor');
        iconClickText22leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-5')) {
        iconClickText22leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-5')) {
        iconClickText22leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22203')) {
        iconClickPath22leftup5.classList.add('сlickToChangeColor');
        iconClickText22leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22203')) {
        iconClickText22leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup5.removeEventListener("click", funcIconClick22leftup5);
}
document.addEventListener("click", funcIconClick22leftup5);

const iconClickPath22leftup6 = document.getElementById('path-2-2-left-up-6');
const iconClickText22leftup6 = document.getElementById('text-2-2-left-up-6');
const iconClickText22leftup6desc = document.getElementById('desc2204');
function funcIconClick22leftup6(event) {
    if (event.target.closest('#path-2-2-left-up-6')) {
        iconClickPath22leftup6.classList.add('сlickToChangeColor');
        iconClickText22leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-6')) {
        iconClickPath22leftup6.classList.remove('сlickToChangeColor');
        iconClickText22leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-6')) {
        iconClickText22leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-6')) {
        iconClickText22leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22204')) {
        iconClickPath22leftup6.classList.add('сlickToChangeColor');
        iconClickText22leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22204')) {
        iconClickText22leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup6.removeEventListener("click", funcIconClick22leftup6);
}
document.addEventListener("click", funcIconClick22leftup6);

const iconClickPath2205 = document.getElementById('path-2-205');
const iconClickText2205 = document.getElementById('text-2-205');
const iconClickText2205desc = document.getElementById('desc2205');
function funcIconClick2205(event) {
    if (event.target.closest('#path-2-205')) {
        iconClickPath2205.classList.add('сlickToChangeColor');
        iconClickText2205desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-205')) {
        iconClickPath2205.classList.remove('сlickToChangeColor');
        iconClickText2205desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-205')) {
        iconClickText2205.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-205')) {
        iconClickText2205.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22205')) {
        iconClickPath2205.classList.add('сlickToChangeColor');
        iconClickText2205desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22205')) {
        iconClickText2205.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2205.removeEventListener("click", funcIconClick2205);
}
document.addEventListener("click", funcIconClick2205);

const iconClickPath22leftup7 = document.getElementById('path-2-2-left-up-7');
const iconClickText22leftup7 = document.getElementById('text-2-2-left-up-7');
const iconClickText22leftup7desc = document.getElementById('desc2206');
function funcIconClick22leftup7(event) {
    if (event.target.closest('#path-2-2-left-up-7')) {
        iconClickPath22leftup7.classList.add('сlickToChangeColor');
        iconClickText22leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-7')) {
        iconClickPath22leftup7.classList.remove('сlickToChangeColor');
        iconClickText22leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-7')) {
        iconClickText22leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-7')) {
        iconClickText22leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22206')) {
        iconClickPath22leftup7.classList.add('сlickToChangeColor');
        iconClickText22leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22206')) {
        iconClickText22leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup7.removeEventListener("click", funcIconClick22leftup7);
}
document.addEventListener("click", funcIconClick22leftup7);

const iconClickPath22leftup8 = document.getElementById('path-2-2-left-up-8');
const iconClickText22leftup8 = document.getElementById('text-2-2-left-up-8');
const iconClickText22leftup8desc = document.getElementById('desc2207');
function funcIconClick22leftup8(event) {
    if (event.target.closest('#path-2-2-left-up-8')) {
        iconClickPath22leftup8.classList.add('сlickToChangeColor');
        iconClickText22leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-8')) {
        iconClickPath22leftup8.classList.remove('сlickToChangeColor');
        iconClickText22leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-8')) {
        iconClickText22leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-8')) {
        iconClickText22leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22207')) {
        iconClickPath22leftup8.classList.add('сlickToChangeColor');
        iconClickText22leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22207')) {
        iconClickText22leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup8.removeEventListener("click", funcIconClick22leftup8);
}
document.addEventListener("click", funcIconClick22leftup8);

const iconClickPath2209 = document.getElementById('path-2-209');
const iconClickText2209 = document.getElementById('text-2-209');
const iconClickText2209desc = document.getElementById('desc2209');
function funcIconClick2209(event) {
    if (event.target.closest('#path-2-209')) {
        iconClickPath2209.classList.add('сlickToChangeColor');
        iconClickText2209desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-209')) {
        iconClickPath2209.classList.remove('сlickToChangeColor');
        iconClickText2209desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-209')) {
        iconClickText2209.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-209')) {
        iconClickText2209.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22209')) {
        iconClickPath2209.classList.add('сlickToChangeColor');
        iconClickText2209desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22209')) {
        iconClickText2209.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2209.removeEventListener("click", funcIconClick2209);
}
document.addEventListener("click", funcIconClick2209);

const iconClickPath22rightup1 = document.getElementById('path-2-2-right-up-1');
const iconClickText22rightup1 = document.getElementById('text-2-2-right-up-1');
const iconClickText22rightup1desc = document.getElementById('desc2210');
function funcIconClick22rightup1(event) {
    if (event.target.closest('#path-2-2-right-up-1')) {
        iconClickPath22rightup1.classList.add('сlickToChangeColor');
        iconClickText22rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-up-1')) {
        iconClickPath22rightup1.classList.remove('сlickToChangeColor');
        iconClickText22rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-up-1')) {
        iconClickText22rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-up-1')) {
        iconClickText22rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22210')) {
        iconClickPath22rightup1.classList.add('сlickToChangeColor');
        iconClickText22rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22210')) {
        iconClickText22rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightup1.removeEventListener("click", funcIconClick22rightup1);
}
document.addEventListener("click", funcIconClick22rightup1);

const iconClickPath22rightup2 = document.getElementById('path-2-2-right-up-2');
const iconClickText22rightup2 = document.getElementById('text-2-2-right-up-2');
const iconClickText22rightup2desc = document.getElementById('desc2211');
function funcIconClick22rightup2(event) {
    if (event.target.closest('#path-2-2-right-up-2')) {
        iconClickPath22rightup2.classList.add('сlickToChangeColor');
        iconClickText22rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-up-2')) {
        iconClickPath22rightup2.classList.remove('сlickToChangeColor');
        iconClickText22rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-up-2')) {
        iconClickText22rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-up-2')) {
        iconClickText22rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22211')) {
        iconClickPath22rightup2.classList.add('сlickToChangeColor');
        iconClickText22rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22211')) {
        iconClickText22rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightup2.removeEventListener("click", funcIconClick22rightup2);
}
document.addEventListener("click", funcIconClick22rightup2);

const iconClickPath22rightup3 = document.getElementById('path-2-2-right-up-3');
const iconClickText22rightup3 = document.getElementById('text-2-2-right-up-3');
const iconClickText22rightup3desc = document.getElementById('desc2212');
function funcIconClick22rightup3(event) {
    if (event.target.closest('#path-2-2-right-up-3')) {
        iconClickPath22rightup3.classList.add('сlickToChangeColor');
        iconClickText22rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-up-3')) {
        iconClickPath22rightup3.classList.remove('сlickToChangeColor');
        iconClickText22rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-up-3')) {
        iconClickText22rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-up-3')) {
        iconClickText22rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22212')) {
        iconClickPath22rightup3.classList.add('сlickToChangeColor');
        iconClickText22rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22212')) {
        iconClickText22rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightup3.removeEventListener("click", funcIconClick22rightup3);
}
document.addEventListener("click", funcIconClick22rightup3);

const iconClickPath22rightup4 = document.getElementById('path-2-2-right-up-4');
const iconClickText22rightup4 = document.getElementById('text-2-2-right-up-4');
const iconClickText22rightup4desc = document.getElementById('desc2213');
function funcIconClick22rightup4(event) {
    if (event.target.closest('#path-2-2-right-up-4')) {
        iconClickPath22rightup4.classList.add('сlickToChangeColor');
        iconClickText22rightup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-up-4')) {
        iconClickPath22rightup4.classList.remove('сlickToChangeColor');
        iconClickText22rightup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-up-4')) {
        iconClickText22rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-up-4')) {
        iconClickText22rightup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22213')) {
        iconClickPath22rightup4.classList.add('сlickToChangeColor');
        iconClickText22rightup4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22213')) {
        iconClickText22rightup4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightup4.removeEventListener("click", funcIconClick22rightup4);
}
document.addEventListener("click", funcIconClick22rightup4);

const iconClickPath22rightup5 = document.getElementById('path-2-2-right-up-5');
const iconClickText22rightup5 = document.getElementById('text-2-2-right-up-5');
const iconClickText22rightup5desc = document.getElementById('desc2213a');
function funcIconClick22rightup5(event) {
    if (event.target.closest('#path-2-2-right-up-5')) {
        iconClickPath22rightup5.classList.add('сlickToChangeColor');
        iconClickText22rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-up-5')) {
        iconClickPath22rightup5.classList.remove('сlickToChangeColor');
        iconClickText22rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-up-5')) {
        iconClickText22rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-up-5')) {
        iconClickText22rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22213a')) {
        iconClickPath22rightup5.classList.add('сlickToChangeColor');
        iconClickText22rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22213a')) {
        iconClickText22rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightup5.removeEventListener("click", funcIconClick22rightup5);
}
document.addEventListener("click", funcIconClick22rightup5);

const iconClickPath2214 = document.getElementById('path-2-214');
const iconClickText2214 = document.getElementById('text-2-214');
const iconClickText2214desc = document.getElementById('desc2214');
function funcIconClick2214(event) {
    if (event.target.closest('#path-2-214')) {
        iconClickPath2214.classList.add('сlickToChangeColor');
        iconClickText2214desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-214')) {
        iconClickPath2214.classList.remove('сlickToChangeColor');
        iconClickText2214desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-214')) {
        iconClickText2214.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-214')) {
        iconClickText2214.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22214')) {
        iconClickPath2214.classList.add('сlickToChangeColor');
        iconClickText2214desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22214')) {
        iconClickText2214.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2214.removeEventListener("click", funcIconClick2214);
}
document.addEventListener("click", funcIconClick2214);

const iconClickPath22rightup6 = document.getElementById('path-2-2-right-up-6');
const iconClickText22rightup6 = document.getElementById('text-2-2-right-up-6');
const iconClickText22rightup6desc = document.getElementById('desc2215');
function funcIconClick22rightup6(event) {
    if (event.target.closest('#path-2-2-right-up-6')) {
        iconClickPath22rightup6.classList.add('сlickToChangeColor');
        iconClickText22rightup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-up-6')) {
        iconClickPath22rightup6.classList.remove('сlickToChangeColor');
        iconClickText22rightup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-up-6')) {
        iconClickText22rightup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-up-6')) {
        iconClickText22rightup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22215')) {
        iconClickPath22rightup6.classList.add('сlickToChangeColor');
        iconClickText22rightup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22215')) {
        iconClickText22rightup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightup6.removeEventListener("click", funcIconClick22rightup6);
}
document.addEventListener("click", funcIconClick22rightup6);

const iconClickPath2216 = document.getElementById('path-2-216');
const iconClickText2216 = document.getElementById('text-2-216');
const iconClickText2216desc = document.getElementById('desc2216');
function funcIconClick2216(event) {
    if (event.target.closest('#path-2-216')) {
        iconClickPath2216.classList.add('сlickToChangeColor');
        iconClickText2216desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-216')) {
        iconClickPath2216.classList.remove('сlickToChangeColor');
        iconClickText2216desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-216')) {
        iconClickText2216.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-216')) {
        iconClickText2216.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22216')) {
        iconClickPath2216.classList.add('сlickToChangeColor');
        iconClickText2216desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22216')) {
        iconClickText2216.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2216.removeEventListener("click", funcIconClick2216);
}
document.addEventListener("click", funcIconClick2216);

const iconClickPath22leftdown1 = document.getElementById('path-2-2-left-down-1');
const iconClickText22leftdown1 = document.getElementById('text-2-2-left-down-1');
const iconClickText22leftdown1desc = document.getElementById('desc2228');
function funcIconClick22leftdown1(event) {
    if (event.target.closest('#path-2-2-left-down-1')) {
        iconClickPath22leftdown1.classList.add('сlickToChangeColor');
        iconClickText22leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-down-1')) {
        iconClickPath22leftdown1.classList.remove('сlickToChangeColor');
        iconClickText22leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-down-1')) {
        iconClickText22leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-down-1')) {
        iconClickText22leftdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22228')) {
        iconClickPath22leftdown1.classList.add('сlickToChangeColor');
        iconClickText22leftdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22228')) {
        iconClickText22leftdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftdown1.removeEventListener("click", funcIconClick22leftdown1);
}
document.addEventListener("click", funcIconClick22leftdown1);

const iconClickPath2227 = document.getElementById('path-2-227');
const iconClickText2227 = document.getElementById('text-2-227');
const iconClickText2227desc = document.getElementById('desc2227');
function funcIconClick2227(event) {
    if (event.target.closest('#path-2-227')) {
        iconClickPath2227.classList.add('сlickToChangeColor');
        iconClickText2227desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-227')) {
        iconClickPath2227.classList.remove('сlickToChangeColor');
        iconClickText2227desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-227')) {
        iconClickText2227.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-227')) {
        iconClickText2227.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22227')) {
        iconClickPath2227.classList.add('сlickToChangeColor');
        iconClickText2227desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22227')) {
        iconClickText2227.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2227.removeEventListener("click", funcIconClick2227);
}
document.addEventListener("click", funcIconClick2227);

const iconClickPath22leftdown2 = document.getElementById('path-2-2-left-down-2');
const iconClickText22leftdown2 = document.getElementById('text-2-2-left-down-2');
const iconClickText22leftdown2desc = document.getElementById('desc2226');
function funcIconClick22leftdown2(event) {
    if (event.target.closest('#path-2-2-left-down-2')) {
        iconClickPath22leftdown2.classList.add('сlickToChangeColor');
        iconClickText22leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-down-2')) {
        iconClickPath22leftdown2.classList.remove('сlickToChangeColor');
        iconClickText22leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-down-2')) {
        iconClickText22leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-down-2')) {
        iconClickText22leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22226')) {
        iconClickPath22leftdown2.classList.add('сlickToChangeColor');
        iconClickText22leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22226')) {
        iconClickText22leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftdown2.removeEventListener("click", funcIconClick22leftdown2);
}
document.addEventListener("click", funcIconClick22leftdown2);

const iconClickPath22leftdown3 = document.getElementById('path-2-2-left-down-3');
const iconClickText22leftdown3 = document.getElementById('text-2-2-left-down-3');
const iconClickText22leftdown3desc = document.getElementById('desc2225');
function funcIconClick22leftdown3(event) {
    if (event.target.closest('#path-2-2-left-down-3')) {
        iconClickPath22leftdown3.classList.add('сlickToChangeColor');
        iconClickText22leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-down-3')) {
        iconClickPath22leftdown3.classList.remove('сlickToChangeColor');
        iconClickText22leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-down-3')) {
        iconClickText22leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-down-3')) {
        iconClickText22leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22225')) {
        iconClickPath22leftdown3.classList.add('сlickToChangeColor');
        iconClickText22leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22225')) {
        iconClickText22leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftdown3.removeEventListener("click", funcIconClick22leftdown3);
}
document.addEventListener("click", funcIconClick22leftdown3);

const iconClickPath22leftdown6 = document.getElementById('path-2-2-left-down-6');
const iconClickText22leftdown6 = document.getElementById('text-2-2-left-down-6');
const iconClickText22leftdown6desc = document.getElementById('desc2224');
function funcIconClick22leftdown6(event) {
    if (event.target.closest('#path-2-2-left-down-6')) {
        iconClickPath22leftdown6.classList.add('сlickToChangeColor');
        iconClickText22leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-down-6')) {
        iconClickPath22leftdown6.classList.remove('сlickToChangeColor');
        iconClickText22leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-down-6')) {
        iconClickText22leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-down-6')) {
        iconClickText22leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22224')) {
        iconClickPath22leftdown6.classList.add('сlickToChangeColor');
        iconClickText22leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22224')) {
        iconClickText22leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftdown6.removeEventListener("click", funcIconClick22leftdown6);
}
document.addEventListener("click", funcIconClick22leftdown6);

const iconClickPath22leftdown7 = document.getElementById('path-2-2-left-down-7');
const iconClickText22leftdown7 = document.getElementById('text-2-2-left-down-7');
const iconClickText22leftdown7desc = document.getElementById('desc2223');
function funcIconClick22leftdown7(event) {
    if (event.target.closest('#path-2-2-left-down-7')) {
        iconClickPath22leftdown7.classList.add('сlickToChangeColor');
        iconClickText22leftdown7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-down-7')) {
        iconClickPath22leftdown7.classList.remove('сlickToChangeColor');
        iconClickText22leftdown7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-down-7')) {
        iconClickText22leftdown7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-down-7')) {
        iconClickText22leftdown7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22223')) {
        iconClickPath22leftdown7.classList.add('сlickToChangeColor');
        iconClickText22leftdown7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22223')) {
        iconClickText22leftdown7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftdown7.removeEventListener("click", funcIconClick22leftdown7);
}
document.addEventListener("click", funcIconClick22leftdown7);

const iconClickPath22leftdown8 = document.getElementById('path-2-2-left-down-8');
const iconClickText22leftdown8 = document.getElementById('text-2-2-left-down-8');
const iconClickText22leftdown8desc = document.getElementById('desc2222');
function funcIconClick22leftdown8(event) {
    if (event.target.closest('#path-2-2-left-down-8')) {
        iconClickPath22leftdown8.classList.add('сlickToChangeColor');
        iconClickText22leftdown8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-down-8')) {
        iconClickPath22leftdown8.classList.remove('сlickToChangeColor');
        iconClickText22leftdown8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-down-8')) {
        iconClickText22leftdown8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-down-8')) {
        iconClickText22leftdown8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22222')) {
        iconClickPath22leftdown8.classList.add('сlickToChangeColor');
        iconClickText22leftdown8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22222')) {
        iconClickText22leftdown8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftdown8.removeEventListener("click", funcIconClick22leftdown8);
}
document.addEventListener("click", funcIconClick22leftdown8);

const iconClickPath22rightdown1 = document.getElementById('path-2-2-right-down-1');
const iconClickText22rightdown1 = document.getElementById('text-2-2-right-down-1');
const iconClickText22rightdown1desc = document.getElementById('desc2221a');
function funcIconClick22rightdown1(event) {
    if (event.target.closest('#path-2-2-right-down-1')) {
        iconClickPath22rightdown1.classList.add('сlickToChangeColor');
        iconClickText22rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-down-1')) {
        iconClickPath22rightdown1.classList.remove('сlickToChangeColor');
        iconClickText22rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-down-1')) {
        iconClickText22rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-down-1')) {
        iconClickText22rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22221a')) {
        iconClickPath22rightdown1.classList.add('сlickToChangeColor');
        iconClickText22rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22221a')) {
        iconClickText22rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightdown1.removeEventListener("click", funcIconClick22rightdown1);
}
document.addEventListener("click", funcIconClick22rightdown1);

const iconClickPath22rightdown2 = document.getElementById('path-2-2-right-down-2');
const iconClickText22rightdown2 = document.getElementById('text-2-2-right-down-2');
const iconClickText22rightdown2desc = document.getElementById('desc2221');
function funcIconClick22rightdown2(event) {
    if (event.target.closest('#path-2-2-right-down-2')) {
        iconClickPath22rightdown2.classList.add('сlickToChangeColor');
        iconClickText22rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-down-2')) {
        iconClickPath22rightdown2.classList.remove('сlickToChangeColor');
        iconClickText22rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-down-2')) {
        iconClickText22rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-down-2')) {
        iconClickText22rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22221')) {
        iconClickPath22rightdown2.classList.add('сlickToChangeColor');
        iconClickText22rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22221')) {
        iconClickText22rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightdown2.removeEventListener("click", funcIconClick22rightdown2);
}
document.addEventListener("click", funcIconClick22rightdown2);

const iconClickPath22rightdown3 = document.getElementById('path-2-2-right-down-3');
const iconClickText22rightdown3 = document.getElementById('text-2-2-right-down-3');
const iconClickText22rightdown3desc = document.getElementById('desc2220');
function funcIconClick22rightdown3(event) {
    if (event.target.closest('#path-2-2-right-down-3')) {
        iconClickPath22rightdown3.classList.add('сlickToChangeColor');
        iconClickText22rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-down-3')) {
        iconClickPath22rightdown3.classList.remove('сlickToChangeColor');
        iconClickText22rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-down-3')) {
        iconClickText22rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-down-3')) {
        iconClickText22rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22220')) {
        iconClickPath22rightdown3.classList.add('сlickToChangeColor');
        iconClickText22rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22220')) {
        iconClickText22rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightdown3.removeEventListener("click", funcIconClick22rightdown3);
}
document.addEventListener("click", funcIconClick22rightdown3);

const iconClickPath22rightdown4 = document.getElementById('path-2-2-right-down-4');
const iconClickText22rightdown4 = document.getElementById('text-2-2-right-down-4');
const iconClickText22rightdown4desc = document.getElementById('desc2219');
function funcIconClick22rightdown4(event) {
    if (event.target.closest('#path-2-2-right-down-4')) {
        iconClickPath22rightdown4.classList.add('сlickToChangeColor');
        iconClickText22rightdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-down-4')) {
        iconClickPath22rightdown4.classList.remove('сlickToChangeColor');
        iconClickText22rightdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-down-4')) {
        iconClickText22rightdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-down-4')) {
        iconClickText22rightdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22219')) {
        iconClickPath22rightdown4.classList.add('сlickToChangeColor');
        iconClickText22rightdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22219')) {
        iconClickText22rightdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightdown4.removeEventListener("click", funcIconClick22rightdown4);
}
document.addEventListener("click", funcIconClick22rightdown4);

const iconClickPath22rightdown5 = document.getElementById('path-2-2-right-down-5');
const iconClickText22rightdown5 = document.getElementById('text-2-2-right-down-5');
const iconClickText22rightdown5desc = document.getElementById('desc2218');
function funcIconClick22rightdown5(event) {
    if (event.target.closest('#path-2-2-right-down-5')) {
        iconClickPath22rightdown5.classList.add('сlickToChangeColor');
        iconClickText22rightdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-right-down-5')) {
        iconClickPath22rightdown5.classList.remove('сlickToChangeColor');
        iconClickText22rightdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-2-right-down-5')) {
        iconClickText22rightdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-right-down-5')) {
        iconClickText22rightdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22218')) {
        iconClickPath22rightdown5.classList.add('сlickToChangeColor');
        iconClickText22rightdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22218')) {
        iconClickText22rightdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22rightdown5.removeEventListener("click", funcIconClick22rightdown5);
}
document.addEventListener("click", funcIconClick22rightdown5);

const iconClickPath2217 = document.getElementById('path-2-217');
const iconClickText2217 = document.getElementById('text-2-217');
const iconClickText2217desc = document.getElementById('desc2217');
function funcIconClick2217(event) {
    if (event.target.closest('#path-2-217')) {
        iconClickPath2217.classList.add('сlickToChangeColor');
        iconClickText2217desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-217')) {
        iconClickPath2217.classList.remove('сlickToChangeColor');
        iconClickText2217desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-217')) {
        iconClickText2217.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-217')) {
        iconClickText2217.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-22217')) {
        iconClickPath2217.classList.add('сlickToChangeColor');
        iconClickText2217desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'block';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.add("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-22217')) {
        iconClickText2217.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2217.removeEventListener("click", funcIconClick2217);
}
document.addEventListener("click", funcIconClick2217);

// building2floor3 -----------------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath23leftup1 = document.getElementById('path-2-3-left-up-1');
const iconClickText23leftup1 = document.getElementById('text-2-3-left-up-1');
const iconClickText23leftup1desc = document.getElementById('desc2300');
function funcIconClick23leftup1(event) {
    if (event.target.closest('#path-2-3-left-up-1')) {
        iconClickPath23leftup1.classList.add('сlickToChangeColor');
        iconClickText23leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-1')) {
        iconClickPath23leftup1.classList.remove('сlickToChangeColor');
        iconClickText23leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-1')) {
        iconClickText23leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-1')) {
        iconClickText23leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23300')) {
        iconClickPath23leftup1.classList.add('сlickToChangeColor');
        iconClickText23leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23300')) {
        iconClickText23leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup1.removeEventListener("click", funcIconClick23leftup1);
}
document.addEventListener("click", funcIconClick23leftup1);

const iconClickPath23leftup2 = document.getElementById('path-2-3-left-up-2');
const iconClickText23leftup2 = document.getElementById('text-2-3-left-up-2');
const iconClickText23leftup2desc = document.getElementById('desc2301a');
function funcIconClick23leftup2(event) {
    if (event.target.closest('#path-2-3-left-up-2')) {
        iconClickPath23leftup2.classList.add('сlickToChangeColor');
        iconClickText23leftup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-2')) {
        iconClickPath23leftup2.classList.remove('сlickToChangeColor');
        iconClickText23leftup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-2')) {
        iconClickText23leftup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-2')) {
        iconClickText23leftup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23301a')) {
        iconClickPath23leftup2.classList.add('сlickToChangeColor');
        iconClickText23leftup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23301a')) {
        iconClickText23leftup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup2.removeEventListener("click", funcIconClick23leftup2);
}
document.addEventListener("click", funcIconClick23leftup2);

const iconClickPath23leftup3 = document.getElementById('path-2-3-left-up-3');
const iconClickText23leftup3 = document.getElementById('text-2-3-left-up-3');
const iconClickText23leftup3desc = document.getElementById('desc2301');
function funcIconClick23leftup3(event) {
    if (event.target.closest('#path-2-3-left-up-3')) {
        iconClickPath23leftup3.classList.add('сlickToChangeColor');
        iconClickText23leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-3')) {
        iconClickPath23leftup3.classList.remove('сlickToChangeColor');
        iconClickText23leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-3')) {
        iconClickText23leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-3')) {
        iconClickText23leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23301')) {
        iconClickPath23leftup3.classList.add('сlickToChangeColor');
        iconClickText23leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23301')) {
        iconClickText23leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup3.removeEventListener("click", funcIconClick23leftup3);
}
document.addEventListener("click", funcIconClick23leftup3);

const iconClickPath23leftup5 = document.getElementById('path-2-3-left-up-5');
const iconClickText23leftup5 = document.getElementById('text-2-3-left-up-5');
const iconClickText23leftup5desc = document.getElementById('desc2302');
function funcIconClick23leftup5(event) {
    if (event.target.closest('#path-2-3-left-up-5')) {
        iconClickPath23leftup5.classList.add('сlickToChangeColor');
        iconClickText23leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-5')) {
        iconClickPath23leftup5.classList.remove('сlickToChangeColor');
        iconClickText23leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-5')) {
        iconClickText23leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-5')) {
        iconClickText23leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23302')) {
        iconClickPath23leftup5.classList.add('сlickToChangeColor');
        iconClickText23leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23302')) {
        iconClickText23leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup5.removeEventListener("click", funcIconClick23leftup5);
}
document.addEventListener("click", funcIconClick23leftup5);

const iconClickPath23leftup6 = document.getElementById('path-2-3-left-up-6');
const iconClickText23leftup6 = document.getElementById('text-2-3-left-up-6');
const iconClickText23leftup6desc = document.getElementById('desc2303');
function funcIconClick23leftup6(event) {
    if (event.target.closest('#path-2-3-left-up-6')) {
        iconClickPath23leftup6.classList.add('сlickToChangeColor');
        iconClickText23leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-6')) {
        iconClickPath23leftup6.classList.remove('сlickToChangeColor');
        iconClickText23leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-6')) {
        iconClickText23leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-6')) {
        iconClickText23leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23303')) {
        iconClickPath23leftup6.classList.add('сlickToChangeColor');
        iconClickText23leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23303')) {
        iconClickText23leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup6.removeEventListener("click", funcIconClick23leftup6);
}
document.addEventListener("click", funcIconClick23leftup6);

const iconClickPath23leftup7 = document.getElementById('path-2-3-left-up-7');
const iconClickText23leftup7 = document.getElementById('text-2-3-left-up-7');
const iconClickText23leftup7desc = document.getElementById('desc2304');
function funcIconClick23leftup7(event) {
    if (event.target.closest('#path-2-3-left-up-7')) {
        iconClickPath23leftup7.classList.add('сlickToChangeColor');
        iconClickText23leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-7')) {
        iconClickPath23leftup7.classList.remove('сlickToChangeColor');
        iconClickText23leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-7')) {
        iconClickText23leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-7')) {
        iconClickText23leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23304')) {
        iconClickPath23leftup7.classList.add('сlickToChangeColor');
        iconClickText23leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23304')) {
        iconClickText23leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup7.removeEventListener("click", funcIconClick23leftup7);
}
document.addEventListener("click", funcIconClick23leftup7);

const iconClickPath23leftup8 = document.getElementById('path-2-3-left-up-8');
const iconClickText23leftup8 = document.getElementById('text-2-3-left-up-8');
const iconClickText23leftup8desc = document.getElementById('desc2306');
function funcIconClick23leftup8(event) {
    if (event.target.closest('#path-2-3-left-up-8')) {
        iconClickPath23leftup8.classList.add('сlickToChangeColor');
        iconClickText23leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-8')) {
        iconClickPath23leftup8.classList.remove('сlickToChangeColor');
        iconClickText23leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-8')) {
        iconClickText23leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-8')) {
        iconClickText23leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23306')) {
        iconClickPath23leftup8.classList.add('сlickToChangeColor');
        iconClickText23leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23306')) {
        iconClickText23leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup8.removeEventListener("click", funcIconClick23leftup8);
}
document.addEventListener("click", funcIconClick23leftup8);

const iconClickPath23rightup1 = document.getElementById('path-2-3-right-up-1');
const iconClickText23rightup1 = document.getElementById('text-2-3-right-up-1');
const iconClickText23rightup1desc = document.getElementById('desc2307');
function funcIconClick23rightup1(event) {
    if (event.target.closest('#path-2-3-right-up-1')) {
        iconClickPath23rightup1.classList.add('сlickToChangeColor');
        iconClickText23rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-up-1')) {
        iconClickPath23rightup1.classList.remove('сlickToChangeColor');
        iconClickText23rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-up-1')) {
        iconClickText23rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-1')) {
        iconClickText23rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23307')) {
        iconClickPath23rightup1.classList.add('сlickToChangeColor');
        iconClickText23rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23307')) {
        iconClickText23rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightup1.removeEventListener("click", funcIconClick23rightup1);
}
document.addEventListener("click", funcIconClick23rightup1);

const iconClickPath23rightup2 = document.getElementById('path-2-3-right-up-2');
const iconClickText23rightup2 = document.getElementById('text-2-3-right-up-2');
const iconClickText23rightup2desc = document.getElementById('desc2308');
function funcIconClick23rightup2(event) {
    if (event.target.closest('#path-2-3-right-up-2')) {
        iconClickPath23rightup2.classList.add('сlickToChangeColor');
        iconClickText23rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-up-2')) {
        iconClickPath23rightup2.classList.remove('сlickToChangeColor');
        iconClickText23rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-up-2')) {
        iconClickText23rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-2')) {
        iconClickText23rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23308')) {
        iconClickPath23rightup2.classList.add('сlickToChangeColor');
        iconClickText23rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23308')) {
        iconClickText23rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightup2.removeEventListener("click", funcIconClick23rightup2);
}
document.addEventListener("click", funcIconClick23rightup2);

const iconClickPath23rightup3 = document.getElementById('path-2-3-right-up-3');
const iconClickText23rightup3 = document.getElementById('text-2-3-right-up-3');
const iconClickText23rightup3desc = document.getElementById('desc2309');
function funcIconClick23rightup3(event) {
    if (event.target.closest('#path-2-3-right-up-3')) {
        iconClickPath23rightup3.classList.add('сlickToChangeColor');
        iconClickText23rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-up-3')) {
        iconClickPath23rightup3.classList.remove('сlickToChangeColor');
        iconClickText23rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-up-3')) {
        iconClickText23rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-3')) {
        iconClickText23rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23309')) {
        iconClickPath23rightup3.classList.add('сlickToChangeColor');
        iconClickText23rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23309')) {
        iconClickText23rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightup3.removeEventListener("click", funcIconClick23rightup3);
}
document.addEventListener("click", funcIconClick23rightup3);

const iconClickPath23rightup5 = document.getElementById('path-2-3-right-up-5');
const iconClickText23rightup5 = document.getElementById('text-2-3-right-up-5');
const iconClickText23rightup5desc = document.getElementById('desc2310');
function funcIconClick23rightup5(event) {
    if (event.target.closest('#path-2-3-right-up-5')) {
        iconClickPath23rightup5.classList.add('сlickToChangeColor');
        iconClickText23rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-up-5')) {
        iconClickPath23rightup5.classList.remove('сlickToChangeColor');
        iconClickText23rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-up-5')) {
        iconClickText23rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-5')) {
        iconClickText23rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23310')) {
        iconClickPath23rightup5.classList.add('сlickToChangeColor');
        iconClickText23rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23310')) {
        iconClickText23rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightup5.removeEventListener("click", funcIconClick23rightup5);
}
document.addEventListener("click", funcIconClick23rightup5);

const iconClickPath23rightup7 = document.getElementById('path-2-3-right-up-7');
const iconClickText23rightup7 = document.getElementById('text-2-3-right-up-7');
const iconClickText23rightup7desc = document.getElementById('desc2311');
function funcIconClick23rightup7(event) {
    if (event.target.closest('#path-2-3-right-up-7')) {
        iconClickPath23rightup7.classList.add('сlickToChangeColor');
        iconClickText23rightup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-up-7')) {
        iconClickPath23rightup7.classList.remove('сlickToChangeColor');
        iconClickText23rightup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-up-7')) {
        iconClickText23rightup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-7')) {
        iconClickText23rightup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23311')) {
        iconClickPath23rightup7.classList.add('сlickToChangeColor');
        iconClickText23rightup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23311')) {
        iconClickText23rightup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightup7.removeEventListener("click", funcIconClick23rightup7);
}
document.addEventListener("click", funcIconClick23rightup7);

const iconClickPath23leftdown1 = document.getElementById('path-2-3-left-down-1');
const iconClickText23leftdown1 = document.getElementById('text-2-3-left-down-1');
const iconClickText23leftdown1desc = document.getElementById('desc2331');
function funcIconClick23leftdown1(event) {
    if (event.target.closest('#path-2-3-left-down-1')) {
        iconClickPath23leftdown1.classList.add('сlickToChangeColor');
        iconClickText23leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-1')) {
        iconClickPath23leftdown1.classList.remove('сlickToChangeColor');
        iconClickText23leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-1')) {
        iconClickText23leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-1')) {
        iconClickText23leftdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23331')) {
        iconClickPath23leftdown1.classList.add('сlickToChangeColor');
        iconClickText23leftdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23331')) {
        iconClickText23leftdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown1.removeEventListener("click", funcIconClick23leftdown1);
}
document.addEventListener("click", funcIconClick23leftdown1);

const iconClickPath23leftdown2 = document.getElementById('path-2-3-left-down-2');
const iconClickText23leftdown2 = document.getElementById('text-2-3-left-down-2');
const iconClickText23leftdown2desc = document.getElementById('desc2330a');
function funcIconClick23leftdown2(event) {
    if (event.target.closest('#path-2-3-left-down-2')) {
        iconClickPath23leftdown2.classList.add('сlickToChangeColor');
        iconClickText23leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-2')) {
        iconClickPath23leftdown2.classList.remove('сlickToChangeColor');
        iconClickText23leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-2')) {
        iconClickText23leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-2')) {
        iconClickText23leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23330a')) {
        iconClickPath23leftdown2.classList.add('сlickToChangeColor');
        iconClickText23leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23330a')) {
        iconClickText23leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown2.removeEventListener("click", funcIconClick23leftdown2);
}
document.addEventListener("click", funcIconClick23leftdown2);

const iconClickPath2330 = document.getElementById('path-2-330');
const iconClickText2330 = document.getElementById('text-2-330');
const iconClickText2330desc = document.getElementById('desc2330');
function funcIconClick2330(event) {
    if (event.target.closest('#path-2-330')) {
        iconClickPath2330.classList.add('сlickToChangeColor');
        iconClickText2330desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-330')) {
        iconClickPath2330.classList.remove('сlickToChangeColor');
        iconClickText2330desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-330')) {
        iconClickText2330.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-330')) {
        iconClickText2330.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23330')) {
        iconClickPath2330.classList.add('сlickToChangeColor');
        iconClickText2330desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23330')) {
        iconClickText2330.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2330.removeEventListener("click", funcIconClick2330);
}
document.addEventListener("click", funcIconClick2330);

const iconClickPath23leftdown3 = document.getElementById('path-2-3-left-down-3');
const iconClickText23leftdown3 = document.getElementById('text-2-3-left-down-3');
const iconClickText23leftdown3desc = document.getElementById('desc2329a');
function funcIconClick23leftdown3(event) {
    if (event.target.closest('#path-2-3-left-down-3')) {
        iconClickPath23leftdown3.classList.add('сlickToChangeColor');
        iconClickText23leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-3')) {
        iconClickPath23leftdown3.classList.remove('сlickToChangeColor');
        iconClickText23leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-3')) {
        iconClickText23leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-3')) {
        iconClickText23leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23329a')) {
        iconClickPath23leftdown3.classList.add('сlickToChangeColor');
        iconClickText23leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23329a')) {
        iconClickText23leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown3.removeEventListener("click", funcIconClick23leftdown3);
}
document.addEventListener("click", funcIconClick23leftdown3);

const iconClickPath23leftdown4 = document.getElementById('path-2-3-left-down-4');
const iconClickText23leftdown4 = document.getElementById('text-2-3-left-down-4');
const iconClickText23leftdown4desc = document.getElementById('desc2329');
function funcIconClick23leftdown4(event) {
    if (event.target.closest('#path-2-3-left-down-4')) {
        iconClickPath23leftdown4.classList.add('сlickToChangeColor');
        iconClickText23leftdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-4')) {
        iconClickPath23leftdown4.classList.remove('сlickToChangeColor');
        iconClickText23leftdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-4')) {
        iconClickText23leftdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-4')) {
        iconClickText23leftdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23329')) {
        iconClickPath23leftdown4.classList.add('сlickToChangeColor');
        iconClickText23leftdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23329')) {
        iconClickText23leftdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown4.removeEventListener("click", funcIconClick23leftdown4);
}
document.addEventListener("click", funcIconClick23leftdown4);

const iconClickPath23leftdown5 = document.getElementById('path-2-3-left-down-5');
const iconClickText23leftdown5 = document.getElementById('text-2-3-left-down-5');
const iconClickText23leftdown5desc = document.getElementById('desc2328');
function funcIconClick23leftdown5(event) {
    if (event.target.closest('#path-2-3-left-down-5')) {
        iconClickPath23leftdown5.classList.add('сlickToChangeColor');
        iconClickText23leftdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-5')) {
        iconClickPath23leftdown5.classList.remove('сlickToChangeColor');
        iconClickText23leftdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-5')) {
        iconClickText23leftdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-5')) {
        iconClickText23leftdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23328')) {
        iconClickPath23leftdown5.classList.add('сlickToChangeColor');
        iconClickText23leftdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23328')) {
        iconClickText23leftdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown5.removeEventListener("click", funcIconClick23leftdown5);
}
document.addEventListener("click", funcIconClick23leftdown5);

const iconClickPath23leftdown6 = document.getElementById('path-2-3-left-down-6');
const iconClickText23leftdown6 = document.getElementById('text-2-3-left-down-6');
const iconClickText23leftdown6desc = document.getElementById('desc2327');
function funcIconClick23leftdown6(event) {
    if (event.target.closest('#path-2-3-left-down-6')) {
        iconClickPath23leftdown6.classList.add('сlickToChangeColor');
        iconClickText23leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-6')) {
        iconClickPath23leftdown6.classList.remove('сlickToChangeColor');
        iconClickText23leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-6')) {
        iconClickText23leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-6')) {
        iconClickText23leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23327')) {
        iconClickPath23leftdown6.classList.add('сlickToChangeColor');
        iconClickText23leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23327')) {
        iconClickText23leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown6.removeEventListener("click", funcIconClick23leftdown6);
}
document.addEventListener("click", funcIconClick23leftdown6);

const iconClickPath23leftdown7 = document.getElementById('path-2-3-left-down-7');
const iconClickText23leftdown7 = document.getElementById('text-2-3-left-down-7');
const iconClickText23leftdown7desc = document.getElementById('desc2326');
function funcIconClick23leftdown7(event) {
    if (event.target.closest('#path-2-3-left-down-7')) {
        iconClickPath23leftdown7.classList.add('сlickToChangeColor');
        iconClickText23leftdown7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-down-7')) {
        iconClickPath23leftdown7.classList.remove('сlickToChangeColor');
        iconClickText23leftdown7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-down-7')) {
        iconClickText23leftdown7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-down-7')) {
        iconClickText23leftdown7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23326')) {
        iconClickPath23leftdown7.classList.add('сlickToChangeColor');
        iconClickText23leftdown7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23326')) {
        iconClickText23leftdown7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftdown7.removeEventListener("click", funcIconClick23leftdown7);
}
document.addEventListener("click", funcIconClick23leftdown7);

const iconClickPath23rightdown1 = document.getElementById('path-2-3-right-down-1');
const iconClickText23rightdown1 = document.getElementById('text-2-3-right-down-1');
const iconClickText23rightdown1desc = document.getElementById('desc2315');
function funcIconClick23rightdown1(event) {
    if (event.target.closest('#path-2-3-right-down-1')) {
        iconClickPath23rightdown1.classList.add('сlickToChangeColor');
        iconClickText23rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-down-1')) {
        iconClickPath23rightdown1.classList.remove('сlickToChangeColor');
        iconClickText23rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-down-1')) {
        iconClickText23rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-down-1')) {
        iconClickText23rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23315')) {
        iconClickPath23rightdown1.classList.add('сlickToChangeColor');
        iconClickText23rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23315')) {
        iconClickText23rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightdown1.removeEventListener("click", funcIconClick23rightdown1);
}
document.addEventListener("click", funcIconClick23rightdown1);

const iconClickPath23rightdown2 = document.getElementById('path-2-3-right-down-2');
const iconClickText23rightdown2 = document.getElementById('text-2-3-right-down-2');
const iconClickText23rightdown2desc = document.getElementById('desc2314');
function funcIconClick23rightdown2(event) {
    if (event.target.closest('#path-2-3-right-down-2')) {
        iconClickPath23rightdown2.classList.add('сlickToChangeColor');
        iconClickText23rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-down-2')) {
        iconClickPath23rightdown2.classList.remove('сlickToChangeColor');
        iconClickText23rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-down-2')) {
        iconClickText23rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-down-2')) {
        iconClickText23rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23314')) {
        iconClickPath23rightdown2.classList.add('сlickToChangeColor');
        iconClickText23rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23314')) {
        iconClickText23rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightdown2.removeEventListener("click", funcIconClick23rightdown2);
}
document.addEventListener("click", funcIconClick23rightdown2);

const iconClickPath23rightdown3 = document.getElementById('path-2-3-right-down-3');
const iconClickText23rightdown3 = document.getElementById('text-2-3-right-down-3');
const iconClickText23rightdown3desc = document.getElementById('desc2312');
function funcIconClick23rightdown3(event) {
    if (event.target.closest('#path-2-3-right-down-3')) {
        iconClickPath23rightdown3.classList.add('сlickToChangeColor');
        iconClickText23rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-down-3')) {
        iconClickPath23rightdown3.classList.remove('сlickToChangeColor');
        iconClickText23rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-down-3')) {
        iconClickText23rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-down-3')) {
        iconClickText23rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23312')) {
        iconClickPath23rightdown3.classList.add('сlickToChangeColor');
        iconClickText23rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23312')) {
        iconClickText23rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightdown3.removeEventListener("click", funcIconClick23rightdown3);
}
document.addEventListener("click", funcIconClick23rightdown3);

const iconClickPath23straightleft1 = document.getElementById('path-2-3-straight-left-1');
const iconClickText23straightleft1 = document.getElementById('text-2-3-straight-left-1');
const iconClickText23straightleft1desc = document.getElementById('desc2325');
function funcIconClick23straightleft1(event) {
    if (event.target.closest('#path-2-3-straight-left-1')) {
        iconClickPath23straightleft1.classList.add('сlickToChangeColor');
        iconClickText23straightleft1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-left-1')) {
        iconClickPath23straightleft1.classList.remove('сlickToChangeColor');
        iconClickText23straightleft1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-left-1')) {
        iconClickText23straightleft1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-left-1')) {
        iconClickText23straightleft1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23325')) {
        iconClickPath23straightleft1.classList.add('сlickToChangeColor');
        iconClickText23straightleft1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23325')) {
        iconClickText23straightleft1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightleft1.removeEventListener("click", funcIconClick23straightleft1);
}
document.addEventListener("click", funcIconClick23straightleft1);

const iconClickPath23straightleft2 = document.getElementById('path-2-3-straight-left-2');
const iconClickText23straightleft2 = document.getElementById('text-2-3-straight-left-2');
const iconClickText23straightleft2desc = document.getElementById('desc2324');
function funcIconClick23straightleft2(event) {
    if (event.target.closest('#path-2-3-straight-left-2')) {
        iconClickPath23straightleft2.classList.add('сlickToChangeColor');
        iconClickText23straightleft2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-left-2')) {
        iconClickPath23straightleft2.classList.remove('сlickToChangeColor');
        iconClickText23straightleft2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-left-2')) {
        iconClickText23straightleft2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-left-2')) {
        iconClickText23straightleft2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23324')) {
        iconClickPath23straightleft2.classList.add('сlickToChangeColor');
        iconClickText23straightleft2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23324')) {
        iconClickText23straightleft2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightleft2.removeEventListener("click", funcIconClick23straightleft2);
}
document.addEventListener("click", funcIconClick23straightleft2);

const iconClickPath23straightleft3 = document.getElementById('path-2-3-straight-left-3');
const iconClickText23straightleft3 = document.getElementById('text-2-3-straight-left-3');
const iconClickText23straightleft3desc = document.getElementById('desc2323');
function funcIconClick23straightleft3(event) {
    if (event.target.closest('#path-2-3-straight-left-3')) {
        iconClickPath23straightleft3.classList.add('сlickToChangeColor');
        iconClickText23straightleft3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-left-3')) {
        iconClickPath23straightleft3.classList.remove('сlickToChangeColor');
        iconClickText23straightleft3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-left-3')) {
        iconClickText23straightleft3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-left-3')) {
        iconClickText23straightleft3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23323')) {
        iconClickPath23straightleft3.classList.add('сlickToChangeColor');
        iconClickText23straightleft3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23323')) {
        iconClickText23straightleft3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightleft3.removeEventListener("click", funcIconClick23straightleft3);
}
document.addEventListener("click", funcIconClick23straightleft3);

const iconClickPath23straightleft4 = document.getElementById('path-2-3-straight-left-4');
const iconClickText23straightleft4 = document.getElementById('text-2-3-straight-left-4');
const iconClickText23straightleft4desc = document.getElementById('desc2322');
function funcIconClick23straightleft4(event) {
    if (event.target.closest('#path-2-3-straight-left-4')) {
        iconClickPath23straightleft4.classList.add('сlickToChangeColor');
        iconClickText23straightleft4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-left-4')) {
        iconClickPath23straightleft4.classList.remove('сlickToChangeColor');
        iconClickText23straightleft4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-left-4')) {
        iconClickText23straightleft4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-left-4')) {
        iconClickText23straightleft4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23322')) {
        iconClickPath23straightleft4.classList.add('сlickToChangeColor');
        iconClickText23straightleft4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23322')) {
        iconClickText23straightleft4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightleft4.removeEventListener("click", funcIconClick23straightleft4);
}
document.addEventListener("click", funcIconClick23straightleft4);

const iconClickPath23straightleft5 = document.getElementById('path-2-3-straight-left-5');
const iconClickText23straightleft5 = document.getElementById('text-2-3-straight-left-5');
const iconClickText23straightleft5desc = document.getElementById('desc2321');
function funcIconClick23straightleft5(event) {
    if (event.target.closest('#path-2-3-straight-left-5')) {
        iconClickPath23straightleft5.classList.add('сlickToChangeColor');
        iconClickText23straightleft5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-left-5')) {
        iconClickPath23straightleft5.classList.remove('сlickToChangeColor');
        iconClickText23straightleft5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-left-5')) {
        iconClickText23straightleft5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-left-5')) {
        iconClickText23straightleft5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23321')) {
        iconClickPath23straightleft5.classList.add('сlickToChangeColor');
        iconClickText23straightleft5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23321')) {
        iconClickText23straightleft5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightleft5.removeEventListener("click", funcIconClick23straightleft5);
}
document.addEventListener("click", funcIconClick23straightleft5);

const iconClickPath23straightright1 = document.getElementById('path-2-3-straight-right-1');
const iconClickText23straightright1 = document.getElementById('text-2-3-straight-right-1');
const iconClickText23straightright1desc = document.getElementById('desc2316');
function funcIconClick23straightright1(event) {
    if (event.target.closest('#path-2-3-straight-right-1')) {
        iconClickPath23straightright1.classList.add('сlickToChangeColor');
        iconClickText23straightright1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-right-1')) {
        iconClickPath23straightright1.classList.remove('сlickToChangeColor');
        iconClickText23straightright1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-right-1')) {
        iconClickText23straightright1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-right-1')) {
        iconClickText23straightright1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23316')) {
        iconClickPath23straightright1.classList.add('сlickToChangeColor');
        iconClickText23straightright1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23316')) {
        iconClickText23straightright1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightright1.removeEventListener("click", funcIconClick23straightright1);
}
document.addEventListener("click", funcIconClick23straightright1);

const iconClickPath23straightright3 = document.getElementById('path-2-3-straight-right-3');
const iconClickText23straightright3 = document.getElementById('text-2-3-straight-right-3');
const iconClickText23straightright3desc = document.getElementById('desc2317');
function funcIconClick23straightright3(event) {
    if (event.target.closest('#path-2-3-straight-right-3')) {
        iconClickPath23straightright3.classList.add('сlickToChangeColor');
        iconClickText23straightright3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-right-3')) {
        iconClickPath23straightright3.classList.remove('сlickToChangeColor');
        iconClickText23straightright3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-right-3')) {
        iconClickText23straightright3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-right-3')) {
        iconClickText23straightright3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23317')) {
        iconClickPath23straightright3.classList.add('сlickToChangeColor');
        iconClickText23straightright3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23317')) {
        iconClickText23straightright3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightright3.removeEventListener("click", funcIconClick23straightright3);
}
document.addEventListener("click", funcIconClick23straightright3);

const iconClickPath23straightright4 = document.getElementById('path-2-3-straight-right-4');
const iconClickText23straightright4 = document.getElementById('text-2-3-straight-right-4');
const iconClickText23straightright4desc = document.getElementById('desc2318');
function funcIconClick23straightright4(event) {
    if (event.target.closest('#path-2-3-straight-right-4')) {
        iconClickPath23straightright4.classList.add('сlickToChangeColor');
        iconClickText23straightright4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-right-4')) {
        iconClickPath23straightright4.classList.remove('сlickToChangeColor');
        iconClickText23straightright4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-right-4')) {
        iconClickText23straightright4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-right-4')) {
        iconClickText23straightright4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23318')) {
        iconClickPath23straightright4.classList.add('сlickToChangeColor');
        iconClickText23straightright4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23318')) {
        iconClickText23straightright4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightright4.removeEventListener("click", funcIconClick23straightright4);
}
document.addEventListener("click", funcIconClick23straightright4);

const iconClickPath23straightright5 = document.getElementById('path-2-3-straight-right-5');
const iconClickText23straightright5 = document.getElementById('text-2-3-straight-right-5');
const iconClickText23straightright5desc = document.getElementById('desc2319');
function funcIconClick23straightright5(event) {
    if (event.target.closest('#path-2-3-straight-right-5')) {
        iconClickPath23straightright5.classList.add('сlickToChangeColor');
        iconClickText23straightright5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-right-5')) {
        iconClickPath23straightright5.classList.remove('сlickToChangeColor');
        iconClickText23straightright5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-right-5')) {
        iconClickText23straightright5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-right-5')) {
        iconClickText23straightright5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23319')) {
        iconClickPath23straightright5.classList.add('сlickToChangeColor');
        iconClickText23straightright5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23319')) {
        iconClickText23straightright5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightright5.removeEventListener("click", funcIconClick23straightright5);
}
document.addEventListener("click", funcIconClick23straightright5);

const iconClickPath23straightright6 = document.getElementById('path-2-3-straight-right-6');
const iconClickText23straightright6 = document.getElementById('text-2-3-straight-right-6');
const iconClickText23straightright6desc = document.getElementById('desc2320');
function funcIconClick23straightright6(event) {
    if (event.target.closest('#path-2-3-straight-right-6')) {
        iconClickPath23straightright6.classList.add('сlickToChangeColor');
        iconClickText23straightright6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-straight-right-6')) {
        iconClickPath23straightright6.classList.remove('сlickToChangeColor');
        iconClickText23straightright6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-3-straight-right-6')) {
        iconClickText23straightright6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-straight-right-6')) {
        iconClickText23straightright6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-23320')) {
        iconClickPath23straightright6.classList.add('сlickToChangeColor');
        iconClickText23straightright6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'block';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.add("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-23320')) {
        iconClickText23straightright6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23straightright6.removeEventListener("click", funcIconClick23straightright6);
}
document.addEventListener("click", funcIconClick23straightright6);

// building2floor4 ----------------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath24leftup1 = document.getElementById('path-2-4-left-up-1');
const iconClickText24leftup1 = document.getElementById('text-2-4-left-up-1');
const iconClickText24leftup1desc = document.getElementById('desc2400a');
function funcIconClick24leftup1(event) {
    if (event.target.closest('#path-2-4-left-up-1')) {
        iconClickPath24leftup1.classList.add('сlickToChangeColor');
        iconClickText24leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-1')) {
        iconClickPath24leftup1.classList.remove('сlickToChangeColor');
        iconClickText24leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-1')) {
        iconClickText24leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-1')) {
        iconClickText24leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24400a')) {
        iconClickPath24leftup1.classList.add('сlickToChangeColor');
        iconClickText24leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24400a')) {
        iconClickText24leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup1.removeEventListener("click", funcIconClick24leftup1);
}
document.addEventListener("click", funcIconClick24leftup1);

const iconClickPath24leftup2 = document.getElementById('path-2-4-left-up-2');
const iconClickText24leftup2 = document.getElementById('text-2-4-left-up-2');
const iconClickText24leftup2desc = document.getElementById('desc2400');
function funcIconClick24leftup2(event) {
    if (event.target.closest('#path-2-4-left-up-2')) {
        iconClickPath24leftup2.classList.add('сlickToChangeColor');
        iconClickText24leftup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-2')) {
        iconClickPath24leftup2.classList.remove('сlickToChangeColor');
        iconClickText24leftup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-2')) {
        iconClickText24leftup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-2')) {
        iconClickText24leftup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24400')) {
        iconClickPath24leftup2.classList.add('сlickToChangeColor');
        iconClickText24leftup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24400')) {
        iconClickText24leftup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup2.removeEventListener("click", funcIconClick24leftup2);
}
document.addEventListener("click", funcIconClick24leftup2);

const iconClickPath24leftup3 = document.getElementById('path-2-4-left-up-3');
const iconClickText24leftup3 = document.getElementById('text-2-4-left-up-3');
const iconClickText24leftup3desc = document.getElementById('desc2401');
function funcIconClick24leftup3(event) {
    if (event.target.closest('#path-2-4-left-up-3')) {
        iconClickPath24leftup3.classList.add('сlickToChangeColor');
        iconClickText24leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-3')) {
        iconClickPath24leftup3.classList.remove('сlickToChangeColor');
        iconClickText24leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-3')) {
        iconClickText24leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-3')) {
        iconClickText24leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24401')) {
        iconClickPath24leftup3.classList.add('сlickToChangeColor');
        iconClickText24leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24401')) {
        iconClickText24leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup3.removeEventListener("click", funcIconClick24leftup3);
}
document.addEventListener("click", funcIconClick24leftup3);

const iconClickPath24leftup5 = document.getElementById('path-2-4-left-up-5');
const iconClickText24leftup5 = document.getElementById('text-2-4-left-up-5');
const iconClickText24leftup5desc = document.getElementById('desc2404');
function funcIconClick24leftup5(event) {
    if (event.target.closest('#path-2-4-left-up-5')) {
        iconClickPath24leftup5.classList.add('сlickToChangeColor');
        iconClickText24leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-5')) {
        iconClickPath24leftup5.classList.remove('сlickToChangeColor');
        iconClickText24leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-5')) {
        iconClickText24leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-5')) {
        iconClickText24leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24404')) {
        iconClickPath24leftup5.classList.add('сlickToChangeColor');
        iconClickText24leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24404')) {
        iconClickText24leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup5.removeEventListener("click", funcIconClick24leftup5);
}
document.addEventListener("click", funcIconClick24leftup5);

const iconClickPath24leftup6 = document.getElementById('path-2-4-left-up-6');
const iconClickText24leftup6 = document.getElementById('text-2-4-left-up-6');
const iconClickText24leftup6desc = document.getElementById('desc2405');
function funcIconClick24leftup6(event) {
    if (event.target.closest('#path-2-4-left-up-6')) {
        iconClickPath24leftup6.classList.add('сlickToChangeColor');
        iconClickText24leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-6')) {
        iconClickPath24leftup6.classList.remove('сlickToChangeColor');
        iconClickText24leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-6')) {
        iconClickText24leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-6')) {
        iconClickText24leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24405')) {
        iconClickPath24leftup6.classList.add('сlickToChangeColor');
        iconClickText24leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24405')) {
        iconClickText24leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup6.removeEventListener("click", funcIconClick24leftup6);
}
document.addEventListener("click", funcIconClick24leftup6);

const iconClickPath24leftup7 = document.getElementById('path-2-4-left-up-7');
const iconClickText24leftup7 = document.getElementById('text-2-4-left-up-7');
const iconClickText24leftup7desc = document.getElementById('desc2406');
function funcIconClick24leftup7(event) {
    if (event.target.closest('#path-2-4-left-up-7')) {
        iconClickPath24leftup7.classList.add('сlickToChangeColor');
        iconClickText24leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-7')) {
        iconClickPath24leftup7.classList.remove('сlickToChangeColor');
        iconClickText24leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-7')) {
        iconClickText24leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-7')) {
        iconClickText24leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24406')) {
        iconClickPath24leftup7.classList.add('сlickToChangeColor');
        iconClickText24leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24406')) {
        iconClickText24leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup7.removeEventListener("click", funcIconClick24leftup7);
}
document.addEventListener("click", funcIconClick24leftup7);

const iconClickPath24leftup8 = document.getElementById('path-2-4-left-up-8');
const iconClickText24leftup8 = document.getElementById('text-2-4-left-up-8');
const iconClickText24leftup8desc = document.getElementById('desc2407');
function funcIconClick24leftup8(event) {
    if (event.target.closest('#path-2-4-left-up-8')) {
        iconClickPath24leftup8.classList.add('сlickToChangeColor');
        iconClickText24leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-8')) {
        iconClickPath24leftup8.classList.remove('сlickToChangeColor');
        iconClickText24leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-8')) {
        iconClickText24leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-8')) {
        iconClickText24leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24407')) {
        iconClickPath24leftup8.classList.add('сlickToChangeColor');
        iconClickText24leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24407')) {
        iconClickText24leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup8.removeEventListener("click", funcIconClick24leftup8);
}
document.addEventListener("click", funcIconClick24leftup8);

const iconClickPath24rightup1 = document.getElementById('path-2-4-right-up-1');
const iconClickText24rightup1 = document.getElementById('text-2-4-right-up-1');
const iconClickText24rightup1desc = document.getElementById('desc2408');
function funcIconClick24rightup1(event) {
    if (event.target.closest('#path-2-4-right-up-1')) {
        iconClickPath24rightup1.classList.add('сlickToChangeColor');
        iconClickText24rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-up-1')) {
        iconClickPath24rightup1.classList.remove('сlickToChangeColor');
        iconClickText24rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-up-1')) {
        iconClickText24rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-up-1')) {
        iconClickText24rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24408')) {
        iconClickPath24rightup1.classList.add('сlickToChangeColor');
        iconClickText24rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24408')) {
        iconClickText24rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightup1.removeEventListener("click", funcIconClick24rightup1);
}
document.addEventListener("click", funcIconClick24rightup1);

const iconClickPath24rightup2 = document.getElementById('path-2-4-right-up-2');
const iconClickText24rightup2 = document.getElementById('text-2-4-right-up-2');
const iconClickText24rightup2desc = document.getElementById('desc2409');
function funcIconClick24rightup2(event) {
    if (event.target.closest('#path-2-4-right-up-2')) {
        iconClickPath24rightup2.classList.add('сlickToChangeColor');
        iconClickText24rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-up-2')) {
        iconClickPath24rightup2.classList.remove('сlickToChangeColor');
        iconClickText24rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-up-2')) {
        iconClickText24rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-up-2')) {
        iconClickText24rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24409')) {
        iconClickPath24rightup2.classList.add('сlickToChangeColor');
        iconClickText24rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24409')) {
        iconClickText24rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightup2.removeEventListener("click", funcIconClick24rightup2);
}
document.addEventListener("click", funcIconClick24rightup2);

const iconClickPath24rightup3 = document.getElementById('path-2-4-right-up-3');
const iconClickText24rightup3 = document.getElementById('text-2-4-right-up-3');
const iconClickText24rightup3desc = document.getElementById('desc2410');
function funcIconClick24rightup3(event) {
    if (event.target.closest('#path-2-4-right-up-3')) {
        iconClickPath24rightup3.classList.add('сlickToChangeColor');
        iconClickText24rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-up-3')) {
        iconClickPath24rightup3.classList.remove('сlickToChangeColor');
        iconClickText24rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-up-3')) {
        iconClickText24rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-up-3')) {
        iconClickText24rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24410')) {
        iconClickPath24rightup3.classList.add('сlickToChangeColor');
        iconClickText24rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24410')) {
        iconClickText24rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightup3.removeEventListener("click", funcIconClick24rightup3);
}
document.addEventListener("click", funcIconClick24rightup3);

const iconClickPath24rightup4 = document.getElementById('path-2-4-right-up-4');
const iconClickText24rightup4 = document.getElementById('text-2-4-right-up-4');
const iconClickText24rightup4desc = document.getElementById('desc2411');
function funcIconClick24rightup4(event) {
    if (event.target.closest('#path-2-4-right-up-4')) {
        iconClickPath24rightup4.classList.add('сlickToChangeColor');
        iconClickText24rightup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-up-4')) {
        iconClickPath24rightup4.classList.remove('сlickToChangeColor');
        iconClickText24rightup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-up-4')) {
        iconClickText24rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-up-4')) {
        iconClickText24rightup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24411')) {
        iconClickPath24rightup4.classList.add('сlickToChangeColor');
        iconClickText24rightup4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24411')) {
        iconClickText24rightup4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightup4.removeEventListener("click", funcIconClick24rightup4);
}
document.addEventListener("click", funcIconClick24rightup4);

const iconClickPath24rightup5 = document.getElementById('path-2-4-right-up-5');
const iconClickText24rightup5 = document.getElementById('text-2-4-right-up-5');
const iconClickText24rightup5desc = document.getElementById('desc2412');
function funcIconClick24rightup5(event) {
    if (event.target.closest('#path-2-4-right-up-5')) {
        iconClickPath24rightup5.classList.add('сlickToChangeColor');
        iconClickText24rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-up-5')) {
        iconClickPath24rightup5.classList.remove('сlickToChangeColor');
        iconClickText24rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-up-5')) {
        iconClickText24rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-up-5')) {
        iconClickText24rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24412')) {
        iconClickPath24rightup5.classList.add('сlickToChangeColor');
        iconClickText24rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24412')) {
        iconClickText24rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightup5.removeEventListener("click", funcIconClick24rightup5);
}
document.addEventListener("click", funcIconClick24rightup5);

const iconClickPath2413 = document.getElementById('path-2-413');
const iconClickText2413 = document.getElementById('text-2-413');
const iconClickText2413desc = document.getElementById('desc2413');
function funcIconClick2413(event) {
    if (event.target.closest('#path-2-413')) {
        iconClickPath2413.classList.add('сlickToChangeColor');
        iconClickText2413desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-413')) {
        iconClickPath2413.classList.remove('сlickToChangeColor');
        iconClickText2413desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-413')) {
        iconClickText2413.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-413')) {
        iconClickText2413.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24413')) {
        iconClickPath2413.classList.add('сlickToChangeColor');
        iconClickText2413desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24413')) {
        iconClickText2413.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2413.removeEventListener("click", funcIconClick2413);
}
document.addEventListener("click", funcIconClick2413);

const iconClickPath24rightup6 = document.getElementById('path-2-4-right-up-6');
const iconClickText24rightup6 = document.getElementById('text-2-4-right-up-6');
const iconClickText24rightup6desc = document.getElementById('desc2413a');
function funcIconClick24rightup6(event) {
    if (event.target.closest('#path-2-4-right-up-6')) {
        iconClickPath24rightup6.classList.add('сlickToChangeColor');
        iconClickText24rightup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-up-6')) {
        iconClickPath24rightup6.classList.remove('сlickToChangeColor');
        iconClickText24rightup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-up-6')) {
        iconClickText24rightup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-up-6')) {
        iconClickText24rightup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24413a')) {
        iconClickPath24rightup6.classList.add('сlickToChangeColor');
        iconClickText24rightup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24413a')) {
        iconClickText24rightup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightup6.removeEventListener("click", funcIconClick24rightup6);
}
document.addEventListener("click", funcIconClick24rightup6);

const iconClickPath2414 = document.getElementById('path-2-414');
const iconClickText2414 = document.getElementById('text-2-414');
const iconClickText2414desc = document.getElementById('desc2414');
function funcIconClick2414(event) {
    if (event.target.closest('#path-2-414')) {
        iconClickPath2414.classList.add('сlickToChangeColor');
        iconClickText2414desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-414')) {
        iconClickPath2414.classList.remove('сlickToChangeColor');
        iconClickText2414desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-414')) {
        iconClickText2414.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-414')) {
        iconClickText2414.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24414')) {
        iconClickPath2414.classList.add('сlickToChangeColor');
        iconClickText2414desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24414')) {
        iconClickText2414.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2414.removeEventListener("click", funcIconClick2414);
}
document.addEventListener("click", funcIconClick2414);

const iconClickPath24leftdown1 = document.getElementById('path-2-4-left-down-1');
const iconClickText24leftdown1 = document.getElementById('text-2-4-left-down-1');
const iconClickText24leftdown1desc = document.getElementById('desc24331');
function funcIconClick24leftdown1(event) {
    if (event.target.closest('#path-2-4-left-down-1')) {
        iconClickPath24leftdown1.classList.add('сlickToChangeColor');
        iconClickText24leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-down-1')) {
        iconClickPath24leftdown1.classList.remove('сlickToChangeColor');
        iconClickText24leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-down-1')) {
        iconClickText24leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-down-1')) {
        iconClickText24leftdown1.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath24leftdown1.removeEventListener("click", funcIconClick24leftdown1);
}
document.addEventListener("click", funcIconClick24leftdown1);

const iconClickPath24leftdown2 = document.getElementById('path-2-4-left-down-2');
const iconClickText24leftdown2 = document.getElementById('text-2-4-left-down-2');
const iconClickText24leftdown2desc = document.getElementById('desc2434');
function funcIconClick24leftdown2(event) {
    if (event.target.closest('#path-2-4-left-down-2')) {
        iconClickPath24leftdown2.classList.add('сlickToChangeColor');
        iconClickText24leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-down-2')) {
        iconClickPath24leftdown2.classList.remove('сlickToChangeColor');
        iconClickText24leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-down-2')) {
        iconClickText24leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-down-2')) {
        iconClickText24leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24434')) {
        iconClickPath24leftdown2.classList.add('сlickToChangeColor');
        iconClickText24leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24434')) {
        iconClickText24leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftdown2.removeEventListener("click", funcIconClick24leftdown2);
}
document.addEventListener("click", funcIconClick24leftdown2);

const iconClickPath24leftdown3 = document.getElementById('path-2-4-left-down-3');
const iconClickText24leftdown3 = document.getElementById('text-2-4-left-down-3');
const iconClickText24leftdown3desc = document.getElementById('desc2432');
function funcIconClick24leftdown3(event) {
    if (event.target.closest('#path-2-4-left-down-3')) {
        iconClickPath24leftdown3.classList.add('сlickToChangeColor');
        iconClickText24leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-down-3')) {
        iconClickPath24leftdown3.classList.remove('сlickToChangeColor');
        iconClickText24leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-down-3')) {
        iconClickText24leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-down-3')) {
        iconClickText24leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24432')) {
        iconClickPath24leftdown3.classList.add('сlickToChangeColor');
        iconClickText24leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24432')) {
        iconClickText24leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftdown3.removeEventListener("click", funcIconClick24leftdown3);
}
document.addEventListener("click", funcIconClick24leftdown3);

const iconClickPath24leftdown6 = document.getElementById('path-2-4-left-down-6');
const iconClickText24leftdown6 = document.getElementById('text-2-4-left-down-6');
const iconClickText24leftdown6desc = document.getElementById('desc2431');
function funcIconClick24leftdown6(event) {
    if (event.target.closest('#path-2-4-left-down-6')) {
        iconClickPath24leftdown6.classList.add('сlickToChangeColor');
        iconClickText24leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-down-6')) {
        iconClickPath24leftdown6.classList.remove('сlickToChangeColor');
        iconClickText24leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-down-6')) {
        iconClickText24leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-down-6')) {
        iconClickText24leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24431')) {
        iconClickPath24leftdown6.classList.add('сlickToChangeColor');
        iconClickText24leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24431')) {
        iconClickText24leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftdown6.removeEventListener("click", funcIconClick24leftdown6);
}
document.addEventListener("click", funcIconClick24leftdown6);

const iconClickPath24leftdown7 = document.getElementById('path-2-4-left-down-7');
const iconClickText24leftdown7 = document.getElementById('text-2-4-left-down-7');
const iconClickText24leftdown7desc = document.getElementById('desc2430');
function funcIconClick24leftdown7(event) {
    if (event.target.closest('#path-2-4-left-down-7')) {
        iconClickPath24leftdown7.classList.add('сlickToChangeColor');
        iconClickText24leftdown7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-down-7')) {
        iconClickPath24leftdown7.classList.remove('сlickToChangeColor');
        iconClickText24leftdown7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-down-7')) {
        iconClickText24leftdown7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-down-7')) {
        iconClickText24leftdown7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24430')) {
        iconClickPath24leftdown7.classList.add('сlickToChangeColor');
        iconClickText24leftdown7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24430')) {
        iconClickText24leftdown7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftdown7.removeEventListener("click", funcIconClick24leftdown7);
}
document.addEventListener("click", funcIconClick24leftdown7);

const iconClickPath24rightdown1 = document.getElementById('path-2-4-right-down-1');
const iconClickText24rightdown1 = document.getElementById('text-2-4-right-down-1');
const iconClickText24rightdown1desc = document.getElementById('desc2419');
function funcIconClick24rightdown1(event) {
    if (event.target.closest('#path-2-4-right-down-1')) {
        iconClickPath24rightdown1.classList.add('сlickToChangeColor');
        iconClickText24rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-down-1')) {
        iconClickPath24rightdown1.classList.remove('сlickToChangeColor');
        iconClickText24rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-down-1')) {
        iconClickText24rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-down-1')) {
        iconClickText24rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24419')) {
        iconClickPath24rightdown1.classList.add('сlickToChangeColor');
        iconClickText24rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24419')) {
        iconClickText24rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightdown1.removeEventListener("click", funcIconClick24rightdown1);
}
document.addEventListener("click", funcIconClick24rightdown1);

const iconClickPath24rightdown2 = document.getElementById('path-2-4-right-down-2');
const iconClickText24rightdown2 = document.getElementById('text-2-4-right-down-2');
const iconClickText24rightdown2desc = document.getElementById('desc2418');
function funcIconClick24rightdown2(event) {
    if (event.target.closest('#path-2-4-right-down-2')) {
        iconClickPath24rightdown2.classList.add('сlickToChangeColor');
        iconClickText24rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-down-2')) {
        iconClickPath24rightdown2.classList.remove('сlickToChangeColor');
        iconClickText24rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-down-2')) {
        iconClickText24rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-down-2')) {
        iconClickText24rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24418')) {
        iconClickPath24rightdown2.classList.add('сlickToChangeColor');
        iconClickText24rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24418')) {
        iconClickText24rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightdown2.removeEventListener("click", funcIconClick24rightdown2);
}
document.addEventListener("click", funcIconClick24rightdown2);

const iconClickPath24rightdown3 = document.getElementById('path-2-4-right-down-3');
const iconClickText24rightdown3 = document.getElementById('text-2-4-right-down-3');
const iconClickText24rightdown3desc = document.getElementById('desc2417');
function funcIconClick24rightdown3(event) {
    if (event.target.closest('#path-2-4-right-down-3')) {
        iconClickPath24rightdown3.classList.add('сlickToChangeColor');
        iconClickText24rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-down-3')) {
        iconClickPath24rightdown3.classList.remove('сlickToChangeColor');
        iconClickText24rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-down-3')) {
        iconClickText24rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-down-3')) {
        iconClickText24rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24417')) {
        iconClickPath24rightdown3.classList.add('сlickToChangeColor');
        iconClickText24rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24417')) {
        iconClickText24rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightdown3.removeEventListener("click", funcIconClick24rightdown3);
}
document.addEventListener("click", funcIconClick24rightdown3);

const iconClickPath24rightdown4 = document.getElementById('path-2-4-right-down-4');
const iconClickText24rightdown4 = document.getElementById('text-2-4-right-down-4');
const iconClickText24rightdown4desc = document.getElementById('desc2416');
function funcIconClick24rightdown4(event) {
    if (event.target.closest('#path-2-4-right-down-4')) {
        iconClickPath24rightdown4.classList.add('сlickToChangeColor');
        iconClickText24rightdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-down-4')) {
        iconClickPath24rightdown4.classList.remove('сlickToChangeColor');
        iconClickText24rightdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-down-4')) {
        iconClickText24rightdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-down-4')) {
        iconClickText24rightdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24416')) {
        iconClickPath24rightdown4.classList.add('сlickToChangeColor');
        iconClickText24rightdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24416')) {
        iconClickText24rightdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightdown4.removeEventListener("click", funcIconClick24rightdown4);
}
document.addEventListener("click", funcIconClick24rightdown4);

const iconClickPath2415a = document.getElementById('path-2-415a');
const iconClickText2415a = document.getElementById('text-2-415a');
const iconClickText2415adesc = document.getElementById('desc2415a');
function funcIconClick2415a(event) {
    if (event.target.closest('#path-2-415a')) {
        iconClickPath2415a.classList.add('сlickToChangeColor');
        iconClickText2415adesc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-415a')) {
        iconClickPath2415a.classList.remove('сlickToChangeColor');
        iconClickText2415adesc.style.display = 'none';
    }
    if (event.target.closest('#path-2-415a')) {
        iconClickText2415a.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-415a')) {
        iconClickText2415a.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24415a')) {
        iconClickPath2415a.classList.add('сlickToChangeColor');
        iconClickText2415adesc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24415a')) {
        iconClickText2415a.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2415a.removeEventListener("click", funcIconClick2415a);
}
document.addEventListener("click", funcIconClick2415a);

const iconClickPath2415 = document.getElementById('path-2-415');
const iconClickText2415 = document.getElementById('text-2-415');
const iconClickText2415desc = document.getElementById('desc2415');
function funcIconClick2415(event) {
    if (event.target.closest('#path-2-415')) {
        iconClickPath2415.classList.add('сlickToChangeColor');
        iconClickText2415desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-415')) {
        iconClickPath2415.classList.remove('сlickToChangeColor');
        iconClickText2415desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-415')) {
        iconClickText2415.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-415')) {
        iconClickText2415.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24415')) {
        iconClickPath2415.classList.add('сlickToChangeColor');
        iconClickText2415desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24415')) {
        iconClickText2415.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2415.removeEventListener("click", funcIconClick2415);
}
document.addEventListener("click", funcIconClick2415);

// building2floor4 - straight-left
const iconClickPath24straightleft1 = document.getElementById('path-2-4-straight-left-1');
const iconClickText24straightleft1 = document.getElementById('text-2-4-straight-left-1');
const iconClickText24straightleft1desc = document.getElementById('desc2429');
function funcIconClick24straightleft1(event) {
    if (event.target.closest('#path-2-4-straight-left-1')) {
        iconClickPath24straightleft1.classList.add('сlickToChangeColor');
        iconClickText24straightleft1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-left-1')) {
        iconClickPath24straightleft1.classList.remove('сlickToChangeColor');
        iconClickText24straightleft1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-left-1')) {
        iconClickText24straightleft1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-left-1')) {
        iconClickText24straightleft1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24429')) {
        iconClickPath24straightleft1.classList.add('сlickToChangeColor');
        iconClickText24straightleft1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24429')) {
        iconClickText24straightleft1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightleft1.removeEventListener("click", funcIconClick24straightleft1);
}
document.addEventListener("click", funcIconClick24straightleft1);

const iconClickPath24straightleft2 = document.getElementById('path-2-4-straight-left-2');
const iconClickText24straightleft2 = document.getElementById('text-2-4-straight-left-2');
const iconClickText24straightleft2desc = document.getElementById('desc2428');
function funcIconClick24straightleft2(event) {
    if (event.target.closest('#path-2-4-straight-left-2')) {
        iconClickPath24straightleft2.classList.add('сlickToChangeColor');
        iconClickText24straightleft2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-left-2')) {
        iconClickPath24straightleft2.classList.remove('сlickToChangeColor');
        iconClickText24straightleft2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-left-2')) {
        iconClickText24straightleft2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-left-2')) {
        iconClickText24straightleft2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24428')) {
        iconClickPath24straightleft2.classList.add('сlickToChangeColor');
        iconClickText24straightleft2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24428')) {
        iconClickText24straightleft2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightleft2.removeEventListener("click", funcIconClick24straightleft2);
}
document.addEventListener("click", funcIconClick24straightleft2);

const iconClickPath24straightleft3 = document.getElementById('path-2-4-straight-left-3');
const iconClickText24straightleft3 = document.getElementById('text-2-4-straight-left-3');
const iconClickText24straightleft3desc = document.getElementById('desc2427');
function funcIconClick24straightleft3(event) {
    if (event.target.closest('#path-2-4-straight-left-3')) {
        iconClickPath24straightleft3.classList.add('сlickToChangeColor');
        iconClickText24straightleft3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-left-3')) {
        iconClickPath24straightleft3.classList.remove('сlickToChangeColor');
        iconClickText24straightleft3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-left-3')) {
        iconClickText24straightleft3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-left-3')) {
        iconClickText24straightleft3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24427')) {
        iconClickPath24straightleft3.classList.add('сlickToChangeColor');
        iconClickText24straightleft3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24427')) {
        iconClickText24straightleft3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightleft3.removeEventListener("click", funcIconClick24straightleft3);
}
document.addEventListener("click", funcIconClick24straightleft3);

const iconClickPath24straightleft5 = document.getElementById('path-2-4-straight-left-5');
const iconClickText24straightleft5 = document.getElementById('text-2-4-straight-left-5');
const iconClickText24straightleft5desc = document.getElementById('desc2426');
function funcIconClick24straightleft5(event) {
    if (event.target.closest('#path-2-4-straight-left-5')) {
        iconClickPath24straightleft5.classList.add('сlickToChangeColor');
        iconClickText24straightleft5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-left-5')) {
        iconClickPath24straightleft5.classList.remove('сlickToChangeColor');
        iconClickText24straightleft5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-left-5')) {
        iconClickText24straightleft5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-left-5')) {
        iconClickText24straightleft5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24426')) {
        iconClickPath24straightleft5.classList.add('сlickToChangeColor');
        iconClickText24straightleft5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24426')) {
        iconClickText24straightleft5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightleft5.removeEventListener("click", funcIconClick24straightleft5);
}
document.addEventListener("click", funcIconClick24straightleft5);

const iconClickPath24straightleft6 = document.getElementById('path-2-4-straight-left-6');
const iconClickText24straightleft6 = document.getElementById('text-2-4-straight-left-6');
const iconClickText24straightleft6desc = document.getElementById('desc2425');
function funcIconClick24straightleft6(event) {
    if (event.target.closest('#path-2-4-straight-left-6')) {
        iconClickPath24straightleft6.classList.add('сlickToChangeColor');
        iconClickText24straightleft6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-left-6')) {
        iconClickPath24straightleft6.classList.remove('сlickToChangeColor');
        iconClickText24straightleft6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-left-6')) {
        iconClickText24straightleft6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-left-6')) {
        iconClickText24straightleft6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24425')) {
        iconClickPath24straightleft6.classList.add('сlickToChangeColor');
        iconClickText24straightleft6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24425')) {
        iconClickText24straightleft6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightleft6.removeEventListener("click", funcIconClick24straightleft6);
}
document.addEventListener("click", funcIconClick24straightleft6);

const iconClickPath24straightright1 = document.getElementById('path-2-4-straight-right-1');
const iconClickText24straightright1 = document.getElementById('text-2-4-straight-right-1');
const iconClickText24straightright1desc = document.getElementById('desc2420');
function funcIconClick24straightright1(event) {
    if (event.target.closest('#path-2-4-straight-right-1')) {
        iconClickPath24straightright1.classList.add('сlickToChangeColor');
        iconClickText24straightright1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-right-1')) {
        iconClickPath24straightright1.classList.remove('сlickToChangeColor');
        iconClickText24straightright1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-right-1')) {
        iconClickText24straightright1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-right-1')) {
        iconClickText24straightright1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24420')) {
        iconClickPath24straightright1.classList.add('сlickToChangeColor');
        iconClickText24straightright1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24420')) {
        iconClickText24straightright1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightright1.removeEventListener("click", funcIconClick24straightright1);
}
document.addEventListener("click", funcIconClick24straightright1);

const iconClickPath24straightright2 = document.getElementById('path-2-4-straight-right-2');
const iconClickText24straightright2 = document.getElementById('text-2-4-straight-right-2');
const iconClickText24straightright2desc = document.getElementById('desc2421');
function funcIconClick24straightright2(event) {
    if (event.target.closest('#path-2-4-straight-right-2')) {
        iconClickPath24straightright2.classList.add('сlickToChangeColor');
        iconClickText24straightright2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-right-2')) {
        iconClickPath24straightright2.classList.remove('сlickToChangeColor');
        iconClickText24straightright2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-right-2')) {
        iconClickText24straightright2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-right-2')) {
        iconClickText24straightright2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24421')) {
        iconClickPath24straightright2.classList.add('сlickToChangeColor');
        iconClickText24straightright2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24421')) {
        iconClickText24straightright2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightright2.removeEventListener("click", funcIconClick24straightright2);
}
document.addEventListener("click", funcIconClick24straightright2);

const iconClickPath24straightright3 = document.getElementById('path-2-4-straight-right-3');
const iconClickText24straightright3 = document.getElementById('text-2-4-straight-right-3');
const iconClickText24straightright3desc = document.getElementById('desc2422');
function funcIconClick24straightright3(event) {
    if (event.target.closest('#path-2-4-straight-right-3')) {
        iconClickPath24straightright3.classList.add('сlickToChangeColor');
        iconClickText24straightright3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-right-3')) {
        iconClickPath24straightright3.classList.remove('сlickToChangeColor');
        iconClickText24straightright3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-right-3')) {
        iconClickText24straightright3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-right-3')) {
        iconClickText24straightright3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24422')) {
        iconClickPath24straightright3.classList.add('сlickToChangeColor');
        iconClickText24straightright3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24422')) {
        iconClickText24straightright3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightright3.removeEventListener("click", funcIconClick24straightright3);
}
document.addEventListener("click", funcIconClick24straightright3);

const iconClickPath24straightright4 = document.getElementById('path-2-4-straight-right-4');
const iconClickText24straightright4 = document.getElementById('text-2-4-straight-right-4');
const iconClickText24straightright4desc = document.getElementById('desc2423');
function funcIconClick24straightright4(event) {
    if (event.target.closest('#path-2-4-straight-right-4')) {
        iconClickPath24straightright4.classList.add('сlickToChangeColor');
        iconClickText24straightright4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-right-4')) {
        iconClickPath24straightright4.classList.remove('сlickToChangeColor');
        iconClickText24straightright4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-right-4')) {
        iconClickText24straightright4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-right-4')) {
        iconClickText24straightright4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24423')) {
        iconClickPath24straightright4.classList.add('сlickToChangeColor');
        iconClickText24straightright4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24423')) {
        iconClickText24straightright4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightright4.removeEventListener("click", funcIconClick24straightright4);
}
document.addEventListener("click", funcIconClick24straightright4);

const iconClickPath24straightright5 = document.getElementById('path-2-4-straight-right-5');
const iconClickText24straightright5 = document.getElementById('text-2-4-straight-right-5');
const iconClickText24straightright5desc = document.getElementById('desc2424');
function funcIconClick24straightright5(event) {
    if (event.target.closest('#path-2-4-straight-right-5')) {
        iconClickPath24straightright5.classList.add('сlickToChangeColor');
        iconClickText24straightright5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-straight-right-5')) {
        iconClickPath24straightright5.classList.remove('сlickToChangeColor');
        iconClickText24straightright5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-4-straight-right-5')) {
        iconClickText24straightright5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-straight-right-5')) {
        iconClickText24straightright5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-24424')) {
        iconClickPath24straightright5.classList.add('сlickToChangeColor');
        iconClickText24straightright5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-24424')) {
        iconClickText24straightright5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24straightright5.removeEventListener("click", funcIconClick24straightright5);
}
document.addEventListener("click", funcIconClick24straightright5);

// building2floor5 -------------------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath25leftup1 = document.getElementById('path-2-5-left-up-1');
const iconClickText25leftup1 = document.getElementById('text-2-5-left-up-1');
const iconClickText25leftup1desc = document.getElementById('desc2501a');
function funcIconClick25leftup1(event) {
    if (event.target.closest('#path-2-5-left-up-1')) {
        iconClickPath25leftup1.classList.add('сlickToChangeColor');
        iconClickText25leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-1')) {
        iconClickPath25leftup1.classList.remove('сlickToChangeColor');
        iconClickText25leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-1')) {
        iconClickText25leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-1')) {
        iconClickText25leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25501a')) {
        iconClickPath25leftup1.classList.add('сlickToChangeColor');
        iconClickText25leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25501a')) {
        iconClickText25leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup1.removeEventListener("click", funcIconClick25leftup1);
}
document.addEventListener("click", funcIconClick25leftup1);

const iconClickPath25leftup2 = document.getElementById('path-2-5-left-up-2');
const iconClickText25leftup2 = document.getElementById('text-2-5-left-up-2');
const iconClickText25leftup2desc = document.getElementById('desc2501');
function funcIconClick25leftup2(event) {
    if (event.target.closest('#path-2-5-left-up-2')) {
        iconClickPath25leftup2.classList.add('сlickToChangeColor');
        iconClickText25leftup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-2')) {
        iconClickPath25leftup2.classList.remove('сlickToChangeColor');
        iconClickText25leftup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-2')) {
        iconClickText25leftup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-2')) {
        iconClickText25leftup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25501')) {
        iconClickPath25leftup2.classList.add('сlickToChangeColor');
        iconClickText25leftup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25501')) {
        iconClickText25leftup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup2.removeEventListener("click", funcIconClick25leftup2);
}
document.addEventListener("click", funcIconClick25leftup2);

const iconClickPath25leftup3 = document.getElementById('path-2-5-left-up-3');
const iconClickText25leftup3 = document.getElementById('text-2-5-left-up-3');
const iconClickText25leftup3desc = document.getElementById('desc2502');
function funcIconClick25leftup3(event) {
    if (event.target.closest('#path-2-5-left-up-3')) {
        iconClickPath25leftup3.classList.add('сlickToChangeColor');
        iconClickText25leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-3')) {
        iconClickPath25leftup3.classList.remove('сlickToChangeColor');
        iconClickText25leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-3')) {
        iconClickText25leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-3')) {
        iconClickText25leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25502')) {
        iconClickPath25leftup3.classList.add('сlickToChangeColor');
        iconClickText25leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25502')) {
        iconClickText25leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup3.removeEventListener("click", funcIconClick25leftup3);
}
document.addEventListener("click", funcIconClick25leftup3);

const iconClickPath2502 = document.getElementById('path-2-502');
const iconClickText2502 = document.getElementById('text-2-502');
const iconClickText2502desc = document.getElementById('desc2502a');
function funcIconClick2502(event) {
    if (event.target.closest('#path-2-502')) {
        iconClickPath2502.classList.add('сlickToChangeColor');
        iconClickText2502desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-502')) {
        iconClickPath2502.classList.remove('сlickToChangeColor');
        iconClickText2502desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-502')) {
        iconClickText2502.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-502')) {
        iconClickText2502.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25502a')) {
        iconClickPath2502.classList.add('сlickToChangeColor');
        iconClickText2502desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25502a')) {
        iconClickText2502.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2502.removeEventListener("click", funcIconClick2502);
}
document.addEventListener("click", funcIconClick2502);

const iconClickPath25leftup5 = document.getElementById('path-2-5-left-up-5');
const iconClickText25leftup5 = document.getElementById('text-2-5-left-up-5');
const iconClickText25leftup5desc = document.getElementById('desc2503');
function funcIconClick25leftup5(event) {
    if (event.target.closest('#path-2-5-left-up-5')) {
        iconClickPath25leftup5.classList.add('сlickToChangeColor');
        iconClickText25leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-5')) {
        iconClickPath25leftup5.classList.remove('сlickToChangeColor');
        iconClickText25leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-5')) {
        iconClickText25leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-5')) {
        iconClickText25leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25503')) {
        iconClickPath25leftup5.classList.add('сlickToChangeColor');
        iconClickText25leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25503')) {
        iconClickText25leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup5.removeEventListener("click", funcIconClick25leftup5);
}
document.addEventListener("click", funcIconClick25leftup5);

const iconClickPath25leftup6 = document.getElementById('path-2-5-left-up-6');
const iconClickText25leftup6 = document.getElementById('text-2-5-left-up-6');
const iconClickText25leftup6desc = document.getElementById('desc2504');
function funcIconClick25leftup6(event) {
    if (event.target.closest('#path-2-5-left-up-6')) {
        iconClickPath25leftup6.classList.add('сlickToChangeColor');
        iconClickText25leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-6')) {
        iconClickPath25leftup6.classList.remove('сlickToChangeColor');
        iconClickText25leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-6')) {
        iconClickText25leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-6')) {
        iconClickText25leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25504')) {
        iconClickPath25leftup6.classList.add('сlickToChangeColor');
        iconClickText25leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25504')) {
        iconClickText25leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup6.removeEventListener("click", funcIconClick25leftup6);
}
document.addEventListener("click", funcIconClick25leftup6);

const iconClickPath25leftup7 = document.getElementById('path-2-5-left-up-7');
const iconClickText25leftup7 = document.getElementById('text-2-5-left-up-7');
const iconClickText25leftup7desc = document.getElementById('desc2505');
function funcIconClick25leftup7(event) {
    if (event.target.closest('#path-2-5-left-up-7')) {
        iconClickPath25leftup7.classList.add('сlickToChangeColor');
        iconClickText25leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-7')) {
        iconClickPath25leftup7.classList.remove('сlickToChangeColor');
        iconClickText25leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-7')) {
        iconClickText25leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-7')) {
        iconClickText25leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25505')) {
        iconClickPath25leftup7.classList.add('сlickToChangeColor');
        iconClickText25leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25505')) {
        iconClickText25leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup7.removeEventListener("click", funcIconClick25leftup7);
}
document.addEventListener("click", funcIconClick25leftup7);

const iconClickPath25leftup8 = document.getElementById('path-2-5-left-up-8');
const iconClickText25leftup8 = document.getElementById('text-2-5-left-up-8');
const iconClickText25leftup8desc = document.getElementById('desc2506a');
function funcIconClick25leftup8(event) {
    if (event.target.closest('#path-2-5-left-up-8')) {
        iconClickPath25leftup8.classList.add('сlickToChangeColor');
        iconClickText25leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-8')) {
        iconClickPath25leftup8.classList.remove('сlickToChangeColor');
        iconClickText25leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-8')) {
        iconClickText25leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-8')) {
        iconClickText25leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25506a')) {
        iconClickPath25leftup8.classList.add('сlickToChangeColor');
        iconClickText25leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25506a')) {
        iconClickText25leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup8.removeEventListener("click", funcIconClick25leftup8);
}
document.addEventListener("click", funcIconClick25leftup8);

const iconClickPath2506 = document.getElementById('path-2-506');
const iconClickText2506 = document.getElementById('text-2-506');
const iconClickText2506desc = document.getElementById('desc2506');
function funcIconClick2506(event) {
    if (event.target.closest('#path-2-506')) {
        iconClickPath2506.classList.add('сlickToChangeColor');
        iconClickText2506desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-506')) {
        iconClickPath2506.classList.remove('сlickToChangeColor');
        iconClickText2506desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-506')) {
        iconClickText2506.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-506')) {
        iconClickText2506.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25506')) {
        iconClickPath2506.classList.add('сlickToChangeColor');
        iconClickText2506desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25506')) {
        iconClickText2506.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2506.removeEventListener("click", funcIconClick2506);
}
document.addEventListener("click", funcIconClick2506);

const iconClickPath25rightup1 = document.getElementById('path-2-5-right-up-1');
const iconClickText25rightup1 = document.getElementById('text-2-5-right-up-1');
const iconClickText25rightup1desc = document.getElementById('desc2507');
function funcIconClick25rightup1(event) {
    if (event.target.closest('#path-2-5-right-up-1')) {
        iconClickPath25rightup1.classList.add('сlickToChangeColor');
        iconClickText25rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-1')) {
        iconClickPath25rightup1.classList.remove('сlickToChangeColor');
        iconClickText25rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-1')) {
        iconClickText25rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-1')) {
        iconClickText25rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25507')) {
        iconClickPath25rightup1.classList.add('сlickToChangeColor');
        iconClickText25rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25507')) {
        iconClickText25rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup1.removeEventListener("click", funcIconClick25rightup1);
}
document.addEventListener("click", funcIconClick25rightup1);

const iconClickPath25rightup2 = document.getElementById('path-2-5-right-up-2');
const iconClickText25rightup2 = document.getElementById('text-2-5-right-up-2');
const iconClickText25rightup2desc = document.getElementById('desc2508');
function funcIconClick25rightup2(event) {
    if (event.target.closest('#path-2-5-right-up-2')) {
        iconClickPath25rightup2.classList.add('сlickToChangeColor');
        iconClickText25rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-2')) {
        iconClickPath25rightup2.classList.remove('сlickToChangeColor');
        iconClickText25rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-2')) {
        iconClickText25rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-2')) {
        iconClickText25rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25508')) {
        iconClickPath25rightup2.classList.add('сlickToChangeColor');
        iconClickText25rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25508')) {
        iconClickText25rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup2.removeEventListener("click", funcIconClick25rightup2);
}
document.addEventListener("click", funcIconClick25rightup2);

const iconClickPath25rightup3 = document.getElementById('path-2-5-right-up-3');
const iconClickText25rightup3 = document.getElementById('text-2-5-right-up-3');
const iconClickText25rightup3desc = document.getElementById('desc2509');
function funcIconClick25rightup3(event) {
    if (event.target.closest('#path-2-5-right-up-3')) {
        iconClickPath25rightup3.classList.add('сlickToChangeColor');
        iconClickText25rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-3')) {
        iconClickPath25rightup3.classList.remove('сlickToChangeColor');
        iconClickText25rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-3')) {
        iconClickText25rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-3')) {
        iconClickText25rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25509')) {
        iconClickPath25rightup3.classList.add('сlickToChangeColor');
        iconClickText25rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25509')) {
        iconClickText25rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup3.removeEventListener("click", funcIconClick25rightup3);
}
document.addEventListener("click", funcIconClick25rightup3);

const iconClickPath25rightup5 = document.getElementById('path-2-5-right-up-5');
const iconClickText25rightup5 = document.getElementById('text-2-5-right-up-5');
const iconClickText25rightup5desc = document.getElementById('desc2510');
function funcIconClick25rightup5(event) {
    if (event.target.closest('#path-2-5-right-up-5')) {
        iconClickPath25rightup5.classList.add('сlickToChangeColor');
        iconClickText25rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-5')) {
        iconClickPath25rightup5.classList.remove('сlickToChangeColor');
        iconClickText25rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-5')) {
        iconClickText25rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-5')) {
        iconClickText25rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25510')) {
        iconClickPath25rightup5.classList.add('сlickToChangeColor');
        iconClickText25rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25510')) {
        iconClickText25rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup5.removeEventListener("click", funcIconClick25rightup5);
}
document.addEventListener("click", funcIconClick25rightup5);

const iconClickPath25rightup6 = document.getElementById('path-2-5-right-up-6');
const iconClickText25rightup6 = document.getElementById('text-2-5-right-up-6');
const iconClickText25rightup6desc = document.getElementById('desc2511');
function funcIconClick25rightup6(event) {
    if (event.target.closest('#path-2-5-right-up-6')) {
        iconClickPath25rightup6.classList.add('сlickToChangeColor');
        iconClickText25rightup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-6')) {
        iconClickPath25rightup6.classList.remove('сlickToChangeColor');
        iconClickText25rightup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-6')) {
        iconClickText25rightup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-6')) {
        iconClickText25rightup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25511')) {
        iconClickPath25rightup6.classList.add('сlickToChangeColor');
        iconClickText25rightup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25511')) {
        iconClickText25rightup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup6.removeEventListener("click", funcIconClick25rightup6);
}
document.addEventListener("click", funcIconClick25rightup6);

const iconClickPath25rightup7 = document.getElementById('path-2-5-right-up-7');
const iconClickText25rightup7 = document.getElementById('text-2-5-right-up-7');
const iconClickText25rightup7desc = document.getElementById('desc2511a');
function funcIconClick25rightup7(event) {
    if (event.target.closest('#path-2-5-right-up-7')) {
        iconClickPath25rightup7.classList.add('сlickToChangeColor');
        iconClickText25rightup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-7')) {
        iconClickPath25rightup7.classList.remove('сlickToChangeColor');
        iconClickText25rightup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-7')) {
        iconClickText25rightup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-7')) {
        iconClickText25rightup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25511a')) {
        iconClickPath25rightup7.classList.add('сlickToChangeColor');
        iconClickText25rightup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25511a')) {
        iconClickText25rightup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup7.removeEventListener("click", funcIconClick25rightup7);
}
document.addEventListener("click", funcIconClick25rightup7);

const iconClickPath25leftdown1 = document.getElementById('path-2-5-left-down-1');
const iconClickText25leftdown1 = document.getElementById('text-2-5-left-down-1');
const iconClickText25leftdown1desc = document.getElementById('desc2522');
function funcIconClick25leftdown1(event) {
    if (event.target.closest('#path-2-5-left-down-1')) {
        iconClickPath25leftdown1.classList.add('сlickToChangeColor');
        iconClickText25leftdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-1')) {
        iconClickPath25leftdown1.classList.remove('сlickToChangeColor');
        iconClickText25leftdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-1')) {
        iconClickText25leftdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-1')) {
        iconClickText25leftdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25522')) {
        iconClickPath25leftdown1.classList.add('сlickToChangeColor');
        iconClickText25leftdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25522')) {
        iconClickText25leftdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown1.removeEventListener("click", funcIconClick25leftdown1);
}
document.addEventListener("click", funcIconClick25leftdown1);

const iconClickPath2521 = document.getElementById('path-2-521');
const iconClickText2521 = document.getElementById('text-2-521');
const iconClickText2521desc = document.getElementById('desc2521a');
function funcIconClick2521(event) {
    if (event.target.closest('#path-2-521')) {
        iconClickPath2521.classList.add('сlickToChangeColor');
        iconClickText2521desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-521')) {
        iconClickPath2521.classList.remove('сlickToChangeColor');
        iconClickText2521desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-521')) {
        iconClickText2521.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-521')) {
        iconClickText2521.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25521a')) {
        iconClickPath2521.classList.add('сlickToChangeColor');
        iconClickText2521desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25521a')) {
        iconClickText2521.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2521.removeEventListener("click", funcIconClick2521);
}
document.addEventListener("click", funcIconClick2521);

const iconClickPath25leftdown2 = document.getElementById('path-2-5-left-down-2');
const iconClickText25leftdown2 = document.getElementById('text-2-5-left-down-2');
const iconClickText25leftdown2desc = document.getElementById('desc2521');
function funcIconClick25leftdown2(event) {
    if (event.target.closest('#path-2-5-left-down-2')) {
        iconClickPath25leftdown2.classList.add('сlickToChangeColor');
        iconClickText25leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-2')) {
        iconClickPath25leftdown2.classList.remove('сlickToChangeColor');
        iconClickText25leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-2')) {
        iconClickText25leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-2')) {
        iconClickText25leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25521')) {
        iconClickPath25leftdown2.classList.add('сlickToChangeColor');
        iconClickText25leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25521')) {
        iconClickText25leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown2.removeEventListener("click", funcIconClick25leftdown2);
}
document.addEventListener("click", funcIconClick25leftdown2);

const iconClickPath25leftdown3 = document.getElementById('path-2-5-left-down-3');
const iconClickText25leftdown3 = document.getElementById('text-2-5-left-down-3');
const iconClickText25leftdown3desc = document.getElementById('desc2520a');
function funcIconClick25leftdown3(event) {
    if (event.target.closest('#path-2-5-left-down-3')) {
        iconClickPath25leftdown3.classList.add('сlickToChangeColor');
        iconClickText25leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-3')) {
        iconClickPath25leftdown3.classList.remove('сlickToChangeColor');
        iconClickText25leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-3')) {
        iconClickText25leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-3')) {
        iconClickText25leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25520a')) {
        iconClickPath25leftdown3.classList.add('сlickToChangeColor');
        iconClickText25leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25520a')) {
        iconClickText25leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown3.removeEventListener("click", funcIconClick25leftdown3);
}
document.addEventListener("click", funcIconClick25leftdown3);

const iconClickPath25leftdown4 = document.getElementById('path-2-5-left-down-4');
const iconClickText25leftdown4 = document.getElementById('text-2-5-left-down-4');
const iconClickText25leftdown4desc = document.getElementById('desc2520');
function funcIconClick25leftdown4(event) {
    if (event.target.closest('#path-2-5-left-down-4')) {
        iconClickPath25leftdown4.classList.add('сlickToChangeColor');
        iconClickText25leftdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-4')) {
        iconClickPath25leftdown4.classList.remove('сlickToChangeColor');
        iconClickText25leftdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-4')) {
        iconClickText25leftdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-4')) {
        iconClickText25leftdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25520')) {
        iconClickPath25leftdown4.classList.add('сlickToChangeColor');
        iconClickText25leftdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25520')) {
        iconClickText25leftdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown4.removeEventListener("click", funcIconClick25leftdown4);
}
document.addEventListener("click", funcIconClick25leftdown4);

const iconClickPath25leftdown5 = document.getElementById('path-2-5-left-down-5');
const iconClickText25leftdown5 = document.getElementById('text-2-5-left-down-5');
const iconClickText25leftdown5desc = document.getElementById('desc2519');
function funcIconClick25leftdown5(event) {
    if (event.target.closest('#path-2-5-left-down-5')) {
        iconClickPath25leftdown5.classList.add('сlickToChangeColor');
        iconClickText25leftdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-5')) {
        iconClickPath25leftdown5.classList.remove('сlickToChangeColor');
        iconClickText25leftdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-5')) {
        iconClickText25leftdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-5')) {
        iconClickText25leftdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25519')) {
        iconClickPath25leftdown5.classList.add('сlickToChangeColor');
        iconClickText25leftdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25519')) {
        iconClickText25leftdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown5.removeEventListener("click", funcIconClick25leftdown5);
}
document.addEventListener("click", funcIconClick25leftdown5);

const iconClickPath2520 = document.getElementById('path-2-520');
const iconClickText2520 = document.getElementById('text-2-520');
const iconClickText2520desc = document.getElementById('desc2518');
function funcIconClick2520(event) {
    if (event.target.closest('#path-2-520')) {
        iconClickPath2520.classList.add('сlickToChangeColor');
        iconClickText2520desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-520')) {
        iconClickPath2520.classList.remove('сlickToChangeColor');
        iconClickText2520desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-520')) {
        iconClickText2520.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-520')) {
        iconClickText2520.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25518')) {
        iconClickPath2520.classList.add('сlickToChangeColor');
        iconClickText2520desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25518')) {
        iconClickText2520.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2520.removeEventListener("click", funcIconClick2520);
}
document.addEventListener("click", funcIconClick2520);

const iconClickPath2519 = document.getElementById('path-2-519');
const iconClickText2519 = document.getElementById('text-2-519');
const iconClickText2519desc = document.getElementById('desc2517');
function funcIconClick2519(event) {
    if (event.target.closest('#path-2-519')) {
        iconClickPath2519.classList.add('сlickToChangeColor');
        iconClickText2519desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-519')) {
        iconClickPath2519.classList.remove('сlickToChangeColor');
        iconClickText2519desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-519')) {
        iconClickText2519.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-519')) {
        iconClickText2519.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25517')) {
        iconClickPath2519.classList.add('сlickToChangeColor');
        iconClickText2519desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25517')) {
        iconClickText2519.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2519.removeEventListener("click", funcIconClick2519);
}
document.addEventListener("click", funcIconClick2519);

const iconClickPath25leftdown6 = document.getElementById('path-2-5-left-down-6');
const iconClickText25leftdown6 = document.getElementById('text-2-5-left-down-6');
const iconClickText25leftdown6desc = document.getElementById('desc2516a');
function funcIconClick25leftdown6(event) {
    if (event.target.closest('#path-2-5-left-down-6')) {
        iconClickPath25leftdown6.classList.add('сlickToChangeColor');
        iconClickText25leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-6')) {
        iconClickPath25leftdown6.classList.remove('сlickToChangeColor');
        iconClickText25leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-6')) {
        iconClickText25leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-6')) {
        iconClickText25leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25516a')) {
        iconClickPath25leftdown6.classList.add('сlickToChangeColor');
        iconClickText25leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25516a')) {
        iconClickText25leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown6.removeEventListener("click", funcIconClick25leftdown6);
}
document.addEventListener("click", funcIconClick25leftdown6);

const iconClickPath25leftdown7 = document.getElementById('path-2-5-left-down-7');
const iconClickText25leftdown7 = document.getElementById('text-2-5-left-down-7');
const iconClickText25leftdown7desc = document.getElementById('desc2516');
function funcIconClick25leftdown7(event) {
    if (event.target.closest('#path-2-5-left-down-7')) {
        iconClickPath25leftdown7.classList.add('сlickToChangeColor');
        iconClickText25leftdown7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-down-7')) {
        iconClickPath25leftdown7.classList.remove('сlickToChangeColor');
        iconClickText25leftdown7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-down-7')) {
        iconClickText25leftdown7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-down-7')) {
        iconClickText25leftdown7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25516')) {
        iconClickPath25leftdown7.classList.add('сlickToChangeColor');
        iconClickText25leftdown7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25516')) {
        iconClickText25leftdown7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftdown7.removeEventListener("click", funcIconClick25leftdown7);
}
document.addEventListener("click", funcIconClick25leftdown7);

const iconClickPath25rightdown1 = document.getElementById('path-2-5-right-down-1');
const iconClickText25rightdown1 = document.getElementById('text-2-5-right-down-1');
const iconClickText25rightdown1desc = document.getElementById('desc2515');
function funcIconClick25rightdown1(event) {
    if (event.target.closest('#path-2-5-right-down-1')) {
        iconClickPath25rightdown1.classList.add('сlickToChangeColor');
        iconClickText25rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-down-1')) {
        iconClickPath25rightdown1.classList.remove('сlickToChangeColor');
        iconClickText25rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-down-1')) {
        iconClickText25rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-down-1')) {
        iconClickText25rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25515')) {
        iconClickPath25rightdown1.classList.add('сlickToChangeColor');
        iconClickText25rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25515')) {
        iconClickText25rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightdown1.removeEventListener("click", funcIconClick25rightdown1);
}
document.addEventListener("click", funcIconClick25rightdown1);

const iconClickPath25rightdown2 = document.getElementById('path-2-5-right-down-2');
const iconClickText25rightdown2 = document.getElementById('text-2-5-right-down-2');
const iconClickText25rightdown2desc = document.getElementById('desc2514');
function funcIconClick25rightdown2(event) {
    if (event.target.closest('#path-2-5-right-down-2')) {
        iconClickPath25rightdown2.classList.add('сlickToChangeColor');
        iconClickText25rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-down-2')) {
        iconClickPath25rightdown2.classList.remove('сlickToChangeColor');
        iconClickText25rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-down-2')) {
        iconClickText25rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-down-2')) {
        iconClickText25rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25514')) {
        iconClickPath25rightdown2.classList.add('сlickToChangeColor');
        iconClickText25rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25514')) {
        iconClickText25rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightdown2.removeEventListener("click", funcIconClick25rightdown2);
}
document.addEventListener("click", funcIconClick25rightdown2);

const iconClickPath25rightdown4 = document.getElementById('path-2-5-right-down-4');
const iconClickText25rightdown4 = document.getElementById('text-2-5-right-down-4');
const iconClickText25rightdown4desc = document.getElementById('desc2512');
function funcIconClick25rightdown4(event) {
    if (event.target.closest('#path-2-5-right-down-4')) {
        iconClickPath25rightdown4.classList.add('сlickToChangeColor');
        iconClickText25rightdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-down-4')) {
        iconClickPath25rightdown4.classList.remove('сlickToChangeColor');
        iconClickText25rightdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-down-4')) {
        iconClickText25rightdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-down-4')) {
        iconClickText25rightdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-25512')) {
        iconClickPath25rightdown4.classList.add('сlickToChangeColor');
        iconClickText25rightdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'block';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.add("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-25512')) {
        iconClickText25rightdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightdown4.removeEventListener("click", funcIconClick25rightdown4);
}
document.addEventListener("click", funcIconClick25rightdown4);

// building2floor6 --------------------------------------------------------------------------------------------------------------------------------------------------------------
const iconClickPath26leftup1 = document.getElementById('path-2-6-left-up-1');
const iconClickText26leftup1 = document.getElementById('text-2-6-left-up-1');
const iconClickText26leftup1desc = document.getElementById('desc2601');
function funcIconClick26leftup1(event) {
    if (event.target.closest('#path-2-6-left-up-1')) {
        iconClickPath26leftup1.classList.add('сlickToChangeColor');
        iconClickText26leftup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-1')) {
        iconClickPath26leftup1.classList.remove('сlickToChangeColor');
        iconClickText26leftup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-1')) {
        iconClickText26leftup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-1')) {
        iconClickText26leftup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26601')) {
        iconClickPath26leftup1.classList.add('сlickToChangeColor');
        iconClickText26leftup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26601')) {
        iconClickText26leftup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup1.removeEventListener("click", funcIconClick26leftup1);
}
document.addEventListener("click", funcIconClick26leftup1);

const iconClickPath26leftup3 = document.getElementById('path-2-6-left-up-3');
const iconClickText26leftup3 = document.getElementById('text-2-6-left-up-3');
const iconClickText26leftup3desc = document.getElementById('desc2602');
function funcIconClick26leftup3(event) {
    if (event.target.closest('#path-2-6-left-up-3')) {
        iconClickPath26leftup3.classList.add('сlickToChangeColor');
        iconClickText26leftup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-3')) {
        iconClickPath26leftup3.classList.remove('сlickToChangeColor');
        iconClickText26leftup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-3')) {
        iconClickText26leftup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-3')) {
        iconClickText26leftup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26602')) {
        iconClickPath26leftup3.classList.add('сlickToChangeColor');
        iconClickText26leftup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26602')) {
        iconClickText26leftup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup3.removeEventListener("click", funcIconClick26leftup3);
}
document.addEventListener("click", funcIconClick26leftup3);

const iconClickPath26leftup5 = document.getElementById('path-2-6-left-up-5');
const iconClickText26leftup5 = document.getElementById('text-2-6-left-up-5');
const iconClickText26leftup5desc = document.getElementById('desc2603');
function funcIconClick26leftup5(event) {
    if (event.target.closest('#path-2-6-left-up-5')) {
        iconClickPath26leftup5.classList.add('сlickToChangeColor');
        iconClickText26leftup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-5')) {
        iconClickPath26leftup5.classList.remove('сlickToChangeColor');
        iconClickText26leftup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-5')) {
        iconClickText26leftup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-5')) {
        iconClickText26leftup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26603')) {
        iconClickPath26leftup5.classList.add('сlickToChangeColor');
        iconClickText26leftup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26603')) {
        iconClickText26leftup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup5.removeEventListener("click", funcIconClick26leftup5);
}
document.addEventListener("click", funcIconClick26leftup5);

const iconClickPath26leftup6 = document.getElementById('path-2-6-left-up-6');
const iconClickText26leftup6 = document.getElementById('text-2-6-left-up-6');
const iconClickText26leftup6desc = document.getElementById('desc2604');
function funcIconClick26leftup6(event) {
    if (event.target.closest('#path-2-6-left-up-6')) {
        iconClickPath26leftup6.classList.add('сlickToChangeColor');
        iconClickText26leftup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-6')) {
        iconClickPath26leftup6.classList.remove('сlickToChangeColor');
        iconClickText26leftup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-6')) {
        iconClickText26leftup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-6')) {
        iconClickText26leftup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26604')) {
        iconClickPath26leftup6.classList.add('сlickToChangeColor');
        iconClickText26leftup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26604')) {
        iconClickText26leftup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup6.removeEventListener("click", funcIconClick26leftup6);
}
document.addEventListener("click", funcIconClick26leftup6);

const iconClickPath26leftup7 = document.getElementById('path-2-6-left-up-7');
const iconClickText26leftup7 = document.getElementById('text-2-6-left-up-7');
const iconClickText26leftup7desc = document.getElementById('desc2605');
function funcIconClick26leftup7(event) {
    if (event.target.closest('#path-2-6-left-up-7')) {
        iconClickPath26leftup7.classList.add('сlickToChangeColor');
        iconClickText26leftup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-7')) {
        iconClickPath26leftup7.classList.remove('сlickToChangeColor');
        iconClickText26leftup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-7')) {
        iconClickText26leftup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-7')) {
        iconClickText26leftup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26605')) {
        iconClickPath26leftup7.classList.add('сlickToChangeColor');
        iconClickText26leftup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26605')) {
        iconClickText26leftup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup7.removeEventListener("click", funcIconClick26leftup7);
}
document.addEventListener("click", funcIconClick26leftup7);

const iconClickPath26leftup8 = document.getElementById('path-2-6-left-up-8');
const iconClickText26leftup8 = document.getElementById('text-2-6-left-up-8');
const iconClickText26leftup8desc = document.getElementById('desc2606');
function funcIconClick26leftup8(event) {
    if (event.target.closest('#path-2-6-left-up-8')) {
        iconClickPath26leftup8.classList.add('сlickToChangeColor');
        iconClickText26leftup8desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-8')) {
        iconClickPath26leftup8.classList.remove('сlickToChangeColor');
        iconClickText26leftup8desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-8')) {
        iconClickText26leftup8.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-8')) {
        iconClickText26leftup8.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26606')) {
        iconClickPath26leftup8.classList.add('сlickToChangeColor');
        iconClickText26leftup8desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26606')) {
        iconClickText26leftup8.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup8.removeEventListener("click", funcIconClick26leftup8);
}
document.addEventListener("click", funcIconClick26leftup8);

const iconClickPath2607 = document.getElementById('path-2-607');
const iconClickText2607 = document.getElementById('text-2-607');
const iconClickText2607desc = document.getElementById('desc2607');
function funcIconClick2607(event) {
    if (event.target.closest('#path-2-607')) {
        iconClickPath2607.classList.add('сlickToChangeColor');
        iconClickText2607desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-607')) {
        iconClickPath2607.classList.remove('сlickToChangeColor');
        iconClickText2607desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-607')) {
        iconClickText2607.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-607')) {
        iconClickText2607.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26607')) {
        iconClickPath2607.classList.add('сlickToChangeColor');
        iconClickText2607desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26607')) {
        iconClickText2607.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2607.removeEventListener("click", funcIconClick2607);
}
document.addEventListener("click", funcIconClick2607);

const iconClickPath26rightup1 = document.getElementById('path-2-6-right-up-1');
const iconClickText26rightup1 = document.getElementById('text-2-6-right-up-1');
const iconClickText26rightup1desc = document.getElementById('desc2608a');
function funcIconClick26rightup1(event) {
    if (event.target.closest('#path-2-6-right-up-1')) {
        iconClickPath26rightup1.classList.add('сlickToChangeColor');
        iconClickText26rightup1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-1')) {
        iconClickPath26rightup1.classList.remove('сlickToChangeColor');
        iconClickText26rightup1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-1')) {
        iconClickText26rightup1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-1')) {
        iconClickText26rightup1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26608a')) {
        iconClickPath26rightup1.classList.add('сlickToChangeColor');
        iconClickText26rightup1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26608a')) {
        iconClickText26rightup1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightup1.removeEventListener("click", funcIconClick26rightup1);
}
document.addEventListener("click", funcIconClick26rightup1);

const iconClickPath26rightup2 = document.getElementById('path-2-6-right-up-2');
const iconClickText26rightup2 = document.getElementById('text-2-6-right-up-2');
const iconClickText26rightup2desc = document.getElementById('desc2608');
function funcIconClick26rightup2(event) {
    if (event.target.closest('#path-2-6-right-up-2')) {
        iconClickPath26rightup2.classList.add('сlickToChangeColor');
        iconClickText26rightup2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-2')) {
        iconClickPath26rightup2.classList.remove('сlickToChangeColor');
        iconClickText26rightup2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-2')) {
        iconClickText26rightup2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-2')) {
        iconClickText26rightup2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26608')) {
        iconClickPath26rightup2.classList.add('сlickToChangeColor');
        iconClickText26rightup2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26608')) {
        iconClickText26rightup2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightup2.removeEventListener("click", funcIconClick26rightup2);
}
document.addEventListener("click", funcIconClick26rightup2);

const iconClickPath26rightup3 = document.getElementById('path-2-6-right-up-3');
const iconClickText26rightup3 = document.getElementById('text-2-6-right-up-3');
const iconClickText26rightup3desc = document.getElementById('desc2609');
function funcIconClick26rightup3(event) {
    if (event.target.closest('#path-2-6-right-up-3')) {
        iconClickPath26rightup3.classList.add('сlickToChangeColor');
        iconClickText26rightup3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-3')) {
        iconClickPath26rightup3.classList.remove('сlickToChangeColor');
        iconClickText26rightup3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-3')) {
        iconClickText26rightup3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-3')) {
        iconClickText26rightup3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26609')) {
        iconClickPath26rightup3.classList.add('сlickToChangeColor');
        iconClickText26rightup3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26609')) {
        iconClickText26rightup3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightup3.removeEventListener("click", funcIconClick26rightup3);
}
document.addEventListener("click", funcIconClick26rightup3);

const iconClickPath26rightup4 = document.getElementById('path-2-6-right-up-4');
const iconClickText26rightup4 = document.getElementById('text-2-6-right-up-4');
const iconClickText26rightup4desc = document.getElementById('desc2611a');
function funcIconClick26rightup4(event) {
    if (event.target.closest('#path-2-6-right-up-4')) {
        iconClickPath26rightup4.classList.add('сlickToChangeColor');
        iconClickText26rightup4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-4')) {
        iconClickPath26rightup4.classList.remove('сlickToChangeColor');
        iconClickText26rightup4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-4')) {
        iconClickText26rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-4')) {
        iconClickText26rightup4.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath26rightup4.removeEventListener("click", funcIconClick26rightup4);
}
document.addEventListener("click", funcIconClick26rightup4);

const iconClickPath26rightup5 = document.getElementById('path-2-6-right-up-5');
const iconClickText26rightup5 = document.getElementById('text-2-6-right-up-5');
const iconClickText26rightup5desc = document.getElementById('desc2610a');
function funcIconClick26rightup5(event) {
    if (event.target.closest('#path-2-6-right-up-5')) {
        iconClickPath26rightup5.classList.add('сlickToChangeColor');
        iconClickText26rightup5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-5')) {
        iconClickPath26rightup5.classList.remove('сlickToChangeColor');
        iconClickText26rightup5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-5')) {
        iconClickText26rightup5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-5')) {
        iconClickText26rightup5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26610a')) {
        iconClickPath26rightup5.classList.add('сlickToChangeColor');
        iconClickText26rightup5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26610a')) {
        iconClickText26rightup5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightup5.removeEventListener("click", funcIconClick26rightup5);
}
document.addEventListener("click", funcIconClick26rightup5);

const iconClickPath26rightup6 = document.getElementById('path-2-6-right-up-6');
const iconClickText26rightup6 = document.getElementById('text-2-6-right-up-6');
const iconClickText26rightup6desc = document.getElementById('desc2610');
function funcIconClick26rightup6(event) {
    if (event.target.closest('#path-2-6-right-up-6')) {
        iconClickPath26rightup6.classList.add('сlickToChangeColor');
        iconClickText26rightup6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-6')) {
        iconClickPath26rightup6.classList.remove('сlickToChangeColor');
        iconClickText26rightup6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-6')) {
        iconClickText26rightup6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-6')) {
        iconClickText26rightup6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26610')) {
        iconClickPath26rightup6.classList.add('сlickToChangeColor');
        iconClickText26rightup6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26610')) {
        iconClickText26rightup6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightup6.removeEventListener("click", funcIconClick26rightup6);
}
document.addEventListener("click", funcIconClick26rightup6);

const iconClickPath26rightup7 = document.getElementById('path-2-6-right-up-7');
const iconClickText26rightup7 = document.getElementById('text-2-6-right-up-7');
const iconClickText26rightup7desc = document.getElementById('desc2611');
function funcIconClick26rightup7(event) {
    if (event.target.closest('#path-2-6-right-up-7')) {
        iconClickPath26rightup7.classList.add('сlickToChangeColor');
        iconClickText26rightup7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-up-7')) {
        iconClickPath26rightup7.classList.remove('сlickToChangeColor');
        iconClickText26rightup7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-up-7')) {
        iconClickText26rightup7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-up-7')) {
        iconClickText26rightup7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26611')) {
        iconClickPath26rightup7.classList.add('сlickToChangeColor');
        iconClickText26rightup7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26611')) {
        iconClickText26rightup7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightup7.removeEventListener("click", funcIconClick26rightup7);
}
document.addEventListener("click", funcIconClick26rightup7);

const iconClickPath26leftdown2 = document.getElementById('path-2-6-left-down-2');
const iconClickText26leftdown2 = document.getElementById('text-2-6-left-down-2');
const iconClickText26leftdown2desc = document.getElementById('desc2624');
function funcIconClick26leftdown2(event) {
    if (event.target.closest('#path-2-6-left-down-2')) {
        iconClickPath26leftdown2.classList.add('сlickToChangeColor');
        iconClickText26leftdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-down-2')) {
        iconClickPath26leftdown2.classList.remove('сlickToChangeColor');
        iconClickText26leftdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-down-2')) {
        iconClickText26leftdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-down-2')) {
        iconClickText26leftdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26624')) {
        iconClickPath26leftdown2.classList.add('сlickToChangeColor');
        iconClickText26leftdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26624')) {
        iconClickText26leftdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftdown2.removeEventListener("click", funcIconClick26leftdown2);
}
document.addEventListener("click", funcIconClick26leftdown2);

const iconClickPath26leftdown3 = document.getElementById('path-2-6-left-down-3');
const iconClickText26leftdown3 = document.getElementById('text-2-6-left-down-3');
const iconClickText26leftdown3desc = document.getElementById('desc2623');
function funcIconClick26leftdown3(event) {
    if (event.target.closest('#path-2-6-left-down-3')) {
        iconClickPath26leftdown3.classList.add('сlickToChangeColor');
        iconClickText26leftdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-down-3')) {
        iconClickPath26leftdown3.classList.remove('сlickToChangeColor');
        iconClickText26leftdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-down-3')) {
        iconClickText26leftdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-down-3')) {
        iconClickText26leftdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26623')) {
        iconClickPath26leftdown3.classList.add('сlickToChangeColor');
        iconClickText26leftdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26623')) {
        iconClickText26leftdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftdown3.removeEventListener("click", funcIconClick26leftdown3);
}
document.addEventListener("click", funcIconClick26leftdown3);

const iconClickPath26leftdown4 = document.getElementById('path-2-6-left-down-4');
const iconClickText26leftdown4 = document.getElementById('text-2-6-left-down-4');
const iconClickText26leftdown4desc = document.getElementById('desc2622');
function funcIconClick26leftdown4(event) {
    if (event.target.closest('#path-2-6-left-down-4')) {
        iconClickPath26leftdown4.classList.add('сlickToChangeColor');
        iconClickText26leftdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-down-4')) {
        iconClickPath26leftdown4.classList.remove('сlickToChangeColor');
        iconClickText26leftdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-down-4')) {
        iconClickText26leftdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-down-4')) {
        iconClickText26leftdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26622')) {
        iconClickPath26leftdown4.classList.add('сlickToChangeColor');
        iconClickText26leftdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26622')) {
        iconClickText26leftdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftdown4.removeEventListener("click", funcIconClick26leftdown4);
}
document.addEventListener("click", funcIconClick26leftdown4);

const iconClickPath26leftdown5 = document.getElementById('path-2-6-left-down-5');
const iconClickText26leftdown5 = document.getElementById('text-2-6-left-down-5');
const iconClickText26leftdown5desc = document.getElementById('desc2621');
function funcIconClick26leftdown5(event) {
    if (event.target.closest('#path-2-6-left-down-5')) {
        iconClickPath26leftdown5.classList.add('сlickToChangeColor');
        iconClickText26leftdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-down-5')) {
        iconClickPath26leftdown5.classList.remove('сlickToChangeColor');
        iconClickText26leftdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-down-5')) {
        iconClickText26leftdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-down-5')) {
        iconClickText26leftdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26621')) {
        iconClickPath26leftdown5.classList.add('сlickToChangeColor');
        iconClickText26leftdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26621')) {
        iconClickText26leftdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftdown5.removeEventListener("click", funcIconClick26leftdown5);
}
document.addEventListener("click", funcIconClick26leftdown5);

const iconClickPath26leftdown6 = document.getElementById('path-2-6-left-down-6');
const iconClickText26leftdown6 = document.getElementById('text-2-6-left-down-6');
const iconClickText26leftdown6desc = document.getElementById('desc2620');
function funcIconClick26leftdown6(event) {
    if (event.target.closest('#path-2-6-left-down-6')) {
        iconClickPath26leftdown6.classList.add('сlickToChangeColor');
        iconClickText26leftdown6desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-down-6')) {
        iconClickPath26leftdown6.classList.remove('сlickToChangeColor');
        iconClickText26leftdown6desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-down-6')) {
        iconClickText26leftdown6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-down-6')) {
        iconClickText26leftdown6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26620')) {
        iconClickPath26leftdown6.classList.add('сlickToChangeColor');
        iconClickText26leftdown6desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26620')) {
        iconClickText26leftdown6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftdown6.removeEventListener("click", funcIconClick26leftdown6);
}
document.addEventListener("click", funcIconClick26leftdown6);

const iconClickPath26leftdown7 = document.getElementById('path-2-6-left-down-7');
const iconClickText26leftdown7 = document.getElementById('text-2-6-left-down-7');
const iconClickText26leftdown7desc = document.getElementById('desc2619');
function funcIconClick26leftdown7(event) {
    if (event.target.closest('#path-2-6-left-down-7')) {
        iconClickPath26leftdown7.classList.add('сlickToChangeColor');
        iconClickText26leftdown7desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-down-7')) {
        iconClickPath26leftdown7.classList.remove('сlickToChangeColor');
        iconClickText26leftdown7desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-down-7')) {
        iconClickText26leftdown7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-down-7')) {
        iconClickText26leftdown7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26619')) {
        iconClickPath26leftdown7.classList.add('сlickToChangeColor');
        iconClickText26leftdown7desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26619')) {
        iconClickText26leftdown7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftdown7.removeEventListener("click", funcIconClick26leftdown7);
}
document.addEventListener("click", funcIconClick26leftdown7);

const iconClickPath26rightdown1 = document.getElementById('path-2-6-right-down-1');
const iconClickText26rightdown1 = document.getElementById('text-2-6-right-down-1');
const iconClickText26rightdown1desc = document.getElementById('desc2618');
function funcIconClick26rightdown1(event) {
    if (event.target.closest('#path-2-6-right-down-1')) {
        iconClickPath26rightdown1.classList.add('сlickToChangeColor');
        iconClickText26rightdown1desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-down-1')) {
        iconClickPath26rightdown1.classList.remove('сlickToChangeColor');
        iconClickText26rightdown1desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-down-1')) {
        iconClickText26rightdown1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-down-1')) {
        iconClickText26rightdown1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26618')) {
        iconClickPath26rightdown1.classList.add('сlickToChangeColor');
        iconClickText26rightdown1desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26618')) {
        iconClickText26rightdown1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightdown1.removeEventListener("click", funcIconClick26rightdown1);
}
document.addEventListener("click", funcIconClick26rightdown1);

const iconClickPath26rightdown2 = document.getElementById('path-2-6-right-down-2');
const iconClickText26rightdown2 = document.getElementById('text-2-6-right-down-2');
const iconClickText26rightdown2desc = document.getElementById('desc2617');
function funcIconClick26rightdown2(event) {
    if (event.target.closest('#path-2-6-right-down-2')) {
        iconClickPath26rightdown2.classList.add('сlickToChangeColor');
        iconClickText26rightdown2desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-down-2')) {
        iconClickPath26rightdown2.classList.remove('сlickToChangeColor');
        iconClickText26rightdown2desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-down-2')) {
        iconClickText26rightdown2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-down-2')) {
        iconClickText26rightdown2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26617')) {
        iconClickPath26rightdown2.classList.add('сlickToChangeColor');
        iconClickText26rightdown2desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26617')) {
        iconClickText26rightdown2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightdown2.removeEventListener("click", funcIconClick26rightdown2);
}
document.addEventListener("click", funcIconClick26rightdown2);

const iconClickPath26rightdown3 = document.getElementById('path-2-6-right-down-3');
const iconClickText26rightdown3 = document.getElementById('text-2-6-right-down-3');
const iconClickText26rightdown3desc = document.getElementById('desc2616');
function funcIconClick26rightdown3(event) {
    if (event.target.closest('#path-2-6-right-down-3')) {
        iconClickPath26rightdown3.classList.add('сlickToChangeColor');
        iconClickText26rightdown3desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-down-3')) {
        iconClickPath26rightdown3.classList.remove('сlickToChangeColor');
        iconClickText26rightdown3desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-down-3')) {
        iconClickText26rightdown3.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-down-3')) {
        iconClickText26rightdown3.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26616')) {
        iconClickPath26rightdown3.classList.add('сlickToChangeColor');
        iconClickText26rightdown3desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26616')) {
        iconClickText26rightdown3.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightdown3.removeEventListener("click", funcIconClick26rightdown3);
}
document.addEventListener("click", funcIconClick26rightdown3);

const iconClickPath26rightdown4 = document.getElementById('path-2-6-right-down-4');
const iconClickText26rightdown4 = document.getElementById('text-2-6-right-down-4');
const iconClickText26rightdown4desc = document.getElementById('desc2615');
function funcIconClick26rightdown4(event) {
    if (event.target.closest('#path-2-6-right-down-4')) {
        iconClickPath26rightdown4.classList.add('сlickToChangeColor');
        iconClickText26rightdown4desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-down-4')) {
        iconClickPath26rightdown4.classList.remove('сlickToChangeColor');
        iconClickText26rightdown4desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-down-4')) {
        iconClickText26rightdown4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-down-4')) {
        iconClickText26rightdown4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26615')) {
        iconClickPath26rightdown4.classList.add('сlickToChangeColor');
        iconClickText26rightdown4desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26615')) {
        iconClickText26rightdown4.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightdown4.removeEventListener("click", funcIconClick26rightdown4);
}
document.addEventListener("click", funcIconClick26rightdown4);

const iconClickPath26rightdown5 = document.getElementById('path-2-6-right-down-5');
const iconClickText26rightdown5 = document.getElementById('text-2-6-right-down-5');
const iconClickText26rightdown5desc = document.getElementById('desc2614');
function funcIconClick26rightdown5(event) {
    if (event.target.closest('#path-2-6-right-down-5')) {
        iconClickPath26rightdown5.classList.add('сlickToChangeColor');
        iconClickText26rightdown5desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-right-down-5')) {
        iconClickPath26rightdown5.classList.remove('сlickToChangeColor');
        iconClickText26rightdown5desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-6-right-down-5')) {
        iconClickText26rightdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-right-down-5')) {
        iconClickText26rightdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26614')) {
        iconClickPath26rightdown5.classList.add('сlickToChangeColor');
        iconClickText26rightdown5desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26614')) {
        iconClickText26rightdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26rightdown5.removeEventListener("click", funcIconClick26rightdown5);
}
document.addEventListener("click", funcIconClick26rightdown5);

const iconClickPath2613 = document.getElementById('path-2-613');
const iconClickText2613 = document.getElementById('text-2-613');
const iconClickText2613desc = document.getElementById('desc2613');
function funcIconClick2613(event) {
    if (event.target.closest('#path-2-613')) {
        iconClickPath2613.classList.add('сlickToChangeColor');
        iconClickText2613desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-613')) {
        iconClickPath2613.classList.remove('сlickToChangeColor');
        iconClickText2613desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-613')) {
        iconClickText2613.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-613')) {
        iconClickText2613.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26613')) {
        iconClickPath2613.classList.add('сlickToChangeColor');
        iconClickText2613desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26613')) {
        iconClickText2613.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2613.removeEventListener("click", funcIconClick2613);
}
document.addEventListener("click", funcIconClick2613);

const iconClickPath2612 = document.getElementById('path-2-612');
const iconClickText2612 = document.getElementById('text-2-612');
const iconClickText2612desc = document.getElementById('desc2612');
function funcIconClick2612(event) {
    if (event.target.closest('#path-2-612')) {
        iconClickPath2612.classList.add('сlickToChangeColor');
        iconClickText2612desc.style.display = 'block';
    }
    if (!event.target.closest('#path-2-612')) {
        iconClickPath2612.classList.remove('сlickToChangeColor');
        iconClickText2612desc.style.display = 'none';
    }
    if (event.target.closest('#path-2-612')) {
        iconClickText2612.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-612')) {
        iconClickText2612.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-26612')) {
        iconClickPath2612.classList.add('сlickToChangeColor');
        iconClickText2612desc.style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'block';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.add("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-26612')) {
        iconClickText2612.classList.add('сlickToChangeTextColor');
    }
    iconClickPath2612.removeEventListener("click", funcIconClick2612);
}
document.addEventListener("click", funcIconClick2612);







// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// wc - man
const iconClickPath1rightWcman = document.getElementById('path-1-1wc-man');
const iconClickText1rightWcman = document.getElementById('text-1-1wc-man');
const iconClickText1rightWc1man = document.getElementById('text-1-1wc-man1');
function funcIconClick1rightWcman(event) {
    if (event.target.closest('#path-1-1wc-man')) {
        iconClickPath1rightWcman.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen11').style.display = 'block';
    }
    if (!event.target.closest('#path-1-1wc-man')) {
        iconClickPath1rightWcman.classList.remove('сlickToChangeColor');
        document.getElementById('descwcmen11').style.display = 'none';
    }
    if (event.target.closest('#path-1-1wc-man')) {
        iconClickText1rightWcman.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-1wc-man')) {
        iconClickText1rightWcman.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-1wc-man')) {
        iconClickText1rightWc1man.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-1wc-man')) {
        iconClickText1rightWc1man.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickPath1rightWcman.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'block';
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText1rightWcman.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText1rightWc1man.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1rightWcman.removeEventListener("click", funcIconClick1rightWcman);
}
document.addEventListener("click", funcIconClick1rightWcman);

const iconClickPath1LeftWc = document.getElementById('path-1-left-wc');
const iconClickText1LeftWc = document.getElementById('text-1-left-wc');
const iconClickText1LeftWc1 = document.getElementById('text-1-left-wc1');
function funcIconClick1LeftWc(event) {
    if (event.target.closest('#path-1-left-wc')) {
        iconClickPath1LeftWc.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'block';
    }
    if (!event.target.closest('#path-1-left-wc')) {
        iconClickPath1LeftWc.classList.remove('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'none';
    }
    if (event.target.closest('#path-1-left-wc')) {
        iconClickText1LeftWc.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-left-wc')) {
        iconClickText1LeftWc.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-left-wc')) {
        iconClickText1LeftWc1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-left-wc')) {
        iconClickText1LeftWc1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickPath1LeftWc.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'block';
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText1LeftWc.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText1LeftWc1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1LeftWc.removeEventListener("click", funcIconClick1LeftWc);
}
document.addEventListener("click", funcIconClick1LeftWc);

const iconClickPath14rightwing1part2 = document.getElementById('path-1-4-right-wing-1part-2');
const iconClickText14rightwing1part2 = document.getElementById('text-1-4-right-wing-1part-2');
const iconClickText14rightwing1part21 = document.getElementById('text-1-4-right-wing-1part-2-1');
function funcIconClick14rightwing1part2(event) {
    if (event.target.closest('#path-1-4-right-wing-1part-2')) {
        iconClickPath14rightwing1part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen14').style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-2')) {
        iconClickPath14rightwing1part2.classList.remove('сlickToChangeColor');
        document.getElementById('descwcmen14').style.display = 'none';
    }
    if (event.target.closest('#path-1-4-right-wing-1part-2')) {
        iconClickText14rightwing1part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-2')) {
        iconClickText14rightwing1part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-4-right-wing-1part-2')) {
        iconClickText14rightwing1part21.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-right-wing-1part-2')) {
        iconClickText14rightwing1part21.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickPath14rightwing1part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'block';
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText14rightwing1part2.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText14rightwing1part21.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14rightwing1part2.removeEventListener("click", funcIconClick14rightwing1part2);
}
document.addEventListener("click", funcIconClick14rightwing1part2);

const iconClickPath21leftup4 = document.getElementById('path-2-1-left-up-4');
const iconClickText21leftup4 = document.getElementById('text-2-1-left-up-4');
const iconClickText21leftup41 = document.getElementById('text-2-1-left-up-4-1');
function funcIconClick21leftup4(event) {
    if (event.target.closest('#path-2-1-left-up-4')) {
        iconClickPath21leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen21').style.display = 'block';
    }
    if (!event.target.closest('#path-2-1-left-up-4')) {
        iconClickPath21leftup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcmen21').style.display = 'none';
    }
    if (event.target.closest('#path-2-1-left-up-4')) {
        iconClickText21leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-4')) {
        iconClickText21leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-1-left-up-4')) {
        iconClickText21leftup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-1-left-up-4')) {
        iconClickText21leftup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickPath21leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'block';
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText21leftup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText21leftup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath21leftup4.removeEventListener("click", funcIconClick21leftup4);
}
document.addEventListener("click", funcIconClick21leftup4);

const iconClickPath25leftup4 = document.getElementById('path-2-5-left-up-4');
const iconClickText25leftup4 = document.getElementById('text-2-5-left-up-4');
const iconClickText25leftup41 = document.getElementById('text-2-5-left-up-4-1');
function funcIconClick25leftup4(event) {
    if (event.target.closest('#path-2-5-left-up-4')) {
        iconClickPath25leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen25').style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-left-up-4')) {
        iconClickPath25leftup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcmen25').style.display = 'none';
    }
    if (event.target.closest('#path-2-5-left-up-4')) {
        iconClickText25leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-4')) {
        iconClickText25leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-5-left-up-4')) {
        iconClickText25leftup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-left-up-4')) {
        iconClickText25leftup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickPath25leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcmen').style.display = 'block';
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText25leftup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcmen')) {
        iconClickText25leftup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25leftup4.removeEventListener("click", funcIconClick25leftup4);
}
document.addEventListener("click", funcIconClick25leftup4);

// wc - women
const iconClickPath1rightWc = document.getElementById('path-1-right-wc');
const iconClickText1rightWc = document.getElementById('text-1-right-wc');
const iconClickText1rightWc1 = document.getElementById('text-1-right-wc1');
function funcIconClick1rightWc(event) {
    if (event.target.closest('#path-1-right-wc')) {
        iconClickPath1rightWc.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (!event.target.closest('#path-1-right-wc')) {
        iconClickPath1rightWc.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'none';
    }
    if (event.target.closest('#path-1-right-wc')) {
        iconClickText1rightWc.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-right-wc')) {
        iconClickText1rightWc.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-right-wc')) {
        iconClickText1rightWc1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-right-wc')) {
        iconClickText1rightWc1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath1rightWc.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText1rightWc.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText1rightWc1.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1rightWc.removeEventListener("click", funcIconClick1rightWc);
}
document.addEventListener("click", funcIconClick1rightWc);

const iconClickPath13leftwing2part2 = document.getElementById('path-1-3-left-wing-2part-2');
const iconClickText13leftwing2part2 = document.getElementById('text-1-3-left-wing-2part-2');
const iconClickText13leftwing2part21 = document.getElementById('text-1-3-left-wing-2part-2-1');
function funcIconClick13leftwing2part2(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-2')) {
        iconClickPath13leftwing2part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen13').style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-2')) {
        iconClickPath13leftwing2part2.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen13').style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-2')) {
        iconClickText13leftwing2part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-2')) {
        iconClickText13leftwing2part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-3-left-wing-2part-2')) {
        iconClickText13leftwing2part21.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-2')) {
        iconClickText13leftwing2part21.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath13leftwing2part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText13leftwing2part2.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText13leftwing2part21.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part2.removeEventListener("click", funcIconClick13leftwing2part2);
}
document.addEventListener("click", funcIconClick13leftwing2part2);

const iconClickPath13rightwing1part2 = document.getElementById('path-1-3-right-wing-1part-2');
const iconClickText13rightwing1part2 = document.getElementById('text-1-3-right-wing-1part-2');
const iconClickText13rightwing1part21 = document.getElementById('text-1-3-right-wing-1part-2-1');
function funcIconClick13rightwing1part2(event) {
    if (event.target.closest('#path-1-3-right-wing-1part-2')) {
        iconClickPath13rightwing1part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen131').style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-2')) {
        iconClickPath13rightwing1part2.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen131').style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-1part-2')) {
        iconClickText13rightwing1part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-2')) {
        iconClickText13rightwing1part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-3-right-wing-1part-2')) {
        iconClickText13rightwing1part21.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-2')) {
        iconClickText13rightwing1part21.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath13rightwing1part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText13rightwing1part2.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText13rightwing1part21.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing1part2.removeEventListener("click", funcIconClick13rightwing1part2);
}
document.addEventListener("click", funcIconClick13rightwing1part2);

const iconClickPath14leftwing2part2 = document.getElementById('path-1-4-left-wing-2part-2');
const iconClickText14leftwing2part2 = document.getElementById('text-1-4-left-wing-2part-2');
const iconClickText14leftwing2part21 = document.getElementById('text-1-4-left-wing-2part-2-1');
function funcIconClick14leftwing2part2(event) {
    if (event.target.closest('#path-1-4-left-wing-2part-2')) {
        iconClickPath14leftwing2part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen14').style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-2')) {
        iconClickPath14leftwing2part2.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen14').style.display = 'none';
    }
    if (event.target.closest('#path-1-4-left-wing-2part-2')) {
        iconClickText14leftwing2part2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-2')) {
        iconClickText14leftwing2part2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-4-left-wing-2part-2')) {
        iconClickText14leftwing2part21.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-left-wing-2part-2')) {
        iconClickText14leftwing2part21.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath14leftwing2part2.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText14leftwing2part2.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText14leftwing2part21.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14leftwing2part2.removeEventListener("click", funcIconClick14leftwing2part2);
}
document.addEventListener("click", funcIconClick14leftwing2part2);

const iconClickPath22leftup4 = document.getElementById('path-2-2-left-up-4');
const iconClickText22leftup4 = document.getElementById('text-2-2-left-up-4');
const iconClickText22leftup41 = document.getElementById('text-2-2-left-up-4-1');
function funcIconClick22leftup4(event) {
    if (event.target.closest('#path-2-2-left-up-4')) {
        iconClickPath22leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen22').style.display = 'block';
    }
    if (!event.target.closest('#path-2-2-left-up-4')) {
        iconClickPath22leftup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen22').style.display = 'none';
    }
    if (event.target.closest('#path-2-2-left-up-4')) {
        iconClickText22leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-4')) {
        iconClickText22leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-2-left-up-4')) {
        iconClickText22leftup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-2-left-up-4')) {
        iconClickText22leftup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath22leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText22leftup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText22leftup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath22leftup4.removeEventListener("click", funcIconClick22leftup4);
}
document.addEventListener("click", funcIconClick22leftup4);

const iconClickPath23leftup4 = document.getElementById('path-2-3-left-up-4');
const iconClickText23leftup4 = document.getElementById('text-2-3-left-up-4');
const iconClickText23leftup41 = document.getElementById('text-2-3-left-up-4-1');
function funcIconClick23leftup4(event) {
    if (event.target.closest('#path-2-3-left-up-4')) {
        iconClickPath23leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen23').style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-left-up-4')) {
        iconClickPath23leftup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen23').style.display = 'none';
    }
    if (event.target.closest('#path-2-3-left-up-4')) {
        iconClickText23leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-4')) {
        iconClickText23leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-3-left-up-4')) {
        iconClickText23leftup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-left-up-4')) {
        iconClickText23leftup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath23leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText23leftup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText23leftup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23leftup4.removeEventListener("click", funcIconClick23leftup4);
}
document.addEventListener("click", funcIconClick23leftup4);

const iconClickPath23rightup4 = document.getElementById('path-2-3-right-up-4');
const iconClickText23rightup4 = document.getElementById('text-2-3-right-up-4');
const iconClickText23rightup41 = document.getElementById('text-2-3-right-up-4-1');
function funcIconClick23rightup4(event) {
    if (event.target.closest('#path-2-3-right-up-4')) {
        iconClickPath23rightup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen231').style.display = 'block';
    }
    if (!event.target.closest('#path-2-3-right-up-4')) {
        iconClickPath23rightup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen231').style.display = 'none';
    }
    if (event.target.closest('#path-2-3-right-up-4')) {
        iconClickText23rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-4')) {
        iconClickText23rightup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-3-right-up-4')) {
        iconClickText23rightup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-3-right-up-4')) {
        iconClickText23rightup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath23rightup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText23rightup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText23rightup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath23rightup4.removeEventListener("click", funcIconClick23rightup4);
}
document.addEventListener("click", funcIconClick23rightup4);

const iconClickPath24leftup4 = document.getElementById('path-2-4-left-up-4');
const iconClickText24leftup4 = document.getElementById('text-2-4-left-up-4');
const iconClickText24leftup41 = document.getElementById('text-2-4-left-up-4-1');
function funcIconClick24leftup4(event) {
    if (event.target.closest('#path-2-4-left-up-4')) {
        iconClickPath24leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen24').style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-left-up-4')) {
        iconClickPath24leftup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen24').style.display = 'none';
    }
    if (event.target.closest('#path-2-4-left-up-4')) {
        iconClickText24leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-4')) {
        iconClickText24leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-4-left-up-4')) {
        iconClickText24leftup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-left-up-4')) {
        iconClickText24leftup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath24leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText24leftup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText24leftup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24leftup4.removeEventListener("click", funcIconClick24leftup4);
}
document.addEventListener("click", funcIconClick24leftup4);

const iconClickPath25rightup4 = document.getElementById('path-2-5-right-up-4');
const iconClickText25rightup4 = document.getElementById('text-2-5-right-up-4');
const iconClickText25rightup41 = document.getElementById('text-2-5-right-up-4-1');
function funcIconClick25rightup4(event) {
    if (event.target.closest('#path-2-5-right-up-4')) {
        iconClickPath25rightup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen25').style.display = 'block';
    }
    if (!event.target.closest('#path-2-5-right-up-4')) {
        iconClickPath25rightup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen25').style.display = 'none';
    }
    if (event.target.closest('#path-2-5-right-up-4')) {
        iconClickText25rightup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-4')) {
        iconClickText25rightup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-5-right-up-4')) {
        iconClickText25rightup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-5-right-up-4')) {
        iconClickText25rightup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath25rightup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText25rightup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText25rightup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath25rightup4.removeEventListener("click", funcIconClick25rightup4);
}
document.addEventListener("click", funcIconClick25rightup4);

const iconClickPath26leftup4 = document.getElementById('path-2-6-left-up-4');
const iconClickText26leftup4 = document.getElementById('text-2-6-left-up-4');
const iconClickText26leftup41 = document.getElementById('text-2-6-left-up-4-1');
function funcIconClick26leftup4(event) {
    if (event.target.closest('#path-2-6-left-up-4')) {
        iconClickPath26leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen26').style.display = 'block';
    }
    if (!event.target.closest('#path-2-6-left-up-4')) {
        iconClickPath26leftup4.classList.remove('сlickToChangeColor');
        document.getElementById('descwcwomen26').style.display = 'none';
    }
    if (event.target.closest('#path-2-6-left-up-4')) {
        iconClickText26leftup4.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-4')) {
        iconClickText26leftup4.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-2-6-left-up-4')) {
        iconClickText26leftup41.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-6-left-up-4')) {
        iconClickText26leftup41.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickPath26leftup4.classList.add('сlickToChangeColor');
        document.getElementById('descwcwomen').style.display = 'block';
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText26leftup4.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-wcwomen')) {
        iconClickText26leftup41.classList.add('сlickToChangeTextColor');
    }
    iconClickPath26leftup4.removeEventListener("click", funcIconClick26leftup4);
}
document.addEventListener("click", funcIconClick26leftup4);

// 1 - 1 - fablab
const iconClickPath172 = document.getElementById('path-1-172');
const iconClickText172 = document.getElementById('text-1-172');
function funcIconClick172(event) {
    if (event.target.closest('#path-1-172')) {
        iconClickPath172.classList.add('сlickToChangeColor');
        document.getElementById('descfablab').style.display = 'block';
    }
    if (!event.target.closest('#path-1-172')) {
        iconClickPath172.classList.remove('сlickToChangeColor');
        document.getElementById('descfablab').style.display = 'none';
    }
    if (event.target.closest('#path-1-172')) {
        iconClickText172.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-172')) {
        iconClickText172.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-fablab')) {
        iconClickPath172.classList.add('сlickToChangeColor');
        document.getElementById('descfablab').style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-fablab')) {
        iconClickText172.classList.add('сlickToChangeTextColor');
    }
    iconClickPath172.removeEventListener("click", funcIconClick172);
}
document.addEventListener("click", funcIconClick172);

// 1 - 1 - stolovaya
const iconClickPathstolovaya = document.getElementById('path-1-stolovaya');
const iconClickTextstolovaya = document.getElementById('text-1-stolovaya');
function funcIconClickstolovaya(event) {
    if (event.target.closest('#path-1-stolovaya')) {
        iconClickPathstolovaya.classList.add('сlickToChangeColor');
        document.getElementById('descstolovaya').style.display = 'block';
    }
    if (!event.target.closest('#path-1-stolovaya')) {
        iconClickPathstolovaya.classList.remove('сlickToChangeColor');
        document.getElementById('descstolovaya').style.display = 'none';
    }
    if (event.target.closest('#path-1-stolovaya')) {
        iconClickTextstolovaya.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-stolovaya')) {
        iconClickTextstolovaya.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-stolovaya')) {
        iconClickPathstolovaya.classList.add('сlickToChangeColor');
        document.getElementById('descstolovaya').style.display = 'block';
        b1f1.style.display = 'block';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.add("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-stolovaya')) {
        iconClickTextstolovaya.classList.add('сlickToChangeTextColor');
    }
    iconClickPathstolovaya.removeEventListener("click", funcIconClickstolovaya);
}
document.addEventListener("click", funcIconClickstolovaya);

// 1 - 2 - book-storage
const iconClickPath1bookstorage = document.getElementById('path-1-book-storage');
const iconClickText1bookstorage = document.getElementById('text-1-book-storage');
const iconClickText1bookstorage1 = document.getElementById('text-1-book-storage1');
const iconClickText1bookstorage2 = document.getElementById('text-1-book-storage2');
function funcIconClick1bookstorage(event) {
    if (event.target.closest('#path-1-book-storage')) {
        iconClickPath1bookstorage.classList.add('сlickToChangeColor');
        document.getElementById('descbook').style.display = 'block';
    }
    if (!event.target.closest('#path-1-book-storage')) {
        iconClickPath1bookstorage.classList.remove('сlickToChangeColor');
        document.getElementById('descbook').style.display = 'none';
    }
    if (event.target.closest('#path-1-book-storage')) {
        iconClickText1bookstorage.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-book-storage')) {
        iconClickText1bookstorage.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-book-storage')) {
        iconClickText1bookstorage1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-book-storage')) {
        iconClickText1bookstorage1.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#path-1-book-storage')) {
        iconClickText1bookstorage2.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-book-storage')) {
        iconClickText1bookstorage2.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-book')) {
        iconClickPath1bookstorage.classList.add('сlickToChangeColor');
        document.getElementById('descbook').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-book')) {
        iconClickText1bookstorage.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-book')) {
        iconClickText1bookstorage1.classList.add('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-book')) {
        iconClickText1bookstorage2.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1bookstorage.removeEventListener("click", funcIconClick1bookstorage);
}
document.addEventListener("click", funcIconClick1bookstorage);

// 1 - 2 - maz
const iconClickPath1maz = document.getElementById('path-1-maz');
const iconClickText1maz = document.getElementById('text-1-maz');
function funcIconClick1maz(event) {
    if (event.target.closest('#path-1-maz')) {
        iconClickPath1maz.classList.add('сlickToChangeColor');
        document.getElementById('descmaz').style.display = 'block';
    }
    if (!event.target.closest('#path-1-maz')) {
        iconClickPath1maz.classList.remove('сlickToChangeColor');
        document.getElementById('descmaz').style.display = 'none';
    }
    if (event.target.closest('#path-1-maz')) {
        iconClickText1maz.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-maz')) {
        iconClickText1maz.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-maz')) {
        iconClickPath1maz.classList.add('сlickToChangeColor');
        document.getElementById('descmaz').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'block';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.add("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-maz')) {
        iconClickText1maz.classList.add('сlickToChangeTextColor');
    }
    iconClickPath1maz.removeEventListener("click", funcIconClick1maz);
}
document.addEventListener("click", funcIconClick1maz);

// 1b - 3floor  -  biblioteka
const iconClickPath13rightwing1part6 = document.getElementById('path-1-3-right-wing-1part-6');
const iconClickText13rightwing1part6 = document.getElementById('text-1-3-right-wing-1part-6');
function funcIconClick13rightwing1part6(event) {
    if (event.target.closest('#path-1-3-right-wing-1part-6')) {
        iconClickPath13rightwing1part6.classList.add('сlickToChangeColor');
        document.getElementById('descbibl').style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-6')) {
        iconClickPath13rightwing1part6.classList.remove('сlickToChangeColor');
        document.getElementById('descbibl').style.display = 'none';
    }
    if (event.target.closest('#path-1-3-right-wing-1part-6')) {
        iconClickText13rightwing1part6.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-6')) {
        iconClickText13rightwing1part6.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-bibl')) {
        iconClickPath13rightwing1part6.classList.add('сlickToChangeColor');
        document.getElementById('descbibl').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-bibl')) {
        iconClickText13rightwing1part6.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13rightwing1part6.removeEventListener("click", funcIconClick13rightwing1part6);
}
document.addEventListener("click", funcIconClick13rightwing1part6);

// 1b - 3floor  -  baz
const iconClickPath13straight = document.getElementById('path-1-3-straight');
const iconClickText13straight = document.getElementById('text-1-3-straight');
function funcIconClick13straight(event) {
    if (event.target.closest('#path-1-3-straight')) {
        iconClickPath13straight.classList.add('сlickToChangeColor');
        document.getElementById('descbaz').style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-straight')) {
        iconClickPath13straight.classList.remove('сlickToChangeColor');
        document.getElementById('descbaz').style.display = 'none';
    }
    if (event.target.closest('#path-1-3-straight')) {
        iconClickText13straight.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-straight')) {
        iconClickText13straight.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-baz')) {
        iconClickPath13straight.classList.add('сlickToChangeColor');
        document.getElementById('descbaz').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-baz')) {
        iconClickText13straight.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13straight.removeEventListener("click", funcIconClick13straight);
}
document.addEventListener("click", funcIconClick13straight);

// 1b - 3floor  -  konferenz-zal
const iconClickPath13leftwing2part7 = document.getElementById('path-1-3-left-wing-2part-7');
const iconClickText13leftwing2part7 = document.getElementById('text-1-3-left-wing-2part-7');
function funcIconClick13leftwing2part7(event) {
    if (event.target.closest('#path-1-3-left-wing-2part-7')) {
        iconClickPath13leftwing2part7.classList.add('сlickToChangeColor');
        document.getElementById('desckonf').style.display = 'block';
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-7')) {
        iconClickPath13leftwing2part7.classList.remove('сlickToChangeColor');
        document.getElementById('desckonf').style.display = 'none';
    }
    if (event.target.closest('#path-1-3-left-wing-2part-7')) {
        iconClickText13leftwing2part7.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-left-wing-2part-7')) {
        iconClickText13leftwing2part7.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-konf')) {
        iconClickPath13leftwing2part7.classList.add('сlickToChangeColor');
        document.getElementById('desckonf').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'block';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.add("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-konf')) {
        iconClickText13leftwing2part7.classList.add('сlickToChangeTextColor');
    }
    iconClickPath13leftwing2part7.removeEventListener("click", funcIconClick13leftwing2part7);
}
document.addEventListener("click", funcIconClick13leftwing2part7);

// 1b - 4floor  -  straight
const iconClickPath14straight = document.getElementById('path-1-4-straight');
const iconClickText14straight = document.getElementById('text-1-4-straight');
function funcIconClick14straight(event) {
    if (event.target.closest('#path-1-4-straight')) {
        iconClickPath14straight.classList.add('сlickToChangeColor');
        document.getElementById('descbbaz').style.display = 'block';
    }
    if (!event.target.closest('#path-1-4-straight')) {
        iconClickPath14straight.classList.remove('сlickToChangeColor');
        document.getElementById('descbbaz').style.display = 'none';
    }
    if (event.target.closest('#path-1-4-straight')) {
        iconClickText14straight.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-4-straight')) {
        iconClickText14straight.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-bbaz')) {
        iconClickPath14straight.classList.add('сlickToChangeColor');
        document.getElementById('descbbaz').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'block';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'none';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.add("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.remove("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-bbaz')) {
        iconClickText14straight.classList.add('сlickToChangeTextColor');
    }
    iconClickPath14straight.removeEventListener("click", funcIconClick14straight);
}
document.addEventListener("click", funcIconClick14straight);

// 2b - 4floor  -  sport
const iconClickPath24rightdown5 = document.getElementById('path-2-4-right-down-5');
const iconClickText24rightdown5 = document.getElementById('text-2-4-right-down-5');
function funcIconClick24rightdown5(event) {
    if (event.target.closest('#path-2-4-right-down-5')) {
        iconClickPath24rightdown5.classList.add('сlickToChangeColor');
        document.getElementById('descsport').style.display = 'block';
    }
    if (!event.target.closest('#path-2-4-right-down-5')) {
        iconClickPath24rightdown5.classList.remove('сlickToChangeColor');
        document.getElementById('descsport').style.display = 'none';
    }
    if (event.target.closest('#path-2-4-right-down-5')) {
        iconClickText24rightdown5.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-2-4-right-down-5')) {
        iconClickText24rightdown5.classList.remove('сlickToChangeTextColor');
    }
    if (event.target.closest('#si-sport')) {
        iconClickPath24rightdown5.classList.add('сlickToChangeColor');
        document.getElementById('descsport').style.display = 'block';
        b1f1.style.display = 'none';
        b1f2.style.display = 'none';
        b1f3.style.display = 'none';
        b1f4.style.display = 'none';
        b2f1.style.display = 'none';
        b2f2.style.display = 'none';
        b2f3.style.display = 'none';
        b2f4.style.display = 'block';
        b2f5.style.display = 'none';
        b2f6.style.display = 'none';
        b1f1list.classList.remove("сlickToChangeColorDropdown");
        b1f2list.classList.remove("сlickToChangeColorDropdown");
        b1f3list.classList.remove("сlickToChangeColorDropdown");
        b1f4list.classList.remove("сlickToChangeColorDropdown");
        b2f1list.classList.remove("сlickToChangeColorDropdown");
        b2f2list.classList.remove("сlickToChangeColorDropdown");
        b2f3list.classList.remove("сlickToChangeColorDropdown");
        b2f4list.classList.add("сlickToChangeColorDropdown");
        b2f5list.classList.remove("сlickToChangeColorDropdown");
        b2f6list.classList.remove("сlickToChangeColorDropdown");
    }
    if (event.target.closest('#si-sport')) {
        iconClickText24rightdown5.classList.add('сlickToChangeTextColor');
    }
    iconClickPath24rightdown5.removeEventListener("click", funcIconClick24rightdown5);
}
document.addEventListener("click", funcIconClick24rightdown5);














// 1b - 3floor  -  right-wing-1part - right-boxroom
const iconClickPath13rightwing1part1 = document.getElementById('path-1-3-right-wing-1part-1');
const iconClickText13rightwing1part1 = document.getElementById('text-1-3-right-wing-1part-1');
function funcIconClick13rightwing1part1(event) {
    if (event.target.closest('#path-1-3-right-wing-1part-1')) {
        iconClickPath13rightwing1part1.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-1')) {
        iconClickPath13rightwing1part1.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-3-right-wing-1part-1')) {
        iconClickText13rightwing1part1.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-3-right-wing-1part-1')) {
        iconClickText13rightwing1part1.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath13rightwing1part1.removeEventListener("click", funcIconClick13rightwing1part1);
}
document.addEventListener("click", funcIconClick13rightwing1part1);

// 1 - 2 - left - boxroom 
const iconClickPath1LeftBoxroom = document.getElementById('path-1-left-boxroom');
const iconClickText1LeftBoxroom = document.getElementById('text-1-left-boxroom');
function funcIconClick1LeftBoxroom(event) {
    if (event.target.closest('#path-1-left-boxroom')) {
        iconClickPath1LeftBoxroom.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-left-boxroom')) {
        iconClickPath1LeftBoxroom.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-left-boxroom')) {
        iconClickText1LeftBoxroom.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-left-boxroom')) {
        iconClickText1LeftBoxroom.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath1LeftBoxroom.removeEventListener("click", funcIconClick1LeftBoxroom);
}
document.addEventListener("click", funcIconClick1LeftBoxroom);

// 1 - 2 - right - boxroom
const iconClickPath1rightBoxroom = document.getElementById('path-1-right-boxroom');
const iconClickText1rightBoxroom = document.getElementById('text-1-right-boxroom');
function funcIconClick1rightBoxroom(event) {
    if (event.target.closest('#path-1-right-boxroom')) {
        iconClickPath1rightBoxroom.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-right-boxroom')) {
        iconClickPath1rightBoxroom.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-right-boxroom')) {
        iconClickText1rightBoxroom.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-right-boxroom')) {
        iconClickText1rightBoxroom.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath1rightBoxroom.removeEventListener("click", funcIconClick1rightBoxroom);
}
document.addEventListener("click", funcIconClick1rightBoxroom);

// 1 - 1 - boxroom
const iconClickPath1right1Boxroom = document.getElementById('path-1-1boxroom');
const iconClickText1right1Boxroom = document.getElementById('text-1-1boxroom');
function funcIconClick1right1Boxroom(event) {
    if (event.target.closest('#path-1-1boxroom')) {
        iconClickPath1right1Boxroom.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-1boxroom')) {
        iconClickPath1right1Boxroom.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-1boxroom')) {
        iconClickText1right1Boxroom.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-1boxroom')) {
        iconClickText1right1Boxroom.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath1right1Boxroom.removeEventListener("click", funcIconClick1right1Boxroom);
}
document.addEventListener("click", funcIconClick1right1Boxroom);