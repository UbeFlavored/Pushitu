$(document).ready(function(){

//-------------------------DATABASE - SQL Lite--------------------//
	var database = openDatabase('Pushitu','1.0','Pushitu', 30);

	var dbhs;
	var dbcombo;



	window.onload = function(){
		getHighScore();
		getCombo();
	}

	//--------------MAIN MENU - CREATE DATABASE-------------//
	function onError(tx, error) {
	  alert(error.message);
	}

	//--------------------DATABASE - SQL Lite-------------------//

	function setScore(score){
		database.transaction(function(tx){
			tx.executeSql('UPDATE record SET highscore = ?', [score]);
		});
	}

	function setCombo(combo){
		database.transaction(function(tx){
			tx.executeSql('UPDATE record SET combo = ?', [combo]);
		});
	}

	function setUnlocked(){
		try{
			database.transaction(function(tx){
				tx.executeSql('UPDATE unlockables SET unlock1 = ?, unlock2 = ?, unlock3 = ?, unlock4 = ?, unlock5 = ?, unlock6 = ?, unlock7 = ?, unlock8 = ?, unlock9 = ?', [game_unlocked[0],game_unlocked[1],game_unlocked[2],game_unlocked[3],game_unlocked[4],game_unlocked[5],game_unlocked[6],game_unlocked[7],game_unlocked[8]]);
			});
		}catch(e){}
		finally{		
			resultInitialize(true);

		}
	}

});