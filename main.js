function changeBackgroundColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}


document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);
function updateClock() {
    var tanggal = new Date();
    document.getElementById("hasil").innerHTML = "&copy; 2024 7 Keajaiban Dunia. All rights reserved. Tanggal: " + tanggal.toLocaleDateString() + " | Waktu: " + tanggal.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

const zoomableImages = document.querySelectorAll('.zoomable');
zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});

document.getElementById("header").addEventListener("click", function() {
    var image = document.getElementById("image");
    image.style.display = (image.style.display === "none") ? "block" : "none";
});

function changeTextSize() {
    var textElement = document.getElementById("uniqueText");
    var currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    var newSize = currentSize + 20; // Menambahkan 2px ke ukuran teks
    textElement.style.fontSize = newSize + "px";
}
 document.getElementById("uniqueText").addEventListener("click", changeTextSize);