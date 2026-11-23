
const themeToggle = document.getElementById("theme-toggle");

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("theme") || "light";

// Terapkan tema
document.documentElement.setAttribute("data-theme", savedTheme);

// Atur ikon tombol
function updateThemeButton(theme) {
    if (!themeToggle) return;

    if (theme === "dark") {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Aktifkan mode terang");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Aktifkan mode gelap");
    }
}

updateThemeButton(savedTheme);

// Ketika tombol diklik
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);

        localStorage.setItem("theme", newTheme);

        updateThemeButton(newTheme);
    });
}
