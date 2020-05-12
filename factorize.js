function factorialize(num) {
    let counter = 1;
  
    for(let i = 2; i <= num; i++){
      counter *= i;
    }
    
    return counter;
  }
  
  factorialize(5);