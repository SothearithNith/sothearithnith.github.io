document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');

    const darkClasses = ["about", "inner-page"];
    const lightClasses = ["tmp-white-version"];

    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    toggleBtn.addEventListener("click", () => {
        const current = document.body.classList.contains("tmp-white-version") ? "light" : "dark";
        const next = current === "dark" ? "light" : "dark";

        applyTheme(next);
        localStorage.setItem("theme", next);
    });

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.remove(...lightClasses);
            document.body.classList.add(...darkClasses);

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            document.body.classList.remove(...darkClasses);
            document.body.classList.add(...lightClasses);

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
});
