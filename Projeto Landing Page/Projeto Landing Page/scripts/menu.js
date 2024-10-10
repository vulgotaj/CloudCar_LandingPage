window.addEventListener('scroll', function(){
    let header = document.querySelector('#main-header');
    header.classList.toggle('scrolling', window.scrollY > 200)
})