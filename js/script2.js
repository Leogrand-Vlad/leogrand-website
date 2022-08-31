window.onscroll = function() {
  windowScroll();
};

function windowScroll() {
  if (document.getElementById("header-fixed").scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header-fixed").className = "header-site-menu-fixed";
  } else {
    document.getElementById("header-fixed").className = "header-site-menu";
  }
}