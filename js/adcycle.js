const images = [
    "assets/ads/hearingaid.png",
    "assets/ads/sonion.png",
    "assets/ads/taichi.png",
    "assets/ads/what.png",
    "assets/ads/gamble.png"
];

const interval = 5000;


const containers = document.querySelectorAll(".random-image");

function changeimages() {
    containers.forEach(container => {
        const img = container.querySelector("img");

        if (!img) return;


            let newimage;

            do {
                newimage = images[Math.floor(Math.random() * images.length)];
            } while (newimage === img.getAttribute("src") && images.length > 1);

            img.src = newimage;

    });
}
setinterval(changeimages, interval);
