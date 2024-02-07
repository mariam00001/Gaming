document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const category = params.get('category');
    const platform = params.get('platform');
    const status = params.get('status');
    const thumbnail = params.get('thumbnail');
  
    document.getElementById('gameTitle').textContent = `Title: ${title}`;
    document.getElementById('gameCategory').textContent = `Category: ${category}`;
    document.getElementById('gamePlatform').textContent = `Platform: ${platform}`;
    document.getElementById('gameStatus').textContent = `Status: ${status}`;
    document.getElementById('gameThumbnail').src = thumbnail;
  });
  
  

  
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
// this code is not working //
//////////////////////////////////////////////

export class details {
  constructor(){
    document.getElementById(".details").classList.remove("d-none");
    
  }
}