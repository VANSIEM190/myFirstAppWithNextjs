import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
        >
          Wteja
        </Link>

        {/* Liens de navigation (optionnel / prêt à l'emploi) */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Accueil
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-900 transition-colors"
          >
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
