import { useState } from "react";
import Card from "../../components/Card/Card";
import Result from "../../components/Results/Results";

export default function Operacoes() {
  const [numero, setNumero] = useState("");
  const [dobro, setDobro] = useState("-");
  const [triplo, setTriplo] = useState("-");
  const [raiz, setRaiz] = useState("-");

  function handleSubmit(e) {
    e.preventDefault();

    const num = parseFloat(numero);

    if (isNaN(num)) {
      setDobro("-");
      setTriplo("-");
      setRaiz("-");
      return;
    }

    setDobro((num * 2).toFixed(2));
    setTriplo((num * 3).toFixed(2));
    setRaiz(Math.sqrt(num).toFixed(2));

    setNumero("");
  }

  return (
    <Card
      title="operações matemáticas"
      description="informe um número e descubra seu dobro, triplo e raiz quadrada."
    >
      {/* Children */}

      <form id="form-numerico" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="numero"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            informe um número inteiro ou real:
          </label>

          <input
            type="number"
            id="numero"
            step="any"
            placeholder="ex: 9"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          analisar número
        </button>
      </form>

      <section
        aria-live="polite"
        className="mt-6 p-4 bg-purple-50 rounded-md text-gray-700 space-y-2"
      >
        <h2 className="font-semibold text-purple-900 mb-1">
          resultados obtidos:
        </h2>

        <p>
          o dobro:
          <span className="font-bold text-purple-700"> {dobro}</span>
        </p>

        <p>
          o triplo:
          <span className="font-bold text-purple-700"> {triplo}</span>
        </p>

        <p>
          a raiz quadrada:
          <span className="font-bold text-purple-700"> {raiz}</span>
        </p>
      </section>
    </Card>
  );
}
