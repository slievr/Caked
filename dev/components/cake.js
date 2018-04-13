import React from 'react'
import { Link } from 'react-router-dom'

class Cake extends React.Component{   
    render(){
        let { cake, i } = this.props 
        return(
            <div className="cake">
                <Link to={`/cake/${cake.id}`}>
                    <h3>{cake.name} </h3>
                </Link>
                <img src={cake.imageUrl} alt={cake.name}/>               
            </div>
        )
    }
}

export default Cake