import { motion } from 'framer-motion'
import { ArrowRight, Music, Crown, Unlock, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const fadeUp = {
hidden: { opacity: 0, y: 40 },
visible: (i = 1) => ({
opacity: 1,
y: 0,
transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
}),
}

function SoundWave() {
return (
<div className="flex items-center gap-[3px] h-8">
{[...Array(12)].map((_, i) => (
<div
key={i}
className="wave-bar w-[3px] bg-[#C9A84C] rounded-full"
style={{
height: `${Math.random() * 20 + 8}px`,
animationDelay: `${i * 0.1}s`,
opacity: 0.4 + Math.random() * 0.6,
}}
/>
))}
</div>
)
}

function StatCard({ number, label }) {
return (
<div className="glass p-6 text-center">
<p className="text-3xl font-bold text-[#C9A84C] mb-1">{number}</p>
<p className="text-[#F5F0E8]/50 text-xs tracking-widest uppercase">{label}</p>
</div>
)
}

function Home() {
const [copied, setCopied] = useState(false)
const ca = 'CONTRACT ADDRESS TBA'

const handleCopy = () => {
navigator.clipboard.writeText(ca)
setCopied(true)
setTimeout(() => setCopied(false), 2000)
}

return (
<div className="bg-[#1e1f24] min-h-screen grain">

{/* Hero Section */}
<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">

{/* Background Glow */}
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />

<motion.div
variants={fadeUp}
initial="hidden"
animate="visible"
custom={1}
className="flex items-center gap-3 mb-8"
>
<SoundWave />
<span className="text-[#C9A84C] tracking-[0.4em] text-xs uppercase">
The Independent Music Movement
</span>
<SoundWave />
</motion.div>

<motion.h1
variants={fadeUp}
initial="hidden"
animate="visible"
custom={2}
className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6"
>
Your Music.
<br />
<span className="text-[#C9A84C] gold-glow">Your Rules.</span>
</motion.h1>

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={3}
className="text-[#F5F0E8]/60 max-w-xl mx-auto text-lg leading-relaxed mb-10"
>
Musicians create everything. Labels take most of it.
We built $NOLABEL to change that — direct support,
zero middlemen, full transparency.
</motion.p>

<motion.div
variants={fadeUp}
initial="hidden"
animate="visible"
custom={4}
className="flex flex-col sm:flex-row gap-4 mb-16"
>
<a
href="https://pump.fun"
target="_blank"
rel="noreferrer"
className="group flex items-center gap-2 bg-[#C9A84C] text-[#1e1f24] font-bold px-8 py-4 tracking-widest text-sm hover:bg-[#E8C97A] transition-all duration-200"
>
BUY $NOLABEL
<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</a>
<a
href="/about"
className="flex items-center gap-2 border border-[#C9A84C]/40 text-[#F5F0E8]/80 font-bold px-8 py-4 tracking-widest text-sm hover:border-[#C9A84C] hover:text-[#F5F0E8] transition-all duration-200"
>
OUR MISSION
</a>
</motion.div>

{/* Contract Address */}
<motion.div
variants={fadeUp}
initial="hidden"
animate="visible"
custom={5}
className="glass px-6 py-3 flex items-center gap-4 cursor-pointer group"
onClick={handleCopy}
>
<span className="text-[#F5F0E8]/40 text-xs tracking-widest">CA:</span>
<span className="text-[#F5F0E8]/70 text-xs font-mono">{ca}</span>
{copied
? <Check size={14} className="text-[#C9A84C]" />
: <Copy size={14} className="text-[#F5F0E8]/40 group-hover:text-[#C9A84C] transition-colors" />
}
</motion.div>

</section>

{/* Stats Section */}
<section className="max-w-4xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-4">
{[
{ number: '$0', label: 'Middlemen' },
{ number: '100%', label: 'Transparent' },
{ number: 'SOL', label: 'Chain' },
{ number: '∞', label: 'Potential' },
].map((stat, i) => (
<motion.div
key={stat.label}
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
custom={i + 1}
>
<StatCard {...stat} />
</motion.div>
))}
</section>

{/* Divider */}
<div className="max-w-6xl mx-auto px-6">
<div className="border-t border-[#C9A84C]/10" />
</div>

{/* Three Pillars */}
<section className="max-w-6xl mx-auto px-6 py-24">
<motion.div
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
className="text-center mb-16"
>
<p className="text-[#C9A84C] tracking-[0.4em] text-xs uppercase mb-4">
Why $NOLABEL
</p>
<h2 className="text-4xl font-display font-bold">
Built different. Built for artists.
</h2>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{[
{
icon: <Music size={28} />,
title: 'NO MIDDLEMEN',
desc: 'Direct support from fans to artists. No labels taking cuts. No lawyers splitting royalties. Just music and community.',
},
{
icon: <Crown size={28} />,
title: 'ARTISTS FIRST',
desc: 'Every decision puts independent musicians first. This community exists to serve creators, not exploit them.',
},
{
icon: <Unlock size={28} />,
title: 'FULL TRANSPARENCY',
desc: 'Every fee, every wallet, every decision is public. No hidden agendas. No rug pulls. Just an open book.',
},
].map((pillar, i) => (
<motion.div
key={pillar.title}
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
custom={i + 1}
className="glass p-8 group hover:border-[#C9A84C]/40 transition-all duration-300"
>
<div className="text-[#C9A84C] mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
{pillar.icon}
</div>
<h3 className="text-sm font-bold tracking-[0.2em] mb-4">
{pillar.title}
</h3>
<p className="text-[#F5F0E8]/50 leading-relaxed text-sm">
{pillar.desc}
</p>
</motion.div>
))}
</div>
</section>

{/* Divider */}
<div className="max-w-6xl mx-auto px-6">
<div className="border-t border-[#C9A84C]/10" />
</div>

{/* Mission Statement */}
<section className="max-w-3xl mx-auto px-6 py-24 text-center">
<motion.div
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
>
<p className="text-[#C9A84C] tracking-[0.4em] text-xs uppercase mb-6">
Our Mission
</p>
<h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
Done asking permission.
</h2>
<p className="text-[#F5F0E8]/50 leading-relaxed text-lg mb-10">
$NOLABEL is more than a token. It is a movement built on Solana
to give independent musicians what the industry never did —
full ownership, direct revenue, and a community that actually shows up.
</p>
<a
href="/about"
className="inline-flex items-center gap-2 text-[#C9A84C] text-sm tracking-widest hover:gap-4 transition-all duration-200"
>
READ OUR STORY <ArrowRight size={14} />
</a>
</motion.div>
</section>

{/* Footer CTA */}
<section className="border-t border-[#C9A84C]/10">
<div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<p className="text-2xl font-display font-bold mb-2">
Ready to go independent?
</p>
<p className="text-[#F5F0E8]/40 text-sm">
Join the movement. Support artists directly.
</p>
</div>
<a
href="https://pump.fun"
target="_blank"
rel="noreferrer"
className="group flex items-center gap-2 bg-[#C9A84C] text-[#1e1f24] font-bold px-8 py-4 tracking-widest text-sm hover:bg-[#E8C97A] transition-all whitespace-nowrap"
>
BUY $NOLABEL
<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</a>
</div>
</section>

</div>
)
}

export default Home
n