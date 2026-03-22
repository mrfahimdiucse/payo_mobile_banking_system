function addTransaction(type,amount){

const history = document.getElementById("transaction-history")

const div = document.createElement("div")

div.classList.add(
"flex",
"justify-between",
"items-center",
"bg-white",
"p-3",
"rounded-lg",
"shadow"
)

div.innerHTML = `
<div>
<h3 class="font-bold">${type}</h3>
<p class="text-gray-400 text-sm">${new Date().toLocaleString()}</p>
</div>

<p class="font-bold text-blue-600">${amount} Tk</p>
`

history.appendChild(div)

}