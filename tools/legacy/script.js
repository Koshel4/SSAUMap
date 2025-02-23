document.addEventListener('DOMContentLoaded', () => {
    const svgContainer = document.getElementById('svg-container');
    const fileInput = document.getElementById('svg-file');
    const exportSvgButton = document.getElementById('export-svg');
    const exportJsButton = document.getElementById('export-js');
    const modeButtons = document.querySelectorAll('.mode-button');

    let svgElement;
    let nodesGroup;
    let nodes = [];
    let edges = [];
    let currentNodeIdCounter = 1;
    let currentMode = 'node';
    let selectedNodeForEdge = null;
    let isDragging = false;

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                svgContainer.innerHTML = e.target.result;
                svgElement = svgContainer.querySelector('svg');

                nodesGroup = svgElement.querySelector('#nodes');
                if (!nodesGroup) {
                    nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    nodesGroup.setAttribute('id', 'nodes');
                    svgElement.appendChild(nodesGroup);
                }

                setupSVGInteraction();
            };
            reader.readAsText(file);
        }
    });

    function setupSVGInteraction() {
        svgElement.addEventListener('click', handleSVGClick);
    }

    function handleSVGClick(event) {
        if (!svgElement) return;
        if (isDragging) return;

        const svgPoint = getMousePosition(event, svgElement);
        const x = svgPoint.x;
        const y = svgPoint.y;

        if (currentMode === 'node') {
            addNode(x, y);
        } else if (currentMode === 'edge') {
            const clickedNode = findNodeAtPosition(x, y);
            if (clickedNode) {
                if (!selectedNodeForEdge) {
                    selectedNodeForEdge = clickedNode;
                } else {
                    if (clickedNode.id !== selectedNodeForEdge.id) {
                        addEdge(selectedNodeForEdge.id, clickedNode.id);
                        selectedNodeForEdge = null;
                    } else {
                        selectedNodeForEdge = null;
                    }
                }
            }
        } else if (currentMode === 'delete') {
            const clickedNode = findNodeAtPosition(x, y);
            if (clickedNode) {
                deleteNode(clickedNode.id);
            }
        }
    }

    function getMousePosition(event, svg) {
        let point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        let svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        return svgPoint;
    }

    function addNode(x, y) {
        const nodeId = `node${currentNodeIdCounter++}`;
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', 5);
        circle.setAttribute('class', 'node');
        circle.setAttribute('id', nodeId);

        nodesGroup.appendChild(circle);

        nodes.push({ id: nodeId, x: x, y: y, svgElement: circle });
    }

    function addEdge(nodeId1, nodeId2) {
        edges.push([nodeId1, nodeId2]);
        console.log(`Ребро добавлено: ${nodeId1} - ${nodeId2}`);
	//TODO: Визуализация
    }

    function findNodeAtPosition(x, y) {
        for (const node of nodes) {
            const distance = Math.sqrt((x - node.x)**2 + (y - node.y)**2);
            if (distance <= 5) {
                return node;
            }
        }
        return null;
    }

    function deleteNode(nodeId) {
        const nodeIndex = nodes.findIndex(node => node.id === nodeId);
        if (nodeIndex > -1) {
            const nodeToRemove = nodes[nodeIndex];
            nodeToRemove.svgElement.remove();
            nodes.splice(nodeIndex, 1);

            edges = edges.filter(edge => !edge.includes(nodeId));

            console.log(`Нода ${nodeId} удалена`);
        }
    }


    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentMode = button.dataset.mode;
            modeButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            selectedNodeForEdge = null;
        });
    });

    exportSvgButton.addEventListener('click', () => {
        if (!svgElement) return;

        const serializer = new XMLSerializer();
        let svgString = serializer.serializeToString(svgElement);

        if (!svgString.startsWith('<?xml')) {
            svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgString;
        }

        downloadFile(svgString, 'map_with_nodes.svg', 'image/svg+xml');
    });

    exportJsButton.addEventListener('click', () => {
        const jsContent = `const edges = ${JSON.stringify(edges, null, 2)};`;
        downloadFile(jsContent, 'edges.js', 'text/javascript');
    });

    function downloadFile(content, filename, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    let zoomLevel = 1;
    let panX = 0;
    let panY = 0;
    const zoomSpeed = 0.1;
    let dragStartX, dragStartY;

    svgContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        const zoomFactor = event.deltaY > 0 ? (1 - zoomSpeed) : (1 + zoomSpeed);
        zoomLevel *= zoomFactor;
        zoomLevel = Math.max(0.5, Math.min(zoomLevel, 3));
        applyTransform();
    });

    svgContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        svgContainer.style.cursor = 'grabbing';
    });

    svgContainer.addEventListener('mouseup', () => {
        isDragging = false;
        svgContainer.style.cursor = 'default';
    });

    svgContainer.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        const dragDeltaX = event.clientX - dragStartX;
        const dragDeltaY = event.clientY - dragStartY;
        panX += dragDeltaX;
        panY += dragDeltaY;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        applyTransform();
    });

    function applyTransform() {
        if (svgElement) {
            svgElement.style.transform = `scale(${zoomLevel}) translate(${panX / zoomLevel}px, ${panY / zoomLevel}px)`;
            svgElement.style.transformOrigin = '0 0';
        }
    }
});