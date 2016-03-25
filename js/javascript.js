$(document).ready(function(){       
   $(document).scroll(function() {

      // Checking where the scroll is

      var scrollTop = $(this).scrollTop();
      var scrollBot = scrollTop + $(window).height();
      if(scrollBot > ($('#portfolio').offset().top)) {
          // Designs and Resume is selected
          $('#DesignsLink').css('background-color', '#393939');
          $('#ResumeLink').css('background-color', '#393939');
          $('#ProjectsLink').css('background-color', 'transparent');
          $('#HomeLink').css('background-color', 'transparent');
      } else if(scrollTop > ($('#ProjectsText').offset().top) * 2 / 3) {
          // Projects is selected
          $('#ProjectsLink').css('background-color', '#393939');
          $('#HomeLink').css('background-color', 'transparent');
          $('#DesignsLink').css('background-color', 'transparent');
          $('#ResumeLink').css('background-color', 'transparent');
       } else {
          // home is selected
          $('#HomeLink').css('background-color', '#393939');
          $('#ProjectsLink').css('background-color', 'transparent');
          $('#DesignsLink').css('background-color', 'transparent');
          $('#ResumeLink').css('background-color', 'transparent');
       }
   });

   $('#back-to-top-arrow').hover(
       function(){ 
        $(this).removeClass('fa fa-arrow-up');
        $(this).addClass('fa fa-arrow-circle-up');
        },

       function(){ 
        $(this).removeClass('fa fa-arrow-circle-up');
        $(this).addClass('fa fa-arrow-up');
      }
  );
});