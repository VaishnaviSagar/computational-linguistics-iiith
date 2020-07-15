var sentenceEnglish1 = [
	'John ate an apple before afternoon',
	'before afternoon John ate an apple',
	'John before afternoon ate an apple'
];
var sentenceEnglish2 = [
	'some students like to study in the night',
	'at night some students like to study'
];
var sentenceEnglish3 = [
	'John and Mary went to church',
	'Mary and John went to church'
];
var sentenceEnglish4 = [
	'John went to church after eating',
	'after eating John went to church',
	'John after eating went to church'
];
var sentenceEnglish5 = [
	'did he go to market',
	'he did go to market'
];
var sentenceEnglish6 = [
	'the woman who called my sister sells cosmetics',
	'the woman who sells cosmetics called my sister',
	'my sister who sells cosmetics called the woman',
	'my sister who called the woman sells cosmetics'
];
var sentenceEnglish7 = [
	'John goes to the library and studies',
	'John studies and goes to the library'
];
var sentenceEnglish8 = [
	'John ate an apple so did she',
	'she ate an apple so did John'
];
var sentenceEnglish9 = [
	'the teacher returned the book after she noticed the error',
	'the teacher noticed the error after she returned the book',
	'after the teacher returned the book she noticed the error',
	'after the teacher noticed the error she returned the book',
	'she returned the book after the teacher noticed the error',
	'she noticed the error after the teacher returned the book',
	'after she returned the book the teacher noticed the error',
	'after she noticed the error the teacher returned the book'
];
var sentenceEnglish10 = [
	'I told her that I bought a book yesterday',
	'I told her yesterday that I bought a book',
	'yesterday I told her that I bought a book',
	'I bought a book that I told her yesterday',
	'I bought a book yesterday that I told her',
	'yesterday I bought a book that I told her'
];
var collectionOfEnglishSentence = [
	'I told her that I bought a book yesterday',
	'John ate an apple so did she',
	'the woman who called my sister sells cosmetics',
	'John went to church after eating',
	'some students like to study in the night',
	'John ate an apple before afternoon',
	'John and Mary went to church',
	'did he go to market',
	'John goes to the library and studies',
	'the teacher returned the book after she noticed the error'
];	
	
// Hindi sentences
var sentenceHindi1 = [
	' राम और श्याम बाजार गयें ',
	' राम और श्याम गयें बाजार ',
	' बाजार गयें राम और श्याम ',
	' गयें बाजार राम और श्याम '
];
var sentenceHindi2 = [
	' राम सोया और श्याम भी ',
	' श्याम सोया और राम भी ',
	' सोया श्याम और राम भी ',
	' सोया राम और श्याम भी '
];
var sentenceHindi3 = [ 
	' मैंने उसे बताया कि राम सो रहा है ',
	' मैंने उसे बताया कि सो रहा है राम ',
	' उसे मैंने बताया कि राम सो रहा है ',
	' उसे मैंने बताया कि सो रहा है राम ', 
	' मैंने बताया उसे कि राम सो रहा है ',
	' मैंने बताया उसे कि सो रहा है राम ',
	' उसे बताया मैंने कि राम सो रहा है ',
	' उसे बताया मैंने कि सो रहा है राम ',
	' बताया मैंने उसे कि राम सो रहा है ',
	' बताया मैंने उसे कि सो रहा है राम ',
	' बताया उसे मैंने कि राम सो रहा है ',
	' बताया उसे मैंने कि सो रहा है राम '
];
var sentenceHindi4 = [
	' राम खाकर सोया ',
	' खाकर राम सोया ',
	' राम सोया खाकर ',
	' खाकर सोया राम ',
	' सोया राम खाकर ',
	' सोया खाकर राम '
];
var sentenceHindi5 = [
	' बिल्लियों को मारकर कुत्ता सो गया ',
	' मारकर बिल्लियों को कुत्ता सो गया ', 
	' बिल्लियों को मारकर सो गया कुत्ता ', 
	' मारकर बिल्लियों को सो गया कुत्ता ',
	' कुत्ता सो गया बिल्लियों को मारकर ',	
	' कुत्ता सो गया मारकर बिल्लियों को ',	
	' सो गया कुत्ता बिल्लियों को मारकर ',
	' सो गया कुत्ता मारकर बिल्लियों को '
];
var sentenceHindi6 = [
	' एक लाल किताब वहाँ है ',
	' एक लाल किताब है वहाँ ',
	' वहाँ है एक लाल किताब ',
	' है वहाँ एक लाल किताब '
];
var sentenceHindi7 = [
	' एक बड़ी सी किताब वहाँ है ',	
	' एक बड़ी सी किताब है वहाँ ',
	' बड़ी सी एक किताब वहाँ है ',
	' बड़ी सी एक किताब है वहाँ ',
	' वहाँ है एक बड़ी सी किताब ',
	' वहाँ है बड़ी सी एक किताब ',
	' है वहाँ एक बड़ी सी किताब ',
	' है वहाँ बड़ी सी एक किताब '
];
var collectionOfHindiSentence = [
	' एक बड़ी सी किताब वहाँ है ',
	' बिल्लियों को मारकर कुत्ता सो गया ',
	' मैंने उसे बताया कि राम सो रहा है ',
	' राम और श्याम बाजार गयें ',
	' राम सोया और श्याम भी ',
	' राम खाकर सोया ',
	' एक लाल किताब वहाँ है '
];
	
