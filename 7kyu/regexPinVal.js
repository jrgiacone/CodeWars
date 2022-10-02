// This is my first time using regex! here is how it works:
/*
first since we want to match the entire string instead of just one character we do
^ and $ between the regex / /

Then we would do [0-9]{4} to check for digits from 0-9 of 4 length,
There is a short hand which is \d{4}

We can then check for both by using or the OR gate | (opperator!)

The result turns from:

/^[0-9]{4}|[0-9]{6}$/ 

to

/^\d{4}|\d{6}$/


*/
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}