// 1 - 210
const iconClickPath210 = document.getElementById('path-1-210');
const iconClickText210 = document.getElementById('text-1-210');
function funcIconClick210(event) {
    if (event.target.closest('#path-1-210')) {
        iconClickPath210.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-210')) {
        iconClickPath210.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-210')) {
        iconClickText210.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-210')) {
        iconClickText210.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath210.removeEventListener("click", funcIconClick210);
}
document.addEventListener("click", funcIconClick210);

// 1 - 209
const iconClickPath209 = document.getElementById('path-1-209');
const iconClickText209 = document.getElementById('text-1-209');
function funcIconClick209(event) {
    if (event.target.closest('#path-1-209')) {
        iconClickPath209.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-209')) {
        iconClickPath209.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-209')) {
        iconClickText209.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-209')) {
        iconClickText209.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath209.removeEventListener("click", funcIconClick209);
}
document.addEventListener("click", funcIconClick209);

// 1 - 208
const iconClickPath208 = document.getElementById('path-1-208');
const iconClickText208 = document.getElementById('text-1-208');
function funcIconClick208(event) {
    if (event.target.closest('#path-1-208')) {
        iconClickPath208.classList.add('сlickToChangeColor');
    }
    if (!event.target.closest('#path-1-208')) {
        iconClickPath208.classList.remove('сlickToChangeColor');
    }
    if (event.target.closest('#path-1-208')) {
        iconClickText208.classList.add('сlickToChangeTextColor');
    }
    if (!event.target.closest('#path-1-208')) {
        iconClickText208.classList.remove('сlickToChangeTextColor');
    }
    iconClickPath208.removeEventListener("click", funcIconClick208);
}
document.addEventListener("click", funcIconClick208);