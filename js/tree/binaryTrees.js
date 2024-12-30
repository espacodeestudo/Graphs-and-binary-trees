import Tree from './biinarayStruct.js';
import { RenderBinaryTreeWithCytoscape } from './renderTree.js';


export function renderizaArvoreBinaria(Box,Box_des) {
    const divArvore = document.createElement("div");
    const tree = new Tree()
    divArvore.setAttribute("class", "Arvore");
    divArvore.innerHTML = `
      
          <input type="text" placeholder="Digite numeros ex: 1,2,3" id="input-arvore">
          <button class="btn-add" id="arvore-btn-add">Adicionar</button>
    `;
  
    Box.appendChild(divArvore);
    Box.appendChild(Box_des)
  
   
    const arvoreBtnAdd = document.getElementById("arvore-btn-add");
    arvoreBtnAdd.addEventListener("click", () => {
      const valores = document.getElementById("input-arvore").value;
  
      if (!valores) {
        alert("Por favor, insira os valores da árvore.");
        return;
      }

      const valoresArray = valores.split(",").map((item) => Number(item.trim())).filter(Number.isFinite);
      
      valoresArray.forEach((value) => {
        if (!tree.contains(value)) { 
          tree.addValue(value);
        }
      });
      console.log(tree.getRoot())
      RenderBinaryTreeWithCytoscape(tree.getRoot());
     
      
    });
  }

 