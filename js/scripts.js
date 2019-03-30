//hide all recipes as default
$(function() {
  $('.ckn_korma').hide();
  $('.ckn_burrito').hide()
});


//the ingredients and method appear when user clicks 'tell me more' button
$(".ckn_korma_btn.lets_try").click(function(){
  $(".ckn_korma").show(10);
  $('.ckn_burrito').hide()
});
  $(".ckn_burrito_btn.lets_try").click(function(){
  $(".ckn_burrito").show(10);
  $('.ckn_korma').hide();
});
