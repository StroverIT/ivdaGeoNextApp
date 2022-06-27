export const fullNameVal = (data) => {
  let regex = /^(\w+ )+\w+$/;
  return {
    result: regex.test(data),
    message: "Трябва да има две имена",
  };
};
export const diffPassVal = (first, second) => {
  return {
    result: !(first != second),
    message: "Паролите не съвпадат",
  };
};
export const isPositiveVal = (data) => {
  return {
    result: parseFloat(data) > 0,
    message: "The price should be a positive number",
  };
};
export const emailVal = (data) => {
  let regex = new RegExp(
    "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9])+$"
  );

  return {
    result: regex.test(data),
    message: "И-мейла трябва да бъде в правилен формат",
  };
};
export const isHttpVal = (data, message) => {
  var regex = new RegExp("^(http|https)://", "i");
  return {
    result: regex.test(data),
    message: `${message} must start with http:// or https://`,
  };
};
export const minLenVal = (data, minLen, input) => {
  return {
    result: !(data.length < minLen),
    message: `${input} must be atleast ${minLen} characters long `,
  };
};
export const equalLenVal = (data, equalLen, input) => {
  return {
    result: data != equalLen,
    message: `${input} must be exatcly ${equalLen} characters`,
  };
};
export const maxLenVal = (data, maxLen, input) => {
  return {
    result: !(data.length > maxLen),
    message: `${input} should be maximum of ${maxLen} characters long`,
  };
};
