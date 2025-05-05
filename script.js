let slideIndex = 1;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides [slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function toggleMenu() {
    const navLinks = document.querySelecter('.nav-links');
    navLinks.classList.toggle('active');
}

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('hamburgerDropDown').classList.toggle('active');
})
