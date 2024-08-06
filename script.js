$(document).ready(() => {

  // NavBar Drop Shadow on scroll
  $(window).scroll(() => {
    if ($(window).scrollTop() > 10) {
      $('.nav-bar').addClass('floatingNav');
    } else {
      $('.nav-bar').removeClass('floatingNav');
    }
  });

  // Menu bar for Mobile
  $('.ham').click(function() {
    // Making Side Menu Bar Visible/Invisible On Menu Click
    $('.nav-elements').toggleClass('nav-visible');

    // Making Side Menu Invisible when clicked on any link/btn in menu
    if ($('.nav-elements').hasClass('nav-visible')) {
      $('body').css("overflow", "hidden");
      $('.nav-link, .nav-btn').click(() => {
        $('.ham').click();
        $('.ham').removeClass('active');
      });
    } else {
      $('body').css("overflow", "visible");
    }
  });

  // Changing Title Effect
  const b = baffle(".title");
  b.set({
    characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
    speed: 120
  });

  let i = 1;
  const changeTitle = () => {
    const titles = ["Front End Developer", "Full Stack Developer"];
    if (i == titles.length) {
      i = 0;
    }
    b.text(currentText => titles[i]).reveal(1500);
    i++;
  }

  setInterval(changeTitle, 3200);


 
  $(document).ready(function() {
    $('.education-card').click(function() {
      const url = $(this).data('url');
      window.location.href = url;
    });
  });
  
 

  // Showing & Hiding Card Content on Click
  $('.project-card').click(function() {
    const thisCardContent = $(this).children('.card-content');
    thisCardContent.toggleClass('view-card-details');
    $('.card-content').not(thisCardContent).removeClass('view-card-details');
  });

  // Hiding extra cards in Portfolio
  $('.view-more').click(() => {
    const txt = $('#view-more-content').text();
    if (txt == "View More") {
      $('#view-more-content').text('View Less');
      $('.hidden-card').css({ display: "block" });
    } else {
      $('#view-more-content').text('View More');
      $('.hidden-card').css({ display: "none" });
    }
  });

  function viewTab(tabName, tabHead) {
    $('.tab').removeClass('active');
    $('#' + tabHead).toggleClass('active');
    $('.tab').css({ color: "var(--primary-text)" });
    $('#' + tabHead).css({ color: "var(--yellow)" });
    $('.tab-contents').css({ display: "none" });
    $('.' + tabName).css({ display: "block" });
  }

  function viewProjectTab(tabName, tabHead) {
    const noOfProjects = $('.' + tabName + '> .project-card').length;
    noOfProjects >= 3 ? $('.view-more').css({ display: "flex" }) : $('.view-more').css({ display: "none" });
    $('.project-tab').removeClass('active-project');
    $('#' + tabHead).addClass('active-project');
    $('.project-content').css({ display: "none" });
    $('.' + tabName).css({ display: "grid" });
  }

});
