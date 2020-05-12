function findLongestWordLength(str) {
    let arrayFromString = str.split(" ");
    let maxLength = 0;
  
    for (let i = 0; i < arrayFromString.length; i++){
      if(arrayFromString[i].length > maxLength){
        maxLength = arrayFromString[i].length;
      }
    }
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");