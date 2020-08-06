setup = function(){
  //over & out events
  //outer div
  t = 0;
  jQuery("#outteroverout").mouseover(function(){
    // alert('#outertextoverout-> over');
    // console.log('#outertextoverout-> over');
    jQuery("#outerTextoverout").text("mouse over");


    t = t + 1;
    jQuery("#outercounterover").text(t + " overs");

  });

  z = 0;
  jQuery("#outteroverout").mouseout(function(){

    // console.log('#outertextoverout-> out');
    jQuery("#outerTextoverout").text("mouse out");


    z = z + 1;
    jQuery("#outercounterout").text(z + " outs");
  });
  // Inner div

  a = 0;
  jQuery("#inneroverout").mouseover(function(){

    // console.log('#innertextoverout-> over');
    jQuery("#innerTextoverout").text("mouse over");


    a = a + 1;
    jQuery("#innerrcounterover").text(a + " overs");
  });

  i = 0;

  jQuery("#inneroverout").mouseout(function(){

    // console.log('#innertextoverout-> out');
    jQuery("#innerTextoverout").text("mouse out");


    i = i + 1;
    jQuery("#innerrcounterout").text(i + " outs");
  });


  // Enter and Leave Events
  // outer div

  d = 0;
  jQuery("#outerenterleave").mouseenter(function(){

    // console.log('div.enterleave-> enter');
    jQuery("#outerTextenterleave").text("mouse enter");
  d = d + 1;
    jQuery("#outerCounterEnter").text(d + " enters");
  });

  n = 0;
  jQuery("#outerenterleave").mouseleave(function(){

    // console.log('outertextenterleave-> exit');
    jQuery("#outerTextenterleave").text("mouse leave");
    n= n + 1;
    jQuery("#outerCounterEnter").text(n + " leaves");
  });


  // Inner div
  c = 0;
  jQuery("#innerenterleave").mouseenter(function(){

    // console.log('div.enterLeave-> enter');
    jQuery("#innerTextenterleave").text("mouse enter");
    c = c + 1;
    jQuery("#innerCounterEnter").text(c + " enters");
  });

  y = 0;

  jQuery("#innerenterleave").mouseleave(function(){

    // console.log('innerTextenterLeave-> exit');
    jQuery("#innerTextenterleave").text("mouse leave");
    y = y + 1;
    jQuery("#innerCounterleave").text(y + " leaves");
  });
}
  jQuery(document).ready(setup)
