// Random Pacman Logo

let PacmanSprites = [];

for (let i = 1; i <= 10; i++) {
	let pacmanLogo = `Pacman-Sprite (${i}).png`;
	PacmanSprites.push(pacmanLogo);
};

const randomLogoGenerator = () => {
	let pacmanRandomIndex = Math.floor(Math.random() * PacmanSprites.length);
	newLogo = PacmanSprites[pacmanRandomIndex]
	document.getElementById('logo-image').src = `./Assets/Images/Sprites/Pacman-Sprites/${newLogo}`;
}

// Random Special text Color

let Colors = ["#F4005F", "#98E024", "#FA8419", "#9D65FF", "#58D1EB", "#C4C5B5"];

const randomColor = () => {
	randomColorIndex = Math.floor(Math.random() * Colors.length);
	selectedColor = Colors[randomColorIndex];
	document.getElementById('special-text').style.color = `${selectedColor}`;
}

// Pokemon Random Image Loader

let BasePokemon = [];
let ShinyPokemon = [];

for (let i = 1; i <= 1277; i++) {
	let images = `Pokemon (${i}).png`;
	BasePokemon.push(images);
};
for (let i = 1; i <= 1277; i++) {
	let images = `Shiny-Pokemon (${i}).png`;
	ShinyPokemon.push(images);
};

const shinyOrNot = () => {
	shinyrandomIndex = Math.floor(Math.random() * 141441);
	if (shinyrandomIndex === 1) {
		const getRandomImage = () => {
			let ShinyPokemonIndex = Math.floor(Math.random() * ShinyPokemon.length);
			newImage = ShinyPokemon[ShinyPokemonIndex]
			document.getElementById('image-wrapper1').src = `./Assets/Images/Sprites/Pokemon-Sprites/Shiny/${newImage}`
			document.getElementById('image-wrapper2').src = `./Assets/Images/Sprites/Pokemon-Sprites/Shiny/${newImage}`
			document.getElementById('image-wrapper3').src = `./Assets/Images/Sprites/Pokemon-Sprites/Shiny/${newImage}`
		}
		getRandomImage();
	} else {
		const getRandomImage = () => {
			const getRandomImage1 = () => {
				let BaseRandomIndex = Math.floor(Math.random() * BasePokemon.length);
				newImage = BasePokemon[BaseRandomIndex]
				document.getElementById('image-wrapper1').src = `./Assets/Images/Sprites/Pokemon-Sprites/Base/${newImage}`
			}
			const getRandomImage2 = () => {
				let NewRandomIndex = Math.floor(Math.random() * BasePokemon.length);
				newImage = BasePokemon[NewRandomIndex]
				document.getElementById('image-wrapper2').src = `./Assets/Images/Sprites/Pokemon-Sprites/Base/${newImage}`
			}
			const getRandomImage3 = () => {
				let NewRandomIndex = Math.floor(Math.random() * BasePokemon.length);
				newImage = BasePokemon[NewRandomIndex]
				document.getElementById('image-wrapper3').src = `./Assets/Images/Sprites/Pokemon-Sprites/Base/${newImage}`
			}
			getRandomImage1();
			getRandomImage2();
			getRandomImage3();
		}
		getRandomImage();
	}
}

// Navigation Bar

const primaryNav = document.querySelector('.nav-links');
const navToggle = document.querySelector('.burger-menu');

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');

	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else if (visibility === "true") {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

// Copy Text

function copyAddress() {
  /* Get the text field */
  var copyText = document.getElementById("Copy-Text");
  var copyText = `Amal Lalgi
Padinjarayil House.
Narakakkanam P.O.
Narakakkanam, Idukki
Kerala, India`;

  navigator.clipboard.writeText(copyText);


  let copyMsg = document.getElementById('message-copy');
  copyMsg.innerText = "Copied!"

}

// Go Top button

const goTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

// Function Callouts

const functionCallOuts = () => {
	randomColor();
	shinyOrNot();
	randomLogoGenerator();
};

functionCallOuts();