let img = document.querySelector(".slider img");
const images = [];
fetch("https://randomuser.me/api/?results=100")
.then(response => response.json())
.then(data => data.results.forEach(result => images.push(result.picture.large)))
.catch(error => console.log(error))
let i = 0;
setInterval(() => {
    i++;
    if (i >= images.length) i = 0;
    img.src = images[i];
}, 2000);
document.querySelector("#Previous").addEventListener("click", () => {
    i--;
    if (i < 0) i = images.length - 1;
    img.src = images[i];
})
document.querySelector("#Next").addEventListener("click", () => {
    i++
    if (i >= images.length) i = 0;
    img.src = images[i];
})