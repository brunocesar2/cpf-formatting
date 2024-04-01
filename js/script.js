const cpfs = document.querySelectorAll("ul li");
const cpfsValues = ([...cpfs]) => {
  return cpfs.map((cpf) => {
    return cpf.innerText;
  });
};
const clear = (cpf) => {
  return cpf.replace(/\D/gi, "");
};
const build = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4");
};
const format = (cpf) => {
  return cpf.map(clear).map(build);
};
const change = (cpfFormatted) => {
  cpfs.forEach((cpf, index) => {
    cpf.innerText = cpfFormatted[index];
  });
};
change(format(cpfsValues(cpfs)));
