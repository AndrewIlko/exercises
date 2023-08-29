export const queryStrFromObject = (object: Object) => {
  return Object.entries(object)
    .filter((arr) => arr[1] && arr[1] !== "")
    .map((arr) => arr.join("="))
    .join("&");
};
