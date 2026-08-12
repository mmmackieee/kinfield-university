'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Menu, Pause, Play, Speaker, X } from 'lucide-react'

import Image from 'next/image'
import hero from '@/public/assets/hero.png'
import students from '@/public/assets/students.png'
import inside_campus from '@/public/assets/inside-campus.jpg'
import testimonial_hero_1 from '@/public/assets/testimonial-hero-1.png'
import hero_speaker_1 from '@/public/assets/hero-speaker-1.png'
import hero_speaker_2 from '@/public/assets/hero-speaker-2.png'
import hero_speaker_3 from '@/public/assets/hero-speaker-3.png'
import event_students_1 from '@/public/assets/event-students-1.png'
import event_students_2 from '@/public/assets/event-students-2.png'
import event_students_3 from '@/public/assets/event-students-3.png'
import graduate from '@/public/assets/graduate.png'

//icons
import computer from '@/public/assets/icons/computer.png'
import bar from '@/public/assets/icons/bar.png'
import building from '@/public/assets/icons/building.png'
import calculator from '@/public/assets/icons/calculator.png'


const images = {
  hero,
  students,
  inside_campus,
  testimonial_hero_1,
  hero_speaker_1,
  hero_speaker_2,
  hero_speaker_3,
  event_students_1,
  event_students_2,
  event_students_3,
  graduate,

  computer,
  bar,
  building,
  calculator
}

const programImages = {
  'Computer Science': images.computer,
  'Data Science': images.bar,
  'Business Administration': images.building,
  Finance: images.calculator,
}

const programs = [
  [
    'Computer Science',
    'Undergraduate',
    'Learn programming, data structures, and modern software development through labs and team projects.',
  ],
  [
    'Data Science',
    'Graduate',
    'Turn data into decisions using analytics, visualization, and practical machine learning for real business scenarios.',
  ],
  [
    'Business Administration',
    'Graduate',
    'Build leadership and strategy skills for modern, fast-evolving business environments and organizational challenges.',
  ],
  [
    'Finance',
    'Undergraduate',
    'Understand financial planning, markets, and decision-making through practical case studies and modern tools.',
  ],
]

