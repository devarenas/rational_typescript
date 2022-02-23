export class Rational {
    numerator: number;
    denominator: number;

    constructor(
        numerator: number,
        denominator: number
    ){
        this.numerator = numerator;
        this.denominator = denominator;
    }


    printRational(){

        console.log (`${this.numerator} / ${this.denominator}`)
    }

    invert(){
        let num = this.numerator;
        this.numerator = this.denominator;
        this.denominator = num;    
    }

    toFloat():number{
        let float = this.numerator / this.denominator;
        
        return float;
    }

    reduce(){
        let r = 1;
        let a = this.numerator;
        let b = this.denominator;
        if(b>a){
            while(r!==0){
                r = b%a
                b = a
                a = r
            }
            this.numerator /=  b;
            this.denominator /= b;
        }          
    }

}