class CalcController{

    constructor(){
        
        this._operation = [];
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    
    }


    initialize(){

        this.setDisplayDateTime()

        setInterval(()=>{
            this.setDisplayDateTime()    
            

        },1000);
        
        // Para a aplicação
        // setTimeout(()=>{

        //     clearInterval(interval);

        // }, 1000);

    }

    setDisplayDateTime(){
        
        this.displayDate =  this.currentDate.toLocaleDateString(this._locale,{
            day:"2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime =  this.currentDate.toLocaleTimeString(this._locale);
    }

    addEventListnerAll(element, events, fn){

        events.split(' ').forEach(event => {
        
            element.addEventListener(event, fn, false);
            

        });
    }

    clearEntry(){
        this._operation.pop();

    }

    clearAll(){
        this._operation = [];

    }

    setError(){

        this.displayCalc = "Error";
    }

    addOperation(value){

        this._operation.push()
    }

    execBtn(value){

        switch(value){
            case 'ac':
                
                this.clearAll();
                break;

            case 'ec':

                this.clearEntry();
                break;

            case 'soma':
                break;
            
            case 'subtracao':
                break;
            
            case 'divisao':
                 break;
            
            case 'multiplicacao':
                break;
        
            case 'porcento':
                break;
        
            case 'igual':
                break;
            
            default:

                this.setError();
                break;
        

        }
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


    // setDisplayDateTime(){

    //     this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
    //         day: "2-digit",
            
    //         year:"numeric"
    //     });
    //     this.displayTime = this.currentDate.toLocaleDateString(this._locale);
    // }

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

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;
    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;

    }
    
    get currentDate(){

        return new Date();
    }

    set currentDate(value){

        this._currentDate = value;

    }

}