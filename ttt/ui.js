
// Function to show status text (who played what) and hide it after 4 seconds
export function showStatusText(element, text) {
  element.style.animation = "showPlayerStatus 3s forwards";
  element.innerText = text;

  const timeout = setTimeout(() => {
    element.style.animation = "";
    element.innerText = "&nbsp;";
    clearTimeout(timeout);
  }, 4000);
}

// Function to set the status score to updated score
export function updateScore(element, player, computer, draw) {
  element.innerText = `Won = ${player} | Lost = ${computer} | Draw = ${draw}`;
}

// Function to update the round and disable buttons until next round is loaded
export function updateRound(element, round, buttons) {
  let timer = 3;
  buttons.forEach(button => button.disabled = true);
  
  const interval = setInterval(() => {
    if (timer === 0) {
      buttons.forEach(button => button.disabled = false);
      element.innerText = `Round ${round}`;
      clearInterval(interval);
      return;
    }
    element.innerText = `Next round in ${timer}`;
    timer--;
  }, 1000);
}

// Funtion to show modal 
export function showModal(modal, textEl, text) {
  modal.style.display = "flex";
  textEl.innerText = text;
}


// Function to hide modal
export function hideModal(modal) {
  modal.style.display = "none";
}