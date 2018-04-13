export function updateCake(id, name, comment, imageUrl, yumFactor){
    return {
        type: 'UPDATE_CAKE',
        id, 
        name, 
        comment, 
        imageUrl, 
        yumFactor
    }
}