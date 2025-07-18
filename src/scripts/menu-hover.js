const listItem = document.querySelectorAll("#landing-header li");
  const menuBackDrop = document.querySelector("#menu-backdrop");

  function setupMenuHover() {
  // Solo activar si ancho >= 1024px
  if (window.innerWidth >= 1024) {
    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect()

        menuBackDrop.style.setProperty("--left", `${left}px`)
        menuBackDrop.style.setProperty("--top", `${top}px`)
        menuBackDrop.style.setProperty("--width", `${width}px`)
        menuBackDrop.style.setProperty("--height", `${height}px`)

        menuBackDrop.style.opacity = "1"
        menuBackDrop.style.visibility = "visible"
      })

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0"
        menuBackDrop.style.visibility = "hidden"
      })
    })
  } else {
    // En móvil: asegúrate de ocultarlo
    menuBackDrop.style.opacity = "0"
    menuBackDrop.style.visibility = "hidden"
  }
}

setupMenuHover()