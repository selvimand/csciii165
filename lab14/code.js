add = function(){

  result = parseInt(jQuery('#operand_1').html()) + parseInt(jQuery('#operand_2').html());
//jQuery('#operand_1').html('123213213213');
//alert(result);

  text = jQuery('#operand_1').html() + " + " + jQuery('#operand_2').html() + " = "

  jQuery('#result').html(text + result);
}

  // Function of subtraction button
  sub = function(){

    result = parseInt(jQuery('#operand_1').html()) - parseInt(jQuery('#operand_2').html());

    text = jQuery('#operand_1').html() + " - " + jQuery('#operand_2').html() + " = "
    jQuery('#result').html(text + result);
  }


    //Function of multiplication button
    mul = function(){

      result = parseInt(jQuery('#operand_1').html()) * parseInt(jQuery('#operand_2').html());

      text = jQuery('#operand_1').html() + " * " + jQuery('#operand_2').html() + " = "
      jQuery('#result').html(text + result);
    }

      // Function of a division button

      div = function(){

        result = parseInt(jQuery('#operand_1').html()) / parseInt(jQuery('#operand_2').html());

        text = jQuery('#operand_1').html() + " / " + jQuery('#operand_2').html() + " = "
        jQuery('#result').html(text + result);
      }
        setup = function(){
          jQuery('add_button').click(add);
            jQuery('sub_button').click(sub);
              jQuery('mul_button').click(mul);
                jQuery('div_button').click(div);
        }
        jQuery(document).ready(setup);
