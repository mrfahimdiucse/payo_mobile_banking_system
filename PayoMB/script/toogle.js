function hideAllSections(){

document.getElementById("addmoney-form").style.display="none"
document.getElementById("cashout-form").style.display="none"
document.getElementById("transfer-form").style.display="none"
document.getElementById("bonus-form").style.display="none"
document.getElementById("pay-bill-form").style.display="none"
document.getElementById("transaction-section").style.display="none"

}


// Add Money
document.getElementById("add-money-btm").addEventListener("click", function () {

hideAllSections()

document.getElementById("addmoney-form").style.display="block"

})


// Cashout
document.getElementById("cash-out-btn").addEventListener("click", function () {

hideAllSections()

document.getElementById("cashout-form").style.display="block"

})


// Transfer
document.getElementById("send-now-btn").addEventListener("click", function () {

hideAllSections()

document.getElementById("transfer-form").style.display="block"

})


// Bonus
document.getElementById("get-bonus-btn").addEventListener("click", function () {

hideAllSections()

document.getElementById("bonus-form").style.display="block"

})


// Pay Bill
document.getElementById("pay-bill-btn").addEventListener("click", function () {

hideAllSections()

document.getElementById("pay-bill-form").style.display="block"

})


// Transaction
document.getElementById("transaction-btn").addEventListener("click", function(){

hideAllSections()

document.getElementById("transaction-section").style.display="block"

})


// default
hideAllSections();