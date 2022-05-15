
function submit_answer(event){
    event.preventDefault();
}

const testData = [
    {
       	Question: "Ins",
        "1a": "&lt;script&gt;", 
        "2b":"&lt;javascript&gt;", 
        "3c":"&lt;scripting&gt;",
        "4d": "&lt;js&gt;", 
        "answer":"1a",
    },
    {
        Question : "Where is the correct place to insert a JavaScript?",
		"1a": "The &lt;head&gt; section", 
		"2b":"The &lt;body&gt; section", 
		"3c":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
		"answer":"3c",
    },
    {
        Question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
		"1a": "&ltscript href=&quot;xxx.js&quot;>", 
		"2b":"&lt;script name=&quot;xxx.js&quot;&gt;", 
		"3c":"&lt;script src=&quot;xxx.js&quot;&gt;",
		solution:"3c",
    },
    {
        Question: "The external JavaScript file must contain the &lt;script&gt; tag.",
		"1a": "True", 
		"2b":"False",
		solution:"2b",
    },
    {
        Question: "How do you write &quot;Hello World&quot; in an alert box?",
		"1a": "alertBox(&quot;Hello World&quot;);",
		"2b": "msg(&quot;Hello World&quot;);",
		"3c": "alert(&quot;Hello World&quot;);",
		"4d": "msgBox(&quot;Hello World&quot;);",
        solution: "3c",
    },
    {
       Question: "What does CSS stand for?",
       "1a": "Color style sheet",
       "2b":"computer style sheet",
       "3c": "cascading style sheet",
       "4d": 'Ceative style sheet',
       solution: "3c",
    },
    {
        Question: "Which of the correct syntax to add the external stylesheet in CSS ?",
        "1a": "<style src = quiz.css>",
        "2b": '&quot;style src = "quiz.css"&quot;',
        "3c": "&quot;stylesheet> quiz.css </stylesheet&quot;",
        "4d": '&quot;link rel="stylesheet" type="quiz/css" href="quiz.css&quot;" ',
        solution: "4d",
    },
    {
        Question: "Which of the below CSS properties is used to change the background color of CSS ?",
        "1a": "bg color",
        "2b":  "color-background",
        "3c": "background-color",
        "4d":  "color",
        solution: "3c",
    },
    {
        Question: "What is the purpose of <!DOCTYPE html>?",
        "1a": "provides the web browser with security information",
        "2b": "instructs the browser where to look for your CSS files",
        "3c": "lows programmers to link to files in-line",
        "4d": "Tells the web browser what language to expect",
        solution: "4d",
    },
    {
        Question: "Which tag is used for a line break?",
        "1a": "<br>",
        "2b": "<break>",
        "3c": "<line>",
        "4d": "<page></page>",
        solution: "1a",
    }


]

function myFunction() {
  var question1 = document.getElementsByClassName("Question1");



  
  document.getElementById("ppp").innerHTML = answers;






}