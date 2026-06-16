import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
return (
<div className="bg-[#1e1f24] min-h-screen">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</div>
)
}

export default App