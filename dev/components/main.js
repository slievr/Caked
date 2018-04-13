import React from 'react'
import { Link } from 'react-router-dom'

import Cake from './cake'

class Main extends React.Component{

    render(){
        return(
            <div>
                <h1>
                    <Link to="/">Caked</Link>
                </h1>

                {this.props.cakes.map((cake,i) => <Cake {...this.props} key={i} i={i} cake={cake}/>)}
            </div>
        )
    }
}

export default Main