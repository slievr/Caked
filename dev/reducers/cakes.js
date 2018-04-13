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
            
        
        default:
            return state

    }
}

export default cakes