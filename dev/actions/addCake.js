export function addCake(id, name, comment, imageUrl, yumFactor){
    return {
        type: 'ADD_CAKE',
        id, 
        name, 
        comment, 
        imageUrl, 
        yumFactor
    }
}

/*
   << cake payload >>

{
id: <number>,
name: <string>,
comment: <string>,
imageUrl: <string>,
yumFactor: <number>
}
*/