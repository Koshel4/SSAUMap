class NodeData {
  constructor(id, connectedBuilding, needArrow = true) {
    this.id = id;
    this.connectedBuilding = connectedBuilding;
    this.needArrow = needArrow;
  }
}

const nodes = {
  "bld14": new NodeData(5, "b14"),
  "bld7": new NodeData(1, "b7"),
  "bld3": new NodeData(3, "b3"),
  "bld3a": new NodeData(4, "b3a"),
  "bld5": new NodeData(5, "b5"),
}

var lastOutlined = null;

var edges = [];

function showNode(node) {
  const bbox = node.getBBox();

  const { width, height, realZoom } = panZoomInstance.getSizes()
  panZoomInstance.pan({
    x: -realZoom * (bbox.x - width / (realZoom * 2) + bbox.width / 2),
    y: -realZoom * (bbox.y - height / (realZoom * 2) + bbox.height / 2)
  })

  const relativeZoom = panZoomInstance.getZoom();
  const desiredWidth = 50 * Math.sqrt(bbox.width / 25) * 11 * realZoom;
  panZoomInstance.zoom(relativeZoom * width / desiredWidth)
}

function findPath(startNodeId, endNodeId, edges) {
  const graph = {};
  edges.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  });

  const queue = [[startNodeId, [startNodeId]]];
  const visited = new Set([startNodeId]);

  while (queue.length > 0) {
    const [currentNodeId, path] = queue.shift();

    if (currentNodeId === endNodeId) {
      return path;
    }

    if (graph[currentNodeId]) {
      for (const neighbor of graph[currentNodeId]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, [...path, neighbor]]);
        }
      }
    }
  }
  return null;
}

function drawPath(pathNodeIds, svgDocument) {
  if (!pathNodeIds || pathNodeIds.length < 2) {
    return;
  }

  const points = [];
  pathNodeIds.forEach(nodeId => {
    const node = svgDocument.getElementById(nodeId);
    if (node) {
      points.push(`${node.getAttribute('cx')},${node.getAttribute('cy')}`);
    }
  });

  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", points.join(' '));
  polyline.setAttribute("stroke", "red");
  polyline.setAttribute("stroke-width", 3);
  polyline.setAttribute("fill", "none");
  polyline.setAttribute("stroke-linecap", "round");
  polyline.setAttribute("stroke-linejoin", "round");
  polyline.setAttribute("id", "route-path");

  polyline.setAttribute("marker-end", "url(#arrowhead)");

  svgDocument.getElementById('nodes').appendChild(polyline);

  setTimeout(() => {
    svgDocument.getElementById('route-path').classList.add('visible');
  }, 100);
}


function findShortestPath(startNodeId, endNodeId, edges, svgDoc) {
  const graph = {};
  edges.forEach(([u, v]) => {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    const nodeU = svgDoc.getElementById(u);
    const nodeV = svgDoc.getElementById(v);
    if (!nodeU || !nodeV) return;

    const x1 = parseFloat(nodeU.getAttribute('cx'));
    const y1 = parseFloat(nodeU.getAttribute('cy'));
    const x2 = parseFloat(nodeV.getAttribute('cx'));
    const y2 = parseFloat(nodeV.getAttribute('cy'));
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    graph[u].push({ node: v, weight: distance });
    graph[v].push({ node: u, weight: distance });
  });

  const distances = {};
  const previous = {};
  const nodesSet = new Set();

  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
    nodesSet.add(node);
  }
  distances[startNodeId] = 0;

  while (nodesSet.size > 0) {
    let current = null;
    nodesSet.forEach(node => {
      if (current === null || distances[node] < distances[current]) {
        current = node;
      }
    });

    if (current === null) break;
    nodesSet.delete(current);

    if (current === endNodeId) break;

    if (!graph[current]) continue;

    graph[current].forEach(neighbor => {
      if (nodesSet.has(neighbor.node)) {
        const alt = distances[current] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          previous[neighbor.node] = current;
        }
      }
    });
  }

  const path = [];
  let currentNode = endNodeId;
  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  if (path[0] !== startNodeId) {
    return null;
  }

  return path;
}

function findAndDisplayRoute(startNodeClass, endNodeClass) {
  var svg = document.getElementById('svg-map').contentDocument.getElementById('map');

  const startNode = svg.querySelector(`.${startNodeClass}`);
  const endNode = svg.querySelector(`.${endNodeClass}`);

  if (!startNode || !endNode) {
    console.error("Start or end node not found");
    return;
  }

  const startNodeId = startNode.id;
  const endNodeId = endNode.id;

  const path = findShortestPath(startNodeId, endNodeId, edges, svg);

  const previousPath = svg.getElementById('route-path');
  if (previousPath) {
    previousPath.remove();
  }

  if (path) {
    drawPath(path, svg);
    if (endNodeClass in nodes) {
      const building = svg.getElementById(nodes[endNodeClass].connectedBuilding);
      building.setAttribute("stroke", "red");
      lastOutlined = building;
    }
  } else {
    console.log("Path not found");
  }
}

function createArrowMarker(svgDoc) {
  let defs = svgDoc.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgDoc.insertBefore(defs, svgDoc.firstChild);
  }

  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker.setAttribute("id", "arrowhead");
  marker.setAttribute("markerWidth", "10");
  marker.setAttribute("markerHeight", "7");
  marker.setAttribute("refX", "0");
  marker.setAttribute("refY", "1.8");
  marker.setAttribute("orient", "auto");
  marker.setAttribute("markerUnits", "strokeWidth");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M0,0 L0,3.5 L4,1.75 Z");
  path.setAttribute("fill", "red");

  marker.appendChild(path);
  defs.appendChild(marker);
}

function removePath(svgDoc) {
  const path = svgDoc.getElementById('route-path');
  if (path) {
    path.remove();
  }
  if (lastOutlined) {
    lastOutlined.setAttribute("stroke", "#919191");
    lastOutlined = null;
  }
}