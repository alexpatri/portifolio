const observer = new IntersectionObserver(entris => {
    Array.from(entris).forEach(entry => {
        if(entry.intersectionRatio >= 0.5) entry.target.classList.add('init-hidden-off');
    })
}, {
    threshold: 0.5,
});

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
    observer.observe(element)
});