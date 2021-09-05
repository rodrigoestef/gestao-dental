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
