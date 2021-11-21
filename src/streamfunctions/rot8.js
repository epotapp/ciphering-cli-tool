function rot8Func(str) {
    let array = str.split("");
    let transformedArray = [];
  
    for (i = 0; i < array.length; i++) {
      let inpLetterIndex = array[i].charCodeAt();
  
      if (
        (inpLetterIndex > 64 && inpLetterIndex < 83) ||
        (inpLetterIndex > 96 && inpLetterIndex < 115)
      ) {
        transformedArray.push(String.fromCharCode(inpLetterIndex + 8));
      } else if (inpLetterIndex > 82 && inpLetterIndex < 91) {
        transformedArray.push(String.fromCharCode(inpLetterIndex - 18));
      } else if (inpLetterIndex > 114 && inpLetterIndex < 123) {
        transformedArray.push(String.fromCharCode(inpLetterIndex - 18));
      } else transformedArray.push(array[i]);
    }
  
    return transformedArray.join("");
}

module.exports = {rot8Func};