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

  // Function of subtraction button
  subtraction = function(){

    result = parseInt(jQuery('#op1').html()) + parseInt(jQuery(' #op2').html());
    //jQuery(' #operand_1').html('123213213213');
    //alert(result);
    text = jQuery('#op1').html() + " + " + jQuery('#op2').html() + " = "
    jQuery('#result').html(text + result);
  }
    setup=function(){

      jQuery('#subbutton').click(subtraction);
    }
    jQuery(document).ready(setup);

    //Function of Multiplication button
    multiplication = function(){

      result = parseInt(jQuery('#op1').html()) + parseInt(jQuery(' #op2').html());
      //jQuery(' #operand_1').html('123213213213');
      //alert(result);
      text = jQuery('#op1').html() + " + " + jQuery('#op2').html() + " = "
      jQuery('#result').html(text + result);
    }
      setup = function(){

        jQuery('#mulbutton').click(multiplication);
      }
      jQuery(document).ready(setup);

      // function of a division button

      division = function(){

        result = parseInt(jQuery('#op1').html()) + parseInt(jQuery(' #op2').html());
        //jQuery(' #operand_1').html('123213213213');
        //alert(result);
        text = jQuery('#op1').html() + " + " + jQuery('#op2').html() + " = "
        jQuery('#result').html(text + result);
      }
        setup=function(){

          jQuery('#divbutton').click(division);
        }
        jQuery(document).ready(setup);
