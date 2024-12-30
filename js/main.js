import { renderizaGrafo } from "./grafo/grafo.js";
import {renderizaArvoreBinaria} from "./tree/binaryTrees.js"


const selectEstr = document.getElementsByName("estru");
const Box = document.querySelector(".Box");
const Box_des = document.createElement("div");
Box_des.setAttribute("class", "Box_des");
Box_des.setAttribute("id", "box_des");


if (!window.vis) {
    console.error("vis library is not loaded. Check your script reference.");
}
selectEstr.forEach((radio) => {
  radio.addEventListener("change", () => {
    
    Box.innerHTML = "";
    Box_des.innerHTML=""

    if (radio.id === "graf") {
      renderizaGrafo(Box_des, Box);
    } else if (radio.id === "arvB") {
      renderizaArvoreBinaria(Box, Box_des);
    }
  });
});








