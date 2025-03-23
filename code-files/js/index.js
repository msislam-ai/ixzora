document.addEventListener("DOMContentLoaded", function () {
    const lowerPic = document.querySelector(".lower-pic");

    document.querySelector(".first-low").addEventListener("mouseenter", function () {
        const firstLow = document.querySelector(".first-low");
        lowerPic.style.backgroundImage = "url('/src/images/img-1.jpg')";
        firstLow.style.opacity = "1";
    });

    document.querySelector(".first-low").addEventListener("mouseleave", function () {
        const firstLow = document.querySelector(".first-low");
        firstLow.style.opacity = "0.5";
    });

    document.querySelector(".sec-low").addEventListener("mouseenter", function () {
        const secLow = document.querySelector(".sec-low");
        lowerPic.style.backgroundImage = "url('/src/images/img-2.jpg')";
        secLow.style.opacity = "1";
    });

    document.querySelector(".sec-low").addEventListener("mouseleave", function () {
        const secLow = document.querySelector(".sec-low");
        secLow.style.opacity = "0.5";
    });

    document.querySelector(".third-low").addEventListener("mouseenter", function () {
        const thirdLow = document.querySelector(".third-low");
        lowerPic.style.backgroundImage = "url('/src/images/img-3.jpg')";
        thirdLow.style.opacity = "1";
    });

    document.querySelector(".third-low").addEventListener("mouseleave", function () {
        const thirdLow = document.querySelector(".third-low");
        thirdLow.style.opacity = "0.5";
    });
});



// Select all buttons with the 'btn' and 'sec-btn' class
document.querySelectorAll(".btn-button, .sec-btn").forEach(button => {
    button.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#0056b3"; // Change background color
        this.style.color = "#fff"; // Change text color
        this.style.transform = "translateY(-3px)"; // Lift effect
        this.style.transition = "background-color 0.3s ease, transform 0.2s ease";
    });

    button.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "#007bff"; // Default color
        this.style.color = "#fff"; // Reset text color
        this.style.transform = "translateY(0px)"; // Reset position
    });
});

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  