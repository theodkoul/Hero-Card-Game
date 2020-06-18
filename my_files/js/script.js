var playerAttack=[];
var playerDefence=[];

var playerMove;
var enemyMove;

var playerScore=0;
var enemyScore=0;

var cardHeroes=[];
var enemyHeroes=[1,2,3,4,5,6,7,8,9,10];

for(var i=0; i<=9;i++){
	playerAttack[i]=Math.floor((Math.random() * 50) + 1);
	playerDefence[i]=Math.floor((Math.random() * 50) + 1);
}

var listCount=[];
var alreadyClicked=[false,false,false,false,false,false,false,false,false,false];
var temp=0;


function ImageClicked(idNumber){
	
	if(!(alreadyClicked[idNumber-1])){
		listCount.push(idNumber);
		alreadyClicked[idNumber-1]=true;
		document.getElementById("card"+idNumber).classList.add("clicked");
		
		if (listCount.length==5){		
			PhaseTwo(listCount);
		}
		
	}
	else{
		alreadyClicked[idNumber-1]=false;
		document.getElementById("card"+idNumber).classList.remove("clicked");
		var index = listCount.indexOf(idNumber);
		if(index > -1){
			listCount.splice(index,1);
		}
	}
	
};

function PhaseTwo(listCount){
	
	document.body.className = document.body.className.replace("bd1","bd");

	for(var i=0; i<=4; i++){
		if(listCount[i]==1){
			cardHeroes.push("hiddenCard1");
			var index2 = enemyHeroes.indexOf(1);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==2){
			cardHeroes.push("hiddenCard2");
			var index2 = enemyHeroes.indexOf(2);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==3){
			cardHeroes.push("hiddenCard3");
			var index2 = enemyHeroes.indexOf(3);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==4){
			cardHeroes.push("hiddenCard4");
			var index2 = enemyHeroes.indexOf(4);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==5){
			cardHeroes.push("hiddenCard5");
			var index2 = enemyHeroes.indexOf(5);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==6){
			cardHeroes.push("hiddenCard6");
			var index2 = enemyHeroes.indexOf(6);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==7){
			cardHeroes.push("hiddenCard7");
			var index2 = enemyHeroes.indexOf(7);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==8){
			cardHeroes.push("hiddenCard8");
			var index2 = enemyHeroes.indexOf(8);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==9){
			cardHeroes.push("hiddenCard9");
			var index2 = enemyHeroes.indexOf(9);
			enemyHeroes.splice(index2,1);
		}
		else if(listCount[i]==10){
			cardHeroes.push("hiddenCard10");
			var index2 = enemyHeroes.indexOf(10);
			enemyHeroes.splice(index2,1);
		}
	}
	
	
	document.getElementById("chooseCardsTitle").style.color="black";
	document.getElementById("chooseCardsTitle").innerHTML="Heroes of Earth.</br> Defeat Enemies to save your city!!";
	
	for(var i=1;i<=10;i++){
		document.getElementById("card"+i).style.display="none";
	}
	
	for(var j=0;j<=4;j++){
		document.getElementById(cardHeroes[j]).style.display="inline";
		document.getElementById("stats"+listCount[j]).style.display="inline-block";
		document.getElementById("stats"+listCount[j]).innerHTML="Attack: "+playerAttack[listCount[j]-1]+"</br>Defence: "+playerDefence[listCount[j]-1];
	}
	for(var j =0; j<=4;j++){
		document.getElementById("stats"+enemyHeroes[j]).innerHTML="Attack: "+playerAttack[enemyHeroes[j]-1]+"</br>Defence: "+playerDefence[enemyHeroes[j]-1];
	}
	document.getElementById("startFighting").style.display="inline";
	
}


