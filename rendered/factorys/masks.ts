export const cpfMask = (text: string): string => {
  let newText = text;
  newText = newText.replace(/\D/g, "");
  newText = newText.replace(/(^\d{11})(\d)/, "$1");
  newText = newText.replace(/(\d)(\d{2}$)/, "$1-$2");
  for (let i = 0; i < 2; i++) {
    newText = newText.replace(/(\d)(\d{3})(\D)/, "$1.$2$3");
  }
  return newText;
};

export const rgMask = (text: string): string => {
  let newText = text;
  newText = newText.replace(/\D/g, "");
  newText = newText.replace(/(^\d{9})(\d)/, "$1");
  newText = newText.replace(/(\d)(\d$)/, "$1-$2");
  for (let i = 0; i < 2; i++) {
    newText = newText.replace(/(\d)(\d{3})(\D)/, "$1.$2$3");
  }
  return newText;
};

export const telephoneMask = (text: string): string => {
  let newText = text;
  newText = newText.replace(/\D/g, "");
  newText = newText.replace(/(\d{11})(\d)/, "$1");
  newText = newText.replace(/(^\d{2})(\d)/, "($1)$2");
  newText = newText.replace(/(\d)(\d{4}$)/, "$1-$2");
  return newText;
};
export const cepMask = (text: string): string => {
  let newText = text;
  newText = newText.replace(/\D/g, "");
  newText = newText.replace(/(\d{8})(\d)/, "$1");
  newText = newText.replace(/(\d)(\d{3})$/, "$1-$2");
  return newText;
};

export const USAtoBRdate = (text: string): string => {
  const dateSplite = text.split("-");
  return `${dateSplite[2]}/${dateSplite[1]}/${dateSplite[0]}`;
};
