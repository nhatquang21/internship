// const set1 = new Set([1, 2, 3, 4, 5]);
// const arr1 = Array.from(set1);

// const arr2 = [...set1].filter((x) => x % 2 != 0);
// console.log(arr2)

// const arr3 = new Set(arr2)
// console.log(arr3);

// const post1 = ["tag1", "tag2", "tag4"];
// const post2 = ["tag3", "tag4"];


// let arrTag = [];
// arrTag = Array.from(new Set([...arrTag, ...post1]));
// console.log(arrTag)
// arrTag = Array.from(new Set([...arrTag, ...post2]))
// console.log(arrTag)

// const post3 = ["tag4", NaN]
// arrTag = Array.from(new Set([...arrTag, ...post3]))
// console.log(arrTag)

// const newSet = new Set(arrTag);
// console.log(newSet)
// newSet.clear();
// console.log(newSet)
// newSet.add("tagUnique")
// console.log(newSet)
// const luke = {
//     firstName: 'Luke',
//     lastName: 'Skywalker',
//     occupation: 'Jedi Knight',
//   }

//   const map = new Map(Object.entries(luke))
//   console.log(Object.entries(luke))

// //   for (const [key,value] of Object.entries(luke)){
// //     console.log(`${value}`)
// //   }
//   console.log(map)

//   const obj = Object.fromEntries(map)
//   console.log(obj)


// const map = new Map()
//   map.set({}, 'One')
// map.set({}, 'Two')
// console.log(map)


// const map1 = new Map()
// // Add the same exact object twice as keys to a Map
// const obj = {}

// map1.set(obj, 'One')
// map1.set(obj, 'Two')
// console.log(map1)


// let arr = [...new Set([1,2,3,4,2,3])] 

// console.log(typeof arr)
// const set = new Set(arr)
// console.log(set.entries());
// console.log(set.keys());
// set.has(1) ? console.log("set has 1") : console.log("unavailable")
// arr.forEach(value => console.log(value))

//MAP

// const obj = [
//     {
//         firstName:"Quang",
//         age: 22
//     },
//     {
//         firstName:"Bao",
//         age: 11
//     }
// ]

// const obj2 = 
//     {
//         firstName:"Quang",
//         age: 22
//     }

// console.log(Object.entries(obj))
// console.log(Object.entries(obj2))

// const map = new Map(Object.entries(obj2))
// console.log(map)

// console.log(Object.fromEntries(map))
// console.log(Array.from(map))



// const map = new Map()

// map.set('1', 'String one')
// map.set(1, 'This will be overwritten')
// map.set(1, 'Number one')
// map.set(true, 'A Boolean')

// console.log(map)



// const data = [
//     { name: 'John', age: 30, group: 'A' },
//     { name: 'Mary', age: 25, group: 'B' },
//     { name: 'Mike', age: 20, group: 'A' },
//     { name: 'Jane', age: 15, group: 'C' },
//     { name: 'Peter', age: 25, group: 'B' }
//   ];

// for loop
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }

//   data.forEach(function(item, index) {
//     console.log(item, index);
//   });

//   for (const key in data) {
//     console.log(data[key].name);
//   }

//   for (const item of data){
//     console.log(item.name)
//   }


// const objAsKey = { foo: 'bar' }

// // Use this object as the key of another object
// const obj = {
//   [objAsKey]: 'What will happen?',
// }
// console.log(obj)

//BubbleSort

// const BubbleSort = (arr) => {

//     for (let i = 0 ; i < arr.length ; i++){
//         let isSwapped = false
//         for(let j = 0; j < arr.length ; j++){
//             let temp = arr[j]
//             if(arr[j] > arr[j+1]){
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 isSwapped = true
//             }
//         }


//         if(!isSwapped){
//             break;
//           }

//     }
// console.log(arr)
// }

