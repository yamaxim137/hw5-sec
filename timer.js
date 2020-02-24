function Timer(model) {
// function Timer(model, qurentTime) {
	Devices.call(this, model); // model - что мы сразу с model работали
    // this._qurentTime = qurentTime;
    this._qurentTime = 0;
}

Timer.prototype = Object.create(Devices.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.goTimer = function(beg,end){
    var i = beg;

    setTimeout(function ff() {
        console.log(i);
        if (i < end) {      
            setTimeout(ff, 500);
            };
            i++;
            
    }, 500);

    // return this._qurentTime;
	
};

Timer.prototype.resetTimer = function(){
	this._qurentTime = 0;
};

Timer.prototype.getQurentTime = function(){
		return this._qurentTime;
};

Timer.prototype.delTimer = function(){
	this._qurentTime = 0;
};
