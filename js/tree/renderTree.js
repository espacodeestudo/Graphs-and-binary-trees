export function RenderBinaryTreeWithCytoscape(root) {
    // Converter a árvore binária para o formato aceito pelo Cytoscape
    const elements = convertBinaryTreeToCytoscapeElements(root);

    const cy = cytoscape({
        container: document.getElementById("box_des"),
        elements: elements,
        style: [
            {
                selector: "node",
                style: {
                    "background-color": "#007BFF",
                    label: "data(label)",
                    color: "#FFF",
                    "text-valign": "center",
                    "text-halign": "center",
                    "font-size": "12px",
                },
            },
            {
                selector: "edge",
                style: {
                    "width": 2,
                    "line-color": "#ccc",
                    "curve-style": "bezier", // Bezier para suavidade, pode ser removido se preferir linhas retas
                },
            },
        ],
        layout: {
            name: "preset", // Usar posições predefinidas
        },
        userPanningEnabled: false, // Desativa o movimento da tela pelo usuário
        userZoomingEnabled: false, // Desativa zoom do usuário
        boxSelectionEnabled: false, // Desativa seleção múltipla
    });

    // Desativa a movimentação dos nós
    cy.nodes().forEach((node) => {
        node.lock(); // Impede que o nó seja movido
    });

    return cy;
}

function convertBinaryTreeToCytoscapeElements(node) {
    const elements = [];
    let currentX = 0; // Variável para rastrear a posição horizontal
    const levelSpacing = 100; // Espaçamento vertical entre níveis
    const nodeSpacing = 60; // Espaçamento horizontal entre nós

    // Função para realizar a travessia in-order e calcular posições
    function traverse(currentNode, depth = 0, parentId = null) {
        if (!currentNode) return;

        // Atribuir ID único ao nó atual
        const currentNodeId = `node-${currentNode.value}-${currentX}`;

        // Traverse left subtree (filho esquerdo)
        if (currentNode.left) {
            traverse(currentNode.left, depth + 1, currentNodeId);
        }

        // Atribuir posição x e y para o nó atual
        const x = currentX * nodeSpacing;
        const y = depth * levelSpacing;
        elements.push({
            data: { id: currentNodeId, label: currentNode.value.toString() },
            position: { x, y },
        });

        // Incrementar posição horizontal após o nó atual
        currentX++;

        // Adicionar aresta do pai para o nó atual
        if (parentId !== null) {
            elements.push({
                data: {
                    id: `edge-${parentId}-${currentNodeId}`,
                    source: parentId,
                    target: currentNodeId,
                },
            });
        }

        // Traverse right subtree (filho direito)
        if (currentNode.right) {
            traverse(currentNode.right, depth + 1, currentNodeId);
        }
    }

    traverse(node);
    return elements;
}
