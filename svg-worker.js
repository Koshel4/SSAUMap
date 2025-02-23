var currentPlace = "3";
var nextPlace = "14-407";
var pathExists = false;
var mapInfo = {};

const svgMapObject = document.getElementById('svg-map');
const fadePanel = document.getElementById('fullScreenFade');
var panZoomInstance = null;

var currentFloor = 4;
var minFloor = 1;
var maxFloor = 4;

function addLabels() {
    var svg = svgMapObject.contentDocument.getElementById('map');
    let nameBoxes = svg.getElementById("name-boxes").querySelectorAll("rect");
    nameBoxes.forEach(function (rect) {
        var bbox = rect.getBBox();
        var textElem = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElem.setAttribute("x", bbox.x + bbox.width / 2);
        textElem.setAttribute("y", bbox.y + bbox.height / 2);
        textElem.setAttribute("text-anchor", "middle");
        textElem.setAttribute("class", "label");
        textElem.setAttribute("fill", rect.getAttribute("textFill") || "black");
        textElem.setAttribute("font-size", rect.getAttribute("fontSize") || "11px");

        let lines = rect.getAttribute("textName").split('\\n');
        lines.forEach((line, index) => {
            let tspanElem = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspanElem.textContent = line;
            if (index > 0) {
                tspanElem.setAttribute("x", bbox.x + bbox.width / 2);
                tspanElem.setAttribute("dy", "1.2em");
            }
            textElem.appendChild(tspanElem);
        });

        let centerX = bbox.x + bbox.width / 2;
        let centerY = bbox.y + bbox.height / 2;
        textElem.setAttribute("style", `transform-origin: ${centerX}px ${centerY}px;`);
        rect.parentNode.appendChild(textElem);
    });
}

async function loadMap(svgName) {
    const jsonFileName = svgName.replace('.svg', '.connections.json');
    fadePanel.classList.add('visible');
    try {
        const response = await fetch(jsonFileName);
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }
        const jsonData = await response.json();

        mapInfo = jsonData;
        svgMapObject.setAttribute('data', jsonData.svgFileName);

        await new Promise((resolve) => {
            svgMapObject.addEventListener('load', function onSvgLoad() {
                svgMapObject.removeEventListener('load', onSvgLoad);
                resolve();
            });
        });

        panZoomInstance = svgPanZoom('#svg-map', {
            zoomEnabled: true,
            controlIconsEnabled: false,
            fit: true,
            center: true,
            minZoom: 0.5,
            maxZoom: 10,
            dblClickZoomEnabled: false,
            mouseWheelZoomEnabled: true,
        });

        var svgDocument = svgMapObject.contentDocument;
        var interactables = svgDocument.querySelectorAll(".interactable");

        let isPanning = false; // Flag to track panning

        interactables.forEach(function(element) {
            element.addEventListener('mousedown', function(event) {
                isPanning = false;
            });

            element.addEventListener('mousemove', function(event) {
                if (event.movementX !== 0 || event.movementY !== 0) {
                    isPanning = true;
                }
            });

            element.addEventListener('mouseup', function(event) {
                if (!isPanning) {
                    loadMap(element.getAttribute('map') || 'maps/outside.svg');
                }
                isPanning = false;
            });

            element.addEventListener('dragstart', function(event) {
                event.preventDefault();
            });
        });

        document.getElementById('place-title').textContent = jsonData.title;
        edges = jsonData.edges;

        if ("buildingData" in jsonData) {
            document.getElementById("floor-control-btns").style.display = "block";
        } else {
            document.getElementById("floor-control-btns").style.display = "none";
        }

        fadePanel.classList.remove('visible');

        if (pathExists) {
            potentialPath = whereToGo(currentPlace, nextPlace);
            findAndDisplayRoute(potentialPath[0], potentialPath[1]);
        }

        addLabels();
        createArrowMarker(svgMapObject.contentDocument.getElementById('map'));
        panZoomInstance.zoomBy(2);
    } catch (error) {
        fadePanel.classList.remove('visible');
        console.error("Ошибка загрузки JSON файла или SVG:", error);
    }
}

window.onload = async function () {
    await loadMap("maps/outside.svg");
};