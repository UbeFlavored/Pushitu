function setToday() {
var now   = new Date();
var day   = now.getDate();
var month = now.getMonth();
var year  = now.getYear();

if (year < 2000)    // Y2K Fix, Isaac Powell
year = year + 1900; // http://onyx.idbsu.edu/~ipowell
this.focusDay = day;
document.calControl.month.selectedIndex = month;
document.calControl.year.value = year;
displayCalendar(month, year);
}

function isFourDigitYear(year) {
if (year.length != 4) {
alert ("Sorry, the year must be four-digits in length.");
document.calControl.year.select();
document.calControl.year.focus();
} else { return true; }
}

function selectDate() {
var year  = document.calControl.year.value;
if (isFourDigitYear(year)) {
var day   = 0;
var month = document.calControl.month.selectedIndex;
displayCalendar(month, year);
    }
}

function setPreviousYear() {
var year  = document.calControl.year.value;
if (isFourDigitYear(year)) {
var day   = 0;
var month = document.calControl.month.selectedIndex;
year--;
document.calControl.year.value = year;
displayCalendar(month, year);
   }
}

function setPreviousMonth() {
var year  = document.calControl.year.value;
if (isFourDigitYear(year)) {
var day   = 0;
var month = document.calControl.month.selectedIndex;
if (month == 0) {
month = 11;
if (year > 1000) {
year--;
document.calControl.year.value = year;
}
} else { month--; }
document.calControl.month.selectedIndex = month;
displayCalendar(month, year);
   }
}

function setNextMonth() {
var year  = document.calControl.year.value;
if (isFourDigitYear(year)) {
var day   = 0;
var month = document.calControl.month.selectedIndex;
if (month == 11) {
month = 0;
year++;
document.calControl.year.value = year;
} else { month++; }
document.calControl.month.selectedIndex = month;
displayCalendar(month, year);
   }
}

function setNextYear() {
var year = document.calControl.year.value;
if (isFourDigitYear(year)) {
var day = 0;
var month = document.calControl.month.selectedIndex;
year++;
document.calControl.year.value = year;
displayCalendar(month, year);
   }
}

function displayCalendar(month, year) {     
	var a, b;
	var table = [];  
	for(var i = 0; i < 6; i++){
		table[i] = [];
		for(var j = 0; j < 7; j++)
			table[i][j] = "";
	}
	var tableindex = 0;
	a = 0;
	b = 0;
month = parseInt(month);
year = parseInt(year);
var i = 0;
var days = getDaysInMonth(month+1,year);
var firstOfMonth = new Date (year, month, 1);
var startingPos = firstOfMonth.getDay();
days += startingPos;
for (i = 0; i < startingPos; i++) {
	b++;
	if(b > 6){
		a++;
		b = 0;
	}
}
for (i = startingPos; i < days; i++) {
	table[a][b++] =  i-startingPos+1;
	if(b > 6){
		a++;
		b = 0;
	}
}
	// for(var i = 0; i < 5; i++){
	// 	for(var j = 0; j < 7; j++)
	// 		console.log(i + " " + j + " " + table[i][j] + " ");
	// }
	updateTable(table);
}

function updateTable(table){
	var string = "";
	for(var i = 0; i < 6; i++){
		string += "<tr class='boxes'>";
		if(i != 5 || i==5 && table[i][0] != "")
		for(var j = 0; j < 7; j++)
			string += "<td>" + table[i][j] + "</td>"

		string += "</tr>";
	}


	document.getElementById("dates").innerHTML = string;
}

function getDaysInMonth(month,year)  {
var days;
if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)  days=31;
else if (month==4 || month==6 || month==9 || month==11) days=30;
else if (month==2)  {
if (isLeapYear(year)) { days=29; }
else { days=28; }
}
return (days);
}
function isLeapYear (Year) {
if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
return (true);
} else { return (false); }
}