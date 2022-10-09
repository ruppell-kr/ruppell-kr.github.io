const images = ["0.jpeg","1.jpeg","2.jpeg"];

const selectImage = images[Math.floor(Math.random()*images.length)];

//const backImage = document.createElement("img");

//backImage.src = `img/${selectImage}`;

//document.body.appendChild(backImage);
document.body.style.backgroundImage = `url('img/${selectImage}' )`;