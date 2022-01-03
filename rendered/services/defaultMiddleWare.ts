export default (e: any) => {
  if (typeof e === "undefined" || e === null) {
    throw new Error("error");
  }
  return e;
};
