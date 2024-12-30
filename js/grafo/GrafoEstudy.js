
function Grafo(){
   let vertice =[];
    let arresta =[];

    function addCionarVer(v){
        if(!vertice.some((value) => value === v)) vertice.push(v)
    }

    this.addAresta = (ver1, ver2) =>{
        if(!vertice.some((value) => value === ver1 )){
            addCionarVer(ver1)
        }

        if(!vertice.some((value) => value === ver2 )){
            addCionarVer(ver2)
        }

       arresta.push({
            ver1,
            ver2
            
        })
    }


    this.MostraGrafo = function(){
        console.log("Vértices:", vertice);
        console.log("Arestas:", arresta);

    }
}



/*const grafo = new Grafo()

grafo.addAresta(1, 2);
grafo.addAresta(2, 3);
grafo.addAresta(1, 3);
grafo.MostraGrafo();*/


function Grafo2(){
    const adjacent = new Map();

    function addVertice(vert){
        if(!adjacent.has(vert)) adjacent.set(vert, [])
    }


    this.addAresta = (vert, adja) =>{
        if(!adjacent.has(vert) ) addVertice(vert);
        
       

       if( adjacent.has(adja)){
        adjacent.get(vert).push(adja);
       }
       else{
        console.log(`Valor adjacente ${adja} não é um vertice `)
       }
    }


    this.showArresta = () =>{
        console.log(adjacent)

        for(let [vertice, adjacentes] of adjacent){
            console.log(`${vertice} -> ${adjacentes.join(', ')}`)
        }
    }
}


const grafo2 = new Grafo2()

grafo2.addAresta(1, 2);
grafo2.addAresta(2, 3);
grafo2.addAresta(1, 3);
grafo2.showArresta();