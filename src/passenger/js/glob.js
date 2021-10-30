let getURL = async function (url, success, error) {
    if (!window.XMLHttpRequest) return;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status !== 200) {
                if (error && typeof error === 'function') {
                    error(request.responseText, request);
                }
                return console.log(request.status);
            }
            if (success && typeof success === 'function') {
                success(request.responseText);
            }
        }
    };
    request.open('GET', url);
    request.send();
},
header = true,
bottomBar = true;
getURL(
    './glob_elem/header.html',
    function (data) {
        let el = document.createElement('div');
        el.innerHTML = data;
        let fetch = el.querySelector('#et-header');
        let embed = document.querySelector('#header');
        if (!fetch || !embed) return;
        embed.parentNode.replaceChild(fetch, embed);

        /*Active Nav item*/
        const lHref = window.location.href.split('/'),
        linksList = fetch.querySelectorAll('.et_menu');
        function activeNavs(elem) {
            linkHrefs = elem.querySelectorAll('li a');
            for (let i = 0; i < linkHrefs.length; i++) {
                const aHref = linkHrefs[i].href.split('/');
                if (lHref[lHref.length - 1] == aHref[aHref.length - 1]) {
                    linkHrefs[i].classList.add('active');
                    break
                }
            }
        }
        linksList.forEach(item => activeNavs(item));


        const waitingFor = setInterval(() => {
            if (header == false) {
                // Mobile Menu Srcipt
                const sideBar = document.querySelector('.et-m-menu'),
                sideBarOverlay = document.querySelector('.et-menu_overlay'),
                sideBarBtn = document.querySelector('.et-humburger');

                sideBarBtn.addEventListener('click', function () {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                        sideBar.classList.remove('open');
                        sideBarOverlay.classList.remove('open');
                        sideBarOverlay.style.display = 'none'
                        document.documentElement.style.overflow = ''
                    }
                    else {
                        this.classList.add('active');
                        sideBar.classList.add('open');
                        sideBarOverlay.classList.add('open');
                        sideBarOverlay.style.display = '';
                        document.documentElement.style.overflow = 'hidden'
                    }
                });

                //ScrollTop Fixed menu
                const nav = document.querySelectorAll('.et-nav');

                window.addEventListener('scroll', ()=>{
                    if (document.documentElement.scrollTop > 80) {
                        nav.forEach(item => item.classList.add('fix'));
                    }else {
                        nav.forEach(item => item.classList.remove('fix'));
                    }
                })
                clearInterval(waitingFor);
            }
        }, 500);
        return header = false;
    }
);
getURL(
    './glob_elem/bottom_bar.html',
    function (data) {
        let el = document.createElement('div');
        el.innerHTML = data;
        let fetch = el.querySelector('#et-bottom_bar');
        let embed = document.querySelector('#bottom_bar');
        if (!fetch || !embed) return;
        embed.parentNode.replaceChild(fetch, embed);

        const waitingFor = setInterval(() => {
            if (bottomBar == false) {

                clearInterval(waitingFor);
            }
        }, 500);
        return bottomBar = false;
    }
);
