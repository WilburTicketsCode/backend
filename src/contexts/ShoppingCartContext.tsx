'use client'
import { createContext, ReactNode, useContext, useState } from "react"
import TotalCart from "../components/ShoppingCart/TotalCart"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import Tickets from "@/components/EventDetails/Tickets"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantidade:number
}

type ShoppingCartContextType = {
  addToCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  tempCartItems: CartItem[]
  cartItems: CartItem[]
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [tempCartItems, setTempCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity = tempCartItems.reduce(
    (quantidade, item) => item.quantidade + quantidade,
    0
  )

  function getItemQuantity(id: number) {
    return tempCartItems.find(item => item.id === id)?.quantidade || 0
  }

  function increaseCartQuantity(id: number) {
    setTempCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantidade: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantidade: item.quantidade + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id: number) {
    setTempCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantidade === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantidade: item.quantidade - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setTempCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  function addToCart(){
    setCartItems(tempCartItems);
    console.log("Adicionou")
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        tempCartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}