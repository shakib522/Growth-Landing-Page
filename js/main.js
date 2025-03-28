// FAQ Accordion

document.addEventListener('DOMContentLoaded',() => {
    const faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click',(e) => {
        const groupHeader=e.target.closest('.faq-group-header');
        if (!groupHeader) return;
         const group = groupHeader.parentElement;
         const groupBody = group.querySelector('.faq-group-body');
         const icon = groupHeader.querySelector('i');

         //Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //toggle visibility of body
        groupBody.classList.toggle('open');

        //close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroups)=>{
            if (otherGroups!==group){
                const otherGroupBody = otherGroups.querySelector('.faq-group-body');
                const otherIcon = otherGroups.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

//mobile menu

document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click',()=> mobileMenu.classList.toggle('active'));
});