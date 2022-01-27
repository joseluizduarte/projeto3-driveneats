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
        alterarBotaoDoFooter();
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
        alterarBotaoDoFooter();
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
        alterarBotaoDoFooter();
    }
    else if (itemSelecionado==sobremesaSelecionada) {
        return
    } else {
        mudarEstiloDoCard(`sobremesa${sobremesaSelecionada}`); //muda o estilo do card selecionado anteriormente
        sobremesaSelecionada = itemSelecionado;
        mudarEstiloDoCard(`sobremesa${itemSelecionado}`); //muda o estilo do card atual
    }
}

// função para alterar estado do botão do footer
function alterarBotaoDoFooter () {
    if (pratoSelecionado!=0 && bebidaSelecionada!=0 && sobremesaSelecionada!=0) {
        let botaoDoFooter = document.getElementById("footer_button");
        botaoDoFooter.classList.remove("btn--deactivated");
        botaoDoFooter.classList.add("btn--activated");
        botaoDoFooter.innerText = "Fechar pedido";
        botaoDoFooter.removeAttribute("disabled");
    }
}

// função para fechar o pedido
function fecharPedido () {
    let prato = document.getElementById(`prato${pratoSelecionado}`);
    let pratoNome = prato.getElementsByClassName("card__title")[0].innerText;
    let pratoPreco = prato.getElementsByClassName("card__lastline__price")[0].innerText;
    pratoPreco = pratoPreco.slice(3);
    pratoPreco = pratoPreco.replace(",",".");
    pratoPreco = parseFloat(pratoPreco);
    let bebida = document.getElementById(`bebida${bebidaSelecionada}`);
    let bebidaNome = bebida.getElementsByClassName("card__title")[0].innerText;
    let bebidaPreco = bebida.getElementsByClassName("card__lastline__price")[0].innerText;
    bebidaPreco = bebidaPreco.slice(3);
    bebidaPreco = bebidaPreco.replace(",",".");
    bebidaPreco = parseFloat(bebidaPreco);
    let sobremesa = document.getElementById(`sobremesa${sobremesaSelecionada}`);
    let sobremesaNome = sobremesa.getElementsByClassName("card__title")[0].innerText;
    let sobremesaPreco = sobremesa.getElementsByClassName("card__lastline__price")[0].innerText;
    sobremesaPreco = sobremesaPreco.slice(3);
    sobremesaPreco = sobremesaPreco.replace(",",".");
    sobremesaPreco = parseFloat(sobremesaPreco);
    let valorTotal = pratoPreco + bebidaPreco + sobremesaPreco;
    valorTotal = valorTotal.toFixed(2);
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoNome}\n\- Bebida: ${bebidaNome}\n\- Sobremesa: ${sobremesaNome}\n\- Total: R$ ${valorTotal}`;
    mensagem = encodeURIComponent(mensagem);
    let whatsappLink = `https://wa.me/5595981142025?text=${mensagem}`;
    window.location.replace(whatsappLink);
}