import { contacts } from '@/data/contact.data'
import ContactCard from './Contact-card'

const ContactList = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 tracking-tight mb-6">
        Liste de contacts ({contacts.length})
      </h2>

      <div className="divide-y divide-gray-100 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {contacts.map(contact => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  )
}

export default ContactList
