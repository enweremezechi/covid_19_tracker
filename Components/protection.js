
document.getElementById('prot').addEventListener('click', function(e){
    e.preventDefault();
    const scrallToprotection = document.querySelector('.protection');
    scrallToprotection.scrollIntoView({
        behavior : 'smooth'
    })
})