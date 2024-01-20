window.addEventListener("scroll", function(){
    let header = this.document.querySelector('.geral-container')

    header.classList.toggle('rolagem', window.scrollY > 400)
})