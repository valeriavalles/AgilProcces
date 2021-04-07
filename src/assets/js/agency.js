// (function($) {
//   "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })

$('.nav-link').on('click', function(){
  var $this_link = $(this)

  console.log($this_link)
  $('.nav-link').removeClass('active-link')
  $(this).addClass('active-link')

})

  console.log('dsadas')
  
// })(jQuery); // End of use strict