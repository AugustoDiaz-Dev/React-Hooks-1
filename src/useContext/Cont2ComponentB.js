import React, { useContext } from 'react'
import { Cont3ComponentC } from '../exports'
import { UserContext, ProductsContext } from '../App'
// This is the new way to CONSUME the CONTEXT, without nesting.
const Cont2ComponentB = () => {

    const user = useContext(UserContext);
    const products = useContext(ProductsContext);

    return (
        <div>
            <h2>useContext() new way to consume, without nesting</h2>
            {/* <Cont3ComponentC /> */}
            {/* Just render the values of the variables without nesting */}
            {user} - {products}
            <hr />
        </div>
    )
}

export default Cont2ComponentB