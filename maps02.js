function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    });
}

const nums = [5, 10, 15, 22, 30];

console.log(mapSemThis(nums));
console.log(nums);