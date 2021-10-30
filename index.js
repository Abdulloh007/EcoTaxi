window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Tabination
    const tabination = document.querySelectorAll('.et-tabination');
    //--> Secont Lewel Tabination
    const secontLewelTabination = document.querySelectorAll('.et-nd_tabination');

    function activeTabination(elem, elemNav, elemNavItem, elemTabItem) {
        const tabNav = elem.querySelector(elemNav),
        tabBtns = elem.querySelectorAll(elemNavItem),
        tabs = elem.querySelectorAll(elemTabItem);

        tabNav.addEventListener('click', function () {
            for (let i = 0; i < tabBtns.length; i++) {
                if (event.target == tabBtns[i] || event.target == tabBtns[i].children[0]) {
                    showTab(i);
                }
            }
        })
        showTab(0);
        function showTab(n) {
            tabBtns.forEach((item) => item.classList.remove('active'));
            tabs.forEach((item) => item.classList.remove('active'));
            tabBtns[n].classList.add('active');
            tabs[n].classList.add('active');
        }
    }
    if (tabination !== undefined || tabination !== null || secontLewelTabination != undefined || secontLewelTabination != null) {
        tabination.forEach(item => activeTabination(item, '.et-tab_nav', '.et-tab_nav li', '.et-tab_item'));
        secontLewelTabination.forEach((item) => activeTabination(item, '.et-nd_tab_nav', '.et-nd_tab_nav li', '.et-nd_tab_item'));
    }

    //PopUp`s
    let popUpBtns = document.querySelectorAll('.et-pop_up-btn'),
        popUps = document.querySelectorAll('.et-pop_up');

    function popUper(elem) {
        popUps.forEach((item) => {
            const closeBtn = item.querySelector('.fa-close');
            closeBtn.addEventListener('click', function () {
                item.classList.remove('active');
            })
        });
        elem.addEventListener('click', function () {
            for (let i = 0; i < popUps.length; i++) {
                if (elem.id == popUps[i].dataset.target) {
                    popUps[i].classList.add('active');
                }
            }
        })
    }
    if (popUpBtns != undefined && popUps != undefined) {
        popUpBtns.forEach((item) =>  popUper(item));
    }

    // History backdrop
    let goBackBtn = document.querySelectorAll('.et-go_back');

    goBackBtn.forEach(item => {
        item.addEventListener('click', function () {
            window.history.back();
        })
    });

})
