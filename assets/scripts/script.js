// função para mudar o estilo dos cards
function mudarEstiloDoCard(cardId) {
    let card = document.getElementById(cardId);
    card.classList.toggle("card--selected");
    let checkIcon = card.getElementsByTagName("ion-icon")[0];
    checkIcon.classList.toggle("card__lastline__icon--selected");
}

// variável e função para os pratos
var pratoSelecionado = 0;
function selecionarPrato(itemSelecionado) {
    if (pratoSelecionado==0) {
        mudarEstiloDoCard(`prato${itemSelecionado}`); //muda o estilo do 1º card selecionado
        pratoSelecionado = itemSelecionado;
    }
    else if (itemSelecionado==pratoSelecionado) {
        return
    } else {
        mudarEstiloDoCard(`prato${pratoSelecionado}`); //muda o estilo do card selecionado anteriormente
        pratoSelecionado = itemSelecionado;
        mudarEstiloDoCard(`prato${itemSelecionado}`); //muda o estilo do card atual
    }
}

// variável e função para as bebidas
var bebidaSelecionada = 0;
function selecionarBebida(itemSelecionado) {
    if (bebidaSelecionada==0) {
        mudarEstiloDoCard(`bebida${itemSelecionado}`); //muda o estilo do 1º card selecionado
        bebidaSelecionada = itemSelecionado;
    }
    else if (itemSelecionado==bebidaSelecionada) {
        return
    } else {
        mudarEstiloDoCard(`bebida${bebidaSelecionada}`); //muda o estilo do card selecionado anteriormente
        bebidaSelecionada = itemSelecionado;
        mudarEstiloDoCard(`bebida${itemSelecionado}`); //muda o estilo do card atual
    }
}

// variável e função para as sobremesas
var sobremesaSelecionada = 0;
function selecionarSobremesa(itemSelecionado) {
    if (sobremesaSelecionada==0) {
        mudarEstiloDoCard(`sobremesa${itemSelecionado}`); //muda o estilo do 1º card selecionado
        sobremesaSelecionada = itemSelecionado;
    }
    else if (itemSelecionado==sobremesaSelecionada) {
        return
    } else {
        mudarEstiloDoCard(`sobremesa${sobremesaSelecionada}`); //muda o estilo do card selecionado anteriormente
        sobremesaSelecionada = itemSelecionado;
        mudarEstiloDoCard(`sobremesa${itemSelecionado}`); //muda o estilo do card atual
    }
}