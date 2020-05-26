window.addEventListener('load',start)

//var nomeGeral="Banana"
var totalPreco = 0

function start(){
    //window.alert('iniciou page')
    console.log('ola mundo')
}

/*function handleEnviar(){
    event.preventDefault()
    var nome = document.getElementById("nome")

    var h1 = document.querySelector("h1")

    h1.textContent = nome.value
    h1.classList.add("Destaque")

    var lista = document.getElementById("lista")

    var novoItem = document.createElement("li")

    novoItem.textContent = nome.value

    lista.appendChild(novoItem)
}*/
function handleEnviar(){
    event.preventDefault()
    var medicamento = document.getElementById("medicamento")
    var preco = document.getElementById("preco")
    var total = document.getElementById("total")

    totalPreco+=parseFloat(preco.value)

    total.classList.add("Destaque")

    total.textContent = totalPreco

    var lista = document.getElementById("lista")

    var novoItem = document.createElement("li")

    novoItem.textContent = medicamento.value

    lista.appendChild(novoItem)
}