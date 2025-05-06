


export const addEllipsis = (text) => {
    if(text.length > 50) {
        return text.substring(0, 50) + '...';
    }
    return text;
}




// Get current user's email from localStorage
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
};

// Get cart items of current user from localStorage
export const getUserCart = () => {
    const user = getCurrentUser();
    if (!user) return [];
    const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
    return carts[user.email] || [];
};

// Add item to current user's cart in localStorage
export const addToUserCart = (item) => {
    const user = getCurrentUser();
    if (!user) return;

    const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
    const userCart = carts[user.email] || [];

    userCart.push(item);
    carts[user.email] = userCart;

    localStorage.setItem("userCarts", JSON.stringify(carts));
};

// Remove item from current user's cart in localStorage
export const removeFromUserCart = (id) => {
    const user = getCurrentUser();
    if (!user) return;

    const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
    let userCart = carts[user.email] || [];

    userCart = userCart.filter(item => item.id !== id);
    carts[user.email] = userCart;

    localStorage.setItem("userCarts", JSON.stringify(carts));
};
