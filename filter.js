function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [2, 25, 50, 60, 77, 65]

console.log(filtraPares(meuArray));

