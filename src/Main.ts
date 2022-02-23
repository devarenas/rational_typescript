import {Rational} from './Rational';

export class Main {

    start(){
        const r1 = new Rational(36,120);
        r1.printRational();
        console.log(r1.toFloat());
        r1.reduce();
        r1.printRational();
        r1.invert();
        r1.printRational();
        r1.reduce();
        r1.printRational();
    }
}