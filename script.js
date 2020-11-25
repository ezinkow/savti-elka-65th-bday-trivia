$(document).ready(function(){

var currentQuestionIndex = -1
var introButton = document.querySelector(".introBtn")

$(".introBtn").on("click",function(){
    $(".btnDiv").removeClass("hide")
    $(".btnDivIntro").addClass("hide")
    console.log("hello")
    currentQuestionIndex = currentQuestionIndex + 1
    $(".currentQuestion").html(questions[currentQuestionIndex])
})

$(".nextBtn").on("click",function() {
    currentQuestionIndex = currentQuestionIndex + 1
    $(".currentQuestion").html(questions[currentQuestionIndex])
})

$(".backBtn").on("click",function() {
    currentQuestionIndex = currentQuestionIndex - 1
    $(".currentQuestion").html(questions[currentQuestionIndex])
})



$(".img-container").on("click", function(event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "still") {
      element.setAttribute("data-state", "animate");
      element.setAttribute("src", element.getAttribute("data-animate"));
    } else if (state === "animate") {
      element.setAttribute("data-state", "still");
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});

var questions = [
    'this is question 1',
    'this is question 2',' this is question 3, a video question! <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/y2f1L7TkiUE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    'this is the text for previous video question',


]









})