function makeChesse()
{
    return new Promise(function(resolve,reject){
        console.log('start making chese')
        setTimeout(()=>{
            const chesse='chesse';
            console.log(`chesee is ready ${chesse}`)
            resolve(chesse);
        },3000);
    })
}
function makeBase()
{
    return new  Promise(function(resolve,reject){
        console.log(`start making pizza base`);
        setTimeout(()=>{
            const base='chesse';
            console.log(`base is ready ${base}`)
            resolve(base);
        },3000)
    })
}
function addTopping()
{
    return new Promise(function(resolve,reject){
        console.log('add topping');
        setTimeout(()=>{
            const topping='tomato';
            console.log(`topping is added ${topping}`)
            resolve();
        },3000);
    })
}
makeChesse()
.then(makeBase())
.then(addTopping())
.then(()=>{

})