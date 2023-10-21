const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

    let switchMode = document.getElementById("switchMode");

    switchMode.onclick = function () {
        let theme = document.getElementById("theme");

        if(theme.getAttribute("href") == "css/light.css") {
            theme.href = "css/dark.css";
        } else {
            theme.href = "css/light.css"
        }
    }
