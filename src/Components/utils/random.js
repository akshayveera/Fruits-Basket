

const getRandomFruit = ()=>{
    
    const fruits = ["🍇","🍈","🍊","🍑","🍉","🍐","🍏","🍎","🥭","🍍"];

    const randIndex = Math.floor(Math.random() * 10);

    return fruits[randIndex];
}

export {getRandomFruit};