🛒 Task: Mini E-commerce Product Manager

You're going to build a small e-commerce product dashboard. Think of something similar to an admin page for an online store.

You already know enough React to build this without an API.

The app

Your page should look roughly like:

        MY STORE
─────────────────────────────────────

[ Search products... ]

[ All ] [ In Stock ] [ Out of Stock ]

─────────────────────────────────────

 Nike Air Max
 $120
 In Stock
 [View Details]

 MacBook Pro
 $1500
 Out of Stock
 [View Details]

 Samsung Phone
 $800
 In Stock
 [View Details]
1. Product data

Create your own products:

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
  }
]

Add at least 8 products yourself.

2. Component structure

Don't put everything in App.jsx.

Try:

App
 ├── Header
 ├── SearchBar
 ├── FilterButtons
 ├── ProductList
 │    └── ProductCard
 └── ProductDetails

You already understand why we break things into components.

3. useState

You need state for:

Search
const [search, setSearch] = useState("")
Filter
const [filter, setFilter] = useState("all")
Selected product

When the user clicks:

[View Details]

show that product's information.

You've already implemented this concept with your student project.

4. Search + filter

The user should be able to search:

Search: "nike"

and get:

Nike Air Max

They should also be able to click:

[In Stock]

and only see products where:

inStock === true

And:

[Out of Stock]

should only show:

inStock === false
5. ⭐ Use useEffect

Here's where the new concept comes in.

Whenever:

search

or:

filter

changes, your app should calculate the products that should be displayed.

So you'll have something conceptually like:

useEffect(() => {
   // determine products to display
}, [search, filter])

You decide how to implement it.

6. 🛍️ Add to Cart

Now make it more realistic.

Each product should have:

[Add to Cart]

When clicked:

Cart: 0

becomes:

Cart: 1

Click another product:

Cart: 2

You should use useState for the cart.

7. Cart component

Create:

Cart

that displays:

🛒 Cart

Nike Air Max      $120
Samsung Galaxy    $800

Items: 2
Total: $920

[Clear Cart]

The cart should update automatically whenever products are added.

8. ⭐⭐ Use useEffect for cart persistence

This is the important real-world part.

If I add:

Nike Air Max
Samsung Galaxy

then refresh the browser, the cart should still contain those products.

Use:

useEffect(() => {
   // save cart to localStorage
}, [cart])

And when the application first loads, retrieve the saved cart.

So you'll practice two very common useEffect situations:

useEffect #1

search/filter changes
        ↓
update displayed products

and:

useEffect #2

cart changes
        ↓
save cart to localStorage
9. Product stock

Here's a bonus challenge.

If a product is out of stock:

MacBook Pro
Out of Stock

the button should say:

[Unavailable]

and clicking it shouldn't add anything to the cart.

For an available product:

[Add to Cart]
10. Product details

When I click:

[View Details]

show something like:

────────────────────────

Nike Air Max

Category: Shoes

Price: $120

Status: In Stock

[Add to Cart]
[Close]

────────────────────────

Use the same parent → child callback technique you just practiced.

🎯 The important part

Don't think of this as:

"I need to make a bunch of components."

Think about the data flow:

                    App
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       Search      Filter      Cart
          │          │
          └────┬─────┘
               ↓
        displayedProducts
               ↓
         ProductList
               ↓
          ProductCard
               │
               ↓
        "View Details"
               │
               ↓
        selectedProduct

And separately:

ProductCard
     │
     │ Add to Cart
     ↓
    App
     │
     ↓
    cart
     │
     ↓
   Cart
     │
     ↓
 localStorage

This is much closer to the kind of state/data-flow problem you'll encounter in a real React application.

Your restrictions

Use only:

Components
Props
children
useState
useEffect
Event handlers
Conditional rendering
.map()
.filter()
.find()
.reduce() if you need it
localStorage

No Context API, Redux, Zustand, API, or useMemo yet.