import { cyrylicToLatin } from "./translations";
import { latinToCyrylic } from "./translations";

/*
 Todo:
 Remove the commas or semi colons
*/
export const translationToRoute = (data) => {
  let item = data
    ?.toString()
    .split(" ")
    .map((word) => {
      return cyrylicToLatin(word);
    })
    .join("-");
  return item;
};
export const translationToDb = (data) => {
  let item = data
    ?.toString()
    .split("-")
    .map((word) => {
      return latinToCyrylic(word);
    })
    .join(" ");

  return item;
};
