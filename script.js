const city = document.getElementById('city');

const road = document.createElement('div');
road.classList.add('road');
city.appendChild(road);

const sidewalk = document.createElement('div');
sidewalk.classList.add('sidewalk');
city.appendChild(sidewalk);

const buildingPositions = [];
for (let i = 0; i < 5; i++) {
    const building = document.createElement('div');
    building.classList.add('building');
    building.innerHTML = '🏢';
    let position;
    do {
        position = Math.random() * 90;
    } while (buildingPositions.some(pos => Math.abs(pos - position) < 10));
    building.style.left = `${position}vw`;
    city.appendChild(building);
    buildingPositions.push(position);
}

for (let i = 0; i < 3; i++) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.innerHTML = '☁️';
    cloud.style.top = `${Math.random() * 20}vh`;
    cloud.style.left = `${Math.random() * 90}vw`;
    city.appendChild(cloud);
}

const people = [];
const genders = ['🚶', '🚶‍♀️'];

for (let i = 0; i < 5; i++) {
    const person = document.createElement('div');
    person.classList.add('person');
    const gender = genders[Math.floor(Math.random() * genders.length)];
    person.innerHTML = gender;
    person.style.left = `${Math.random() * 90}vw`;
    person.speed = Math.random() * 2 + 1;
    person.style.zIndex = '2';
    city.appendChild(person);
    people.push(person);
}

const car = document.createElement('div');
car.classList.add('car');
car.innerHTML = '🚗';
car.style.left = '90vw';
car.style.bottom = '8%';
car.style.transform = 'scaleX(-1)';
car.speed = Math.random() * 3 + 1;
car.style.zIndex = '2';
city.appendChild(car);

const emojis = document.querySelectorAll('.building, .cloud, .person, .car');
emojis.forEach(emoji => {
    emoji.addEventListener('selectstart', (e) => {
        e.preventDefault();
    });
});

setInterval(() => {
    people.forEach(person => {
        const currentPosition = parseFloat(person.style.left);
        const newPosition = currentPosition - person.speed;
        if (newPosition < -10) {
            person.style.left = '100vw';
        } else {
            person.style.left = `${newPosition}vw`;
        }
    });
}, 100);

setInterval(() => {
    const currentPosition = parseFloat(car.style.left);
    const newPosition = currentPosition - car.speed;
    if (newPosition < -10) {
        car.style.left = '100vw';
    } else {
        car.style.left = `${newPosition}vw`;
    }
}, 50);
