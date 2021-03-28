const INITIAL_STATE={
    count:0,
    product:[]
}

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'ADD_TO_CART':
            return {...state,count:action.payload.count,product:action.payload.product}
        default:
            return state;
    }

}

export default CartReducer;