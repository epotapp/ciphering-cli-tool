const { Transform } = require('stream');

function caesarFunc (str) {
        
    let array = str.split('');
    let transformedArray = [];
    
    for (i = 0; i < array.length; i++) {
        
        let inpLetterIndex = array[i].charCodeAt();
        
        if ( ( (inpLetterIndex > 64) && (inpLetterIndex < 90 ) ) || ( (inpLetterIndex > 96) && (inpLetterIndex < 122) ) ) {
            transformedArray.push(String.fromCharCode(inpLetterIndex + 1));
            
        } else if (inpLetterIndex == 90) {
            transformedArray.push('A');                
            
        } else if (inpLetterIndex == 122) {
            transformedArray.push('a');                
            
        } else transformedArray.push(array[i]);
    }   
    
    return transformedArray.join('');
    
}


class TransCaesar extends Transform {
    
    constructor () {
        super({transform(chunk, encoding, callback) {

            const chunkStringified = chunk.toString();
    
            const transformedChunk = caesarFunc(chunkStringified)
    
            callback(null, transformedChunk);
    
            } 
        });
    }
}


const caesar = new TransCaesar();

exports.caesar = caesar;

    


/*

const { strictEqual } = require('assert');

 function caesarFunc (str) {
     let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
     let alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

     let array = str.split('');
     let transformedArray = [];

     for (i = 0; i < str.length; i++) {
       
         if ( alphabet.includes(array[i]) ) {
            
             let letterIndex = alphabet.indexOf(array[i]);
                 if( letterIndex == 25 ) {
                     transformedArray.push('a');
                 } else transformedArray.push( alphabet[letterIndex + 1] );
        
         } else if ( alphabetUpper.includes(array[i]) ) {
              let letterIndex = alphabetUpper.indexOf(array[i]);
                 if( letterIndex == 25 ) {
                     transformedArray.push('A');
                 } else transformedArray.push( alphabet[letterIndex + 1] );
        
             } else transformedArray.push(array[i]);
     }   

     return transformedArray.join('');

 } */