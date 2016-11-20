var isScrolling;
var scrolldelay;

function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout('pageScroll()', 25);
    isScrolling = true;
}
if (!isScrolling) {
    pageScroll();
} else {
    isScrolling = false;
    clearTimeout(scrolldelay);
}
