$("#toggler").click(function () {
  if ($(window).width() <= 500) {
    mobileSize()
  } else {
    openNav()
  }
})

function openNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : 0 ;"
  document.getElementById("page").style.paddingLeft = "300px"
}

function closeNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : -300px ; border-left: none"
  document.getElementById("page").style.paddingLeft = "0"
}

function mobileSize() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : 0 ; width : 100vw"
  document.getElementById("page").style.marginLeft = "0"
}


  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#navbar').addClass('header-scrolled');
    } else {
      $('#navbar').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#navbar').addClass('header-scrolled');
  }


