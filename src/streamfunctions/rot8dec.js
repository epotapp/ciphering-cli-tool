function rot8DecFunc(str) {
    let array = str.split("");
    let transformedArray = [];
  
    for (i = 0; i < array.length; i++) {
      let inpLetterIndex = array[i].charCodeAt();
  
      if (
        (inpLetterIndex > 72 && inpLetterIndex < 91) ||
        (inpLetterIndex > 104 && inpLetterIndex < 123)
      ) {
        transformedArray.push(String.fromCharCode(inpLetterIndex - 8));
      } else if (inpLetterIndex > 64 && inpLetterIndex < 73) {
        transformedArray.push(String.fromCharCode(inpLetterIndex + 18));
      } else if (inpLetterIndex > 96 && inpLetterIndex < 122) {
        transformedArray.push(String.fromCharCode(inpLetterIndex + 18));
      } else transformedArray.push(array[i]);
    }
  
    return transformedArray.join("");
}

module.exports = { rot8DecFunc };