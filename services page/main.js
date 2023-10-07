const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const vidindicator = [...document.getElementsByClassName("image-holder")[0].children];
const slideWidth = slides[0].clientWidth;
let currentSlide = 0;
    for (let i = 0; i < vidindicator.length;i++){
        vidindicator[i].onclick = ()=>{
            currentSlide = vidindicator.indexOf(vidindicator[i])
            function nextSlide() {
                currentSlide = (currentSlide) % slides.length;
                console.log(currentSlide)
                slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            }
            nextSlide()
        }
    }

let logo = document.getElementById("logo")
logo.onclick = ()=>{
    window.location = "../../arabic page/arabic.html"
}
