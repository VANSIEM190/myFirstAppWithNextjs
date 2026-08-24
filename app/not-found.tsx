import Link from 'next/link'
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-medium">Not found 404</h1>
      <Link
        href="/"
        className="mt-3 p-3 py-2 bg-blue-400 rounded-lg text-white"
      >
        retourner à l&#39;accueil{' '}
      </Link>
    </div>
  )
}

export default NotFound
