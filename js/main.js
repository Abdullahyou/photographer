$(function(){
   
    // call the slider -- first slider
    
    $('.slider .main-carousel').flickity({
  // options
        cellAlign: 'left',
        contain: true, 
        wrapAround: true 
    
    });
   // 
   
   
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.navbar').slideDown().css({background:'black'});
        }
        else {
            $('.navbar').css({background:'transparent'})
        }
    });
   
    

// triger the mixitup (shuffle)
    var config = {
    animation: {
        effectsIn: 'fade translateY(-100%)',
        duration: 300,
         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    },

};
   var mixer = mixitup('.gallery', config);

    $('.our-project li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    //
    // call the slider second slider
    
    $('.testimonials .main-carousel').flickity({
  // options
        cellAlign: 'left',
        contain: true, 
        wrapAround: true 
    
    });
    // triger aos :
    AOS.init();
    
    // third slider :
    
    $('.instagram-bar .main-carousel').flickity({
  // options
        cellAlign: 'left',
        contain: true, 
        wrapAround: true ,
        prevNextButtons: false,
        pageDots: false
    
    });
        
        
});