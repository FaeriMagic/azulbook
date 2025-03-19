document.getElementById("save").addEventListener("click", () => {
    const collection = { cardsOwned: ["Deuce Spade SSR", "Riddle Rosehearts SR"] };
    localStorage.setItem("twstCollection", JSON.stringify(collection));
    alert("Progress saved!");
});

document.getElementById("load").addEventListener("click", () => {
    const data = localStorage.getItem("twstCollection");
    if (data) {
        alert("Your collection: " + JSON.parse(data).cardsOwned.join(", "));
    } else {
        alert("No saved progress found.");
    }
});
