const toggleSpoilerBtn = document.getElementById("myBtn");
const spoiler = document.getElementById("spoiler");


// Функция для открытия спойлера
function openSpoiler() {
    spoiler.classList.add("open");

    // Обработчик нажатия на клавишу Esc для закрытия спойлера
    document.addEventListener("keydown", closeSpoilerOnEsc);
}

// Функция, для закрытия спойлера
function closeSpoiler() {
    spoiler.classList.remove("open");

    // Удаляем обработчик нажатия на клавишу Esc
    document.removeEventListener("keydown", closeSpoilerOnEsc);
}

// Функция для обработки нажатия на клавишу Esc
function closeSpoilerOnEsc(event) {
    if (event.key === "Escape") {
        closeSpoiler();
    }
}

toggleSpoilerBtn.addEventListener("click", () => {
    if (spoiler.classList.contains("open")) {
        closeSpoiler();
    } else {
        openSpoiler();
    }
});