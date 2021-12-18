const deleteDate = () => {
  return fetch("http://localhost:3000/goods/27", {
    method: "DELETE",
  }).then((res) => {
    return res.json();
  });
};
export default deleteDate;
