module.exports = function toReadable (number) {
    let strNumber = "";
    let newNumber = ""+number;
    let strOne = ["zero", "one", "two", "three", "four","five", "six", "seven", "eight", "nine"];
    let strTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let strTwo = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let notNull = (n) => (n === "zero" || n === "") ? "":" "+n;

    let len = (""+number).length;
    if (len == 1) strNumber = strOne[number];
    if (len == 2) {
        strNumber = (number >= 10 && number < 20) ? strTen[newNumber[1]] : strTwo[newNumber[0]] + notNull(strOne[newNumber[1]]);
    }
    if (len == 3) strNumber = strOne[newNumber[0]] + " hundred" + (((newNumber[1]+newNumber[2])*1>=10 && (newNumber[1]+newNumber[2])*1<20) ? notNull(strTen[newNumber[2]]) : notNull(strTwo[newNumber[1]]) + notNull(strOne[newNumber[2]]));
    return strNumber;
}

