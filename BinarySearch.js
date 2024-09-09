// arr = [2,4,6,78,8]
// target = 6

function BinarySearch(arr,target) {
    let left = 0;
        let right = arr.length - 1;
            while(left <= right){
            let mid = Math.floor((left+right)/2)

                if(arr[mid] == target){
                    return mid;
                    }
                    else if(arr[mid] < target){
                        left =  mid + 1;
                    }
                else{
                    right = mid - 1;
                }

        }
    return -1;
};

console.log(BinarySearch(arr , target));
