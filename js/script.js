//Toggle what we do
$(document).ready(function(){
  $(function(){
        $("#display1").click(function(){
          $("#design").toggle();
            $(".design").toggle();
          });
    })
    
  });
  $(document).ready(function(){
    $(function(){
        $("#display2").click(function(){
          $("#development").toggle();
            $(".development").toggle();
          });
    })
    
  });
  $(document).ready(function(){
    $(function(){
        $(" #display3").click(function(){
          $("#product").toggle();
            $(".product").toggle();
          });
    })
    
  });
  //hover portfolio
  $(document).ready(function(){
    $(".card1").hover(function(){
      $("#card1").fadeToggle();},
      function(){
      $("#card1").fadeToggle(1000);
    });
    $(".card2").hover(function(){
      $("#card2").fadeToggle();},
      function(){
      $("#card2").fadeToggle(1000);
    });
    $(".card3").hover(function(){
      $("#card3").fadeToggle();},
      function(){
      $("#card3").fadeToggle(1000);
    });
    $(".card4").hover(function(){
      $("#card4").fadeToggle();},
      function(){
      $("#card4").fadeToggle(1000);
    });
    $(".card5").hover(function(){
      $("#card5").fadeToggle();},
      function(){
      $("#card5").fadeToggle(1000);
    });
    $(".card6").hover(function(){
      $("#card6").fadeToggle();},
      function(){
      $("#card6").fadeToggle(1000);
    });
    $(".card7").hover(function(){
      $("#card7").fadeToggle();},
      function(){
      $("#card7").fadeToggle(1000);
    }); 
  
  $(".card8").hover(function(){
    $("#card8").fadeToggle();},
    function(){
    $("#card8").fadeToggle(1000);
  });
});

  //js form validation
  function sendMail() {
    var name=document.getElementById("FNAME").value;
    var email=document.getElementById("EMAIL").value;
    var message=document.getElementById("myText").value;
    var link = "mailto:naikaesther5@.com"
             + "&subject=" + escape("Delani Studio")
             + "&body=" + escape(document.getElementById('myText').value)
    ;
    if(name||email||message==""){
      alert("all fields are required");
    }
    else{
      
      alert(name + " "+ "email send successfully");
      window.location.href = link;
      Form.reset();
    }

    
}