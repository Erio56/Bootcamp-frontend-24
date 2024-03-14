// challenge 1


let arr1 = [12, 6, 10, 2, 45, 100];


const result = arr1.reduce((accumulator, current) => accumulator < current ? accumulator : current)

console.log(result);



// challenge 2

const arr2 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];

function groupConincidences(array){
   const map = new Map();
   
   array.forEach(
      (element)=>{
         if(map.has(element)){
            let accumulator = map.get(element);
            accumulator++;
            map.set(element, accumulator);
         } else {
            map.set(element, 1); 
         }
      }
   )

   let leastFrequent = { key: null, value: Infinity };

   map.forEach((value, key) => {
      if(value < leastFrequent.value){
         leastFrequent.key = key;
         leastFrequent.value = value;
      }
   })

   return leastFrequent.key; // Return the least frequent item
}

console.log(groupConincidences(arr2)); 

