document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('ybtn');
    var sadImage = document.getElementById('sadImage');

    if (yesButton && sadImage) {
        yesButton.addEventListener('click', function () {
            sadImage.src = "./assets/happybear.png"; // Adjust the path as needed
            sadImage.alt = "happy"; // Update the alt attribute if needed
        });
    } else {
        console.error("Button or image not found. Check your selectors.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('nbtn');

    // Function to change the position of the "NO" button randomly
    function changeButtonPosition() {
        // Calculate random positions
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

        // Apply the new positions
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Attach a mouseover event listener to the "NO" button
    noButton.addEventListener('mouseover', changeButtonPosition);
});

