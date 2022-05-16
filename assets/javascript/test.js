 var i=0;
 var percentage = 0;

 function myFunction() {
   
   var q1=document.test.quiz1.value;

   var q2=document.test.quiz2.value;

   var q3=document.test.quiz3.value;

   var q4=document.test.quiz4.value;

   var q5=document.test.quiz5.value;

   var q6=document.test.quiz6.value;

   var q7=document.test.quiz7.value;

   var q8=document.test.quiz8.value;

   var q9=document.test.quiz9.value;

   var q10=document.test.quiz10.value;

   if (q1=="<script>") {i++}

   if (q2=="<head><body>") {i++}

   if (q3=='<script src="xxx.js">') {i++}

   if (q4=="True") {i++}

   if (q5=='alert("Hello World");') {i++}

   if (q6=="cascading style sheet") {i++}

    if (q7=="function functionName() {/body}") {i++}

   if (q8=="background-color") {i++}
   
   if (q9=="Tells the web browser what language to expect") {i++}

   if (q10=='"br"') {i++}

    alert(i);
    alert("results" + getpercentage(i))

}

function getpercentage(i) {
  percentage = (i / 10) * 100;
  if (percentage >= 80) {
    alert("" + percentage + "%" + "perfomed well!" )  
  }
  else if (percentage >= 50 && percentage < 80) {
    alert("" + percentage + "%" + "fairly passed!" )  
  }
  else {
    alert("" + percentage + "%" + "poorly performed!" )  
  }
}