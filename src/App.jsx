import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ShopContextProvider } from './Context/ShopContextProvider';
import { Navbar } from './componets/navbar/Navbar';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';
import { ProductDetails } from './Pages/ProductDetails/ProductDetails';


function App() {

    return (
        <>
            <ShopContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path='/product/:id' element={<ProductDetails />}/>
                    </Routes>
                </BrowserRouter>
            </ShopContextProvider>

        </>
    )
}

export default App
