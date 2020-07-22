add = function(){

  result = parseInt(jQuery('#op1').html()) + parseInt(jQuery(' #op2').html());

  //jQuery(' #operand_1').html('123213213213');
  //alert(result);
  text = jQuery('#op1').html() + " + " + jQuery('#op2').html() + " = "
  jQuery('#result').html(text + result);
}
  setup=function(){
    jQuery('#addbutton').click(add);
  }
  jQuery(document).ready(setup);
