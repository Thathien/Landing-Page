/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const pageHeader = document.querySelector('.page__header');
const navBarMenu = document.querySelector('.navbar__menu')
const navLists = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');


/**
 * End Global Variables
 * Start Helper Functions
 * Method handle insert menu__link into  navbar__list
 * 
*/
function handleNavList(){
    sections.forEach(section => {

        /*Create Li and insert link a into li */
        const navli = document.createElement('li');
        navli.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navLists.appendChild(navli);

        /* Action scroll */
        scrollHandle(navli, section);
    });
    //Append the ul to the navbar (navbar__list)
    navBarMenu.appendChild(navLists);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * Scroll behavior
 * 
*/
// Scroll to anchor ID using event
function scrollHandle(navli, section){
    navli.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}

// build the nav
handleNavList();

// Add class 'btn_enable' to section when near top of viewport
/* Handle activation of each section when scrolling */
// Set sections as active
function activeSection (){
    /* Select all object using "menu__link" class */
    const navEnable = document.querySelectorAll(".menu__link")

    sections.forEach((section, i) => {
        const sectionBounding = section.getBoundingClientRect();
        if (sectionBounding.top <= 380 && sectionBounding.bottom >= 350){
            section.classList.add("your-active-class");
            navEnable[i].classList.add("btn_enable");
        } else{
            section.classList.remove("your-active-class");
            navEnable[i].classList.remove("btn_enable");
        }
    })
}


/**
 * End Main Functions
 * Begin Events
 * Handle toggle NavBar
 * 
*/
// Scroll to section on link click
function toggleNavBar(){
    let scroll;
    pageHeader.style.cssText = 'opacity: 1; transition: ease 0.5s ;'
    window.clearTimeout( scroll );
    scroll = setTimeout(function() {pageHeader.style.cssText = 'opacity: 0; transition: ease 0.5s ;'}, 7000);
}

// Build menu 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})




