
// =====================================
// MALAVIKA'S BIRTHDAY WEBSITE
// Made with love by Manikanta ❤️
// =====================================


// 1. FLOATING HEART ANIMATION

const heartContainer = document.getElementById("heartContainer");

const heartSymbols = ["❤️", "💕", "💗", "💖", "💘", "🌸"];

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 18 + 15) + "px";

    heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);


// 2. BIRTHDAY COUNTDOWN

// Malavika's birthday: November 17, 2026

const birthdayMonth = 10; // November (January = 0)
const birthdayDay = 17;

function updateCountdown() {

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        birthdayMonth,
        birthdayDay,
        0, 0, 0
    );

    // If this year's birthday has passed, use next year.
    if (now > new Date(
        now.getFullYear(),
        birthdayMonth,
        birthdayDay,
        23, 59, 59
    )) {
        birthday = new Date(
            now.getFullYear() + 1,
            birthdayMonth,
            birthdayDay,
            0, 0, 0
        );
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    // Show a special message on her birthday.
    const isBirthday =
        now.getMonth() === birthdayMonth &&
        now.getDate() === birthdayDay;

    if (isBirthday) {

        document.querySelector(".countdown-section .section-heading")
            .textContent = "Today Is Your Special Day! 🎂";

        document.querySelector(".countdown-note")
            .textContent = "Happy Birthday, Malavika! ❤️";

    }
}

updateCountdown();

setInterval(updateCountdown, 1000);


// 3. BACKGROUND MUSIC PLAYER

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            musicButton.textContent = "⏸ Pause Music";

        } catch (error) {

            musicButton.textContent = "Music unavailable";

            console.log("Please check music.mp3:", error);

        }

    } else {

        music.pause();

        musicButton.textContent = "🎵 Play Music";

    }

});


// 4. OPEN BIRTHDAY MESSAGE

function openBirthdayMessage() {

    document.getElementById("loveMessage").scrollIntoView({
        behavior: "smooth"
    });

    for (let i = 0; i < 15; i++) {

        setTimeout(createHeart, i * 150);

    }

}


// 5. BIRTHDAY CAKE SURPRISE

let candlesBlown = false;

function blowCandles() {

    const cake = document.getElementById("birthdayCake");

    const message = document.getElementById("cakeMessage");

    if (!candlesBlown) {

        cake.textContent = "🍰";

        message.innerHTML =
            "🎉 Happy Birthday, Malavika! 🎉<br>" +
            "May every dream in your heart come true! ❤️";

        candlesBlown = true;

        for (let i = 0; i < 30; i++) {

            setTimeout(createHeart, i * 100);

        }

    } else {

        message.innerHTML =
            "Your birthday wish is on its way! Keep smiling, princess! 💗";

    }

}


// 6. SECRET LOVE LETTER

function revealSecret() {

    const letter = document.getElementById("secretLetter");

    letter.style.display = "block";

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    for (let i = 0; i < 25; i++) {

        setTimeout(createHeart, i * 120);

    }

}


// 7. CONSOLE MESSAGE

console.log(
    "A special birthday website created with love by Manikanta for Malavika ❤️"
);
