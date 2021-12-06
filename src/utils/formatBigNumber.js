export default function formatBigNumber(number) {
    if (number > 9999) {
        const siSymbol = ['k', 'M', 'G', 'T', 'P']
        let tmpNumber = number.toString().split(/(?=(?:...)*$)/);
        let newNumber = tmpNumber[0] + (tmpNumber[1] < 500 ? '' : ',' + tmpNumber[1].substring(0, 1)) + siSymbol[tmpNumber.length - 2];
        return newNumber;
    }
    return number;
}