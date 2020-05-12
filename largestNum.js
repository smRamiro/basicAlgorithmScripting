function largestOfFour(arr) {
    let largests = [];
    
    for(let i = 0; i < arr.length; i++){
        arr[i].sort(function(a,b){
            if(a>b){
                return -1
            }else{
                return 1;
            }
        });
    
        largests.push(arr[i].reduce(function(sum,item){
            if(sum>item){
                return sum;
            }else{
                return item;
            }
        }));
    }
    return largests;

  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);