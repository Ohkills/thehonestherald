setTimeout(function () {})

const images = [
    car.png,
    hearingaid.png,
    sonion.png,
    taichi.png,
    what.png
];

let CurrentImage = 0;

setInterval(() => {
    images[CurrentImage].style.display = "none";

    CurrentImage++;

    if (CurrentImage >= images.length) {
        CurrentImage = 0;
    }

    images[CurrentImage].style.display = "block";
}, 3000);