// const SelectionSort = (arr) => {
//     const length = arr.length
//     for( let i = 0; i < length - 1; i++){
//         let min_index = i
//         for ( let j =  i + 1; j < length; j++){
//             if(arr[j] < arr[min_index]){
//                 min_index = j
//             }
//         }

//         let temp = arr[i]
//         arr[i] = arr[min_index]
//         arr[min_index] = temp
//     }
//     console.log(arr)
// }




// const InsertionSort = (arr) => {
//     const size = arr.length
//     console.log(arr)
//     for(let i = 1 ; i < size  ; i++){
//         let key = arr[i]
//         console.log(i)
//         let j = i - 1

//         while ( j >= 0 && arr[j] > key){
//             arr[j+1] = arr[j]
//             --j
//         }
//         arr[j+1] = key
//     }
//     console.log(arr)
// }


// function partition(array, low, high) {
//     console.log(arr)
//     var pivot = array[high];

//     var i = low - 1;

//     for (var j = low; j < high; j++) {

//       if (array[j] <= pivot) {
//         console.log("arr[j]  " + arr[j])
//         console.log("pivot:" + pivot)
//         i++;
//         console.log("i: " + i)
//         console.log("a[i]:" +arr[i])
//         console.log("====")
//         var temp  = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//     temp = array[i + 1];
//     array[i + 1] = array[high];
//     array[high] = temp;
//     return i + 1;
//   }

//   function quickSort(array, low, high) {
//     if (low < high) {
//       var pi = partition(array, low, high);

//       quickSort(array, low, pi - 1);

//       quickSort(array, pi + 1, high);
//     }
//     console.log(array)
//   }

// arr = [... new Set([3,8,1,9,4,2,1,2,2,5,9])]
// //BubbleSort(arr)
// //InsertionSort(arr)
// quickSort(arr, 0, arr.length - 1)



// const BinarySearch = (arr,start,end,x) => {
//     if (start > end ){
//         return false
//     }
//     let mid = Math.floor((start+end)/2);
//     if(mid == x){
//         return true
//     }
//     if(arr[mid] > x){
//         BinarySearch(arr,start,mid - 1, x)
//     } else {
//         BinarySearch(arr,mid+1,end,x)
//     }
// }

// console.log(BinarySearch(arr,0,arr.length - 1 , 34))


const createNode = (value) => {
    return {
        value: value,
        next: null,
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(value) {

        var node = createNode(value);
        var current;
        if (this.head == null){
            this.head = node;
            
    }
        else {

            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
           
        }
        this.size++;
        this.print()
    }
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return console.log("out of index to insert")
        } else {
            var node = createNode(value)
            var current = this.head, prev
            if (index == 0) {
                node.next = current
                this.head = node
            } else {
                current = this.head
                var loop = 0

                while (loop < index) {
                    loop++
                    prev = current
                    current = current.next
                }
                node.next = current
                prev.next = node

            }
            this.size++
        }
        this.print()
    }
    removeAt(index){
        if (index < 0 || index > this.size) {
            return console.log("out of index")
        } else {
            let current = this.head , prev
            if(index == 0){
                this.head = this.head.next
            } else {
                
            let it = 0
            
            while ( it < index){
                it++
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
        this.size--
        this.print()
        return current.value
    }
}
    
    removeElement(value){
      
        let current = this.head
        let prev = null

        while(current != null){

            if(current.value === value){
                if(prev == null){
                    this.head = current.next
                  
                } else {
                   
                    prev.next = current.next;
                    
                }
                this.size--
                return current.value
            } 
                prev = current
                current = current.next
            
        }
        
    }
 
    print() {
        let curr = this.head;
        let arr = ""
        while (curr) {
            arr += curr.value + " ";
            curr = curr.next;
        }
        console.log(arr);
    }
    
}

let ll = new LinkedList();
ll.add(10)
ll.add(20)
ll.add(30)
ll.insertAt(5, 0)
ll.insertAt(51, 8)
ll.removeAt(1)
ll.add(50)
ll.insertAt(18,2)
ll.print()
 ll.removeElement(5)
ll.print()