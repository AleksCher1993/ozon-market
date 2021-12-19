import getDate from "./getDate";
import renderGoods from "./renderGoods";
import { searchFilter, catalogFilter, priceFilter } from "./filter";
const search = () => {
  let searchWrapperInput = document.querySelector(".search-wrapper_input");
  let catalog = document.querySelector(".catalog");
  let catalogList = catalog.querySelector("ul");
  let filterPriceRange = document.querySelector(".filter-price_range");
  let min;
  let max;

  searchWrapperInput.addEventListener("input", (event) => {
    const value = event.target.value;
    getDate().then((date) => renderGoods(searchFilter(date, value)));
  });

  catalogList.addEventListener("click", (e) => {
    let value = e.target;
    if (value.closest("li")) {
      getDate().then((date) =>
        renderGoods(catalogFilter(date, value.innerHTML))
      );
    }
  });

  filterPriceRange.addEventListener("input", (e) => {
    let t = e.target.closest("#min");
    getDate().then((data) => renderGoods(priceFilter(data, Number(t.value))));
  });
};
export default search;
