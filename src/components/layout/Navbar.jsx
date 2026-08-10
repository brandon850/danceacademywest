import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { STUDIO } from '../../data/classes'

const navLinks = [
  {
    label: 'Classes',
    children: [
      { to: '/classes/schedule',     label: 'Current Class Schedule' },
      { to: '/classes/descriptions', label: 'Class Descriptions'     },
      { to: '/classes/choosing',     label: 'Choosing a Class'       },
    ],
  },
  {
    label: 'Important Info',
    children: [
      { to: '/info/tuition',    label: 'Tuition & Fees' },
      { to: '/info/calendar',   label: 'Calendar'       },
      { to: '/info/dress-code', label: 'Dress Code'     },
      { to: '/info/policies',   label: 'Policies'       },
    ],
  },
  { to: '/about',            label: 'About'            },
  { to: '/faq',              label: 'FAQ'              },
  { to: '/competition-team', label: 'Competition Team' },
  {
    label: 'Events',
    to: '/events',
    children: [
      { to: '/events/christmas-parade',  label: 'Christmas Parade'  },
      { to: '/events/mayfest',           label: 'Mayfest'           },
      { to: '/events/summer-production', label: 'Summer Production' },
    ],
  },
]

const linkClass = ({ isActive }) =>
  `font-semibold text-sm transition-colors duration-200 ${
    isActive ? 'text-brand-dark' : 'text-slate-700 hover:text-brand-dark'
  }`

/* Desktop dropdown — opens on hover and on click, closes on outside click or Escape. */
function NavDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const sectionActive = item.to
    ? pathname.startsWith(item.to)
    : item.children.some(c => pathname.startsWith(c.to))

  useEffect(() => {
    const onDocClick = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = e => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-200 ${
          sectionActive ? 'text-brand-dark' : 'text-slate-700 hover:text-brand-dark'
        }`}
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 py-2 min-w-[15rem]">
            {item.to && (
              <NavLink
                to={item.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm font-semibold whitespace-nowrap border-b border-slate-100 mb-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-dark bg-brand/8'
                      : 'text-slate-700 hover:text-brand-dark hover:bg-slate-50'
                  }`
                }
              >
                All {item.label}
              </NavLink>
            )}
            {item.children.map(child => (
              <NavLink
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-dark bg-brand/8'
                      : 'text-slate-700 hover:text-brand-dark hover:bg-slate-50'
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* Mobile accordion group inside the drawer. */
function MobileGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between font-semibold text-base text-slate-700"
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-slate-100 pl-4">
          {item.to && (
            <NavLink
              to={item.to}
              end
              onClick={onNavigate}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-dark' : 'text-slate-600'
                }`
              }
            >
              All {item.label}
            </NavLink>
          )}
          {item.children.map(child => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-dark' : 'text-slate-600'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logos/MainLogo1.png"
            alt="Dance Academy West"
            className="h-12 w-12 object-contain"
          />
          <span className="font-display font-bold text-base hidden sm:block leading-snug">
            <span className="text-brand-dark">Dance</span><br />
            <span className="text-slate-900">Academy West</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(link =>
            link.children ? (
              <NavDropdown key={link.label} item={link} pathname={pathname} />
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={STUDIO.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-dark transition-colors duration-200 border border-slate-300 hover:border-brand-dark rounded-full py-2 px-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Current Student Login
          </a>
          <a
            href={STUDIO.freeTrial}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5 hidden sm:inline-flex"
          >
            Free Trial Class
          </a>
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 px-6 py-6 flex flex-col gap-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map(link =>
            link.children ? (
              <MobileGroup
                key={link.label}
                item={link}
                onNavigate={() => setMenuOpen(false)}
              />
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-semibold text-base transition-colors ${
                    isActive ? 'text-brand-dark' : 'text-slate-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href={STUDIO.portal}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-full py-2 px-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Current Student Login
            </a>
            <a
              href={STUDIO.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-fit text-sm py-2.5 px-5"
            >
              Free Trial Class
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
