add = function(){

  result = parseInt(jQuery('#operand1').val()) + parseInt(jQuery('#operand2').val());
  text = jQuery('#operand1').val() + " + " + jQuery('#operand2').val() + " = "
  result = text + result;
    jQuery('#result').text(result)

    old_div_content = jQuery('#history').html();
    result ="<span id='add_style'>"+ result+"</span>";
    new_div_content = old_div_content + result+ '<br><br>';
    jQuery ('#history').html(new_div_content);
}

minus = function(){

  result = parseInt(jQuery('#operand1').val()) - parseInt(jQuery('#operand2').val());
  text = jQuery('#operand1').val() + " - " + jQuery('#operand2').val() + " = "
  result = text + result;
    jQuery('#result').html(result)
    old_div_content = jQuery('#history').html();
    result ="<span id='min_style'>"+ result+"</span>";
    new_div_content = old_div_content + result+ '<br><br>';
    jQuery ('#history').html(new_div_content);
}

multiply= function(){

  result = parseInt(jQuery('#operand1').val()) * parseInt(jQuery('#operand2').val());
  text = jQuery('#operand1').val() + " * " + jQuery('#operand2').val() + " = "
  result = text + result;
    jQuery('#result').html(result)
    old_div_content = jQuery('#history').html();
    result ="<span id='mul_style'>"+ result + "</span>";
    new_div_content = old_div_content + result + '<br><br>';
    jQuery ('#history').html(new_div_content);
}

divide = function(){

  result = parseInt(jQuery('#operand1').val()) / parseInt(jQuery('#operand2').val());
  text = jQuery('#operand1').val() + " / " + jQuery('#operand2').val() + " = "
  result = text + result;
    jQuery('#result').html(result)
    old_div_content = jQuery('#history').html();
    result ="<span id='div_style'>"+ result+"</span>";
    new_div_content = old_div_content + result+ '<br><br>';
    jQuery ('#history').html(new_div_content);
}
show = function(){
  jQuery('#history').show()
  }
  hide= function(){
    jQuery('#history').hide()
  }
 clear= () => {
    $('#history').empty()
  }
//either jQuery or $ can be used to select element

  setup = function(){
    $('#addbutton').click(add).mouseover(add);
      jQuery('#subbutton').click(minus).mouseover(minus);
        jQuery('#mulbutton').click(multiply).mouseover(multiply);
          jQuery('#divbutton').click(divide).mouseover(divide);
            jQuery('#show_button').click(show);
            jQuery('#hide_button').click(hide);
            jQuery('#clear_button').click(clear);

  }

jQuery(document).ready(setup);
