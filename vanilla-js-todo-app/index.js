
const onClickAdd = () => {
  const inputText = dcument.getElementById("add-text").value;
  alert(inputText);
};

document.getElementById("add-button").addEventListener("click", onClickAdd());