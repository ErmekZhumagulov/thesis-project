const iconClickPath = document.querySelectorAll('path');
for (itemsPathToPath of iconClickPath) {
    itemsPathToPath.addEventListener('click', function(){
        itemsPathToPath.classList.toggle('сlickToChangeColor');
    });
}
for (itemsPathToText of iconClickPath) {
    itemsPathToText.addEventListener('click', function(){
        itemsTextToText.classList.toggle('сlickToChangeTextColor');
    });
}

const iconClickText = document.querySelectorAll('text');
for (itemsTextToPath of iconClickText) {
    itemsTextToPath.addEventListener('click', function(){
        itemsPathToPath.classList.toggle('сlickToChangeColor');
    });
}
for (itemsTextToText of iconClickText) {
    itemsTextToText.addEventListener('click', function(){
        itemsTextToText.classList.toggle('сlickToChangeTextColor');
    });
}