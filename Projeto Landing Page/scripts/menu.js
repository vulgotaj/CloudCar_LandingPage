window.addEventListener('scroll', function(){
    let header = document.querySelector('#main-header');
    header.classList.toggle('scrolling', window.scrollY > 200)
})

window.onload = function() {
    document.querySelector("#mobile-button").addEventListener("click", function(){
        if(document.querySelector("#mobile-menu").style.display == 'flex') {
            document.querySelector("#mobile-menu").style.display = 'none';
        } else {
            document.querySelector("#mobile-menu").style.display = 'flex';
        }
    })
}