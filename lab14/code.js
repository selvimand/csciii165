add = function(){

  result = parseInt(jQuery('#op1').html()) + parseInt(jQuery(' #op2').html());


  text = jQuery('#op1').html() + " + " + jQuery('#op2').html() + " = "

  jQuery('#result').html(text + result);
}
  setup=function(){
    jQuery('#addbutton').click(add);
  }
  jQuery(document0.ready(setup);

  // Function of subtraction button
  subtraction = function(){

    result = parseInt(jQuery('#op1').html())- parseInt(jQuery(' #op2').html());

    text = jQuery('#op1').html() + " - " + jQuery('#op2').html() + " = "
    jQuery('#result').html(text + result);
  }
    setup=function(){
      // alert ("hi");

      jQuery('#subbutton').click(subtraction);
    }
    jQuery(document).ready(setup);

    //Function of multiplication button
    multiplication = function(){

      result = parseInt(jQuery('#op1').html()) * parseInt(jQuery(' #op2').html());

      text = jQuery('#op1').html() + " * " + jQuery('#op2').html() + " = "
      jQuery('#result').html(text + result);
    }
      setup = function(){
        // alert ("hi");

        jQuery('#mulbutton').click(multiplication);
      }
      jQuery(document).ready(setup);

      // Function of a division button

      division = function(){

        result = parseInt(jQuery('#op1').html()) + parseInt(jQuery(' #op2').html());

        text = jQuery('#op1').html() + " / " + jQuery('#op2').html() + " = "
        jQuery('#result').html(text + result);
      }
        setup=function(){

          jQuery('#divbutton').click(division);
        }
        jQuery(document).ready(setup);
