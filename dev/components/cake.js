import React from 'react'
import { Link } from 'react-router-dom'

class Cake extends React.Component{   
    render(){
        let { cake, i } = this.props 
        return(
            <div className="cake">
                <h3>{cake.name}</h3>
                    <img src={cake.imageUrl} alt={cake.name}/>
                <button onClick={this.props.removeCake.bind(null, cake.id)} className="cake__button cake__button--delete">delete</button>
            </div>
        )
    }
}

export default Cake