import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Charger le panier depuis localStorage
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('evenflow_cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error('Error parsing saved cart:', error);
            localStorage.removeItem('evenflow_cart');
        }
    }, []);

    // Sauvegarder le panier
    useEffect(() => {
        localStorage.setItem('evenflow_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (event, ticketType, quantity = 1) => {
        setCart(prev => {
            const existingItemIndex = prev.findIndex(item =>
                item.event.id === event.id && item.ticketType.id === ticketType.id
            );

            if (existingItemIndex > -1) {
                const newCart = [...prev];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            }

            return [...prev, { event, ticketType, quantity }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (eventId, ticketTypeId) => {
        setCart(prev => prev.filter(item =>
            !(item.event.id === eventId && item.ticketType.id === ticketTypeId)
        ));
    };

    const updateQuantity = (eventId, ticketTypeId, delta) => {
        setCart(prev => prev.map(item => {
            if (item.event.id === eventId && item.ticketType.id === ticketTypeId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((acc, item) => acc + (item.ticketType.price * item.quantity), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen,
            setIsCartOpen,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
