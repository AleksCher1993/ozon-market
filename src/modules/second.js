import getDate from "./getDate";

const second = () => {
  let openModal = document.getElementById("cart");
  openModal.addEventListener("click", () => {
    getDate().then((res) => console.log(res));
  });
};
export default second;
