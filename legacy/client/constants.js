import $ from 'jquery';
export const mySecondaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--secondaryColor");
export const myBackgroundColor = $("body").css("background-color");
export const colors = [
    "#FBA500",
    "#2671BC",
    "#F15A24",
    "#096836",
    "#A344A7",
    "#00AD99",
  ];