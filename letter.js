/**
 * Function returns letter by a given position.
 * @param {string} text Text(not empty). 
 * @param {number} position Symbol position (starting from zero). `Default: 0`.
 * @returns {[boolean, string]} Error status; Results(Error message or symbol).
 */
function letter(text, position = 0){
    //"text" validation
    if(typeof text != 'string'){
        return [true, 'Text must be "string"'];
    }
    if(text.length === 0 ){
        return [true, 'Text cannot be empty'];
    }

    //"position" validation
    if(typeof position != 'number'){
        return [true, 'Position must be "number"'];
    }
    if(!isFinite(position)){
        return [true, 'Position must be "real number"'];
    }
    if(position < 0 ){
        return [true, 'Position cannot be less than -1'];
    }
    if(position >= text.length ){
        return [true, 'Position must be less than index value of last symbol in text'];
    }
    if(!Number.isInteger(position) ){
        return [true, 'Position must be finite integer'];
    }
    return [false, text[position]];
    
}

const result1 = letter();
console.log(result1);

const result2 = letter(245);
console.log(result2);

const result3 = letter('Abasda');
console.log(result3);

const result4 = letter('Bsdfsdf');
console.log(result4);

const result5 = letter('Bsdfsdf', true);
console.log(result5);

const result6 = letter('Bsdfsdf', -1);
console.log(result6);

const result7 = letter('Bsdfsdf', 0.1);
console.log(result7);

const result8 = letter('Bsdf', 4);
console.log(result8);

const result9 = letter('Bsdf', 3);
console.log(result9);

const result10 = letter('Bsdf', Infinity);
console.log(result10);

const result11 = letter('Bsdf', NaN);
console.log(result11);

const result12 = letter('', NaN);
console.log(result12);

const result13 = letter('', 0);
console.log(result13);

const result14 = letter('           ', 5);
console.log(result14);