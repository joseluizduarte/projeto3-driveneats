// function to change card style
function changeStyle(element) {
  element.classList.toggle("card--selected");
  let checkIcon = element.querySelector("ion-icon");
  checkIcon.classList.toggle("card__lastline__icon--selected");
}

// section food array
let sections = document.querySelectorAll("section");


// dishes
let dishes = sections[0].querySelectorAll(".card");
dishes.forEach((element)=>{
  element.addEventListener("click", selectDish);
})
let dish; // selected dish
function selectDish(event) {
  if (dish) {
    changeStyle(dish);
  }
  dish = event.currentTarget;
  changeStyle(dish);
  changeFooterButton();
  changeFooterButton();
}

// drinks
let drinks = sections[1].querySelectorAll(".card");
drinks.forEach((element)=>{
  element.addEventListener("click", selecionarBebida);
})
let drink; // selected drink
function selecionarBebida(event) {
  if (drink) {
    changeStyle(drink);
  }
  drink = event.currentTarget;
  changeStyle(drink);
  changeFooterButton();
}

// desserts
let desserts = sections[2].querySelectorAll(".card");
desserts.forEach((element)=>{
  element.addEventListener("click", selectDessert);
})
let dessert; // selected dessert
function selectDessert(event) {
  if (dessert) {
    changeStyle(dessert);
  }
  dessert = event.currentTarget;
  changeStyle(dessert);
  changeFooterButton();
}

// function to change footer button style
function changeFooterButton() {
    let footerButton = document.querySelector("footer .btn");
    let btnDisabled = !footerButton.classList.contains("btn--enabled");
    if (dish && drink && dessert && btnDisabled) {
        footerButton.classList.toggle("btn--enabled");
        footerButton.innerText = "Fechar pedido";
        footerButton.removeAttribute("disabled");
    }
}


// convert "R$ xx,xx" to xx.xx
function convertPriceToNumber(price) {
    let priceNumber = price.slice(3).replace(",",".");
    priceNumber = parseFloat(priceNumber);
    return priceNumber;
}



// função para fechar o pedido
let message;
function finish () {
    // obter informações do usuário
    let name = prompt("Qual o seu nome?");
    let adress = prompt("Qual o seu endereço?");

    // obter informações do prato selecionado
    let dishName = dish.querySelector(".card__title").innerText;
    let dishPrice = dish.querySelector(".card__lastline__price").innerText;

    // obter informações da bebida selecionada
    let drinkName = drink.querySelector(".card__title").innerText;
    let drinkPrice = drink.querySelector(".card__lastline__price").innerText;

    // obter informações da sobremesa selecionada
    let dessertName = dessert.querySelector(".card__title").innerText;
    let dessertPrice = dessert.querySelector(".card__lastline__price").innerText;

    // calcular valor total
    let total = 0;
    total += convertPriceToNumber(dishPrice);
    total += convertPriceToNumber(drinkPrice);
    total += convertPriceToNumber(dessertPrice);
    total = total.toFixed(2);

    // editar e ativar popup de confirmação
    let popup = document.querySelector(".popup");
    document.querySelector("#popup__card__dish__name").innerText = dishName;
    document.querySelector("#popup__card__drink__name").innerText = drinkName;
    document.querySelector("#popup__card__dessert__name").innerText = dessertName;
    document.querySelector("#popup__card__dish__price").innerText = dishPrice;
    document.querySelector("#popup__card__drink__price").innerText = drinkPrice;
    document.querySelector("#popup__card__dessert__price").innerText = dessertPrice;
    document.querySelector("#popup__card__total__price").innerText = `R$ ${total}`.replace(".",",");
    popup.classList.toggle("popup--enabled");

    // editar mensagem
    message = `Olá, gostaria de fazer o pedido:\n`;
    message += `- Prato: ${dishName}\n`;
    message += `- Bebida: ${drinkName}\n`;
    message += `- Sobremesa: ${dessertName}\n`;
    message += `- Total: R$ ${total}\n\n`.replace(".",",");
    message += `Nome: ${name}\n`;
    message += `Endereço: ${adress}`;
}

let footerButton = document.querySelector("footer .btn");
footerButton.addEventListener("click", finish);

// função para o botão: "Cancelar"
function cancel () {
    let popup = document.getElementsByClassName("popup")[0];
    popup.classList.toggle("popup--enabled");
}

// função para o botão: "Tudo certo, pode pedir!"
function confirm () {
    let whatsappMessage = encodeURIComponent(message);
    let whatsappLink = `https://wa.me/5595981142025?text=${whatsappMessage}`;
    window.open(whatsappLink,"_blank");
}

let confirmButton = document.querySelector(".popup .popup__card__confirm");
confirmButton.addEventListener("click", confirm);

let cancelButton = document.querySelector(".popup .popup__card__cancel");
cancelButton.addEventListener("click", cancel);
