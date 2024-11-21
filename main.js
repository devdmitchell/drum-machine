// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');

// This function is called every 600ms
let count = 1
function update() {
    if (count === 4) {
        tock.play(); 
    } else {
    // Play the 'tick' sound
    tick.play();
}
count++;
if (count > 4) {
    count = 1;
}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
