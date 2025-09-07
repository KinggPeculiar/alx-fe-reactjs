import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Button from './components/Button'
import UserContext from './components/javascript/UserContext'
import ProfilePage from './components/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={reactLogo} alt="React logo" className='logo' />

      {/* custom component */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Button />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );

  const userData = {
    name: 'Priest',
    email: 'Kingzy404@gmail.com',
    role: 'Jnr Web Dev',
  };

  return (
    // Wrap ProfilePage in the provider and pass userData
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App
