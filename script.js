
const cards = document.querySelectorAll(".date-card");

const button = document.createElement("button");
button.textContent = "Get receipt ♡";
button.id = "receiptButton";
button.classList.add("receipt-button");

document.querySelector(".date-container").after(button);

const receipt = document.createElement("div");
receipt.id = "receipt";
receipt.classList.add("receipt", "hidden");

receipt.innerHTML = `
    <h2>♡ RECIEPT ♡</h2>
    <h3>for: October 11, 2026<h3>
    <p>Official date plans for Mika and Bri</p>
    <hr>
    <p>Date chosen: <strong id="chosenDate"></strong></p>
    <p>Payment: 4 kisses + stella kiss tax</p>
    <hr>
    <p>♡ Non-refundable ♡</p>
    <p> Stuck with me forever sorry..<p>
`;

button.after(receipt);

let selectedDate = "";
cards.forEach(card => {
    card.addEventListener("click", function() {

        cards.forEach(c => {
            c.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedDate = this.querySelector("h2").textContent;

        receipt.classList.add("hidden");
    });
});
button.addEventListener("click", function() {

    if (selectedDate === "") {
        alert("Pick your favourite date first, Silly Bri!");
        return;
    }

    document.querySelector("#chosenDate").textContent = selectedDate;

    receipt.classList.remove("hidden");

    receipt.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
