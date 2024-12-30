




export  function renderizaGrafo(Box_des, Box) {
    const divGrafo = document.createElement("div");
    divGrafo.setAttribute("class", "Grafo");
    divGrafo.innerHTML = `
      
        <input type="text" id="input-nos" placeholder="Vertice (Ex: 1,2,3)" />
        <input type="text" id="input-arresta" placeholder="Arestas (Ex: 1-2;2-3)" />
        <button class="btn-add" id="graf-btn-add">Adicionar Grafo</button>
     
    `;
  
    Box.appendChild(divGrafo);
    Box.appendChild(Box_des)
  
   
    const grafBtnAdd = document.getElementById("graf-btn-add");
    grafBtnAdd.addEventListener("click", BtnAddGrafo );
}

  
function BtnAddGrafo () {
    const nosValue = document.getElementById("input-nos").value;
    const arrestaValues = document.getElementById("input-arresta").value;
    const  graphContainer= document.querySelector(".Box_des")
    const Arrestvaluecorrsp = /^(\d+-\d+;)+$/

    if (!nosValue || !arrestaValues) {
      alert("Por favor, insira nós e arestas corretamente.");
      return;
    }

    if(!Arrestvaluecorrsp.test(arrestaValues)){

      alert("Os valores não correspondem a sequencia ex: 1-2;2-3");

      return;

    }

    

    const nos = nosValue.split(",").map((item) => ({id:item.trim(), label: item.trim(),color: {
      background: "rgb(59 130 246 )", 
     
    } }));

    const arresta = arrestaValues.split(";").map((arrest) => {
        const [from, to] = arrest.split("-").map((v) => v.trim());
        return { from, to, color: {
          color: "#0000FF",
        }};
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
          shape: "circle",
          size: 20,
          font: {
            size: 14,
            color: "#FFFFFF", 
            
          },
        },
        edges: {
          width: 2,
        },
      };
    
    
      
      new vis.Network(graphContainer, data, options);
}

