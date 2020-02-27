
let mins = '00'; // минуты 
let secs = '00'; // секунды 
let msecs ='00'; // миллисекунды 

let tbl = document.getElementById("tablo"); // табло
let vkl = document.getElementById("vkl");	// vkl - кнопка вкл/пауза
let rond = document.getElementById('rd'); // div для записи кругов
let i = 0;
let end = 50000000;

let on = () => {	// кнопка Включить
	if(vkl.innerHTML == `Включить`){
		vkl.innerHTML = (`Пауза`);
		setTimeout(function ff() {
		    if(i%150 == 0){console.log(i)};
		    vewTime(i,tbl);  		// отображение в tbl - табло
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
};

let pauseVcl = () => {
	if(vkl.innerHTML == `Пауза`){
		vkl.innerHTML = (`Включить`);}
}

let cleer = () => {		// кнопка Очистить
	clearTimeout(timerId);
	i=0;
	vewTime(i,tbl);
	pauseVcl();
};

// кнопка Круг
let round = () => {
	let newRnd = document.createElement('div');
	// newRnd.innerHTML = "круг";
	rond.appendChild(newRnd);
	vewTime(i,newRnd);  		// отображение i(счётчик) в круг
};


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



