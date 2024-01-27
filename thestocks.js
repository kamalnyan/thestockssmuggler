// crouser
document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;

        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });

    document.addEventListener('mouseenter', function() {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseleave', function() {
        cursor.classList.remove('active');
    });
});
// fadeup
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".anim");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function addFadeInClass() {
        cards.forEach(function (card) {
            if (isInViewport(card)) {
                card.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", function () {
        addFadeInClass();
    });

    // Initial check on page load
    addFadeInClass();
});
function pop(){
    window.alert("Will be added soon")
}