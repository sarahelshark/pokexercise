// Importing SCSS styles
import "./style.scss";


/*###################################################################################################################################################### */
// F E T C H   D A T A    &   C R E A T E / D E L E T E    M A I N   C O N T E N T
/*###################################################################################################################################################### */

const pokeUrl = "https://65fc80679fc4425c653048fb.mockapi.io/myfirstapi/pokemon/data";

// Function to fetch data and display Pokémon cards
const fetchDataAndDisplay = () => {
  fetch(pokeUrl)
    .then((response) => response.json())
    .then((data) => {
      const containerPokemon = document.querySelector(".container");
      containerPokemon.innerHTML = "";
      data.forEach((pokemon) => {
        const itemEl = createPokemonCard(pokemon); // Create Pokémon card element
        containerPokemon.appendChild(itemEl);
      });
    })
    .catch((error) => console.log("Error description:", error));
};

// Function to create Pokémon card element
const createPokemonCard = (pokemon) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("pokemon-card");

  cardEl.innerHTML = `
    <h3>${pokemon.name}</h3>
    <img src="${pokemon.url}" alt="${pokemon.name}'s image"/>
    <button class="delete-btn">Delete ${pokemon.name}</button>
  `;

  // Event listener for delete button
  const deleteBtn = cardEl.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    deletePokemon(pokemon.id); // Call deletePokemon function with Pokémon ID
  });

  return cardEl;
};

// Function to delete Pokémon
const deletePokemon = (id) => {
  fetch(`${pokeUrl}/${id}`, {
    method: "DELETE", //FAKE delete action to my FAKE API 
  })
    .then((response) => {
      if (response.ok) {
        fetchDataAndDisplay(); // Refresh Pokémon cards after deletion
        showSuccessModal("Pokemon deleted successfully.");
        setTimeout(hideSuccessModal, 2000);
      } else {
        showFailModal("Failed to delete Pokemon,try again.");
        setTimeout(hideFailModal, 2000);
      }
    })
    .catch((error) => {
      console.log("Error description:", error);
      showFailModal("Failed to delete Pokemon,try again.");
      setTimeout(hideFailModal, 2000);
    });
};

/*###################################################################################################################################################### */
// S U C C E S S  M O D A L S 
/*###################################################################################################################################################### */
// Function to display success modal
const showSuccessModal = (message) => {
  const modal = document.getElementById("successModal");
  modal.querySelector(".modal-content").textContent = message;
  modal.style.display = "block";
};

// Function to hide success modal
const hideSuccessModal = () => {
  const modal = document.getElementById("successModal");
  modal.style.display = "none";
};

/*###################################################################################################################################################### */
// F A I L   M O D A L S 
/*###################################################################################################################################################### */

// Function to display fail modal
const showFailModal = (message) => {
  const modal = document.getElementById("failModal");
  modal.querySelector(".modal-content-fail").textContent = message;
  modal.style.display = "block";
};

// Function to hide fail modal
const hideFailModal = () => {
  const modal = document.getElementById("failModal");
  modal.style.display = "none";
};


/*###################################################################################################################################################### */
// F O R M    I N T E R A C T I O N 
/*###################################################################################################################################################### */
// Event listener for form submission
document.getElementById("addNewPokemon").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = e.target.name.value;
  const urlInput = e.target.url.value;

  fetch(pokeUrl, {
    method: "POST", //FAKE post action to my fake API
    body: JSON.stringify({ name: nameInput, url: urlInput }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response != null) {
        fetchDataAndDisplay();
        showSuccessModal("Pokemon added successfully.");
        setTimeout(hideSuccessModal, 2000);
      } else {
        showFailModal("Failed to add Pokemon.");
        setTimeout(hideFailModal, 2000);
      }
    })
    .catch((error) => {
      console.log("Error description:", error);
      showFailModal("Failed to add Pokemon.");
      setTimeout(hideFailModal, 2000);
    });
});




// Initial call to fetch data and display Pokémon cards
fetchDataAndDisplay();
