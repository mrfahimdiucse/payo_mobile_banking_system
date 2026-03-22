document.getElementById("bonus-btn").addEventListener("click", function () {

    const coupon = document.querySelector("#bonus-form input").value;

    const balanceElement = document.getElementById("main-balance");
    const balance = parseFloat(balanceElement.innerText);

    if (coupon === "PAYOO100") {

        const newBalance = balance + 100;

        balanceElement.innerText = newBalance;

        addTransaction("Bonus", 100);

    } else {

        alert("Invalid Coupon");

    }

});