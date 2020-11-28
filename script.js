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
    'Question 1:<br>Ellen Mack!<br><iframe width="560" height="315" src="https://www.youtube.com/embed/OQrjRg5icqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //mack text
    'Question 1:<br>What is the name of the boy who I think was Elka’s first boyfriend?<br>A) Ken<br>B) Brad<br>C) Bryan<br>D) Bruce<br>E) Poindexter',
  //Mack answer
    'Question 1 Answer:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/RxCCH7mtlSQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Cindy Chazan
    'Question 2:<br>We go to our 1st live questionner and the 1st Wexner connection....',
    'Question 2:<br>Why was Elka so excited when she heard that Jane Wilf would be a Wexner Heritage member?',
  //Peter Kenefick
    "Questions 3 through 6:<br>Someone from way back in the day, his family owns a vineyard in Napa Valley....",
    'Question 3:<br>As a senior in high school which group did Elka belong to?',
    'Question 4:<br>What is her famous quote pertaining to that group?',
    'Question 5:<br>Always a leader Elka served on the student council. Name the prestigious position she was elected to.',
    'Question 6:<br>In 1973 Elka was crowned Queen of which event?',
  //Rabbi Peter Rubinstein
    'Question 7:<br>A video question from someone who was ranked number 3 in Newsweek’s 2012 list of “America’s 50 Most Influential Rabbis”',
    'Question 7:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/F7QsqfdJ-o8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "Question 7:<br>When we were on the pulpit together in San Mateo, I said something that caused Elka to break out in loud laughter.  What was the context, what did I say, and how did she memorialize it?",
  //Rubenstein answer
    'Question 7 Answer:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/-tBs38-FhbM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Deborah Lipstadt
    "Questions 8 and 9:<br> We go to someone once played by Rachel Weisz....",
    "Question 8:<br>What was revealingly flapping in the wind on Michigan Avenue erev Elan and Orly's wedding?",
    "Question 9:<br>Most people would give their anything to be invited there, especially if it involves spending time one on one with the 'man.'  Deborah and Elka are probably the only ones who sometimes feel otherwise.  Where is it?",
  //Barry Levitan
    "Question 10:<br>Let's go out west to hear from a former member of the San Francisco Mime Troupe....",
    "Question 10:<br>Until she was an adult, Barbara and later Elka thought that her Aunt Sally's husband was:<br>1) In the  witness protection program<br>2) Extremely agoraphobic<br>3) Non existent, she had never married<br>4) Dead",
  //Ezra Korman
    'Question 11:<br>A Video from Israel, and Misha`s boss....',
    'Question 11:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/My5Gwx6lBTY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    //korman text
    "Question 11:<br>When attending the General Assembly of the Jewish Federations of North America, what is Elka’s favorite thing to do?<br>A) give a talk on women in leadership and the importance of presenting diversity in all JFNA programming<br>B) host a reception for Wexner alumni and friends in the Wexner suite<br>C) attend the reception and shoo away people who have come for the free food or to solicit money from the Foundation<br>D) sit in a side-room of the Wexner suite during the reception and watch a Vikings game on TV",
  //Korman answer
    'Question 11 Answer:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/kZhswlRjmwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Amy and Joseph
    "Question 12:<br>Over to Bexley for this one to hear from Misha's former boss (and wife)....",
    "Question 12:<br>What did Elka say in response to a male friend who referred to a current social movement as 'Black Lives Matters'?<br>A) Thank G-d Maya didn't hear this!<br>B) She burst out laughing<br>C) She compassionately and gently referred to the correct version of the movement to not embarrass him<br>D) Nothing, she listened as her friend corrected him with a strong hint of judgement",
  //Rabbi Elie Kaunfer
    "Question 13:<br>Now a Wexner Fellow who's been named Newsweek’s list of the top 50 rabbis in America multiple times....",
    "Question 13:<br>",
  //Stefanie Zelkind
    "Question 14:<br>Another Wexner connection, Director of The Wexner Graduate Fellowship/Davidson Scholars program....",
    "Question 14:<br>In Elka's eyes, which is her greatest professional accomplishment?",
  //Andy Halper
    "Question 15:<br>Out to Minneapolis and an old Herzl friend....",
    'Question 15:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/uRvhUvaJicw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    "Question 15:<br>What did the entire camp cheer out and sing whenever Elka made an announcement?<br>1) RebElka<br>2) Schemka<br>3) el-el-el-Elka, el-el-el-Elka...",
    //Halper answer
    'Question 15 answer:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/7ZbfStE8m4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //Rabbi Judy Shanks
    "Question 16:<br>Back out west to the bay area to hear from Elka's sermon ghostwriter.....",
    "Question 16:<br>In 1993, Elka and I co-chaired a national Jewish event in the Bay Area.  What was it?<br>A) Coalition for Jewish Education’s Annual Conference<br>B) UAHC (now URJ) Rabbis for Union Summer Camps<br>C) Women’s Rabbinic Network Biennial Conference<br>D) How to Create a Day Care Center at Your Synagogue?<br>Extra credit:  What was the name of the hotel that housed the event?",
  //Margie
    "Question 17:<br>Out to St. Paul for someone who's known Elka her whole life....",
    "Question 17:<br>What would the very young Elka, then Barbara, do when she needed comfort?",
  //Steve and Ruth
    "Question 18:<br>Staying in St. Paul and heading to Mendota Heights....",
    "Question 18:<br>How old was Elka when she first met Steven and for a bonus, what was the date?",
  //Bonnie
    "Questions 19 through 21:<br>And finally, back to 2221 Youngman to hear from the President and CEO of Bubbes for Biden...",
    "Question 19:<br>As a child, what what was the name brand of her favorite style shoes?",
    "Question 20:<br>What lunch did she eat for many months?",
    "Question 21:<br>What TV show did Margie and she watch during lunchtime?",
  //Game end
    "GAME OVER<br><br>That's the end of the game!<br>Let's tally up the scores!",
    

]










})