// кнопка Включить
// var on = () => {
// 	let goTimer = (end=500,beg=0) => {
//     setTimeout(ff(end,beg), 10);
//   };
//   goTimer(7,2);
// };

// var ff = (end,beg) => {
//       	console.log(`beg = ${beg}`);
// 	      if (beg < end) {setTimeout(ff, 10);};
//       	beg++;
//       	console.log(`beg = ${beg}`);
//       };

let count=0;
let mins = '00';
let secs = '00';
let msecs = '00';

var tbl = document.getElementById("tablo");
var vkl = document.getElementById("vkl");
var i=0; var end=2000;

var on = () => {
	vkl.innerHTML = (`Пауза`);
	count++;
	if(count%2==0) {
		clearTimeout(timerId); count=0;};
	  setTimeout(function ff() {
    console.log(i);
    vewtime(i);
    // tbl.innerHTML = (`i = ${i}`);
    if (i < end) {      
      timerId = setTimeout(ff, 10);
      };
    	i++;       
  }, 10);
};

// кнопка Очистить
let cleer = () => {
 clearTimeout(timerId);
};

// кнопка Круг
let round = () => {

};

let vewtime = (taim) => {
	var tm = taim
	if(tm%6000==0){
		mins=`${(tm-tm%6000)/6000}`;
		if(Number(mins)<10){mins=0+mins;};
		tm=tm%6000;
	};
	if(tm%100==0){
		secs=`${(tm-tm%100)/100}`;			// % - остаток от деления
		if(Number(secs)<10){secs=0+secs;};
		tm=tm%100;
	};
	if(tm>100){tm=tm%100};
	
	// msecs = `${tm - (tm%500)*500 - (tm%100)*100}`;
	str = tbl.innerHTML = (`tm ${mins}min${secs}sec${tm}ms`);
};


//вызываем goTimer
