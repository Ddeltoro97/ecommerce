export const removeItems = (state, deleted) => {
    const index = state.cart.findIndex(product => product.id === deleted.id);
    if (index !== -1) {
        const newCart = [...state.cart];
        newCart.splice(index, 1);
        return newCart;
    }
    return state.cart;
}