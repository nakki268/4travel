const sideNavbar=document.querySelector('.side-navbar')
var navChange=document.getElementById("side-nav-js")
var home=document.getElementById('homejs');
var about=document.getElementById('aboutjs');
var booking=document.getElementById('bookingjs')
var explore=document.getElementById('explorejs')
var showTour=document.getElementById('tour-info-js')
var showMore=document.getElementById('more-tour-js')
var closeHelp=document.getElementById('close-help-js')
var openHelp=document.getElementById('open-help-js')
var feedback=document.getElementById('feeback-js')
var session=document.getElementById('sessionjs')
var homePage=document.getElementById('home-js')
var parallax=document.getElementById('parallaxjs')

home.addEventListener("click",addActiveNav);
about.addEventListener("click",addActiveNav1);
booking.addEventListener('click',addActiveNav2);
explore.addEventListener('click',showpage)
closeHelp.addEventListener('click',closeBox)
openHelp.addEventListener('click',openBox)

document.querySelector('.toggle').onclick = function(){
this.classList.toggle('active')
sideNavbar.classList.toggle('active')
}
document.querySelector('.on-off').onclick = function(){
    this.classList.toggle('active')
    session.classList.toggle('active')
    }
function addActiveNav(){
home.classList.add('active-nav')
about.classList.remove('active-nav')
booking.classList.remove('active-nav')
window.scrollTo({ top: 0, behavior: 'smooth' });
document.getElementById('statisticjs').style.display='none'

}
function addActiveNav1(){
home.classList.remove('active-nav')
about.classList.add('active-nav')
booking.classList.remove('active-nav')
document.getElementById('about').style.display='flex'
document.getElementById('sessionjs').style.display='block'
homePage.style.display='none'
parallax.style.display='none'
showTour.classList.remove('show')
showMore.classList.remove('show')
document.getElementById('feedback-js').style.display='none'
session.style.display='none'
window.scrollTo({ top: 0, behavior: 'smooth' });
document.getElementById('statisticjs').style.display='flex'

}
function addActiveNav2(){
    document.getElementById('about').style.display='none'
    homePage.style.display='none'
    parallax.style.display='none'
    session.style.display='none'
    home.classList.remove('active-nav')
    about.classList.remove('active-nav')
    booking.classList.add('active-nav')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('statisticjs').style.display='none'

showTour.classList.add('show')
showMore.classList.add('show')
document.getElementById('feedback-js').style.display='flex'

}
function showpage(){
    session.style.display='block'

    
    
}
const buyBtns=document.querySelectorAll('.tour-book-js')
        const modal=document.querySelector('.js-modal')
        const modalClose=document.querySelector('.js-modal-close')
        const modalContainer=document.querySelector('.js-modal-container')
        /* hàm hiển thị */
        function showBuyTickets(){
            modal.classList.add('open')
            navChange.style.backgroundColor = "rgba(185, 223, 253, 0.7)"
        }
        function hideBuyTickets(){
            modal.classList.remove('open')
            navChange.style.backgroundColor = "rgba(185, 223, 253, 0.9)"
        }
        for (const buyBtn of buyBtns){
            buyBtn.addEventListener('click',showBuyTickets)
        }
        modalClose.addEventListener('click',hideBuyTickets)   
        modal.addEventListener('click',hideBuyTickets) 
        modalContainer.addEventListener('click', function(event){
            event.stopPropagation()
        })
function closeBox(){
    document.getElementById('help-box-js').style.display='none'
}
function openBox(){
    document.getElementById('help-box-js').style.display='block'
}
function showAbout(){
   
}