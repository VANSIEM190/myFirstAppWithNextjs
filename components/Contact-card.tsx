import { contactType } from '@/types/contacts'
import Image from 'next/image'
import ContactCardAction from './Contact-card-action'
type Props = {
  contact: contactType
}

const ContactCard = ({ contact }: Props) => {
  return (
    <div
      key={contact.id}
      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <Image
          src={contact.avatar}
          alt={contact.nom}
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100"
        />
      </div>

      {/* Informations du contact */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">
          {contact.nom}
        </p>
        <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:gap-4 text-xs text-gray-500">
          <a
            href={`mailto:${contact.email}`}
            className="truncate hover:text-blue-600 transition-colors"
          >
            {contact.email}
          </a>
          <span className="hidden sm:inline text-gray-300">•</span>
          <a
            href={`tel:${contact.telephone.replace(/\s+/g, '')}`}
            className="hover:text-blue-600 transition-colors"
          >
            {contact.telephone}
          </a>
        </div>
      </div>

      {/* Boutons d'action rapide */}
      <ContactCardAction contact={contact} />
    </div>
  )
}

export default ContactCard
