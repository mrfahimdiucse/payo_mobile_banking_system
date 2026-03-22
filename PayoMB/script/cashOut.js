document.getElementById("caahOut-btn").addEventListener("click", function (e) {

    e.preventDefault();

    const amount = parseFloat(document.querySelector("#cashout-form #amount").value);
    const pin = document.querySelector("#cashout-form #pin").value;

    const balanceElement = document.getElementById("main-balance");
    const balance = parseFloat(balanceElement.innerText);

    if (pin !== "1234") {
        alert("Wrong Pin");
        return;
    }

    if (amount > balance) {
        alert("Not enough balance");
        return;
    }

    const newBalance = balance - amount;

    balanceElement.innerText = newBalance;

    addTransaction("Cash Out", amount);
});