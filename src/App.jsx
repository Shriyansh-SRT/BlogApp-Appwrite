import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({ userData })) : dispatch(logout());
      })
      .catch(() => dispatch(logout()))
      .finally(() => setLoading(false));
  }, [dispatch]);



  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="shadow-sm bg-white">
        <Header />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Content will go here */}
        {/* <Outlet /> */}
        
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h1 className="text-3xl font-light text-gray-800 mb-4">
            Welcome to the App
          </h1>
          <p className="text-gray-600">
            Start building your amazing application
          </p>
        </div>
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <Footer />
        </div>
      </footer>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-t-transparent border-solid animate-spin rounded-full border-blue-500 border-8">
          <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default App;