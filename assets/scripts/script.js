// função para mudar o estilo dos cards
function mudarEstiloDoCard(cardId) {
    let card = document.querySelector(`#${cardId}`);
    card.classList.toggle("card--selected");
    let checkIcon = card.querySelector("ion-icon");
    checkIcon.classList.toggle("card__lastline__icon--selected");
}

// variável e função para os pratos
let pratoSelecionado = 0;
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
let bebidaSelecionada = 0;
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
let sobremesaSelecionada = 0;
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
        let botaoDoFooter = document.querySelector("footer .btn")
        botaoDoFooter.classList.toggle("btn--enabled");
        botaoDoFooter.innerText = "Fechar pedido";
        botaoDoFooter.removeAttribute("disabled");
    }
}


// converter "R$ xx,xx" em xx.xx 
function converterPrecoEmNumber(preco) {
    let precoNumber = preco.slice(3).replace(",",".");
    precoNumber = parseFloat(precoNumber);
    return precoNumber;
}

// função para fechar o pedido
let mensagem;
function fecharPedido () {
    // obter informações do usuário
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");

    // obter informações do prato selecionado
    let prato = document.querySelector(`#prato${pratoSelecionado}`);
    let pratoNome = prato.querySelector(".card__title").innerText;
    let pratoPreco = prato.querySelector(".card__lastline__price").innerText;
    
    // obter informações da bebida selecionada
    let bebida = document.querySelector(`#bebida${bebidaSelecionada}`);
    let bebidaNome = bebida.querySelector(".card__title").innerText;
    let bebidaPreco = bebida.querySelector(".card__lastline__price").innerText;
    
    // obter informações da sobremesa selecionada
    let sobremesa = document.querySelector(`#sobremesa${sobremesaSelecionada}`);
    let sobremesaNome = sobremesa.querySelector(".card__title").innerText;
    let sobremesaPreco = sobremesa.querySelector(".card__lastline__price").innerText;
    
    // calcular valor total
    let valorTotal = 0;
    valorTotal += converterPrecoEmNumber(pratoPreco);
    valorTotal += converterPrecoEmNumber(bebidaPreco);
    valorTotal += converterPrecoEmNumber(sobremesaPreco);
    valorTotal = valorTotal.toFixed(2);

    // editar e ativar popup de confirmação
    let popup = document.querySelector(".popup");
    document.querySelector("#popup__card__dish__name").innerText = pratoNome;
    document.querySelector("#popup__card__drink__name").innerText = bebidaNome;
    document.querySelector("#popup__card__dessert__name").innerText = sobremesaNome;
    document.querySelector("#popup__card__dish__price").innerText = pratoPreco;
    document.querySelector("#popup__card__drink__price").innerText = bebidaPreco;
    document.querySelector("#popup__card__dessert__price").innerText = sobremesaPreco;
    document.querySelector("#popup__card__total__price").innerText = `R$ ${valorTotal}`.replace(".",",");
    popup.classList.toggle("popup--enabled");

    // editar mensagem
    mensagem = `Olá, gostaria de fazer o pedido:\n`;
    mensagem += `- Prato: ${pratoNome}\n`;
    mensagem += `- Bebida: ${bebidaNome}\n`;
    mensagem += `- Sobremesa: ${sobremesaNome}\n`;
    mensagem += `- Total: R$ ${valorTotal}\n\n`.replace(".",",");
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Endereço: ${endereco}`;
}

// função para o botão: "Cancelar"
function cancelarPedido () {
    let popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("popup--enabled");
}

// função para o botão: "Tudo certo, pode pedir!" 
function confirmarPedido () {
    mensagem = encodeURIComponent(mensagem);
    let whatsappLink = `https://wa.me/5595981142025?text=${mensagem}`;
    window.open(whatsappLink,"_blank");
}