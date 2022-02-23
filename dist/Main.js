"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Rational_1 = require("./Rational");
class Main {
    start() {
        const r1 = new Rational_1.Rational(36, 120);
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
exports.Main = Main;
