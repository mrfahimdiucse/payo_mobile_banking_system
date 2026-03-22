document.getElementById("send-btn").addEventListener("click", function (e) {

    e.preventDefault();

    const amount = parseFloat(document.querySelector("#transfer-form #amount").value);
    const pin = document.querySelector("#transfer-form #pin").value;

    const balanceElement = document.getElementById("main-balance");
    const balance = parseFloat(balanceElement.innerText);

    if (pin !== "1234") {
        alert("Wrong Pin");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance");
        return;
    }

    const newBalance = balance - amount;

    balanceElement.innerText = newBalance;

    addTransaction("Transfer", amount);
});