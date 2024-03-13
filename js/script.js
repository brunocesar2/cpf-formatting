const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => {
    return element.innerText;
  });
};
const clearCPF = (cpf) => {
  return cpf.replace(/[\D]/g, "");
};
const buildCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
const formatCPF = (cpfs) => {
  return cpfs.map(clearCPF).map(buildCPF);
};
const changeCPF = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const formattedCpfs = formatCPF(cpfs);
  cpfsElements.forEach((element, index) => {
    console.log(element);
    element.innerText = formattedCpfs[index];
  });
  console.log(cpfs);
  console.log(formattedCpfs);
};
changeCPF(cpfsList);
console.log(cpfsList);
console.log(elementsInnerText(cpfsList));
