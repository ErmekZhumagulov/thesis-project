// wc
const ButtonClickWc = document.getElementById('button-wc');
const ButtonClickAllWc = document.querySelectorAll('.path-wc');
const ButtonClickAllWcText = document.querySelectorAll('.text-wc');
ButtonClickAllWc.forEach(elemWc => {
    function funcButtonClickWc(event) {
        if (event.target.closest('#button-wc')) {
            ButtonClickWc.classList.add('сlickToChangeButtonColor');
        }
        if (!event.target.closest('#button-wc')) {
            ButtonClickWc.classList.remove('сlickToChangeButtonColor');
        }
        if (event.target.closest('#button-wc')) {
            elemWc.classList.add('сlickToChangeColor');
        }
        ButtonClickWc.removeEventListener("click", funcButtonClickWc);
    }
    document.addEventListener("click", funcButtonClickWc);
});
ButtonClickAllWcText.forEach(elemWcText => {
    function funcButtonClickWcText(event) {
        if (event.target.closest('#button-wc')) {
            elemWcText.classList.add('сlickToChangeTextColor');
        }
    }
    document.addEventListener("click", funcButtonClickWcText);
});

let fff = $( "#map-frame" ).contents().find( ".path-wc" );
console.log(fff);