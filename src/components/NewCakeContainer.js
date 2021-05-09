import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [num, setNum] = useState(1);
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <input type='text' value={num} onChange={e => setNum(e.target.value)}></input>
            <button onClick = {() => props.buyCake(num)}>Buy {num} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProp = dispatch => {
    return {
        buyCake: (num) => dispatch(buyCake(num)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProp) (NewCakeContainer)
