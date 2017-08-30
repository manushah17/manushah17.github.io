$(document).ready(function() {    
  
  // execute the slideShow, set 4 seconds (4000) for each image
  slideShow(4000);

});

function slideShow(speed) {

  // set the opacity of all images to 0
  $('ul.slideshow li').css({opacity: 0.0});
  
  // get the first image and display it
  $('ul.slideshow li:first').css({opacity: 1.0}).addClass('show');
    
  // call the gallery function to run the slideshow  
  var timer = setInterval('gallery()',speed);
  
  // pause the slideshow on mouse over
  $('ul.slideshow').hover(
    function () {
      clearInterval(timer); 
    },  
    function () {
      timer = setInterval('gallery()',speed);     
    }
  );  
}

function gallery() {

  //if no images have the show class, grab the first image
  var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('#ul.slideshow li:first'));

  // trying to avoid speed issue
  if(current.queue('fx').length == 0) {

    // get the next image, if it reached the end of the slideshow, rotate it back to the first image
    var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption')? $('ul.slideshow li:first') :current.next()) : $('ul.slideshow li:first'));
    
    // set the fade in effect for the next image, show class has higher z-index
    next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
        
    // hide the current image
    current.animate({opacity: 0.0}, 1000).removeClass('show');

  }
}

function openUNO_ISQAPage(){
    var URL = "https://www.unomaha.edu/college-of-information-science-and-technology/information-systems-and-quantitative-analysis/about/index.php";
    var win = window.open(URL, "_blank");
    win.focus();
}

function openUNOPage(){
    var URL = "https://www.unomaha.edu/";
    var win = window.open(URL, "_blank");
    win.focus();
}
