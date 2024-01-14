import React from "react";

export const insta = () => {
  const instagramProfileUrl = "https://www.instagram.com/khwaabmirza_/?next=%2Fkhwaab.wrts%2F";
  window.location.href = instagramProfileUrl;
};

export const moveButton = () => {
  var x =
    Math.random() *
    (window.innerWidth - document.getElementById("noButton").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight - document.getElementById("noButton").offsetHeight);
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
};
