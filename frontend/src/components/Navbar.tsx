import { useEffect, useState } from 'react'

function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // State to track if the user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false)

  // Listen for scroll events to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 50px, mark as scrolled
      setIsScrolled(window.scrollY > 50)
    }

    // Add the scroll listener when the component loads
    window.addEventListener('scroll', handleScroll)

    // Remove the listener when the component is destroyed (cleanup)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-black/90 backdrop-blur-md border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-heading text-xl md:text-2xl text-gold tracking-wide">
          House of <span className="italic">Astrology</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-soft-white/80 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Book Appointment Button (desktop) */}
        <a
          href="#book"
          className="hidden md:inline-block bg-gold text-deep-black font-medium text-sm px-5 py-2.5 rounded-full hover:bg-gold/90 transition-colors duration-200"
        >
          Book Appointment
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-soft-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon (3 lines) or X (close) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-gold/20 px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-soft-white/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-deep-black font-medium text-sm px-5 py-2.5 rounded-full text-center hover:bg-gold/90 transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar