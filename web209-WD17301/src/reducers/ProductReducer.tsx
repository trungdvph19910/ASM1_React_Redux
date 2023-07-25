export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "fetch_product":
            state.products = action.payload
            return
        case "add_product":
            state.products.push(action.payload)

            return
        case "delete_product":
            const id = action.payload
            state.products = state.products.map((item: any) => item.id !== id)
            return
        case "update_product":
            const product = action.payload
            state.products = state.products.map((item: any) => item.id === product.id ? product : item)
            return
        default:
            return state
    }
}