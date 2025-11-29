document.addEventListener("DOMContentLoaded", () => {
  // Get all theme toggle buttons (both desktop and mobile)
  const toggleBtns = document.querySelectorAll("[data-theme-toggle]")

  if (toggleBtns.length === 0) return

  const darkClasses = ["about", "inner-page"]
  const lightClasses = ["tmp-white-version"]
  const savedTheme = localStorage.getItem("theme") || "dark"

  applyTheme(savedTheme)

  // Add click listener to ALL toggle buttons
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const current = document.body.classList.contains("tmp-white-version") ? "light" : "dark"
      const next = current === "dark" ? "light" : "dark"
      applyTheme(next)
      localStorage.setItem("theme", next)
    })
  })

  function applyTheme(theme) {
    toggleBtns.forEach((btn) => {
      const icon = btn.querySelector("i")
      if (theme === "dark") {
        document.body.classList.remove(...lightClasses)
        document.body.classList.add(...darkClasses)
        if (icon) {
          icon.classList.remove("fa-sun")
          icon.classList.add("fa-moon")
        }
      } else {
        document.body.classList.remove(...darkClasses)
        document.body.classList.add(...lightClasses)
        if (icon) {
          icon.classList.remove("fa-moon")
          icon.classList.add("fa-sun")
        }
      }
    })
  }
})
