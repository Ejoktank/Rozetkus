console.log("Script is attached!");

document.onwheel = function(e) {
    move(Math.sign(e.deltaY));
}

let page = 0;
let maxPages = 5;
let activeScrolls = 0;
function move(dir) {
    const oldPage = page;
    page = Math.max(0,Math.min(maxPages - 1, page + dir));
    if(oldPage == page) return;
    ++activeScrolls;
    const frame = document.getElementById('sframe');
    const progress = document.getElementById('scroll-bar-progress');
    frame.setAttribute('scrolling',true);
    const pages = document.getElementsByTagName('section');
    progress.style.width = ((page + 1) / (maxPages)) * 100 + '%';
    if(page == 2) {
        progress.style.backgroundColor = "#0067fe";
    }
    else {
        progress.style.backgroundColor = "#000000";
    }
    setTimeout(() => {
        let w = 0;
        for(let i = 0; i < page; ++i) {
            w += pages[i].clientHeight;
        }
        frame.style.top = -w + 'px';
    }, 200);
    setTimeout(() => {
        --activeScrolls;
        if(activeScrolls == 0) {
            frame.removeAttribute('scrolling');
        }
    }, 200);


}
