const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");

const desc = document.getElementById("desc");
const price = document.getElementById("price");

const free = document.getElementById("free");
const express = document.getElementById("express");

const shippingField = document.getElementById("shipping");
const total = document.getElementById("total");

//BONUS
function isContain(elem) {
  //retrun isClass present
  return elem.classList.contains("selected");
}

free.addEventListener("click", function () {
  if (!isContain(free)) {
    free.classList.add("selected");
    express.classList.remove("selected");
  }
  shippingField.innerText = "5";
  updateTotal();
});

express.addEventListener("click", function () {
  if (!isContain(express)) {
    free.classList.remove("selected");
    express.classList.add("selected");
  }
  shippingField.innerText = "30";
  updateTotal();
});

//update total function
function updateTotal() {
  const shippingCharge = parseInt(shippingField.innerText);
  const productPrice = parseInt(price.innerText);
  const grandTotal = shippingCharge + productPrice;
  total.innerText = grandTotal;
}

div1.addEventListener("click", function () {
  //BONUS
  if (!isContain(div1)) {
    div1.classList.add("selected");
    div2.classList.remove("selected");
    div3.classList.remove("selected");
  }
  //changing image
  img.src = "images/1.jpg";
  //changing description
  desc.innerText =
    "First-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque cupiditate quaerat suscipit odio modi ex quibusdam, tenetur optio nam culpa amet perferendis, nobis eum.";
  //changing price
  price.innerText = "650$";
  //Update total
  updateTotal();
});
div2.addEventListener("click", function () {
  //BONUS
  if (!isContain(div2)) {
    div1.classList.remove("selected");
    div2.classList.add("selected");
    div3.classList.remove("selected");
  }
  img.src = "images/2.jpg";
  desc.innerText =
    "Second-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque cupiditate quaerat suscipit odio modi ex quibusdam, tenetur optio nam culpa amet perferendis, nobis eum.";
  price.innerText = "550$";
  //Update total
  updateTotal();
});
div3.addEventListener("click", function () {
  //BONUS
  if (!isContain(div3)) {
    div1.classList.remove("selected");
    div2.classList.remove("selected");
    div3.classList.add("selected");
  }
  img.src = "images/3.jpg";
  desc.innerText =
    "Third-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut doloremque cupiditate quaerat suscipit odio modi ex quibusdam, tenetur optio nam culpa amet perferendis, nobis eum.";
  price.innerText = "330$";
  //Update total
  updateTotal();
});
