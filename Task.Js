const array = [12,4,5,7,9,19]
returnnumber= (array) => {
    console.log(array.length);
}

addNumberAtFirst = (array = [],element) => {
    array.unshift(element);
}

addNumberAtLast = (array = [],element) => {
    array.push(element);
}

deleteOddNumbers = (array = []) => {
    const newArray = [];
    for (let i = 0; i< array.length ; i++){
        if (array[i] % 2 == 0){ 
            newArray.push(i)

        };
    
    };
    return newArray;
}
    
    returnnumber(array)
    //console.log(array);

    addNumberAtFirst(array,9)
  //  console.log(array);

    addNumberAtLast(array,2)
    //console.log(array);

    
    console.log(deleteOddNumbers());
