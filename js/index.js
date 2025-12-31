console.log("Завдання 1");

const buttonEl = document.querySelector(".button")
console.log(buttonEl);
const descEl = document.querySelector(".desc")
console.log(descEl);
buttonEl.textContent = descEl.textContent

console.log("Завдання 2");

const titleEl = document.querySelector(".title")
console.log(titleEl);
const imgEl = document.querySelector(".img")
console.log(imgEl);
imgEl.width = 300
imgEl.src = "https://loveincorporated.blob.core.windows.net/contentimages/gallery/6a985aaa-8a95-4382-97a9-91cdf96f43d3-Moraine_Lake_Dennis_Frates_Alamy_Stock_Photo.jpg"

console.log("Завдання 3");
const imgRef = document.querySelector(".img2")
console.log(imgRef);
imgRef.width = 200
imgRef.alt = "facebook"
const linkEl = document.querySelector(".link")
console.log(linkEl);
linkEl.href = "https://www.facebook.com/?locale=uk_UA"

console.log("Завдання 4");

const listEl = document.querySelector(".list")
console.log(listEl);
const firstEl = listEl.firstElementChild
firstEl.textContent = "///TEXT///"



