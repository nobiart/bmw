export default () => {

    const featuredLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    /* for (let i = 0; i < featuredLinkElems.length; i++) {
        featuredLinkElems[i].addEventListener('click', () => {
            featureSubElems[i].classList.toggle('hidden')
            featuredLinkElems[i].classList.toggle('feature__link_active')
        })
    } */

    /* featuredLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('feature__link_active')) {
                btn.classList.remove('feature__link_active');
                featureSubElems[index].classList.add('hidden');
            } else {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden');
                });
                featuredLinkElems.forEach((featuredLinkElem) => {
                    featuredLinkElem.classList.remove('feature__link_active');
                });
                featureSubElems[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }
        })
    }) */

    /* featuredLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem, i) => {
                if (index === i) {
                    featureSubElems[index].classList.toggle('hidden');
                } else {
                    featureSubElem.classList.add('hidden');
                }
            });
            featuredLinkElems.forEach((featuredLinkElem) => {
                if (featuredLinkElem === btn) {
                    btn.classList.toggle('feature__link_active');
                } else {
                    featuredLinkElem.classList.remove('feature__link_active');
                }
            });
        })
    }) */

    const handlerAccordion = (btn, index) => {
        btn.addEventListener('click', () => {
            featureSubElems.forEach((featureSubElem, i) => {
                if (index === i) {
                    featureSubElems[index].classList.toggle('hidden');
                } else {
                    featureSubElem.classList.add('hidden');
                }
            });
            featuredLinkElems.forEach((featuredLinkElem) => {
                if (featuredLinkElem === btn) {
                    btn.classList.toggle('feature__link_active');
                } else {
                    featuredLinkElem.classList.remove('feature__link_active');
                }
            });
        })
    };

    featuredLinkElems.forEach(handlerAccordion);

};
