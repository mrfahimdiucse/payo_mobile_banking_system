document.getElementById("add-money").addEventListener("click", function (e) {

    e.preventDefault();

    const amount = parseFloat(document.querySelector("#addmoney-form #amount").value);
    const pin = document.querySelector("#addmoney-form #pin").value;

    const balanceElement = document.getElementById("main-balance");
    const balance = parseFloat(balanceElement.innerText);

    if (pin !== "1234") {
        alert("Wrong Pin");
        return;
    }

    const newBalance = balance + amount;

    balanceElement.innerText = newBalance;

    addTransaction("Add Money", amount);
});