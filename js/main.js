
const selectEstr = document.getElementsByName("estru");
const Box = document.querySelector(".Box");
const Box_des = document.createElement("div");
Box_des.setAttribute("class", "Box_des");


if (!window.vis) {
    console.error("vis library is not loaded. Check your script reference.");
}
selectEstr.forEach((radio) => {
  radio.addEventListener("change", () => {
    
    Box.innerHTML = "";
    Box_des.innerHTML=""

    if (radio.id === "graf") {
      renderizaGrafo();
    } else if (radio.id === "arvB") {
      renderizaArvoreBinaria();
    }
  });
});



const BtnAddGrafo = () =>{
    const nosValue = document.getElementById("input-nos").value;
    const arrestaValues = document.getElementById("input-arresta").value;
    const  graphContainer= document.querySelector(".Box_des")

    if (!nosValue|| !arrestaValues) {
      alert("Por favor, insira nós e arestas corretamente.");
      return;
    }

    console.log(nosValue.split(","))

    const nos = nosValue.split(",").map((item) => ({id:item.trim(), label: item.trim() }));
    const arresta = arrestaValues.split(";").map((arrest) => {
        const [from, to] = arrest.split("-").map((v) => v.trim());
        return { from, to };
      });
      
      const data = {
        nodes: new vis.DataSet(nos),
        edges: new vis.DataSet(arresta),
      };

      const options = {
        physics: {
          enabled: true, 
        },
        nodes: {
          shape: "dot",
          size: 16,
        },
      };
    
      
      new vis.Network(graphContainer, data, options);
}
function renderizaGrafo() {
  const divGrafo = document.createElement("div");
  divGrafo.setAttribute("class", "Grafo");
  divGrafo.innerHTML = `
    
      <input type="text" id="input-nos" placeholder="Nós (Ex: 1,2,3)" />
      <input type="text" id="input-arresta" placeholder="Arestas (Ex: 1-2;2-3)" />
      <button class="btn-add" id="graf-btn-add">Adicionar Grafo</button>
   
  `;

  Box.appendChild(divGrafo);
  Box.appendChild(Box_des)

 
  const grafBtnAdd = document.getElementById("graf-btn-add");
  grafBtnAdd.addEventListener("click", BtnAddGrafo );
}





function renderizaArvoreBinaria() {
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