const events = [
  {
    title: 'AI Discovery Talk: Building Responsible Intelligence',
    opening: 'Kinfield Student Only',
    details: 'An introduction to responsible AI, covering ethics, real-world use, and future impact.',
    day: 'Sat',
    date: 'March 8 2025',
    time: '10:00–11:30 WIB',
    speaker: 'Prof. Caleb Morgan',
    speaker_avatar: images.hero_speaker_1,
    speaker_honor: 'Head of Computer Science',
    image: images.event_students_1,
  },
  {
    title: 'Humanities Forum: Culture, Storytelling in the Digital Age',
    details: 'A look at how digital platforms are reshaping culture and storytelling today.',
    opening: 'Open for Public',
    day: 'Wed',
    date: 'April 16 2035',
    time: '14:00–15:15 WIB',
    speaker: 'Dr. Amaya Laurent',
    speaker_avatar: images.hero_speaker_2,
    speaker_honor: 'Dean of Humanities',
    image: images.event_students_2,
  },
  {
    title: 'Career Lab Workshop: Internship to First Job Roadmap',
    details: 'Practical guidance on moving from internships to full-time roles.',
    opening: 'Open for Public',
    day: 'Fri',
    date: 'June 6 2035',
    time: '09:30–11:00 WIB',
    speaker: 'Michael Abrams',
    speaker_avatar: images.hero_speaker_3,
    speaker_honor: 'Career Services Lead',
    image: images.event_students_3,
  },
];

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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`font-[Manrope] sticky inset-x-0 top-0 z-20 border-b transition-colors duration-300 ${scrolled || open
        ? 'border-primary/10 bg-red-900/60 backdrop-blur-md text-white'
        : 'border-white/10 bg-transparent text-white'
        }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        <nav className="hidden items-center gap-10 text-sm lg:flex" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
        </nav>

        <a href="#home"
          className="flex items-center gap-1.5 text-[clamp(1rem,1.5vw,1.5rem)] font-semibold tracking-[clamp(0.03em,0.08vw,0.07em)]"
        >
          <Mark light={!scrolled} />
          Kinfield
        </a>

        <div className="hidden items-center gap-8 text-sm lg:flex">
          <a href="#contact">Contact Us</a>

          <a href="#programs"
            className={`px-5 py-3 rounded-sm ${scrolled ? 'bg-primary/10' : 'bg-white/10'}`}
          >
            Explore Programs
          </a>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-5 bg-red-900/60 px-6 py-6 text-sm text-white backdrop-blur-md lg:hidden">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#programs" onClick={() => setOpen(false)}>Programs</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
        </nav>
      )}
    </header>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`font-[Manrope] mb-7 flex items-center gap-2 text-[14px] font-normal leading-[19.6px] tracking-[0px] ${light ? 'text-white/70' : 'text-primary/90'
        }`}
    >
      <span className="font-[Manrope] h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="font-[Manrope] relative flex min-h-[calc(911px_+_96px)] items-end overflow-hidden bg-primary pb-10 text-white lg:min-h-[calc(965px_+_96px)] lg:pb-12 -mt-24"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
      }}
    >
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={images.hero}
        alt="Graduates celebrating outside Kinfield University"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* <Header /> */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-[clamp(1.5rem,4vw,4rem)] px-4 lg:grid-cols-[2fr_.8fr] lg:items-end lg:px-10">
        <h1 className="font-[Manrope] font-semibold max-w-none text-pretty text-[clamp(3rem,6vw,6.3rem)] font-light leading-[1] tracking-[-0.015em]">
          Build Future at
          <br />
          Kinfield University
        </h1>

        <div className="max-w-lg">
          <p className="mb-[clamp(1rem,2vw,2.55rem)] font-[Manrope] text-[clamp(0.875rem,1vw,1rem)] font-normal leading-[1.4] text-white/70">
            A modern campus for curious minds, hands-on learning, supportive
            mentors, and global-ready programs designed to help you thrive.
          </p>

          <a
            href="#programs"
            className="inline-flex items-center gap-3 rounded-sm bg-white px-[clamp(1rem,1.5vw,1.25rem)] py-[clamp(0.7rem,1vw,1rem)] text-[clamp(0.8rem,0.8vw,0.875rem)] font-medium text-primary font-semibold"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white text-primary">
      <div className="font-[Manrope] mx-auto max-w-[1440px] px-4 py-[clamp(4rem,8vw,6rem)] lg:px-10">
        <SectionLabel>About Kinfield</SectionLabel>

        <div className="grid gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-2">
          <h2 className="max-w-[70vmin] lg:max-w-xl font-[Manrope] text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[clamp(2.1rem,3.5vw,2.45rem)] tracking-[0] ">
            A Modern University Experience Built for
            Real-World Impact
          </h2>

          <div className="max-w-xl text-[#555555]">
            <p className="font-[Manrope] text-[clamp(0.875rem,1vw,1rem)] font-normal leading-[1.4] tracking-normal">
              Kinfield is a forward-thinking university focused on practical
              learning, critical thinking, and meaningful community impact. Our
              classes blend strong academic foundations with real-world
              projects, so students graduate with skills, confidence, and a
              clear direction.
            </p>

            <p className="mt-[clamp(1.5rem,2vw,1.75rem)] font-[Manrope] text-[clamp(0.875rem,1vw,1rem)] font-normal leading-[1.4] tracking-normal">
              Beyond the classroom, students collaborate with industry
              partners, engage in interdisciplinary work, and learn from
              faculty who bring real professional experience into teaching.
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-primary/10 -mt-2">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2 -mt-6">
          <div className="px-4 lg:pl-12 lg:pr-8  mt-6 pt-10">
            <div className="relative aspect-[18/20] w-full rounded-lg">
              <Image
                src={images.students}
                alt="Students walking across campus"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="border-t border-primary/10 lg:border-l lg:border-t-0 mt-6 ">
            <div className='m-12'>
              <SectionLabel>What We Stand For</SectionLabel>

              <h2 className="mb-[clamp(2rem,4vw,2.5rem)] max-w-[80vmin] lg:max-w-2xl font-[Manrope] text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[clamp(2.1rem,3.5vw,2.45rem)] tracking-normal">
                Simple principles that shape every class, lab, and campus experience.
              </h2>
              <div className='grid gap-10 grid-cols-2 lg:grid-cols-1 '>
                {principles.map(([title, text], i) => (
                  <div
                    key={title}
                    className="grid grid-cols-1 gap-1 border-t border-primary/10 py-[clamp(1rem,1.5vw,1.25rem)] text-[clamp(0.8rem,0.9vw,0.875rem)] sm:grid-cols-[24px_4fr_4fr] sm:gap-3"
                  >
                    <span className="text-primary/90">
                      0{i + 1}
                    </span>

                    <strong className="font-[Manrope] w-28 lg:w-full text-[clamp(1rem,1.5vw,1.65rem)] font-medium leading-[clamp(1.4rem,2vw,1.75rem)] tracking-normal">
                      {title}
                    </strong>

                    <span className="text-primary/60 mt-1 sm:col-start-auto">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Campus() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="font-[Manrope] bg-[#7D0000] text-white">
      <div className=' border-b border-t border-white/10 p-4 lg:p-0 lg:pl-20'>
        <div className="mx-auto max-w-[1440px]">
          <div className="relative grid items-end gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2 lg:border-b border-white/10">
            <div className='lg:border-r border-white/10'>
              <div className='mt-12 '>
                <SectionLabel light>
                  Inside Campus
                </SectionLabel>
                <h2 className="font-[Manrope] text-[clamp(2.25rem,3.5vw,2.55rem)] font-light leading-[1.05] tracking-[-0.02em] lg:mb-12">
                  Step Inside Kinfield
                </h2>
              </div>
            </div>
            <div>
              <p className="max-w-2xl font-[Manrope] text-[clamp(0.875rem,1vw,1rem)] font-normal leading-[1.4] tracking-normal text-white/60 lg:mb-12">
                Take a quick campus tour to see our classrooms, studios, labs, and
                student life in motion across campus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="relative mt-[clamp(1.5rem,5vw,3rem)] pb-12 ">
          <Image
            src={images.inside_campus}
            alt="Students learning in a Kinfield lecture hall"
            className="aspect-[20/10] w-full object-cover rounded-lg "
          />
          <button
            onClick={() => setPlaying(!playing)}
            className="absolute bottom-18 right-5 flex items-center gap-3 rounded-sm bg-white px-[clamp(1rem,1.5vw,1.25rem)] py-[clamp(0.75rem,1vw,1rem)] font-[Manrope] text-[clamp(0.8rem,0.8vw,0.875rem)] font-medium leading-[1.4] text-primary"
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
            {playing ? 'Pause Intro' : 'Watch Intro'}
          </button>
        </div>
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section id='programs' className="font-[Manrope] bg-cream text-primary">
      <div className="mx-auto max-w-[1440px] px-4 py-[clamp(5rem,8vw,7rem)] lg:px-10">
        <div className="text-center">
          <div className='ml-[35%] lg:ml-[45%]'>
            <SectionLabel>Programs</SectionLabel>
          </div>

          <h2 className="font-[Manrope] text-[clamp(2.25rem,3.5vw,2.55rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Browse Programs
          </h2>
        </div>

        <div className="mt-14 grid max-w-[1440px] gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {programs.map(([name, type, text]) => (
            <article
              key={name}
              className="flex min-h-[330px] flex-col justify-between bg-white rounded-lg"
            >
              <div className="relative w-full p-6 ">
                <Image
                  src={programImages[name as keyof typeof programImages]}
                  alt={`${name} program`}
                  className="aspect-[10/12] object-cover w-6 mt-2"
                />

                <span
                  className={`absolute right-0 top-3 px-3 py-2 text-xs text-white rounded-l-sm mt-4 ${type === 'Graduate' ? 'bg-red' : 'bg-green'
                    }`}
                >
                  {type}
                </span>
              </div>

              <div className="lg:mt-6 p-6 ">
                <h3 className="pb-4 font-[Manrope] text-[clamp(1.125rem,1.5vw,1.25rem)] font-medium leading-[1.4] tracking-normal border-b border-primary/10 ">
                  {name}
                </h3>

                <p className="pt-4 font-[Manrope] text-[clamp(0.875rem,1vw,1rem)] font-normal leading-[1.4] tracking-normal text-primary/85">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="font-[Manrope] text-primary">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className=" p-6 py-5 lg:p-10 lg:py-10 border-r border-primary/10">
          <SectionLabel>
            Testimonials
          </SectionLabel>

          <h2 className="font-[Manrope] text-[clamp(2.25rem,3.5vw,2.5rem)] font-medium leading-[48px] tracking-[0]">
            From Our Students
          </h2>
        </div>

        <div className="p-6 py-5 lg:p-12 lg:py-10">
          <blockquote className="max-w-3xl font-[Manrope] text-[clamp(1.5rem,2.5vw,1.75rem)] font-normal leading-[1.4] tracking-[0]">
            “Before joining Kinfield, I wasn’t sure I was developing the right skills for my future career. Through hands-on projects and real-world problem solving, I built confidence in my abilities. The mentors were responsive and genuinely invested in my growth, and the campus community felt welcoming and supportive from day one.”
          </blockquote>

          <div className="mt-6 lg:mt-24 grid grid-cols-1 gap-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:block sm:gap-0">
                <Image
                  src={images.testimonial_hero_1}
                  alt="Melanie Howritz"
                  className="size-[120px] object-cover sm:mb-4 rounded-lg"
                />

                <div className='-mt-16 md:mt-0 lg:mt-0'>
                  <p className="font-[Manrope] text-[16px] font-medium leading-[22px] tracking-[0] sm:text-[20px] sm:leading-[28px]">
                    Melanie Howritz
                  </p>

                  <p className="font-[Manrope] text-[13px] font-normal leading-[18px] tracking-[0] text-primary/60 sm:text-[16px] sm:leading-[22.4px]">
                    Undergraduate Student,
                    <br />
                    Computer Science
                  </p>
                </div>
              </div>

              <div className="hidden gap-2 sm:flex absolute bottom-0 right-0">
                <button type="button" className="rounded-full bg-[#D6D6D6] p-2 text-white" disabled>
                  <ArrowLeft />
                </button>
                <button type="button" className="rounded-full bg-[#D6D6D6] p-2 text-white" disabled>
                  <ArrowRight />
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-2 sm:hidden">
              <button type="button" className="rounded-full bg-[#D6D6D6] p-2 text-white" disabled>
                <ArrowLeft />
              </button>
              <button type="button" className="rounded-full bg-[#D6D6D6] p-2 text-white" disabled>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Events() {
  return (
    <section className='font-[Manrope]'>
      <div className=' border-b border-t border-primary/10 pl-12'>
        <div className="mx-auto max-w-[1440px] mt-16 lg:mt-24">
          <SectionLabel>
            Events
          </SectionLabel>
          <h2 className="mb-12 font-[Manrope] text-[clamp(2rem,3.5vw,2.5rem)] font-medium leading-[48px] tracking-[0]">
            Upcoming Events
          </h2>
        </div>
      </div>
      <div className="mx-auto my-auto max-w-[1440px] p-4 lg:p-12 lg:border border-primary/10">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 lg:mx-0 lg:px-0 lg:pb-0 lg:block lg:space-y-4 lg:overflow-visible">
          {events.map((event, index) => (
            <article
              key={event.title}
              className="w-[100%] flex-shrink-0 snap-start lg:grid overflow-hidden rounded-lg bg-cream md:grid-cols-[.7fr_1.2fr_1fr_1fr] lg:w-full"
            >
              {/* Date */}
              <div className="p-6 flex flex-col lg:h-full">
                <div className="lg:h-[50%]">
                  <span className="font-[Manrope] text-[18px] font-normal leading-[25.2px]">
                    0{index + 1}
                  </span>
                </div>
                <hr className="hidden text-primary/10 lg:block" />
                <div className="mt-auto mt-2 border-b lg:border-b-0 border-primary/10">
                  <p className="font-[Manrope] text-[16px] font-normal leading-[22.4px]">
                    {event.day}
                  </p>
                  <div className='flex justify-between mb-6 lg:mb-0'>
                    <p className="mt-1 font-[Manrope] text-[16px] font-normal leading-[22.4px]">
                      {event.date}
                    </p>
                    <p className="mt-1 font-[Manrope] text-[14px] font-normal leading-[19.6px] text-primary/60">
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Event */}
              <div className="p-6 flex flex-col lg:h-full">
                <div className="lg:h-[50%]">
                  <h3 className="font-[Manrope] text-[20px] font-medium leading-[28px]">
                    {event.title}
                  </h3>
                  <p className='text-[16px] font-normal leading-[19.6px] text-primary/60 mt-2 '>
                    {event.details}
                  </p>
                </div>
                <div className="mt-auto mt-2">
                  <p className="mt-8 lg:mt-12 font-[Manrope] text-[14px] font-normal leading-[19.6px] text-primary/100 border-b lg:border-b-0 border-primary/10 pb-4 lg:pb-0">
                    {event.opening}
                  </p>
                </div>
              </div>

              {/* Speaker */}
              <div className="p-6 flex flex-col lg:h-full">
                <div className="lg:h-[50%]">
                  <p className="font-[Manrope] text-[14px] font-normal leading-[19.6px]  ">
                    Speaker
                  </p>
                </div>
                <div className="mt-6 lg:mt-12 flex items-center gap-3">
                  <Image
                    src={event.speaker_avatar}
                    alt={event.speaker}
                    width={77}
                    height={80}
                    className="h-[80px] w-[77px] rounded-lg object-cover"
                  />

                  <div className='-mb-12'>
                    <p className="font-[Manrope] text-[16px] font-normal leading-[19.6px] text-primary/90">
                      {event.speaker}
                    </p>
                    <span className='font-[Manrope] text-[14px]  text-primary/60'>
                      {event.speaker_honor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Image */}
              <Image
                src={event.image}
                alt={event.title}
                width={800}
                height={400}
                className="hidden h-full min-h-[200px] w-full object-cover lg:block rounded-lg"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="font-[Manrope] bg-[#7D0000] text-white">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="p-4 md:p-8 lg:p-12">
          <Image
            src={images.graduate}
            alt="Graduates outside the academics building"
            className="aspect-[4/3] w-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center border-l border-white/10 ">
          <div className="flex flex-col justify-center border border-r-0 border-l-0 p-4 lg:p-12 border-white/10">
            <SectionLabel light>Contact Us</SectionLabel>

            <h2 className="font-[Manrope] text-[clamp(2rem,3.5vw,2.5rem)] font-light leading-[1.1] tracking-tight">
              Talk with Admissions
            </h2>

            <p className="mt-6 max-w-2xl leading-6 text-white/70">
              Ask about programs, tuition, scholarships, or campus life, we&apos;ll
              help you take the next step.
            </p>


            <a href="mailto:hello@kinfield.edu"
              className="mt-10 inline-flex w-fit bg-white px-6 py-4 text-sm font-medium text-primary rounded-md mb-12 lg:mb-0"
            >
              Contact Our Admin
            </a>
          </div>
        </div>
      </div>
    </section >
  );
}

function FAQ() {
  const [active, setActive] = useState(3);

  return (
    <section className="font-[Manrope] border-t border-primary/10 bg-white text-primary">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="p-6 py-16 lg:py-24 lg:p-10">
          <SectionLabel>FAQ</SectionLabel>

          <h2 className="text-4xl font-light">Help Center</h2>

          <p className="mt-2 lg:mt-5 max-w-md text-primary/60">
            Explore common questions from students and parents, answered by
            our admissions team.
          </p>
          <div className='grid lg:grid-cols-2 mt-6'>
            <p className="text-sm text-primary/60 flex justify-between">
              Or get in touch with our Support Team.
            </p>
            <p>
              <a className="inline-block text-primary font-semibold mt-4" href="mailto:hello@kinfield.edu">
                hello@kinfield.edu
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary/10 lg:border-t-0 lg:py-16 -mt-12 lg:mt-0">
          {faqs.map(([q, a], i) => (
            <div key={q} className="px-6 py-5 lg:px-10">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <span className="flex items-center gap-5 text-sm">
                  <span>{active === i ? "−" : "+"}</span>
                  {q}
                </span>
                <ChevronDown
                  size={16}
                  className={active === i ? "rotate-180" : ""}
                />
              </button>

              {active === i && (
                <p className="mt-5 max-w-lg pl-9 text-sm leading-6 text-primary/60">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="font-[Manrope] bg-cream text-primary">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionLabel>Newsletter Sign Up</SectionLabel>
          <h2 className="max-w-lg font-[Manrope] text-[clamp(1.5rem,3.5vw,1.75rem)] font-semibold leading-[39.2px] tracking-[0px]">
            Get the latest updates on admissions, upcoming events, and new
            blog posts.
          </h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
          }}
          className="flex max-w-lg flex-col justify-center gap-5 inline-block w-full mt-8"
        >
          <input
            required
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="border-b border-primary/20 bg-transparent px-0 py-4 outline-none placeholder:text-primary/40 w-2/3 pr-2"
          />

          {subscribed ? (
            <p className="text-sm text-green">
              You’re on the list. Thanks for subscribing.
            </p>
          ) : (
            <button className="w-fit bg-red px-8 py-4 text-sm text-white rounded-md">
              Subscribe
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="font-[Manrope] bg-[#01293A] text-white">
      <div className="mx-auto grid gap-10 max-w-[1440px] px-6 lg:grid-cols-3 lg:items-stretch">
        {/* Brand + contact */}
        <div className="flex flex-col justify-center border-white/10 lg:border-r py-12">
          <div className="border-b border-white/10 pb-8 lg:pl-4 lg:pb-12">
            <div className="flex items-center gap-2 font-[Manrope] text-[clamp(1.325rem,1.5vw,1.75rem)] font-semibold leading-[1.4]">
              <Mark light />
              Kinfield
            </div>
            <p className="mt-2 font-[Manrope] text-[clamp(0.875rem,1vw,1rem)] font-normal leading-[1.4] text-white/70">
              — Learn with purpose. Grow with people.
            </p>
          </div>
          <div className="mt-8 font-[Manrope] font-normal leading-[1.4] text-white/70 lg:pl-4">
            <p className="text-[clamp(1rem,1.1vw,1.125rem)]">
              240 University Avenue, Suite 300, Global
              <br />
              Education District Center 10010
            </p>
            <p className="mt-8 text-[clamp(0.875rem,1vw,1rem)]">
              +1 (555) 018-2048 <span className='ml-4'>hello@kinfield.edu</span>
            </p>
          </div>
        </div>

        {/* Quick Links + References */}
        <div className="flex flex-col justify-center lg:border-t border-white/10 lg:border-t-0 lg:pl-[4.5rem]">
          <div className="grid grid-cols-2 -mt-12 lg:-mt-18">
            <div >
              <h3 className="font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-medium leading-[1.4]">
                Quick Links
              </h3>
              <div className="flex flex-col gap-4 font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-normal leading-[1.4] text-white/70 mt-4">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#programs">Program</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-medium leading-[1.4]">
                References
              </h3>
              <div className="flex flex-col gap-4 font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-normal leading-[1.4] text-white/70 mt-4">
                <a href="#">Licenses</a>
                <a href="#">Style Guide</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="relative flex flex-col justify-center border-t border-white/10 lg:border-l lg:border-t-0">
          <div className=' lg:pl-6 mt-6 lg:-mt-44 pr-21'>
            <h3 className="font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-medium leading-[1.4]">
              Social Media
            </h3>
            <div className="flex gap-6  justify-between font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-normal leading-[1.4] text-white/70 mt-4">
              <a href="#footer">Instagram</a>
              <a href="#footer" className='pl-10 border-l border-white/10'>LinkedIn</a>
              <a href="#footer" className='pl-10 border-l border-white/10'>YouTube</a>
            </div>
          </div>
          <div className="border-t w-full border-white/15 pt-12 mt-8 mb-12 font-[Manrope] text-[clamp(0.8rem,0.9vw,0.875rem)] font-normal leading-[1.4] text-white/50 lg:pl-6 lg:absolute bottom-8">
            <p className='-mt-6'>© Copyright 2026 Kinfield. Powered by Webflow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function KinfieldLanding() {
  return <main> <Header /><Hero /><About /><Campus /><Programs /><Testimonials /><Events /><Contact /><FAQ /><Newsletter /><Footer /></main>
}

