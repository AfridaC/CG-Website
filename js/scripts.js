//hide all recipes as default
$(function() {
  $('.recipe_1').hide();
  $('.recipe_2').hide()
});


//the ingredients and method appear when user clicks 'tell me more' button
$('.recipe_1_btn.lets_try').click(function(){
  $('.recipe_1').show(10);
  $('.recipe_2').hide;
  $('.recipe_1').scrollIntoView(true);
});
  $('.recipe_2_btn.lets_try').click(function(){
  $('.recipe_2').show(10);
  $('.recipe_1').hide();
  $('.recipe_2').scrollIntoView(true);
});
