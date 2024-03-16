const cpfs = document.querySelectorAll(".cpf li");
const cpfsArray = ([...cpf]) => {
  return cpf.map((cpf) => {
    return cpf.innerText;
  });
};
const clear = (cpf) => {
  return cpf.replace(/\D/g, "");
};
const build = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
const format = (cpf) => {
  return cpf.map(clear).map(build);
};
const change = (cpfs) => {
  const cpfsValues = cpfsArray(cpfs);
  const formattedCpfs = format(cpfsValues);
  cpfs.forEach((cpf, index) => {
    cpf.innerText = formattedCpfs[index];
  });
};
change(cpfs);
