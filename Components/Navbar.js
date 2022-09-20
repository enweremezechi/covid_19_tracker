
// date validation
const getDate = document.querySelector('.date .data');
const getbackdate = document.querySelector('.rol-bagr-img p')
//date function
const date = new Date().toDateString();
// append date function
getDate.textContent = date;
getbackdate.textContent = date;
//hamburger
const MenuHamburger = document.querySelector('.hamburger');
MenuHamburger.addEventListener('click', function(e){
    e.preventDefault();
    let navLink = document.querySelector('#links')
  if(navLink.style.display == 'none'){
    navLink.style.display = 'block'
    navLink.style.position = 'absolute'
    navLink.style.right = '0'
    navLink.style.backgroundColor = 'gray'
    navLink.style.top = '0'
    navLink.style.width = '250px'
    navLink.style.height = '100vh'
  }
  else{
    navLink.style.display = 'none'
  }
})
