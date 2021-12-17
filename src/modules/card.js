const cart = () => {
  let openModal = document.getElementById("cart");
  let modal = document.querySelector(".cart");
  let cartClose = modal.querySelector(".cart-close");
  openModal.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  cartClose.addEventListener("click", () => {
    modal.style.display = "";
  });
};
export default cart;
