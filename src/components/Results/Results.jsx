export default function Results({ children = "Children" }) {
  return (
    <section className="mt-8 border-t border-gray-200 pt-6" aria-live="polite">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        resultados:
      </h2>
      <div className="bg-gray-50 p-4 rounded-md space-y-2">
        {children}
      </div>
    </section>
  );
}
