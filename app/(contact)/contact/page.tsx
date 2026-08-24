import ContactList from '@/components/ContactList'
import Link from 'next/link'

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* En-tête de la page */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Contacts
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Gérez votre carnet d&#39;adresses et vos informations de contact.
            </p>
          </div>

          {/* Bouton d'action */}
          <Link
            href="/add-contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
            Ajouter un contact
          </Link>
        </header>

        {/* Composant de liste */}
        <section>
          <ContactList />
        </section>
      </div>
    </main>
  )
}

export default Page
