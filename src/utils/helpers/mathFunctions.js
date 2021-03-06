export const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "number" && typeof b === 'undefined') {
    return a;
  }
  return "Niepoprawny parametr";
};

export const sub = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (typeof a === "number" && typeof b === "undefined") {
    return a;
  }
  return "Niepoprawny parametr";
};