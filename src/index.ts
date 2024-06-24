import "./index.css";
import addDropdown from "./module";

const button = document.querySelector(".dropdown-button");
const list = document.querySelector(".dropdown-content");
addDropdown(button as HTMLButtonElement, list as HTMLUListElement);
