 
"use strict";

async function getGames(category) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f62c27d7d5mshf6c21b64b110a5ep1792a8jsn366c7191c287',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    },
  };

  const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
  const response = await api.json();

  // Access the list of games from the response data
  const gameList = response;
 
  display(gameList);
  console.log(gameList);
}

document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll(".nav-link");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const category = anchor.getAttribute("href").substring(1);
      getGames(category);
    });
  });

  getGames('mmorpg');

});

// function display(game) {
//   let cartona = '';
//   for (let i = 0; i < game.length; i++) {
//     cartona += `
//       <div class="col-lg-4 col-md-6 col-xl-3 g-4">
//         <div class="card">
//           <img src=${game[i].thumbnail} class="card-img-top" alt="not found">
//           <div class="card-body">
//             <div class="caption d-flex justify-content-between">
//               <h3 class="card-title h6 small">${game[i].title}</h3>
//               <span class="badge bg-primary">Free</span>
//             </div>
//             <p class="card-text small text-center opacity-50">
//               ${game[i].short_description}
//             </p>
//           </div>
//           <div class="card-footer d-flex justify-content-between">
//             <span class="badge">${game[i].genre}</span>
//             <span class="badge">${game[i].platform}</span>
//           </div>
//         </div>
//       </div>
//     `;
//   }
//   document.querySelector("#games").innerHTML += cartona;
// }


function display(game) {
  const gamesContainer = document.querySelector("#games");
  gamesContainer.innerHTML = ""; // Clear existing games

  let cartona = '';
  for (let i = 0; i < game.length; i++) {
    cartona += `
      <div class="col-lg-4 col-md-6 col-xl-3 g-4">
        <div class="card">
          <img src=${game[i].thumbnail} class="card-img-top" alt="not found">
          <div class="card-body">
            <div class="caption d-flex justify-content-between">
              <h3 class="card-title h6 small">${game[i].title}</h3>
              <span class="badge bg-primary">Free</span>
            </div>
            <p class="card-text small text-center opacity-50">
              ${game[i].short_description}
            </p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <span class="badge">${game[i].genre}</span>
            <span class="badge">${game[i].platform}</span>
          </div>
        </div>
      </div>
    `;
  }
  gamesContainer.innerHTML = cartona; // Populate #games element with the games
}