import React from 'react'

class Car extends Component {
    state = {
        vel : 0
        lugares : 5
    }

    acelerear() {
        this.setState( state => {
            return{
                velocidade: state.vel + 10
            }
        })
    }

    constructor(props)= {

    return( 
        <div>
             o nome do carro é {props.name}, e ele está a 
        </div>
    )
    }
}

export default Car