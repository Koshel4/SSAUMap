document.addEventListener("DOMContentLoaded", function () {
    const scheduleButton = document.getElementById('schedule-btn');
    const scheduleIframeContainer = document.getElementById('schedule-iframe-container');
    const scheduleCloseButton = document.getElementById('schedule-close-btn');
    const pathfindingButton = document.getElementById('path-btn');
    const outsideButton = document.getElementById('outside-btn');

    scheduleButton.addEventListener('click', () => {
        scheduleIframeContainer.classList.add('open');
    });

    scheduleCloseButton.addEventListener('click', () => {
        scheduleIframeContainer.classList.remove('open');
    });

    pathfindingButton.addEventListener('click', () => {
        if (!pathExists) {
            potentialPath = whereToGo(currentPlace, nextPlace);
            findAndDisplayRoute(potentialPath[0], potentialPath[1]);
            pathExists = true;
        }
        else {
            removePath(document.getElementById('svg-map').contentDocument.getElementById('map'));
            pathExists = false;
        }
    });

    outsideButton.addEventListener('click', () => {
        loadMap("maps/outside.svg");
    });
});