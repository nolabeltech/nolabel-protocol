import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
const [scrolled, setScrolled] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)
const location = useLocation()

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 20)
window.addEventListener('scroll', handleScroll)
return () => window.removeEventListener('scroll', handleScroll)
}, [])

const links = [
{ to: '/', label: 'HOME' },
{ to: '/about', label: 'ABOUT' },
{ to: '/artists', label: 'ARTISTS' },
{ to: '/transparency', label: 'TRANSPARENCY' },
{ to: '/roadmap', label: 'ROADMAP' },
]

return (
<>
<motion.nav
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
className={`fixed top-0 w-full z-50 transition-all duration-300 ${
scrolled
? 'bg-[#1e1f24]/95 backdrop-blur-md border-b border-[#C9A84C]/20 py-3'
: 'bg-transparent py-5'
}`}
>
<div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

{/* Logo */}
<Link to="/" className="flex items-center gap-3 group">
<div className="flex flex-col">
<span className="text-[#C9A84C] font-bold text-lg tracking-[0.2em] group-hover:text-[#E8C97A] transition-colors">
$NOLABEL
</span>
<span className="text-[#F5F0E8]/30 text-[9px] tracking-[0.4em]">
PROTOCOL
</span>
</div>
</Link>

{/* Desktop Links */}
<div className="hidden md:flex gap-8 text-xs tracking-[0.2em]">
{links.map((link) => (
<Link
key={link.to}
to={link.to}
className={`transition-colors relative group ${
location.pathname === link.to
? 'text-[#C9A84C]'
: 'text-[#F5F0E8]/60 hover:text-[#F5F0E8]'
}`}
>
{link.label}
{location.pathname === link.to && (
<motion.div
layoutId="navbar-indicator"
className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A84C]"
/>
)}
</Link>
))}
</div>

{/* Buy Button */}
<a
href="https://pump.fun"
target="_blank"
rel="noreferrer"
className="hidden md:block bg-[#C9A84C] text-[#1e1f24] text-xs font-bold px-5 py-2 tracking-widest hover:bg-[#E8C97A] transition-all duration-200 animate-pulse-gold"
>
BUY NOW
</a>

{/* Mobile Menu Button */}
<button
className="md:hidden text-[#F5F0E8]"
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? <X size={20} /> : <Menu size={20} />}
</button>

</div>
</motion.nav>

{/* Mobile Menu */}
<AnimatePresence>
{menuOpen && (
<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
className="fixed top-16 left-0 right-0 z-40 bg-[#1e1f24]/98 backdrop-blur-md border-b border-[#C9A84C]/20 md:hidden"
>
<div className="flex flex-col px-6 py-6 gap-6">
{links.map((link) => (
<Link
key={link.to}
to={link.to}
onClick={() => setMenuOpen(false)}
className={`text-sm tracking-widest transition-colors ${
location.pathname === link.to
? 'text-[#C9A84C]'
: 'text-[#F5F0E8]/60'
}`}
>
{link.label}
</Link>
))}
<a
href="https://pump.fun"
target="_blank"
rel="noreferrer"
className="bg-[#C9A84C] text-[#1e1f24] text-xs font-bold px-5 py-3 tracking-widest text-center"
>
BUY $NOLABEL
</a>
</div>
</motion.div>
)}
</AnimatePresence>
</>
)
}

export default Navbar
