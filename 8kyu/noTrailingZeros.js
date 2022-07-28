function noBoringZeros(number) {
    if (number === 0) return number;
    if (number%10 === 0 ) return noBoringZeros(number/10);
    else return number;
}