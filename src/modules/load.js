import getDate from "./getDate";
import renderGoods from "./renderGoods";
const load = () => {
  let openModal = document.getElementById("cart");
  getDate().then((res) => renderGoods(res));
};
export default load;
