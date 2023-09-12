const orb = document.querySelector('.ball');
const orbRect = orb.getBoundingClientRect();
const orbCenterX = orbRect.left + orbRect.width / 2;
const orbCenterY = orbRect.top + orbRect.height / 2;
const orbRadius = 200;
const angularSpeed = 0.1;
const minDistance = 150;
const numDots = 5000;

function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    document.body.appendChild(dot);

    let angle = Math.random() * 360;
    let radius = orbRadius + minDistance + Math.random() * 2000;

    function updatePosition() {
        const x = orbCenterX + radius * Math.cos(degToRad(angle));
        const y = orbCenterY + radius * Math.sin(degToRad(angle));
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        angle += angularSpeed;
        requestAnimationFrame(updatePosition);
    }

    updatePosition();
}

function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

for (let i = 0; i < numDots; i++) {
    createDot();
}

const planet = document.querySelector('.planet');
const orbitRadius = 50;
let angle = 0;

function updatePosition() {
    const centerX = 100;
    const centerY = 100;

    const x = centerX + orbitRadius * Math.cos(angle);
    const y = centerY + orbitRadius * Math.sin(angle);

    planet.style.left = `${x}px`;
    planet.style.top = `${y}px`;

    angle += 0.00000000000001;

    requestAnimationFrame(updatePosition);
}

updatePosition();
