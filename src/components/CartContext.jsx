import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item) =>{
        //verifico si el producto existe en la lista
        if (cartList.some((itemCart) => itemCart.id === item.id)){
            //El producto ya existe en la lista teniendo esto en cuenta deberia sumar la cantidad agregada a la actual
            const newCartList = cartList.map((itemCart) =>{
                if(itemCart.id === item.id){
                    itemCart.quantity +=item.quantity
                }
                return itemCart
            })
            setCartList(newCartList)
        }else{
        // En el caso que no exista el producto en la lista lo agrego
            setCartList([
                ...cartList,
                item
            ])
        }
        
    }
    const clear= () => {
        setCartList([])
    }

    const deleteItem= (item) =>{
        const newCartList = cartList.filter((itemCart) =>{
            return itemCart.id !== item.id
        })
        setCartList(newCartList)
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clear,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider