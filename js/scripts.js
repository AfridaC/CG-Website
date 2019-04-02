const speed = 1000;
const speed2 = 500;

function smoothScroll(to) {
  $('html, body').animate(
    {
      scrollTop: $(to).offset().top,
    },
    speed,
    'linear'
  );
}

//hide all recipes as default
$(function() {
  $('.recipe_1').hide();
  $('.recipe_2').hide();

  //the ingredients and method appear when user clicks 'tell me more' button
  $('.recipe_1_btn.lets_try').click(function(){
    $('.recipe_1').show(speed);
    $('.recipe_2').hide(speed2);
    smoothScroll('.recipe_1');
  });
  $('.recipe_2_btn.lets_try').click(function(){
    $('.recipe_2').show(speed);
    $('.recipe_1').hide(speed2);
    smoothScroll('.recipe_2');
  });
});
