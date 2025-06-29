const home=document.createElement("button");
home.textContent="HOME";
const menu=document.createElement("button");
menu.textContent="MENU";
const about=document.createElement("button");
about.textContent="ABOUT";
home.classList.add("home");
menu.classList.add("menu");
about.classList.add("about");

const nav=document.querySelector("nav");
nav.append(home, menu, about);

export {nav};