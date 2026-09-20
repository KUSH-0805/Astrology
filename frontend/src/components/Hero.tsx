import { motion } from 'framer-motion'

// Small helper data: positions of stars scattered across the hero.
// Each star is a tiny dot that twinkles (using the CSS `animate-twinkle` we added).
const stars = [
  { top: '12%', left: '8%', size: 3, delay: 0 },
  { top: '22%', left: '80%', size: 2, delay: 0.6 },
  { top: '8%', left: '45%', size: 2, delay: 1.2 },
  { top: '30%', left: '18%', size: 3, delay: 1.8 },
  { top: '15%', left: '65%', size: 2, delay: 0.9 },
  { top: '40%', left: '88%', size: 3, delay: 0.3 },
  { top: '35%', left: '5%', size: 2, delay: 1.5 },
  { top: '48%', left: '12%', size: 2, delay: 2.1 },
]

// The three lines of our main headline (each animates in separately)
const headlineLines = [
  'Clarity. Guidance.',
  'Real Connection.',
]

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Cosmic background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.12),transparent_45%)]" />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="absolute rounded-full bg-soft-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* The Moon — glowing gold circle */}
      <motion.div
        className="absolute hidden md:block w-40 h-40 rounded-full bg-gold blur-[2px]"
        style={{
          top: '8%',
          right: '12%',
          boxShadow:
            '0 0 40px rgba(212,175,55,0.7), 0 0 90px rgba(212,175,55,0.35)',
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Rotating orbital ring (dotted circle) */}
      <div className="absolute hidden md:block top-[30%] right-[3%] w-72 h-72 animate-orbit">
        <span className="absolute inset-0 rounded-full border border-dashed border-gold/30" />
        {/* A small dot traveling on the ring */}
        <span
          className="absolute top-0 left-1/2 w-2.5 h-2.5 -ml-1.5 rounded-full bg-gold"
          style={{ boxShadow: '0 0 12px rgba(212,175,55,0.9)' }}
        />
      </div>

      {/* Text content */}
      <motion.div
        className="relative max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Small eyebrow label */}
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-soft-white/60 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ✦ Your Cosmic Guide ✦
        </motion.p>

        {/* The big headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line}
              className={`block ${i === 0 ? 'text-soft-white' : 'text-gold italic'}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.3, duration: 0.8 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Supporting text */}
        <motion.p
          className="mt-6 text-base md:text-lg text-soft-white/70 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          Intuitive astrology for real-life answers and a better tomorrow —
          personalized readings that help you find direction, clarity and
          peace of mind.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <a
            href="#book"
            className="bg-gold text-deep-black font-medium text-sm sm:text-base px-8 py-4 rounded-full hover:bg-gold/90 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Book Your Consultation
          </a>
          <a
            href="#services"
            className="border border-gold/40 text-gold font-medium text-sm sm:text-base px-8 py-4 rounded-full hover:bg-gold/10 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-down hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-soft-white/40 text-xs tracking-[0.3em] uppercase"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll ↓
      </motion.div>
    </section>
  )
}

export default Hero