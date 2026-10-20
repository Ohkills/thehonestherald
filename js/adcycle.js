const interval = 5000;

const images = [
    "assets/ads/sonion.png",
    "assets/ads/hearingaid.png",
    "assets/ads/taichi.png",
    "assets/ads/what.png",
    "assets/ads/gamble.png",
    "assets/ads/cabinslop.png",
    "assets/ads/doctorre.png",
    "assets/ads/Feet.png",
    "assets/ads/diggy.png",
    "assets/ads/aislop.png"
];



const containers = document.querySelectorAll(".random-image");

function changeImages() {
    containers.forEach(container => {
        const img = container.querySelector("img");

        if (!img) return;


    let newImage;

    do {
        newImage = images[Math.floor(Math.random() * images.length)];
    } while (newImage === img.getAttribute("src") && images.length > 1);

    img.src = newImage;

    });
}


setInterval(changeImages, interval);
