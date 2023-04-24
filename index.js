




//detecting keyboard press

document.addEventListener("keypress", function(event) {     // # 162 add eventlistener to button
    makeSound(event.key);       // event is triggered by a key press object.event 

    buttonAnimation(event.key); // 172 1:41 in
});

function makeSound(key) {       // the input parameters are key presses

switch(key) {
    case "w":
    var key02 = new Audio("key02.mp3")
    key02.play();
    break;

   case "e":
    var key03 = new Audio("key03.mp3")
    key03.play();
    break;

    case "r":
    var key04 = new Audio("key04.mp3")
    key04.play();
    break;

    case "t":
    var key05= new Audio("key05.mp3")
    key05.play();
    break;
   
    case "y":
    var key06 = new Audio("key06.mp3")
    key06.play();
    break;
    
    case "u":
    var key07 = new Audio("key07.mp3")
    key07.play();
    break;

    case "i":
    var key08 = new Audio("key08.mp3")
    key08.play();
    break;

    case "o":
    var key09 = new Audio("key09.mp3")
    key09.play();
    break;

    case "p":
    var key10 = new Audio("key10.mp3")
    key10.play();
    break;
              
              
    case "l":
    var key12 = new Audio("key11.mp3")
     key12.play();
     break;

    case "k":
    var key13 = new Audio("key12.mp3")
    key13.play();
    break;
     



          


	 
    case "j":
    var key13 = new Audio("key13.mp3")
    key13.play();
    break;

    case "h":
    var key14 = new Audio("key14.mp3")
    key14.play();
    break;

    case "g":
    var key15 = new Audio("key15.mp3")
    key15.play();
    break;
	
	case "f":
	var key16 = new Audio("key16.mp3")
	key16.play();
	break;
	
	
	
	case "d":
	var key17 = new Audio("key17.mp3")
	key17.play();
	break;
	
	case "s":
	var key18 = new Audio("key18.mp3")
	key18.play();
	break;
	
	case "a":
	var key19 = new Audio("key19.mp3")
	key19.play();
	break;

	case "z":
	var key20 = new Audio("key20.mp3")
	key20.play();
	break;
	
	case "x":
	var key21 = new Audio("key21.mp3")
	key21.play();
	break;
    
	case "c":
	var key22= new Audio("key22.mp3")
	key22.play();
	break;
	
	case "v":
	var key23 = new Audio("key23.mp3")
	key23.play();
	break;
	
	case "b":
	var key24 = new Audio("key24.mp3")
	key24.play();
	break;
 

   }  
}

function buttonAnimation(currentKey) {                           // currentKey is the one pressed
    var activeButton = document.querySelector("."+ currentKey)  // such as .w, .e, .r, .t concatenates

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
    

}

    
    
/*  var numberOfDrumButtons = document.querySelectorAll(".drum").length; // total length with drum class in the HTML

for(var i = 0; i< numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

       var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);
    
        });


}

for( i=0; i < document.querySelectorAll("button").length; i++) {


    documentquerySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "red";
    });
}





document.querySelector("button").addEventListener("click", handleClick)  # 162

function handleClick() {

    alert("I got clicked");
}


*/ 

