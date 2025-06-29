const headline=document.createElement("h1");
headline.textContent="Welcome to our restraunt";

import photo from "./odin.jpg";
const img=document.createElement("img");
img.src=photo;
img.alt="Restraunt Interior";

const text=document.createElement("p");
text.innerHTML="hello guys welcome to our restraunt <br> hopefully you willl find this place really wholesame and enjoyable";

headline.classList.add("headline");
img.classList.add("image");
text.classList.add("para");

const content=document.querySelector("#content");

content.append(headline, img, text);

export {content};