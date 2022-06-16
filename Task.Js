const array = [12,4,5,7,9,19] //rename array to meaningfull name 
returnnumber= (array) => {   //rename function to meaningfull name // lengthOfArray 
    console.log(array.length);
}

addNumberAtFirst = (array = [],element) => { //rename function parameter to meaningfull name, Avoid Encoding  
    array.unshift(element);
}

addNumberAtLast = (array = [],element) => {
    array.push(element);
}

deleteOddNumbers = (array = []) => {
    const newArray = []; //Array for what ? name it meaningfull name to understand it 
    for (let i = 0; i< array.length ; i++){  //rename for loop parameter to meaningfull name, Avoid Encoding
        if (array[i] % 2 == 0){ 
            newArray.push(i)  // what (i) mean ??

        };
    
    };
    return newArray; //rename newArray
}
    
    returnnumber(array) //rewrite name of function to be understanbale
    //console.log(array);

    addNumberAtFirst(array,9)
  //  console.log(array);

    addNumberAtLast(array,2)
    //console.log(array);

    
    console.log(deleteOddNumbers());
