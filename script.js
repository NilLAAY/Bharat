document.addEventListener('DOMContentLoaded', function () {
    // Initialize the Slick carousel
    $('.e-con').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      arrows: false,
      dots: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust autoplay speed as needed
    });
  });
  
  
    // Function to handle the scroll effect
    function handleScroll() {
      var scrollTop = window.scrollY || window.pageYOffset;
      var windowHeight = window.innerHeight;
      var panels = document.querySelectorAll('.jr-scrolling-image');
  
      var scroll = scrollTop + (windowHeight / 2);
  
      panels.forEach(function(panel) {
        var panelTop = panel.offsetTop;
        var panelHeight = panel.offsetHeight;
  
        if (panelTop <= scroll && panelTop + panelHeight > scroll) {
          // Activate the corresponding carousel slide
          var index = Array.from(panel.parentNode.children).indexOf(panel);
          $('.jr-scrolling-image .e-con').slick('slickGoTo', index);
        }
      });
    }
  
    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
    // Initialize on page load
    handleScroll();
  });
  