import "./index.css";
import addDropdown from "./module";

const button = document.querySelector(".dropdown-button");
const list = document.querySelector(".dropdown-content");
addDropdown(button as HTMLButtonElement, list as HTMLUListElement);

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", (e) => {
  nextSlide();
});

prev.addEventListener("click", (e) => {
  prevSlide();
});

function nextSlide() {
  const imgSlider = document.querySelector(".picture-carousel");
  const slider = imgSlider as HTMLDivElement;
  const leftPos = slider.style.left;
  console.log(leftPos);
  switch (leftPos) {
    case "":
      slider.style.left = "-300px";
      break;
    case "-300px":
      slider.style.left = "-600px";
      break;
    case "-600px":
      slider.style.left = "";
      break;
  }
  updateDot(slider.style.left);
}

function prevSlide() {
  const imgSlider = document.querySelector(".picture-carousel");
  const slider = imgSlider as HTMLDivElement;
  const leftPos = slider.style.left;
  console.log(leftPos);
  switch (leftPos) {
    case "":
      slider.style.left = "-600px";
      break;
    case "-300px":
      slider.style.left = "";
      break;
    case "-600px":
      slider.style.left = "-300px";
      break;
  }
  updateDot(slider.style.left);
}

function updateDot(leftPos: string) {
  const dot1 = document.querySelector(".dot-1") as HTMLDivElement;
  const dot2 = document.querySelector(".dot-2") as HTMLDivElement;
  const dot3 = document.querySelector(".dot-3") as HTMLDivElement;
  switch (leftPos) {
    case "":
      dot1.style.opacity = "80%";
      dot2.style.opacity = "50%";
      dot3.style.opacity = "50%";
      break;
    case "-300px":
      dot1.style.opacity = "50%";
      dot2.style.opacity = "80%";
      dot3.style.opacity = "50%";
      break;
    case "-600px":
      dot1.style.opacity = "50%";
      dot2.style.opacity = "50%";
      dot3.style.opacity = "80%";
      break;
  }
}
