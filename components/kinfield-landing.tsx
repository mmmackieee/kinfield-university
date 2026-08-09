'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, Pause, Play, X } from 'lucide-react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b77502aff520aae9331b0da5385f2de90aee8f58-QiAyG9jVIqvT2kIuOfeym38IOj4vBr.png',
  meeting: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c1d66a7a5f7a88c46daa2fc60ed76e4247293f3a-TMzJuo7Pg2KQT4qYp2I2SQL2fTBvTZ.png',
  academics: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/351d85b552017ed63c7b1ac2b27665fc0c79165b-1FCJCkR6OxvKf4EUZIokZBYsel1Mx3.png',
  faculty: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a9b5dbcd535213ca5e9b5a51026f2a8d430aa817-owwc7whHrqyUbPqSo6Jrf5bMZrGxFL.png',
  students: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce6e5ce93ef90687e7e43bb89751c511ec2c077b-mVjw31f3sVlXTm8Ow436cW1WH9H2vn.png',
  classroom: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Body.png-nPB1A4pMj8VAhf9NjwjxsbZQNA9hiE.jpeg',
}

const programs = [
  ['Computer Science', 'Undergraduate', 'Learn programming, data structures, and modern software development through labs and team projects.'],
  ['Data Science', 'Graduate', 'Turn data into decisions using analytics, visualization, and practical machine learning for real business scenarios.'],
  ['Business Administration', 'Graduate', 'Build leadership and strategy skills for modern, fast-evolving business environments and organizational challenges.'],
  ['Finance', 'Undergraduate', 'Understand financial planning, markets, and decision-making through practical case studies and modern tools.'],
]

const principles = [
  ['Student-First Support', 'Advisors and mentors help you stay on track and grow.'],
  ['Academic Excellence', 'Clear standards, strong teaching, and consistent improvement across programs.'],
  ['Practical Learning', 'Projects, labs, and real cases that match today’s industry needs.'],
  ['Inclusive Community', 'A welcoming campus where every voice is respected and valued.'],
  ['Innovation and Curiosity', 'We encourage asking better questions and testing new ideas.'],
  ['Impact-Driven Mindset', 'Learning that leads to positive change in society and the environment.'],
]

const faqs = [
  ['What programs does Kinfield offer?', 'We offer undergraduate and graduate programs across technology, business, finance, and the humanities.'],
  ['How do I apply?', 'Start online by submitting your application, academic records, and a short personal statement.'],
  ['Do you offer scholarships?', 'Yes. Our admissions team can help you explore merit, need-based, and community scholarships.'],
  ['Is the campus international-student friendly?', 'Yes. We provide guidance for admissions, accommodation, and student support services.'],
  ['Can I visit the campus before applying?', 'Absolutely. Join campus tours or book an admissions consultation session.'],
]

