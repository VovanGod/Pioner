const tabsHref = document.querySelectorAll('.products-card');
const tabsHrefFile = document.querySelectorAll('.products-card-file');
const tabsMod = document.querySelectorAll('.content-tabs');
const overlay = document.querySelector('.inf');

tabsHref.forEach(function(item) {
    item.addEventListener('click', function show() {
        setTimeout(() => {
            overlay.classList.toggle('inf-active');
            document.body.classList.toggle('no-scroll');
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-mod');
            let currentTab = document.querySelector(tabId);
            if ( ! currentBtn.classList.contains('content-tabs-active')){
                tabsHref.forEach(function(item) {
                    item.classList.remove('products-card-active')
                });
        
                tabsMod.forEach(function(item) {
                    item.classList.remove('content-tabs-active')
                });
        
                currentBtn.classList.add('products-card-active');
                currentTab.classList.add('content-tabs-active');
            }

            overlay.onclick = offer;
        }, 100);
    });
});

tabsHrefFile.forEach(function(item) {
    item.addEventListener('click', function show() {
        setTimeout(() => {
            overlay.classList.toggle('inf-active');
            document.body.classList.toggle('no-scroll');
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-mod');
            let currentTab = document.querySelector(tabId);
            if ( ! currentBtn.classList.contains('content-tabs-active')){
                tabsHrefFile.forEach(function(item) {
                    item.classList.remove('products-card-active')
                });
        
                tabsMod.forEach(function(item) {
                    item.classList.remove('content-tabs-active')
                });
        
                currentBtn.classList.add('products-card-active');
                currentTab.classList.add('content-tabs-active');
            }

            overlay.onclick = offerFile;
        }, 100);
    });
});

function offer () {
    overlay.classList.toggle('inf-active');
    tabsHref.forEach(function(item) {
        item.classList.remove('products-card-active')
    });
    tabsMod.forEach(function(item) {
        item.classList.remove('content-tabs-active')
    });
    document.body.classList.remove('no-scroll');
};

function offerFile () {
    overlay.classList.toggle('inf-active');
    tabsHrefFile.forEach(function(item) {
        item.classList.remove('products-card-active')
    });
    tabsMod.forEach(function(item) {
        item.classList.remove('content-tabs-active')
    });
    document.body.classList.remove('no-scroll');
};

function mobileNav() {
	const navBtnOpen = document.querySelector('#modalOpen');
	const navBtnClose = document.querySelector('#modalClose');

	const navOverlay = document.querySelector('#mobileNavOverlay');
	const nav = document.querySelector('#mobileNav');

	navBtnOpen.onclick = toggleMobileNav;
	navBtnClose.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;

	function toggleMobileNav() {
		navOverlay.classList.toggle('mobile-nav-overlay--open');
		nav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll-mobile');
	}
}

export default mobileNav;

mobileNav();