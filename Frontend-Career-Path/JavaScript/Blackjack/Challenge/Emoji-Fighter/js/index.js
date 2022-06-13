const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

const stageEl = document.getElementById("stage");
const fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    for (let emoji = 0; emoji < fighters.length; emoji++) {
        let randomEmoji = Math.floor(Math.random() * fighters[emoji]);
        stageEl.textContent += randomEmoji;
    }
    
});
