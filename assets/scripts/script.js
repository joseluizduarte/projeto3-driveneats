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
let mensagem;
function fecharPedido () {
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");
    let prato = document.getElementById(`prato${pratoSelecionado}`);
    var pratoNome = prato.getElementsByClassName("card__title")[0].innerText;
    let pratoPrecoText = prato.getElementsByClassName("card__lastline__price")[0].innerText;
    let pratoPrecoNumber = pratoPrecoText.slice(3);
    pratoPrecoNumber = pratoPrecoNumber.replace(",",".");
    pratoPrecoNumber = parseFloat(pratoPrecoNumber);
    let bebida = document.getElementById(`bebida${bebidaSelecionada}`);
    var bebidaNome = bebida.getElementsByClassName("card__title")[0].innerText;
    let bebidaPrecoText = bebida.getElementsByClassName("card__lastline__price")[0].innerText;
    let bebidaPrecoNumber = bebidaPrecoText.slice(3);
    bebidaPrecoNumber = bebidaPrecoNumber.replace(",",".");
    bebidaPrecoNumber = parseFloat(bebidaPrecoNumber);
    let sobremesa = document.getElementById(`sobremesa${sobremesaSelecionada}`);
    var sobremesaNome = sobremesa.getElementsByClassName("card__title")[0].innerText;
    let sobremesaPrecoText = sobremesa.getElementsByClassName("card__lastline__price")[0].innerText;
    let sobremesaPrecoNumber = sobremesaPrecoText.slice(3);
    sobremesaPrecoNumber = sobremesaPrecoNumber.replace(",",".");
    sobremesaPrecoNumber = parseFloat(sobremesaPrecoNumber);
    let valorTotalNumber = pratoPrecoNumber + bebidaPrecoNumber + sobremesaPrecoNumber;
    valorTotalNumber = valorTotalNumber.toFixed(2);
    var valorTotalText = String(valorTotalNumber);
    valorTotalText = valorTotalText.replace(".",",");
    valorTotalText = `R$ ${valorTotalText}`;
    let popup = document.getElementsByClassName("popup")[0];
    document.getElementById("popup__card__dish__name").innerText = pratoNome;
    document.getElementById("popup__card__drink__name").innerText = bebidaNome;
    document.getElementById("popup__card__dessert__name").innerText = sobremesaNome;
    document.getElementById("popup__card__dish__price").innerText = pratoPrecoText;
    document.getElementById("popup__card__drink__price").innerText = bebidaPrecoText;
    document.getElementById("popup__card__dessert__price").innerText = sobremesaPrecoText;
    document.getElementById("popup__card__total__price").innerText = valorTotalText;
    popup.classList.toggle("popup--enabled");
    mensagem = `Olá, gostaria de fazer o pedido:\n`;
    mensagem += `- Prato: ${pratoNome}\n`;
    mensagem += `- Bebida: ${bebidaNome}\n`;
    mensagem += `- Sobremesa: ${sobremesaNome}\n`;
    mensagem += `- Total: R$ ${valorTotalText}\n\n`;
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Endereço: ${endereco}\n`;
}

function cancelarPedido () {
    let popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("popup--enabled");
}

function confirmarPedido () {
    mensagem = encodeURIComponent(mensagem);
    let whatsappLink = `https://wa.me/5595981142025?text=${mensagem}`;
    window.location.replace(whatsappLink);
}