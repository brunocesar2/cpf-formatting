const cpfs = document.querySelectorAll(".cpf li");
const cpfsValues = ([...cpf]) => {
  return cpf.map((cpf) => {
    return cpf.innerText;
  });
};
const clearCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};
const buildCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
const formatCPF = (cpf) => {
  return cpf.map(clearCPF).map(buildCPF);
};
const changeCPF = (cpfs) => {
  const cpfsList = cpfsValues(cpfs);
  const formattedCpfs = formatCPF(cpfsList);
  cpfs.forEach((cpf, index) => {
    cpf.innerText = formattedCpfs[index];
  });
};
changeCPF(cpfs);