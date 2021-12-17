const search = () => {
  let searchBtn = document.querySelector(".search-btn>button");
  let searchWrapperInput = document.querySelector(".search-wrapper_input");
  searchBtn.addEventListener("click", () => {
    if (searchWrapperInput.value === "") {
      searchWrapperInput.placeholder = "Введите продукт";
    } else {
      console.log(searchWrapperInput.value);
      searchWrapperInput.value = "";
    }
  });
};
export default search;
