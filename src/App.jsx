import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import SearchProduct from './component/SearchBar'
import ProductList from './component/ProductList'

function App() {
  const [count, setCount] = useState(0)


const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    category: "Shoes",
    inStock: true
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 1500,
    category: "Electronics",
    inStock: false
  },
  {
    id: 3,
    name: "Samsung Galaxy",
    price: 800,
    category: "Electronics",
    inStock: true
  },
  {
    id: 4,
    name: "Adidas Hoodie",
    price: 70,
    category: "Clothing",
    inStock: true
  },
  {
    id: 5,
    name: "Jolley",
    price: 150,
    category: "Shoes",
    inStock: true
  },
  {
    id: 7,
    name: "Dell",
    price: 11500,
    category: "Electronics",
    inStock: true
  },
  {
    id: 8,
    name: "iPhone",
    price: 8000,
    category: "Electronics",
    inStock: true
  },
  {
    id: 9,
    name: "Hoodie",
    price: 170,
    category: "Clothing",
    inStock: true
  },
  {
    id: 10,
    name: "Air Max",
    price: 180,
    category: "Shoes",
    inStock: true
  },
  {
    id: 11,
    name: "MacBook",
    price: 1500,
    category: "Electronics",
    inStock: true
  },
  {
    id: 12,
    name: "Huawi",
    price: 1800,
    category: "Electronics",
    inStock: true
  },
  {
    id: 13,
    name: "Adidas",
    price: 770,
    category: "Clothing",
    inStock: true
  }
]

const [displayedProduct, setDisplayedProduct] = useState(products)

const displayInStockProducts = () =>{
  let inStocked = products.filter(product => product.inStock === true)
  setDisplayedProduct(inStocked)
}

const displayOutOfStockProducts = () =>{
  let outOfStock = products.filter(product => product.inStock === false)
  setDisplayedProduct(outOfStock)
}

const displayAllProducts = () =>{
  setDisplayedProduct(products)
}


const handleSearch = e =>{
  let input = e.target.value.toLowerCase()

  let searchedProduct = displayedProduct.filter(product =>{

    let title = product.name.toLowerCase()
    let title2 = product.category.toLowerCase()

    if(title.includes(input) || title2.includes(input)){
      return product
    }
  })
  setDisplayedProduct(searchedProduct)
}


  return (
    <>
      <Header allProducts={displayAllProducts} inStockProducts={displayInStockProducts} outOfStock={displayOutOfStockProducts}/>
      <SearchProduct functionality={(e)=>{handleSearch(e)}}/> 

      <ProductList product={displayedProduct}/>

    </>
  )
}

export default App