// Dropdown Listing
function message(){
	document.getElementById("description2").innerHTML = "";
	count = 0;
	if("".selected)
	{
		alert("Select Language");
	}
	else if(English.selected)
	{
		document.getElementById("description").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("description1").innerHTML = "(select the buttons in proper order)"
		var english = collectionOfEnglishSentence [Math.floor(Math.random() * collectionOfEnglishSentence.length)];
		var body = document.getElementsByTagName("p")[3];
		var jumbled = array1[collectionOfEnglishSentence][0];
    var j = shuffle(jumbled);
    button_count=0;
        word_count=0;
    var button ="";
    var l_button = "";
    for(i=0;i<=j.length-1;i++){
      val = j[i];
      button = "  <button id='btn"+i+"' onclick='finals(this.id,this.value)' value='"+val+"'>"+val+"</button>  ";
      l_button +=button;
            button_count++
           
		separate = english.split(' ');
		for(initial = 0; initial < separate.length; initial++)
		{
			next = Math.floor(Math.random() * separate.length);
			english = separate [initial];
			separate[initial] = separate[next];
			separate[next] = english;
		}
		for(initial = 0; initial < separate.length; initial++)
		{
			var button = document.createElement("button");
			button.innerHTML = separate[initial];
			body.appendChild(button);
		}
			
	}
	else if(Hindi.selected)
	{
		document.getElementById("description2").innerHTML = ""; 
		count = 0;
		document.getElementById("description").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("description1").innerHTML = "(select the buttons in proper order)"
		var hindi = collectionOfHindiSentenceSentence [Math.floor(Math.random() * collectionOfHindiSentence.length)];
		var body = document.getElementsByTagName("p")[3];
        var jumbled = array2[collectionOfHindiSentence][0];
    var j = shuffle(jumbled);
     button_count=0;
    word_count=0;
    var button ="";
    var l_button = "";
    for(i=0;i<=j.length-1;i++){
      val = j[i];
      button= "  <button id='btn"+i+"'onclick='finals(this.id,this.value)' value='"+val+"'>"+val+"</button>  ";
      l_button+=button;
            button_count++;
    }
		separate1 = hindi.split(' ');
		for(initial = 0; initial < separate1.length; initial++)
		{
			next = Math.floor(Math.random() * separate1.length);
			hindi = separate1[initial];
			separate1[initial] = separate1[next];
			separate1[next] = hindi;
		}
		for(initial = 0; initial < separate1.length; initial++)
		{
			var button = document.createElement("button");
			button.innerHTML = separate[initial];
			body.appendChild("button");
		}
	}
	else
	{ 
		document.getElementById("description").innerHTML = "";
				document.getElementById("description1").innerHTML = ""; 
		document.getElementById("description2").innerHTML = "";
	}
	var word_count;
var button_count,r;
var answers="";
function compares(){

        var str= finalsentence.trim();
    for(let i=0;i<comarray.length;i++){
        var str1 = comarray[i];
         console.log(i, str1.localeCompare(str), str, str.length, str1, str1.length)
        var n = str1.localeCompare(str);
        if (n == 0) {
            document.getElementById('description8').innerHTML = "RIGHT ANSWER";

            return;
        }
    }
      document.getElementById('description9').innerHTML = "WRONG ANSWER";

    document.getElementById("description10").innerHTML = "<center><button id='showansbtn' onclick='gets()'>Get Correct Sentence</button></center>"
}

	//functionality for correct answer
	function gets(){

    answers="";
    document.getElementById("output").innerHTML = ""
    var totalanswers = 0;

if (document.getElementById("language").value=='English'){
    totalanswers = array1[r].length-1;
    document.getElementById('description10').innerHTML = "<center><button id='showansbtn' onclick='hides()'>hide correct answer</button></center>"
    for(i=0;i<=totalanswers;i++){
      answers += "<center>"+array1[r][i]+"<br></center>"
    }
    document.getElementById("output").innerHTML = answers;
  }
    else if(document.getElementById("language").value=='Hindi'){
    totalanswers = array2[r].length-1;
    document.getElementById('description10').innerHTML = "<center><button id='showansbtn' onclick='hides()'>hide correct answer</button></center>"
    for(i=0;i<=totalanswers;i++){
      answers += "<center>"+array2[r][i]+"<br></center>"
    }
    document.getElementById("output").innerHTML = answers;
  }
  //hiding ans
  function hides(){
  document.getElementById('description10').innerHTML = "<center><button id='showansbtn' onclick='toggle()'>Get Correct Sentence</button></center>"
  document.getElementById("output").innerHTML = "";
}


//toggle
function toggle(){
    while(document.getElementById("output").innerHTML ==""){
  
    document.getElementById('description10').innerHTML = "<center><button id='showansbtn' onclick='hides()'>hide correct answer</button></center>"
  }
}
//shuffle of words
	function shuffle(jumbled){
  var jumble = jumbled.split(" ");
  var i = jumble.length, temp, randomi;
  while(0!==i){
    randomi = Math.floor(Math.random()*i);
    i -= 1;
    temp = jumble[i];
    jumble[i] = jumble[randomi];
    jumble[randomi] = temp;
  }
  return jumble;
}
let finalsentence ="";
function finals(id,value){
  
  document.getElementById("description4").innerHTML = "Formed Sentence (after selecting words):";
  finalsentence += value + " ";
   document.getElementById("description5").innerHTML = finalsentence;
  document.getElementById(id).style.display = "none";

document.getElementById("description6").innerHTML = "<center><button id='reform' onclick='resets( )'>Re-form the sentence </button> </center>"
}
 word_count++;
       if(button_count==word_count){
    document.getElementById("description7").innerHTML = "<center><button id='correctness'  onclick='compares()'>Check the correctness</button></center>"
    }
    }

function resets(){
  
  document.getElementById("description5").innerHTML = "";
    document.getElementById("description6").innerHTML ="";
  document.getElementById("description4").innerHTML = "";
    word_count=0;
    }
}