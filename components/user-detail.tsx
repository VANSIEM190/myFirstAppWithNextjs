'use client'
import { contacts } from '@/data/contact.data'
import Image from 'next/image'
import { notFound, useParams } from 'next/navigation'
import React from 'react'

const UserDetail = () => {
  const { id } = useParams()
  const currentUser = contacts.find(contact => contact.id === Number(id))

  if (!currentUser) return notFound()
  return (
    <div className="w-xl mx-auto mt-5 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* En-tête / Bannière décorative */}
      <div className="h-24 bg-linear-to-r from-blue-600 to-indigo-600" />

      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="relative -mt-12 mb-4 flex justify-center">
          <Image
            src={currentUser.avatar}
            alt={`Avatar de ${currentUser.nom}`}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
            width={100}
            height={100}
          />
        </div>

        {/* Nom */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">{currentUser.nom}</h2>
        </div>

        {/* Coordonnées (Email & Téléphone) */}
        <div className="space-y-3">
          {/* Email */}
          <a
            href={`mailto:${currentUser.email}`}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors duration-150"
          >
            <svg
              className="w-5 h-5 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium truncate">
              {currentUser.email}
            </span>
          </a>

          {/* Téléphone */}
          {currentUser.telephone && (
            <a
              href={`tel:${currentUser.telephone}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors duration-150"
            >
              <svg
                className="w-5 h-5 text-gray-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-medium">
                {currentUser.telephone}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserDetail
