export default function addDropdown(
  btn: HTMLButtonElement,
  list: HTMLUListElement
) {
  btn.addEventListener("click", (e) => {
    if (list.classList.contains("hidden")) {
      list.classList.remove("hidden");
      list.classList.add("shown");
    } else {
      list.classList.remove("shown");
      list.classList.add("hidden");
    }
  });
}
