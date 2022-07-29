import React from 'react'
import { UserContext, ProductsContext } from '../App'
// This code works but it is not the best way to do it. Just to consume two values there is too much nesting going on.
const Cont3ComponentC = () => {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <div>
                                <h2>useContext() Hook, Create Context, Provide, Consume.</h2>
                                <ProductsContext.Consumer>
                                    {
                                        products => {
                                            return <div>User context value: {user}. Products context value: {products}.</div>
                                        }
                                    }
                                </ProductsContext.Consumer>
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>
            <hr />
        </div>
    )
}

export default Cont3ComponentC