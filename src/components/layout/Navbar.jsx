import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/classes',     label: 'Classes'     },
  { to: '/programs',    label: 'Programs'    },
  { to: '/events',      label: 'Events'      },
  { to: '/about',       label: 'About'       },
  { to: '/gallery',     label: 'Gallery'     },
  { to: '/faq',         label: 'FAQ'         },
  { to: '/contact',     label: 'Contact'     },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          <span className="font-display font-bold text-base text-slate-900 hidden sm:block leading-snug">
            Dance Academy<br />
            <span className="text-brand-dark">West</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-semibold text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-dark'
                    : 'text-slate-700 hover:text-brand-dark'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.gostudiopro.com/online/index.php?account_id=28352"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand-dark transition-colors duration-200 border border-slate-300 hover:border-brand-dark rounded-full py-2 px-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Student Login
          </a>
          <Link
            to="/enroll"
            className="btn-primary text-sm py-2.5 px-5 hidden sm:inline-flex"
          >
            Enroll Now
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
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
        <div className="lg:hidden border-t border-slate-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(link => (
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
          ))}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://app.gostudiopro.com/online/index.php?account_id=28352"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-full py-2 px-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Student Login
            </a>
            <Link
              to="/enroll"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-fit"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
