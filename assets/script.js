let COMP_LOAD = 0; // components to load
(() => {
    // Load all HTML using fetch
    let htmlSrc = document.querySelectorAll("[html-src]");
    COMP_LOAD = htmlSrc.length;
    htmlSrc.forEach((elm) => {
        fetch(elm.getAttribute('html-src')).then(res => res.text())
        .then((res) => {
            elm.innerHTML += res;
            compLoaded();
        });
    });
})();

// wait until all components loaded
function compLoaded() {
    COMP_LOAD -= 1;
    if (COMP_LOAD != 0) return; // if not done loading
}