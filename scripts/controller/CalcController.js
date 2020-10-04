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

    getLastOperation(){

        return this._operation[this._operation.length-1];

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

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    isOperator(value){

        //indexOf -> busca o valor dentro do array, se não estiver ele trás -1
        return(['+', '-', '*', '%', '/'].indexOf(value) > -1);

    }

    addOperation(value){

        //Antes de eu fazer algo com value, o último elemento no array é um número?

        if(isNaN(this.getLastOperation())){
            
            if(this.isOperator(value)){
                this.setLastOperation(value);
            
            } else if(isNaN(value)){

                console.log(value)

            } else{

                this._operation.push(value);

            }
        }
        else{

            newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(value);
        }


        console.log(this._operation)
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
                this.addOperation("+")
                break;
            
            case 'subtracao':
                this.addOperation("-")
                break;
            
            case 'divisao':
                this.addOperation("/")
                break;
            
            case 'multiplicacao':
                this.addOperation("*")
                break;
        
            case 'porcento':
                this.addOperation("%")
                break;
        
            case 'igual':
                // this.addOperation("/")
                break;

            case 'ponto':
                this.addOperation(".")
                break;
            
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
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