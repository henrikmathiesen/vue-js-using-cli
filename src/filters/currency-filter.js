export default function (value, symbol) {
    symbol = symbol || 'kr';
    value = value.toFixed(1);

    return value + ' ' + symbol;
}

// Can also use filter from code, since it's just a function
