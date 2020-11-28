$(document).ready(function(){

var currentQuestionIndex = -1

$(".introBtn").on("click",function(){
    $(".btnDiv").removeClass("hide")
    $(".btnDivIntro").addClass("hide")
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
  //Ellen Mack
    'Question 1:<br>For question 1 we go to...',
    'Ellen Mack!:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/OQrjRg5icqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //mack text
    'What is the name of the boy who I think was Elka’s first boyfriend?<br>A) Ken<br>B) Brad<br>C) Bryan<br>D) Bruce<br>E) Poindexter',
  //Mack answer
    'Question 1 Answer:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/RxCCH7mtlSQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Cindy Chazan
    'Question 2:<br>We go to our 1st live questionner....',
    'Question 2:<br>Why was Elka so excited when she heard that Jane Wilf would be a Wexner Heritage member?',
  //Peter Kenefick
    'Question 3:<br>Another live guest...',
    'Question 3:<br>',
  //Rabbi Peter Rubinstein
    'Question 4:<br>Video question!: <br><iframe width="560" height="315" src="https://www.youtube.com/embed/F7QsqfdJ-o8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "Question 4:<br>When we were on the pulpit together in San Mateo, I said something that caused Elka to break out in loud laughter.  What was the context, what did I say, and how did she memorialize it?",
  //Rubenstein answer
    'Question 4 Answer: <br><iframe width="560" height="315" src="https://www.youtube.com/embed/-tBs38-FhbM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Deborah Lipstadt
    "Questions 5 and 6 go to....",
    "Question 5:<br>What was revealingly flapping in the wind on Michigan Avenue erev Elan and Orly's wedding?",
    "Question 6:<br>Most people would give their anything to be invited there, especially if it involves spending time one on one with the 'man.'  Deborah and Elka are probably the only ones who sometimes feel otherwise.  Where is it?",
  //Barry Levitan
    "Now let's go out west.....",
    "Question 7:<br>Until she was an adult, Barbara and later Elka thought that her Aunt Sally's husband was:<br>1) in the  witness protection program, 2) extremely agoraphobic, 3) non existent, she had never married, 4) dead",
  //Ezra Korman
    'Question 8: Video from Israel!<br><iframe width="560" height="315" src="https://www.youtube.com/embed/My5Gwx6lBTY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //korman text
    "Question 8:<br>When attending the General Assembly of the Jewish Federations of North America, what is Elka’s favorite thing to do?<br>A) give a talk on women in leadership and the importance of presenting diversity in all JFNA programming<br>B) host a reception for Wexner alumni and friends in the Wexner suite<br>C) attend the reception and shoo away people who have come for the free food or to solicit money from the Foundation<br>D) sit in a side-room of the Wexner suite during the reception and watch a Vikings game on TV",
  //Korman answer
    'Question 8 Answer:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/kZhswlRjmwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Amy and Joseph
    "Question 9: Back to Bexley for this one.....",
    "Question 9:<br>What did Elka say in response to a male friend who referred to a current social movement as 'Black Lives Matters'?<br>A) Thank G-d Maya didn't hear this!<br>B) She burst out laughing<br>C) She compassionately and gently referred to the correct version of the movement to not embarrass him<br>D) Nothing, she listened as her friend corrected him with a strong hint of judgement",
  //Rabbi Elie Kaunfer
    "Question 10: Now a Wexner Fellow with a Chicago connection....",
    "Question 10:<br>",
  //Stefanie Zelkind
    "Question 11:<br>",
    "Question 11:<br>In Elka's eyes, which is her greatest professional accomplishment?",
  //Andy Halper
    "Question 12: Out to Minneapolis and an old Herzl friend....",
    "Question 12:<br>",
  //Rabbi Judy Shanks
    "Question 13: Back out west to the bay area.....",
    "Question 13:<br>In 1993, Elka and I co-chaired a national Jewish event in the Bay Area.  What was it?<br>A) Coalition for Jewish Education’s Annual Conference<br>B) UAHC (now URJ) Rabbis for Union Summer Camps<br>C) Women’s Rabbinic Network Biennial Conference<br>D) How to Create a Day Care Center at Your Synagogue?<br>Extra credit:  What was the name of the hotel that housed the event?",
  //Margie
    "Question 14:",
    "Question 14:<br>",
  //Steve and Ruth
    "Question 15:",
    "Question 15:<br>How old was Elka when she first met Steven and for a bonus, what was the date?",
  //Bonnie
    "Question 16:<br>",
  //Game end
    "GAME OVER<br><br>That's the end of the game!<br>Let's tally up the scores!",
    

]










})