

// Jquery part examples


// jquery example 1
$(document).ready(function(){
// jQuery first() Method
$("#f_filter,#s_filter,#t_filter").first().css("background-color", "yellow");
// change color and text
$(".btn-c-changer").click(function(){
    $(".color1,.color2,.color3").css({"background-color": "pink", "font-size": "200%"});
  });
// jq empty
$(".btn_text_empty").click(function(){
    $("#text_empty").empty();
  });
//jq remove
$(".btn_remove").click(function(){
    $("#remove_item").remove();
  }); 
// Query addClass() Method  
$("button").click(function(){
    $("#heading1,#heading2").addClass("red");
    $(".class_text_ad").toggleClass("important");
  });   
//append items and append lists
$("#append_text").click(function(){
    $(".ca_para").prepend(" <b>Appended text</b>.");
  });

  $("#append_list").click(function(){
    $(".ca_list").append("<li>Appended item</li>");
  }); 
// jquery method chaining
$(".btn_chain").click(function(){
    $("#chain").css("color", "red").slideUp(2000).slideDown(2000);
  });
// calling back 
$(".btn_callback").click(function(){
    $(".c_hidden_para").toggle(3000);
});    
//animation box and text
$(".btn-animation_text").click(function(){
    var box_text = $(".box_animation_text");  
    box_text.animate({left: '100px'}, "slow");
    box_text.animate({fontSize: '3em'}, "slow");
  }); 
//animation of box toggle
$(".btn-animation_toggle").click(function(){
    $(".box_animation_toggle").animate({
        height:'toggle',
    });
});
//animation of box 
$(".btn-animation").click(function(){
    $(".box_animation").animate({left: '250px'});
});
// fade in /fade out /fade toggle start
// fade in
$('#fade_in').on('click', function(){
   $('#fh_h3').fadeIn(); 
});
// fade out
$('#fade_out').on('click', function(){
    $('#fh_h3').fadeOut(); 
 });  
//  fade toggle
$('#fade_togg').on('click', function(){
    $('#fh_h3').fadeToggle(3000); 
 }); 
 
// show/hide/toggle
// hide
$('#hide').on('click',function(){
    $('#sh_h3').hide();
});
// show
$('#show').on('click',function(){
   $('sh_h3').show(); 
});
// toggle
$('#togg').on('click',function(){
    $('#sh_h3').toggle();
});
// show alert
$('.btn').on('click', function(){
    alert("Welcome");
});
// slide
$('#quest').on('click', function(){
    $('#answ').slideToggle();
})
});

// jquery ui 
$(document).ready(function(){
    // draggable
    $( "#draggable" ).draggable();
    // accordian
    $( "#accordion" ).accordion();
    // accordian colaps
    $( "#accordion_collaps" ).accordion({
        collapsible: true
    });
    // autocomplete
    var data= ["HTML","CSS","BOOTSTRAP","JAVASCRIPT","JQUERY"];
    $( "#c_name" ).autocomplete({
        source: data
      });
      
  });

