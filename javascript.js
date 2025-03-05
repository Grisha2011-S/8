document.addEventListener("DOMContentLoaded", () => {
    const flowerContainer = document.getElementById("flower-container");
    const message = document.getElementById("message");
    const totalFlowers = 7; // Количество цветов
    let collectedFlowers = 0;
    const positions = [];

    // Создаем аудио для кликов и победы
    const clickSound = new Audio("video/mony.mp3"); // Добавь файл click.mp3 в папку с игрой
    const winSound = new Audio("video/aplodisment.mp3"); // Добавь файл win.mp3 в папку с игрой

    // Массив с поздравлениями
    const congratulations = [
        '🌸 Поздравляем тебя с праздником весны! Пусть оценки будут только «5», домашку пусть делает кот, а шоколадки в портфеле размножаются сами собой! 🍫😄',
        "С 8 Марта! 🎉 Пусть твои знания по математике приумножаются, а уроки физкультуры сокращаются! 😆",
        'Поздравляем! 🌷 Пусть каждый день будет, как суббота, а в дневнике вместо оценок — только лайки! 👍📚',
        "С праздником! 💐 Пусть настроение будет лучше, чем сигнал Wi-Fi, а учителя ставят только «5» даже за пустую тетрадку! 📖📶",
        "😍 Пусть твои волосы всегда лежат идеально, даже после контрольной, а шоколадки никогда не заканчиваются! 🍬",
        "Поздравляем! 🎊 Пусть каникулы станут длиннее, учебники — легче, а контрольные — исчезнут навсегда! 😎",
        "С праздником! 💖 Пусть в твоей жизни будет столько счастья, сколько букв в учебнике по истории, и столько радости, сколько перемен в расписании! 🤪",
        "С 8 Марта! 🎀 Желаем, чтобы твой рюкзак сам собирался, шпаргалки писались волшебным пером, а учителя сами подсказывали на контрольных! ✨",
        "Поздравляем! 🌼 Пусть все мечты сбываются, оценки радуют, а перемены будут длиннее, чем сами уроки! 📚😄"
    ];

    function getRandomPosition() {
        let left, top, isOverlapping;
        do {
            left = Math.random() * 80;
            top = Math.random() * 80;
            isOverlapping = positions.some(pos => 
                Math.abs(pos.left - left) < 10 && Math.abs(pos.top - top) < 10
            );
        } while (isOverlapping);
        positions.push({ left, top });
        return { left: left + "%", top: top + "%" };
    }

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        
        // Устанавливаем случайные координаты без наложений
        const { left, top } = getRandomPosition();
        flower.style.position = "absolute";
        flower.style.left = left;
        flower.style.top = top;
        
        flower.addEventListener("click", () => {
            clickSound.play(); // Воспроизводим звук клика
            flower.remove();
            collectedFlowers++;
            if (collectedFlowers === totalFlowers) {
                setTimeout(() => {
                    winSound.play(); // Задержка перед победным звуком
                    message.textContent = congratulations[Math.floor(Math.random() * congratulations.length)]; // Случайное поздравление
                    message.classList.remove("hidden");
                    displayUserImage(); // Отображаем изображение пользователя
                }, 500);
            }
        });
        
        flowerContainer.appendChild(flower);
    }
    
    // Делаем контейнер позиционированным, чтобы работали абсолютные координаты
    flowerContainer.style.position = "relative";
    flowerContainer.style.height = "300px";
});

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    const gameContainer = document.getElementById("game-container");
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", () => {
        menuContainer.classList.add("hidden");
        gameContainer.classList.remove("hidden");
    });
});

function displayUserImage() {
    const userInput = document.querySelector("select[name='user-input']").value;
    const imageContainer = document.createElement("div");
    const userImage = document.createElement("img");
    const floorcont =  document.getElementById("flower-container");
    const gif = document.createElement("img")
    userImage.src = `foto/${userInput}.jpg`;
    gif.src = 'муз.gif'
    userImage.alt = "User Image";
    userImage.style.width = "150px";
    userImage.style.height = "150px";
    gif.style.width = '100%';
    gif.style.height = '100%';
    floorcont.appendChild(gif);
    imageContainer.appendChild(userImage);
    document.body.appendChild(imageContainer);}
