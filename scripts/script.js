document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  if (!root) {
    console.error("Element with id 'root' not found.");
    return;
  }

  let slider_index = 0;
  const images = [
    "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg",
    "https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/474/837/102/autumn-trees-forest-road-nature-cool-wallpaper-preview.jpg",
    "https://img.freepik.com/premium-photo/river-runs-through-valley-with-mountains-background_853645-1284.jpg?w=740",
    "https://p4.wallpaperbetter.com/wallpaper/758/409/262/park-nature-forest-trees-leaves-path-autumn-wallpaper-preview.jpg",
  ];

  const frame = document.createElement("div");
  const cards = document.createElement("div");

  frame.classList.add("frame");
  cards.classList.add("cards");

  cards.style.left = "0px";

  // Create cards for each image
  for (let i = 0; i < images.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${images[i]})`;
    cards.append(card);
  }

  frame.append(cards);
  root.append(frame);

  // Function to create navigation rounds
  function create_rounds() {
    const container = document.createElement("div");
    container.classList.add("rounds");

    for (let i = 1; i <= images.length; i++) {
      const button = document.createElement("button");
      if (i === 1) {
        button.classList.add("active");
      }

      container.append(button);

      // Add click event to each round button
      button.addEventListener("click", () => {
        slider_index = i - 1; // Adjust index to match array
        const cardWidth = cards.firstChild.offsetWidth; // Get dynamic card width
        cards.style.left = `${-1 * slider_index * cardWidth}px`;

        // Update active state for buttons
        update_rounds(container);
      });
    }

    frame.append(container);
    return container; // Return the container for later use
  }

  const rounds_container = create_rounds(); // Call function to create navigation buttons

  const triggers = document.createElement("div");
  const left_button = document.createElement("button");
  const right_button = document.createElement("button");

  left_button.innerText = "<";
  right_button.innerText = ">";

  triggers.classList.add("triggers");
  triggers.append(left_button, right_button);
  frame.append(triggers);

  // Function to update active state for rounds
  function update_rounds(container) {
    const buttons = container.children;
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    buttons[slider_index].classList.add("active");
  }

  // Function to move slider left
  function move_left() {
    if (slider_index !== 0) {
      slider_index--;
      const cardWidth = cards.firstChild.offsetWidth; // Get dynamic card width
      cards.style.left = `${-1 * slider_index * cardWidth}px`;

      // Update active state for rounds
      update_rounds(rounds_container);
    }
  }

  // Function to move slider right
  function move_right() {
    if (slider_index < images.length - 1) {
      slider_index++;
      const cardWidth = cards.firstChild.offsetWidth; // Get dynamic card width
      cards.style.left = `${-1 * slider_index * cardWidth}px`;

      // Update active state for rounds
      update_rounds(rounds_container);
    }
  }

  left_button.addEventListener("click", move_left);
  right_button.addEventListener("click", move_right);
});
