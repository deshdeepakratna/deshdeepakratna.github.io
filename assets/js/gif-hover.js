document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".gif-card img").forEach(function (img) {

        const still = img.src;
        const animated = img.dataset.hover;

        img.addEventListener("mouseenter", function () {

            img.src = animated;

        });

        img.addEventListener("mouseleave", function () {

            img.src = still;

        });

    });

});