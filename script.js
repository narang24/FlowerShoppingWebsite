<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    let index = 0;

    function slideTestimonials() {
        index++;
        if (index >= slider.children.length) {
            index = 0;
        }
        let offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(slideTestimonials, 3000); 
=======
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    let index = 0;

    function slideTestimonials() {
        index++;
        if (index >= slider.children.length) {
            index = 0;
        }
        let offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(slideTestimonials, 3000); 
>>>>>>> 0bfd53c8caa6a6c81e0f6d01386f17ac4a1398ba
})