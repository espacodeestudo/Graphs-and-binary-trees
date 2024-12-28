
export function renderizaArvoreBinaria(Box,Box_des) {
    const divArvore = document.createElement("div");
    divArvore.setAttribute("class", "Arvore");
    divArvore.innerHTML = `
      
          <input type="text" placeholder="Digite numeros ex: 1,2,3">
          <button class="btn-add" id="Btn-add">Adicionar</button>
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
  
      alert(`Valores da Árvore: ${valores}`);
      
    });
  }