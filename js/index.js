const space = 5;

const myName = document.getElementById("name");
const social = document.getElementById("social");
const work = document.getElementById("work");

const meWidth = myName.clientWidth;
const socialWidth = social.clientWidth;
const workWidth = work.clientWidth;

const meBox = document.getElementById("me-line-box");
const socialBox = document.getElementById("social-line-box");
const workBox = document.getElementById("work-line-box");

meBox.style.width = meWidth + "px";
socialBox.style.width = socialWidth + meWidth - space + "px";
workBox.style.width = workWidth - space + "px";

// About Me Text
meBox.addEventListener("mouseover", () => {
  socialBox.classList.add("blur");
  workBox.classList.add("blur");
  work.classList.add("blur-text");
  social.classList.add("blur-text");
});

meBox.addEventListener("mouseout", () => {
  socialBox.classList.remove("blur");
  workBox.classList.remove("blur");
  work.classList.remove("blur-text");
  social.classList.remove("blur-text");
});

meBox.addEventListener("click", () => {
  window.location = "pages/about.html";
});

// Me Main Text
myName.addEventListener("mouseover", () => {
  socialBox.classList.add("blur");
  workBox.classList.add("blur");
  work.classList.add("blur-text");
  social.classList.add("blur-text");
});

myName.addEventListener("mouseout", () => {
  socialBox.classList.remove("blur");
  workBox.classList.remove("blur");
  work.classList.remove("blur-text");
  social.classList.remove("blur-text");
});

myName.addEventListener("click", () => {
  window.location = "pages/about.html";
});

// My Social Text
socialBox.addEventListener("mouseover", () => {
  meBox.classList.add("blur");
  workBox.classList.add("blur");
  work.classList.add("blur-text");
});

socialBox.addEventListener("mouseout", () => {
  meBox.classList.remove("blur");
  workBox.classList.remove("blur");
  work.classList.remove("blur-text");
});
// Social Main text
social.addEventListener("mouseover", () => {
  meBox.classList.add("blur");
  workBox.classList.add("blur");
  work.classList.add("blur-text");
});

social.addEventListener("mouseout", () => {
  meBox.classList.remove("blur");
  workBox.classList.remove("blur");
  work.classList.remove("blur-text");
});
// My Work Text
workBox.addEventListener("mouseover", () => {
  socialBox.classList.add("blur");
  meBox.classList.add("blur");
  myName.classList.add("blur-text");
  social.classList.add("blur-text");
});

workBox.addEventListener("mouseout", () => {
  socialBox.classList.remove("blur");
  meBox.classList.remove("blur");
  myName.classList.remove("blur-text");
  social.classList.remove("blur-text");
});
// Work Main
work.addEventListener("mouseover", () => {
  socialBox.classList.add("blur");
  meBox.classList.add("blur");
  myName.classList.add("blur-text");
  social.classList.add("blur-text");
});

work.addEventListener("mouseout", () => {
  socialBox.classList.remove("blur");
  meBox.classList.remove("blur");
  myName.classList.remove("blur-text");
  social.classList.remove("blur-text");
});
