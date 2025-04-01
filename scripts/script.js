const root = document.querySelector("#root");

let slider_index = 0;
const images = [
	"https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg",
	"https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg",
	"https://oir.mobi/uploads/posts/2021-05/1622284149_33-oir_mobi-p-prostoi-peizazh-priroda-krasivo-foto-38.jpg",
	"https://fotogora.ru/img/blog/big/2019/12/3/15987.jpg",
	"https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg",
	];

const frame = document.createElement("div");
const cards = document.createElement("div");

for (let i = 0; i < images.length; i++) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.style.backgroundImage = `url(${images[i]})`;
	cards.append(card);
}
frame.append(cards);
root.append(frame);

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

	const left_button = document.createElement("button");
	const right_button = document.createElement("button");
