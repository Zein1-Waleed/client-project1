ScrollReveal().reveal(".about .container",{delay:1,opacity:0,distance: '50px',reset: true})
ScrollReveal().reveal(".services .flex",{delay:1,opacity:0,distance: '50px',reset: true})



let menu  = document.getElementById("menu")
let navlist = document.getElementById("nav-list")

menu.addEventListener("click",()=>{
    navlist.classList.toggle("active")
})

let modalIcon = document.querySelector("#modal-icon h3");
let modal = document.getElementById("modal")
let modalImg = document.querySelector(".modal img")
let certifimages = document.getElementById("cetifimages").children;


for(let i = 0; i < certifimages.length;i++){
    certifimages[i].addEventListener("click",(e)=>{
        modalImg.src = e.target.src
        modal.classList.add('active')
    })
}


modalIcon.addEventListener("click",()=>{
    modal.classList.remove("active")
})



document.addEventListener("DOMContentLoaded", function () {
    const experienceYearsElement = document.getElementById("years");
    const experienceMonthsElement = document.getElementById("months");
    const experienceDaysElement = document.getElementById("days");
    const experienceHoursElement = document.getElementById("hours");
    const experienceMinutesElement = document.getElementById("minutes");
    const experienceSecondsElement = document.getElementById("seconds");

    // Function to update the experience counter
    function updateExperienceCounter() {
        const currentDate = new Date();
        const shopStartDate = new Date("2021-06-28"); // Set your shop's start date here

        // Calculate the time difference between the current date and shop start date
        const timeDifference = currentDate - shopStartDate;

        // Calculate the years, months, days, hours, minutes, and seconds
        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
        const days = Math.floor((timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

        // Update the counter elements
        experienceYearsElement.textContent = years;
        experienceMonthsElement.textContent = months;
        experienceDaysElement.textContent = days;
        experienceHoursElement.textContent = hours;
        experienceMinutesElement.textContent = minutes;
        experienceSecondsElement.textContent = seconds;
    }

    // Function to show products when the button is clicked
    // Initial experience counter update
    updateExperienceCounter();

    // Update the experience counter every second
    setInterval(updateExperienceCounter, 1000);
});
