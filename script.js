const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg"
];

const slider = document.getElementById("slider");
const imageCount = images.length;
const angle = 360 / imageCount;
const radius = 400;

images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;

  const rotateAngle = angle * index;
  img.style.transform = `rotateY(${rotateAngle}deg) translateZ(${radius}px)`;

  slider.appendChild(img);
});
