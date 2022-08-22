const characters = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25,
    '~': 26,
    '!': 27,
    '@': 28,
    '#': 29,
    '$': 30,
    '%': 31,
    '^': 32,
    '*': 33,
    '(': 34,
    ')': 35,
    '-': 36,
    '_': 37,
    '=': 38,
    '[': 39,
    ']': 40,
    '{': 41,
    '}': 42,
    '|': 43,
    ';': 44,
    ':': 45,
    ',': 46,
    '.': 47,
    '/': 48,
    '?': 49,
    ' ': 50,
    '0': 51,
    '1': 52,
    '2': 53,
    '3': 54,
    '4': 55,
    '5': 56,
    '6': 57,
    '7': 58,
    '8': 59,
    '9': 60,
}

const GetListSize = () => {
    return Object.keys(characters).length;
}

const RandomKey = () => {
    return Math.floor(Math.random() * (GetListSize() - 1) + 1);
}

const RemoveWhiteSpace = (text) => {
    return text.trim();
}

const ValidateLowercase = (char) => {
    let isCapital = char.match(/[A-Z]/g);
    if(isCapital !== null && isCapital.length > 0)
        return char.toLowerCase();
    return char;
}

const isChar = (char) => {
    return characters[char] !== undefined ? true : false;
}

module.exports = {
    characters,
    RandomKey,
    ValidateLowercase,
    GetListSize,
    isChar, 
    RemoveWhiteSpace
}