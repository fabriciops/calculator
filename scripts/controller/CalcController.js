class CalcController{

    constructor(){
        
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this.initialize();
        this.initButtonsEvents();


        this._currentDate;
        
    
    }


    initialize(){

        let interval = setInterval(()=>{

            this.setDisplayDateTime();

        },1000);
 
        setTimeout(()=>{

            clearInterval(interval);

        }, 1000);

    }

    addEventListnerAll(element, events, fn){

        events.split(' ').forEach(event => {
        
            element.addEventListener(event, fn, false);
            

        });
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListnerAll(btn, "click drag", e =>{

                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            this.addEventListnerAll(btn, "mouseover mouseup mousedown", e=> {

                btn.style.cursor = "pointer";

            });
            
        });
    }


    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleDateString(this._locale);
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