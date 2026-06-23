export default function Card({
  title = "title card",
  description = "description card",
  children = "children",
}) {
  return (
    <main
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      aria-labelledby="main-title"
    >
      <h1
        id="main-title"
        className="text-2xl font-bold text-gray-800 text-center mb-6"
      >
        {title}
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">{description}</p>
      {children}
    </main>
  );
}
