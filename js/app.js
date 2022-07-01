const btns = document.querySelectorAll(".tab-btn")
const contentContainer = document.querySelector(".content-container")
const content = document.querySelectorAll(".content")


contentContainer.addEventListener("click", function(e){
    const id = e.target.dataset.id
    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        content.forEach(function(cont){
            cont.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})