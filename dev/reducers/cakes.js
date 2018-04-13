function cakes(state = [], action){
    //console.log(state,action)
    var newState = state

    switch(action.type){       

        case 'POPULATE_CAKES':           
            
            newState = action.cakes

            return newState;

        case 'REMOVE_CAKE':           
            
            let deleted = fetch(
                'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/'+action.id,
                {
                    method: 'DELETE'
                }                
            )
            .then(function(response, newstate){
                if(response.ok){
                    return true;
                }                
            })      

            if(deleted){
                newState = newState.filter(cake => cake.id !== action.id)
            }            
            
            return newState  
            
        case 'ADD_CAKE':
            
            console.log(action)

            let newCake = {
                id: action.id,
                name: action.name,
                comment: action.comment,
                imageUrl: action.imageUrl,
                yumFactor: action.yumFactor
            }

            let created = fetch(
                'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/',
                {
                    method: 'POST',
                    headers: {
                        'user-agent': 'Mozilla/4.0 MDN Example',
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newCake)
                }                
            )
            .then(function(response, newstate){
                console.log(response)
                if(response.ok){                   
                    newState.push(newCake)
                }                            
            })

            return newState

        default:
            return state

    }
}

export default cakes