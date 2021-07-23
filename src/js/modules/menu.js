'use strict';

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector); 
    
    modal.classList.add('active') ;
    document.body.style.overflow = "hidden";
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('active');
    document.body.style.overflow = "";
}

function modal(selectorOpen, modalSelector, closeSelector) {
    const openElem = document.querySelector(selectorOpen),
         modal = document.querySelector(modalSelector),
         closeElem = document.querySelectorAll(closeSelector);
        
        openElem.addEventListener('click', ()=> {
            openModal(modalSelector);
            openElem.style.display = 'none';
        });
        

        closeElem.forEach (item => {
            item.addEventListener('click', () => {
                closeModal(modalSelector);
                openElem.style.display = 'block';
            });
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape' && modal.classList.contains('active')) {
                closeModal(modalSelector);
                openElem.style.display = 'block';
            }
        });
        
}

export {modal, closeModal, openModal};