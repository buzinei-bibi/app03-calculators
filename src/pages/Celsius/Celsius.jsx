import { useState } from "react";
import Card from "../../components/Card/Card";
import Result from "../../components/Results/Results";

export default function Celsius() {

  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("-")

  function handleSubmit(e) {
    e.preventDefault()

    const temp = parseFloat(celsius)

    if (isNaN(temp)) {
      setFahrenheit("-")
      return
    }

    const result = (temp * 9/5) + 32
    setFahrenheit(result.toFixed(2))
    setCelsius("")
  }

  return (
    <Card
      title="celsius → fahrenheit"
      description=" converta graus celsius (°C) para fahrenheit (°F) de forma rápida e simples."
    >

      <form
        id="form-temperatura"
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <div>
          <label
            htmlFor="celsius"
            className="block text-sm font-medium text-white mb-1"
          >
            temperatura em celsius (°C):
          </label>

          <input
            type="number"
            id="celsius"
            step="0.1"
            placeholder="ex: 25"
            className="w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          converter para fahrenheit
        </button>

      </form>

      <section
        className="mt-8 border-t border-gray-200 pt-6"
        aria-live="polite"
      >

        <h2 className="text-lg font-semibold text-white mb-3">
          resultado da conversão:
        </h2>

        <div className="bg-gray-50 p-4 rounded-md text-center">

          <p className="text-xl text-gray-800">
            <span className="font-bold text-orange-600 text-2xl">
              {fahrenheit}
            </span>

            {fahrenheit !== "-" && " °f"}
          </p>

        </div>

      </section>

    </Card>
  )
}