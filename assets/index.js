document.addEventListener("DOMContentLoaded", function () {
    let menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
            menuLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});