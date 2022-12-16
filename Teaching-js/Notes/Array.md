# Arrays 

```js
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let nums1 = [51, 52 ]
```

## Methods on arrays

1. Length

    ```js
    nums.length
    ```
     ```output: 10 ```
    
2. Splice (It cuts the array)

    ```
    nums.splice( Starting index ) // to end
    nums.splice( Starting index, Number of elements to keep )
    ```
    e.g.

    ```js
    nums.splice(3)
    nums.splice(3, 4)
    ```
    ```output1: [3, 4, 5, 6, 7, 8, 9] ```

    ```output2: [3, 4, 5] ```

3. Slice (It cuts the array)

    ```
    nums.slice(Starting index (included) , Ending index (excluded))
    ```
    e.g.
    ```js
    nums.slice(3)
    nums.slice(3, 8)
    ```

    ```output1: [3, 4, 5, 6, 7, 8, 9] ```

    ```output2: [3, 4, 5, 6, 7] ```

4. To string (converts array to string)

    ```
    nums.toString() 
    ```

     ```output: 0,1,2,3,4,5,6,7,8,9```

5. Pop (Removes and return last element from array )

    ```js
    nums.pop()
    ```

    ```
    output: 
        before: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        after:  0, 1, 2, 3, 4, 5, 6, 7, 8
    ```

6. Push (add and return length of array )

    ```js
    nums.push("10")
    ```

    ```
    output: 
        before: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        after:  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ```

7. Delete (Deletes the element of given index but not changes the length of array )

    ```js
    delete nums[3]
    ```

    ``` output: [0, 1, 2, empty, 4, 5, 6, 7, 8, 9]  ```

8. Includes (Used to check whether element is present or not)

    ```js
    nums.Includes(5)
    nums.Includes(45)
    ```

    ``` output1: true  ```
    
    ``` output2: false  ```

9. IndexOf (Used to get element's index)

    ```js
    nums.IndexOf(5)
    nums.IndexOf(45)
    ```

    ``` output1: 5  // this is index  ```

    ``` output2: -1  // does not exist  ```

9. Concat (Merge two arrays)

    ```js
    nums.concat(nums1)
    ```

    ``` output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 51, 52] ```
