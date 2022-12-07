// go to top
window.onscroll = () => {
    scrollToTop();
}

const scrollToTop = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
        document.getElementById("top-btn").style.display = "block";
    else
        document.getElementById("top-btn").style.display = "none";
}

// when users are clicking on the button, scroll to top 
toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}