function StartFight(){
	
	for(var j=0;j<=4;j++){
		document.getElementById(cardHeroes[j]).style.display="none";
		document.getElementById("stats"+listCount[j]).style.display="none";
		document.getElementById("hiddenCard"+enemyHeroes[j]).style.display="none";
		document.getElementById("stats"+enemyHeroes[j]).style.display="none";
	}
	document.getElementById("startFighting").style.display="none";

	if(enemyScore+playerScore==5){
		document.getElementById("useAttack").style.display="none";
		document.getElementById("useDefence").style.display="none";
		document.getElementById("vs").style.display="none";
		
		if(playerScore>=3){
			document.getElementById("chooseCardsTitle").innerHTML="Congratulations! You Won :D";
		}else{
			document.getElementById("chooseCardsTitle").innerHTML="Game Over...";
		}
		
		for(var i=0; i<=4; i++){
			document.getElementById("hiddenCard"+enemyHeroes[i]).style.display="none";	
			document.getElementById(cardHeroes[i]).style.display="none";	
		}
	}
	else{
		
		document.getElementById(cardHeroes[temp]).style.display="inline";
		document.getElementById(cardHeroes[temp]).classList.remove("hidden");
		document.getElementById(cardHeroes[temp]).classList.add("challenger1");
		document.getElementById("stats"+listCount[temp]).style.display="inline-block";
		document.getElementById("stats"+listCount[temp]).classList.remove("hiddenStats");
		document.getElementById("stats"+listCount[temp]).classList.add("challengerStats1");
		
		document.getElementById("vs").style.display="inline";
		
		document.getElementById("hiddenCard"+enemyHeroes[temp]).style.display="inline";	
		document.getElementById("hiddenCard"+enemyHeroes[temp]).classList.remove("hidden");
		document.getElementById("hiddenCard"+enemyHeroes[temp]).classList.add("challenger2");
		document.getElementById("stats"+enemyHeroes[temp]).style.display="inline-block";
		document.getElementById("stats"+enemyHeroes[temp]).classList.remove("hiddenStats");
		document.getElementById("stats"+enemyHeroes[temp]).classList.add("challengerStats2");
		
		document.getElementById("useAttack").style.display="inline";
		document.getElementById("useDefence").style.display="inline";
		
		enemyMove=Math.floor((Math.random() * 2) + 1);
		temp++;
	}
}

function UseAttack(){
	
	if(enemyMove==1){
		if( playerAttack[listCount[temp-1]-1]>= playerAttack[enemyHeroes[temp-1]-1]){
			playerScore++;
		}else if(playerAttack[listCount[temp-1]-1]<playerAttack[enemyHeroes[temp-1]-1]){
			enemyScore++;
		}
	}
	else if(enemyMove==2){
		if( playerAttack[listCount[temp-1]-1]>= playerDefence[enemyHeroes[temp-1]-1]){
			playerScore++;
		}else if(playerAttack[listCount[temp-1]-1]<playerDefence[enemyHeroes[temp-1]-1]){
			enemyScore++;
		}
	}
	
	document.getElementById("chooseCardsTitle").innerHTML="Score: </br>You - PC</br>"+playerScore+" - "+enemyScore;

	document.getElementById("useAttack").style.display="none";
	document.getElementById("useDefence").style.display="none";
	document.getElementById("startFighting").style.display="inline";
	
}
function UseDefence(){
	
	if(enemyMove==1){
		if( playerDefence[listCount[temp-1]-1]>= playerAttack[enemyHeroes[temp-1]-1]){
			playerScore++;
		}else if(playerDefence[listCount[temp-1]-1]<playerAttack[enemyHeroes[temp-1]-1]){
			enemyScore++;
		}
	}
	else if(enemyMove==2){
		if( playerDefence[listCount[temp-1]-1]>= playerDefence[enemyHeroes[temp-1]-1]){
			playerScore++;
		}else if(playerDefence[listCount[temp-1]-1]<playerDefence[enemyHeroes[temp-1]-1]){
			enemyScore++;
		}
	}
	
	document.getElementById("chooseCardsTitle").innerHTML="Score: </br>You - PC</br>"+playerScore+" - "+enemyScore;
	
	document.getElementById("useAttack").style.display="none";
	document.getElementById("useDefence").style.display="none";
	document.getElementById("startFighting").style.display="inline";
}








