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
let mins = '00'; // минуты 
let secs = '00'; // секунды 
let msecs ='00'; // миллисекунды 

var tbl = document.getElementById("tablo"); // табло
var vkl = document.getElementById("vkl");	// vkl - кнопка вкл/пауза
var rond = document.getElementById('rd'); // div для записи кругов
var i = 0; var end = 500000;

var on = () => {	// кнопка Включить
	if(vkl.innerHTML == `Включить`){
		count=1; vkl.innerHTML = (`Пауза`);
		setTimeout(function ff() {
		    if(i%150 == 0){console.log(i)};
		    vewTime(i,tbl);  		// отображение в tbl - табло
		    // tbl.innerHTML = (`i = ${i}`);
		    if (i < end) {      
		    	timerId = setTimeout(ff, 10);
		    };
    		i++;       
  		}, 10);
  		return;
	};
	if(vkl.innerHTML == `Пауза`){
		count=0;
		vkl.innerHTML = (`Включить`);
		clearTimeout(timerId);
	};
	// count++;
	// if(count%2==0) {
		// clearTimeout(timerId);
		 // count=0;
	// };

	
};

// кнопка Очистить
let cleer = () => {
 clearTimeout(timerId);
};

// кнопка Круг
let round = () => {
	let newRnd = document.createElement('div');
	// newRnd.innerHTML = "круг";
	rond.appendChild(newRnd);
	vewTime(i,newRnd);  		// отображение i(счётчик) в круг
};

// var offBtn = document.createElement("Button");
//         offBtn.type = "button";
// 	offBtn.className = "off";
// 	offBtn.innerHTML = "Стоп";
// 	offBtn.addEventListener('click', () => {   
// 		this._timer.off();
// 		this.stateChange();
// 	});    root.appendChild(onBtn);

let vewTime = (taim, target) => {	// отображение времени taim в target
	var tm = taim;
	if(tm%6000==0){		// проверка кратности минут
		mins=`${(tm-tm%6000)/6000}`;  // вычисляем минуты
		if(Number(mins)<10){mins=0+mins;};
		tm=tm%6000;
	};
	if(tm%100==0){		// проверка кратности секунд
		secs=`${(tm%6000-tm%100)/100}`;			// % - остаток от деления
		if(Number(secs)<10){secs=0+secs;};
		tm=tm%100;
	};
	if(tm>100){tm=tm%100}  // проверка наличия секунд
	
	// формирование отображаемой строки
	// msecs = `${tm - (tm%500)*500 - (tm%100)*100}`;
	// str = target.innerHTML = (`tm ${mins}min${secs}sec${tm}ms`);

	if(tm<10){str = target.innerHTML = (`tm = ${mins} min ${secs} sec 0${tm} milisec`)}else{
	str = target.innerHTML = (`tm = ${mins} min ${secs} sec ${tm} milisec`);}
};



