// const moreElem = document.querySelector('.more');
// const moreElems = document.querySelectorAll('.more');

// moreElem.addEventListener('click', openModal);

/* moreElems.forEach(item => {
    item.addEventListener('click', openModal);
}) */

import blockScrolled from './blockScrolled.js';

const { enableScroll, disableScroll } = blockScrolled;

export default function modal() {
    const designBlockElem = document.querySelector('.design-block');
    const modalElem = document.querySelector('.modal');

    const openModal = () => {
        modalElem.classList.remove('hidden');
        disableScroll();
    };
    
    const closeModal = () => {
        modalElem.classList.add('hidden');
        enableScroll();
    };

    designBlockElem.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('.more')) {
            openModal();
        }
    })
    
    modalElem.addEventListener('click', (event) => {
        const target = event.target;
    
        if (target.classList.contains('overlay') || 
            target.classList.contains('modal__close')) {
            closeModal();
        }
    })
}
