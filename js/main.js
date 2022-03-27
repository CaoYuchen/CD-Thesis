$(function() {

$('#text-gt').click(function() {
  $('#navigation a[href="#gt"]').tab('show');
});

$('#text-code').click(function() {
  $('#navigation a[href="#code"]').tab('show');
});

$('.tag').click(function() {
  $(".DL, .CV, .HCI, .CG").hide();
  console.log($(this));
  if($(this).hasClass("tag-DL")){
    $(".DL").show();
  }
  if($(this).hasClass("tag-CG")){
    $(".CG").show();
  }
  if($(this).hasClass("tag-CV")){
    $(".CV").show();
  }
  if($(this).hasClass("tag-HCI")){
    $(".HCI").show();
  }
  if($(this).hasClass("tag-ALL")){
    $(".DL, .CV, .HCI, .CG").show();
  }
});

})