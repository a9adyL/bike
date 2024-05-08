const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav_link'),
    navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

document.addEventListener('DOMContentLoaded', function() {
    const membersList = document.getElementById('members-list');

    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    Reorder_randomly();

});