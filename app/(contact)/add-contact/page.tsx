const page = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <form className="space-y-5">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Ex: Jean Dupont"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 placeholder-gray-400 text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jean.dupont@example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 placeholder-gray-400 text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Avatar{' '}
            <span className="text-xs text-gray-500">(URL de l&#39;image)</span>
          </label>
          <input
            type="url"
            id="avatar"
            name="avatar"
            placeholder="https://example.com/avatar.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 placeholder-gray-400 text-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="+33 6 12 34 56 78"
            pattern="[0-9+\s-]{8,}"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 placeholder-gray-400 text-gray-900"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default page
