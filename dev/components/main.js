import React from 'react'
import { Link } from 'react-router-dom'

import Cake from './cake'
import CakeForm from './cakeForm'

class Main extends React.Component{

    render(){
        return(
            <div>
                <h1>
                    <Link to="/">Caked</Link>
                </h1>
                
                <Link to='/add-cake'>Add Cake</Link>

                {this.props.cakes ? (
                    this.props.cakes.map((cake,i) => <Cake {...this.props} key={i} i={i} cake={cake}/>)
                ) : (
                    <h3> where have all the cakes gone </h3>
                )}
            </div>
        )
    }
}

export default Main