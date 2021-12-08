$(".play").click(function(){
 let game= $(".input").val();
  $(".userChoice").text(game);
  let randomNumber=Math.ceil(Math.random() * 3);
  console.log(randomNumber);

  let computerChoice=;
  if(randomNumber===1){
    $(".computerChoice").text("rock");
     }
  else if(randomNumber===2){
    $(".computerChoice").text("paper");
     }
  else if(randomNumber===3){
    $(".computerChoice").text("scissors");
     }

});