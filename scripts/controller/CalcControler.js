class CalcController{

    constructor(){
        
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this.initialize();
        
    
    }

    setDisplayDateTime();

    initialize(){

        let interval = setInterval(()=>{

            setDisplayDateTime();

        },1000);

        setTimeout(()=>{

            clearInterval(interval);

        }, 1000);

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTimes = this.currentDate.toLocaleDateString(this._locale);
    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){

        this._displayCalcEl = value;

    }

    get displayTime(){

        return this._timeEl.innerHTML;
    }

    set displayTime(value){

        this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;
    }

    set displayDate(value){

        this._dateEl.innerHTML = value;

    }
    
    get currentDate(){

        return new Date();
    }

    set currentDate(value){

        this._currentDate = value;

    }

}