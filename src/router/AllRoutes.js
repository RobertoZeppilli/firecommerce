// pages
import { HomePage, Login, Register, ProductInfo, Cart, Orders, Admin } from '../pages/pages-provider/pages-provider'

// route paths & route stuff
import PATHS from './paths'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// component to protect routes
import ProtectedRoute from './ProtectedRoute'

// styles
import '../index.css';
import '../styles/layout.css'
import '../styles/auth.css'
import '../styles/products.css'
import 'react-toastify/dist/ReactToastify.css'

const AllRoutes = () => {
    return (
        <Router>
            <Routes>

                {/* protected */}
                <Route exact="true" path={PATHS.HOME} element={<ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>} />
                <Route exact="true" path={PATHS.PRODUCT_INFO} element={<ProtectedRoute>
                    <ProductInfo />
                </ProtectedRoute>} />
                <Route exact="true" path={PATHS.CART} element={<ProtectedRoute>
                    <Cart />
                </ProtectedRoute>} />
                <Route exact="true" path={PATHS.ORDERS} element={<ProtectedRoute>
                    <Orders />
                </ProtectedRoute>} />
                <Route exact="true" path={PATHS.ADMIN} element={<ProtectedRoute>
                    <Admin />
                </ProtectedRoute>} />

                {/* free routes */}
                <Route exact="true" path={PATHS.LOGIN} element={<Login />} />
                <Route exact="true" path={PATHS.REGISTER} element={<Register />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes