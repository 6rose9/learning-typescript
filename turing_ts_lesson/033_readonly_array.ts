let arr: ReadonlyArray<number> = [1, 34, 5, 65, 2];
console.log('Original Array: ', arr[0]);

// arr[0] = 10; //Index signature in type 'readonly number[]' only permits reading.
arr = [3, 5, 5];

let data: any = arr;
data[0] = 10;
console.log('Modified Array via any:', arr[0]); // 10

arr = data;
// arr[0] = 20; 
console.log('Reassigned to ReadonlyArray', arr[0]); // 10

let another: readonly number[] = [4, 54, 64, 35];
// another[1] = 4;