function Mark({ light = false }: { light?: boolean }) {
  return <span className={`kinfield-mark ${light ? 'text-white' : 'text-primary'}`} aria-hidden="true"><i /><i /><i /><i /></span>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 text-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight"><Mark light />Kinfield</a>
      <nav className="hidden items-center gap-10 text-sm lg:flex" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#about">About</a><a href="#programs">Programs</a>
      </nav>
      <div className="hidden items-center gap-8 text-sm lg:flex"><a href="#contact">Contact Us</a><a className="border border-white/25 bg-white/10 px-5 py-3" href="#programs">Explore Programs</a></div>
      <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="flex flex-col gap-5 bg-primary px-6 py-6 text-sm lg:hidden"><a href="#home" onClick={() => setOpen(false)}>Home</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#programs" onClick={() => setOpen(false)}>Programs</a><a href="#contact" onClick={() => setOpen(false)}>Contact Us</a></nav>}
  </header>
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-7 flex items-center gap-2 text-[10px] tracking-tight ${light ? 'text-white/70' : 'text-primary/70'}`}><span className="h-1 w-1 bg-current" />{children}</p>
}

function Hero() {
  return <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden bg-primary pb-20 text-white lg:min-h-[860px] lg:pb-24">
    <img className="absolute inset-0 h-full w-full object-cover" src={images.hero} alt="Graduates celebrating outside Kinfield University" />
    <div className="absolute inset-0 bg-black/55" />
    <Header />
    <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-10">
      <h1 className="max-w-4xl text-pretty text-6xl font-light leading-[.95] tracking-[-0.055em] sm:text-7xl lg:text-[clamp(4rem,6vw,6.5rem)]">Build Future at<br />Kinfield University</h1>
      <div className="max-w-sm lg:pb-2"><p className="mb-8 text-base leading-6 text-white/80">A modern campus for curious minds, hands-on learning, supportive mentors, and global-ready programs designed to help you thrive.</p><a href="#programs" className="inline-flex items-center gap-3 bg-white px-5 py-4 text-sm font-medium text-primary">Explore Programs <ArrowRight size={16} /></a></div>
    </div>
  </section>
}

function About() {
  return <section id="about" className="bg-white text-primary"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><SectionLabel>About Kinfield</SectionLabel><div className="grid gap-12 lg:grid-cols-2"><h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight lg:text-5xl">A modern university experience built for real-world impact</h2><div className="max-w-xl text-primary/65"><p className="leading-7">Kinfield is a forward-thinking university focused on practical learning, critical thinking, and meaningful community impact. Our classes blend strong academic foundations with real-world projects, so students graduate with skills, confidence, and a clear direction.</p><p className="mt-7 leading-7">Beyond the classroom, students collaborate with industry partners, engage in interdisciplinary work, and learn from faculty who bring real professional experience into teaching.</p></div></div></div><div className="border-y border-primary/10"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="p-6 lg:p-10"><img src={images.students} alt="Students walking across campus" className="aspect-[4/3] w-full object-cover" /></div><div className="border-t border-primary/10 p-6 lg:border-l lg:border-t-0 lg:p-10"><SectionLabel>What We Stand For</SectionLabel><h2 className="mb-10 max-w-md text-3xl font-light leading-tight">Simple principles that shape every class, lab, and campus experience.</h2><div>{principles.map(([title, text], i) => <div key={title} className="grid grid-cols-[44px_1fr_1fr] gap-3 border-t border-primary/10 py-5 text-sm"><span className="text-primary/50">0{i + 1}</span><strong className="font-normal">{title}</strong><span className="text-primary/60">{text}</span></div>)}</div></div></div></div></section>
}

function Campus() {
  const [playing, setPlaying] = useState(false)
  return <section className="bg-red text-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid items-end gap-8 border-b border-white/25 pb-10 lg:grid-cols-2"><div><SectionLabel light>Inside Campus</SectionLabel><h2 className="text-4xl font-light tracking-tight lg:text-5xl">Step Inside Kinfield</h2></div><p className="max-w-md text-white/70">Take a quick campus tour to see our classrooms, studios, labs, and student life in motion across campus.</p></div><div className="relative mt-12"><img src={images.classroom} alt="Students learning in a Kinfield lecture hall" className="aspect-[16/7] w-full object-cover" /><button onClick={() => setPlaying(!playing)} className="absolute bottom-5 right-5 flex items-center gap-3 bg-white px-5 py-4 text-sm font-medium text-primary">{playing ? <Pause size={15} /> : <Play size={15} />}{playing ? 'Pause Intro' : 'Watch Intro'}</button></div></div></section>
}

function Programs() {
  return <section id="programs" className="bg-cream text-primary"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="text-center"><SectionLabel>Programs</SectionLabel><h2 className="text-4xl font-light tracking-tight lg:text-5xl">Browse Programs</h2></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{programs.map(([name, type, text]) => <article key={name} className="flex min-h-[330px] flex-col justify-between bg-white p-6"><div className="flex items-start justify-between"><span className="text-2xl">▣</span><span className={`px-3 py-2 text-xs text-white ${type === 'Graduate' ? 'bg-red' : 'bg-green'}`}>{type}</span></div><div><h3 className="border-b border-primary/10 pb-4 text-xl">{name}</h3><p className="pt-4 text-sm leading-6 text-primary/65">{text}</p></div></article>)}</div></div></section>
}

function Testimonials() {
  return <section className="border-t border-primary/10 bg-white text-primary"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="border-b border-primary/10 p-6 py-20 lg:border-b-0 lg:border-r lg:p-10 lg:py-28"><SectionLabel>Testimonials</SectionLabel><h2 className="text-4xl font-light lg:text-5xl">From Our Students</h2></div><div className="p-6 py-20 lg:p-10 lg:py-28"><blockquote className="max-w-xl text-2xl font-light leading-snug">“Before joining Kinfield, I wasn&apos;t sure I was developing the right skills for my future career. Through hands-on projects and real-world problem solving, I built confidence in my abilities.”</blockquote><div className="mt-12 flex items-center gap-4"><img src={images.faculty} alt="Melanie Howritz" className="h-16 w-16 object-cover" /><div><p className="font-medium">Melanie Howritz</p><p className="text-sm text-primary/60">Undergraduate Student,<br />Computer Science</p></div></div></div></div></section>
}

function Events() {
  const events = [['AI Discovery Talk: Building Responsible Intelligence', 'Sat, March 8 2025', 'Prof. Caleb Morgan', images.meeting], ['Humanities Forum: Culture, Storytelling in the Digital Age', 'Wed, April 16 2035', 'Dr. Amaya Laurent', images.students], ['Career Lab Workshop: Internship to First Job Roadmap', 'Fri, June 6 2035', 'Michael Abrams', images.meeting]]
  return <section className="border-t border-primary/10 bg-white text-primary"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><SectionLabel>Events</SectionLabel><h2 className="mb-12 text-4xl font-light lg:text-5xl">Upcoming Events</h2><div className="space-y-4">{events.map(([title, date, speaker, image], i) => <article key={title} className="grid overflow-hidden rounded-sm bg-cream md:grid-cols-[.7fr_1.2fr_1fr_1fr]"><div className="p-6 text-sm"><span className="text-lg">0{i + 1}</span><p className="mt-16 leading-6">{date}</p></div><div className="border-t border-primary/10 p-6 md:border-l md:border-t-0"><h3 className="text-xl leading-tight">{title}</h3><p className="mt-12 text-sm text-primary/60">Open for Public</p></div><div className="border-t border-primary/10 p-6 md:border-l md:border-t-0"><p className="text-sm">Speaker</p><p className="mt-16 text-sm text-primary/60">{speaker}</p></div><img src={image} alt="Event at Kinfield University" className="hidden h-full min-h-40 w-full object-cover md:block" /></article>)}</div></div></section>
}

function Contact() {
  return <section id="contact" className="bg-red text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28"><img src={images.academics} alt="Graduates outside the academics building" className="aspect-[4/3] w-full object-cover" /><div className="flex flex-col justify-center"><SectionLabel light>Contact Us</SectionLabel><h2 className="text-4xl font-light tracking-tight lg:text-5xl">Talk with Admissions</h2><p className="mt-6 max-w-lg leading-6 text-white/70">Ask about programs, tuition, scholarships, or campus life, we&apos;ll help you take the next step.</p><a href="mailto:hello@kinfield.edu" className="mt-10 inline-flex w-fit bg-white px-6 py-4 text-sm font-medium text-primary">Contact Our Admin</a></div></div></section>
}

function FAQ() {
  const [active, setActive] = useState(3)
  return <section className="border-t border-primary/10 bg-white text-primary"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="p-6 py-24 lg:p-10 lg:py-32"><SectionLabel>FAQ</SectionLabel><h2 className="text-4xl font-light">Help Center</h2><p className="mt-5 max-w-md text-primary/60">Explore common questions from students and parents, answered by our admissions team.</p><p className="mt-28 text-sm text-primary/60">Or get in touch with our Support Team.<br /><a className="mt-2 inline-block text-primary" href="mailto:hello@kinfield.edu">hello@kinfield.edu</a></p></div><div className="border-t border-primary/10 lg:border-l lg:border-t-0 lg:py-16">{faqs.map(([q, a], i) => <div key={q} className="border-b border-white/20 px-6 py-5 lg:px-10"><button className="flex w-full items-center justify-between text-left" onClick={() => setActive(active === i ? -1 : i)}><span className="flex items-center gap-5 text-sm"><span>{active === i ? '−' : '+'}</span>{q}</span><ChevronDown size={16} className={active === i ? 'rotate-180' : ''} /></button>{active === i && <p className="mt-5 max-w-lg pl-9 text-sm leading-6 text-white/50">{a}</p>}</div>)}</div></div></section>
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  return <><section className="bg-cream text-primary"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10"><div><SectionLabel>Newsletter Sign Up</SectionLabel><h2 className="max-w-lg text-3xl font-medium leading-tight">Get the latest updates on admissions, upcoming events, and new blog posts.</h2></div><form onSubmit={(e) => { e.preventDefault(); setSubscribed(true) }} className="flex max-w-lg flex-col justify-center gap-5"><input required type="email" placeholder="Enter your email" aria-label="Email address" className="border-b border-primary/20 bg-transparent px-0 py-4 outline-none placeholder:text-primary/40" />{subscribed ? <p className="text-sm text-green">You’re on the list. Thanks for subscribing.</p> : <button className="w-fit bg-red px-6 py-4 text-sm text-white">Subscribe</button>}</form></div></section><footer className="bg-navy text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10"><div><div className="flex items-center gap-2 text-xl font-semibold"><Mark light />Kinfield</div><p className="mt-5 text-white/70">— Learn with purpose. Grow with people.</p><div className="mt-16 border-t border-white/15 pt-8 text-sm text-white/70"><p>240 University Avenue, Suite 300, Global<br />Education District Center 10010</p><p className="mt-8">+1 (555) 018-2048<br />hello@kinfield.edu</p></div></div><div><h3 className="mb-6 text-sm">Quick Links</h3><div className="flex flex-col gap-4 text-sm text-white/70"><a href="#home">Home</a><a href="#about">About</a><a href="#programs">Program</a><a href="#contact">Contact</a></div></div><div><h3 className="mb-6 text-sm">Social Media</h3><div className="flex gap-6 text-sm text-white/70"><a href="#footer">Instagram</a><a href="#footer">LinkedIn</a><a href="#footer">YouTube</a></div><div className="mt-20 border-t border-white/15 pt-6 text-sm text-white/50">© Copyright 2026 Kinfield. Powered by Next.js</div></div></div></footer></>
}

export default function KinfieldLanding() {
  return <main><Hero /><About /><Campus /><Programs /><Testimonials /><Events /><Contact /><FAQ /><Footer /></main>
}

