function create_rounds() {
  const container = document.createElement("div");
  container.classList.add("rounds");

  for (let i = 1; i <= images.length; i++) {
    const button = document.createElement("button");
    if (i === 0) {
      button.classList.add("active");
    }

    container.append(button);

    button.addEventListener("click", () => {
      slider_index = i;
      cards.style.left = `${-1 * slider_index * 500}px`;

      const buttons = button.parentElement.children;

      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
      }

      button.classList.add("active");
    });
  }
  frame.append(container);
}


