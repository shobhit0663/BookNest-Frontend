
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/navigationbar.js';
import Update from './Components/Update.js';
import Addbook from './Components/ADD.js';
import SignUpForm from './Components/signup.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Components/Display.js';
import Contact from './Components/Contact.js';
import AboutUs from './Components/About.js';
import CartPage from './Components/CartPage.js';
import UserSignIn from './Components/UserSignIn.js';
import Bookdetails from './Components/BookDetails.js';


function App() {
  
  return (
   <BrowserRouter>
   
   <Routes>
    <Route path='/update' element={<Update/>}></Route>
    <Route path='/addbook' element={<Addbook/>}></Route>
    <Route path='/' element={<UserSignIn/>}></Route>
    <Route path='/home' element={<Display/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/About' element={<AboutUs/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
    <Route path='/signup' element={<SignUpForm/>}></Route>
    <Route path='/bookdetails' element={<Bookdetails/>}></Route>
    <Route path='/login' element={<UserSignIn/>}></Route>

   </Routes>
  
   </BrowserRouter>

  
  );
  
}

export default App;
