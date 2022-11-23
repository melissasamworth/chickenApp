import { lazy, Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom"
import GlobalNavBar from './Components/GlobalNavBar';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './Components/Theme';
import { AuthProvider } from './AuthContext'
const Home = lazy(() => import('./Pages/Home'));
const Signup = lazy(() => import('./Pages/Signup'));
const ConfirmEmail = lazy(() => import('./Pages/Profile/ConfirmEmail'));
//const PrivateRoute = lazy(() => import('./Components/PrivateRoute'));
const Welcome = lazy(() => import('./Pages/Profile/Welcome'));
const ProfileProgressBar = lazy(() => import('./Components/ProfileProgressBar'));
const Basics = lazy(() => import('./Pages/Profile/Basics'));
const Locations = lazy(() => import('./Pages/Profile/Locations'));
const Contact = lazy(() => import('./Pages/Profile/Contact'));
const ProductDetails = lazy(() => import('./Pages/Profile/ProductDetails'));
const ProductionDetails = lazy(() => import('./Pages/Profile/ProductionDetails'));
const Imagery = lazy(() => import('./Pages/Profile/Imagery'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));
const Admin = lazy(() => import('./Pages/Admin'));

function App() {
  return (
    <ThemeProvider theme={createTheme(Theme)}>
        <Suspense fallback={<div>loading...</div>}>
        <CssBaseline/>
        <AuthProvider> 
          <GlobalNavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/buyer-signup" element={<Signup props={{ hereTo: 'BuyerSignup' }}/>} />
            <Route path="/seller-signup" element={<Signup props={{ hereTo: 'SellerSignup' }}/>} />
            <Route path="/login" element={<Signup props={{ hereTo: 'Login' }}/> }/>
            <Route path="/profile/confirm-email" element={<ConfirmEmail/>} />
            <Route path='/profile/welcome' element={<Welcome />} />
            <Route element={<ProfileProgressBar />}>
              <Route path="/profile/basics" element={<Basics />} />
              <Route path="/profile/locations" element={<Locations />} />
              <Route path="/profile/contact" element={<Contact />} />
              <Route path="/profile/product-details" element={<ProductDetails />} />
              <Route path="/profile/production-details" element={<ProductionDetails />} />
              <Route path="/profile/imagery" element={<Imagery />} />
            </Route>
            <Route path="/buyers" element={<BuyerSignup/>} />
            <Route path="profile/:id" element={<Profile />}/>
            <Route path="*" element={<>404</>} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App