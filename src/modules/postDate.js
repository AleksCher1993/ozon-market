const postDate = () => {
  return fetch("http://localhost:3000/goods", {
    method: "POST",
    body: JSON.stringify({
      title: "Mortal Combat",
      price: 3000,
      sale: false,
      category: "Игры",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
export default postDate;
