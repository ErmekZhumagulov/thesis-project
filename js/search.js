document.querySelector("#search").oninput = function() {
    // this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    let val = this.value.trim();
    let valie = val.toUpperCase();
    let searchItems = document.querySelectorAll('.search-point li');
    if (valie != '') {
        document.querySelector(".search-point").classList.add('appear');

        searchItems.forEach(function(elem) {
            if(elem.innerText.search(valie) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        searchItems.forEach(function(elem) {
            elem.classList.remove('hide');
        });
        document.querySelector(".search-point").classList.remove('appear');
    }
}