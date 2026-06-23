import { useState } from "react";
import Card from "../../components/Card/Card";
import Result from "../../components/Results/Results";

export default function Escolar() {

    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [media, setMedia] = useState("-")

    function handleSubmit(e) {
        e.preventDefault()

        const n1 = parseFloat(nota1)
        const n2 = parseFloat(nota2)

        if (isNaN(n1) || isNaN(n2)) {
            setMedia("-")
            return
        }

        const resultado = (n1 + n2) / 2

        setMedia(resultado.toFixed(2))
        setNota1("")
        setNota2("")
    }

    return (
        <Card
            title="média escolar"
            description="calcule a média final de duas notas de forma rápida e simples."
        >

            {/* Children */}

            <form
                id="form-notas"
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <div>
                    <label
                        htmlFor="nota1"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        primeira nota:
                    </label>

                    <input
                        type="number"
                        id="nota1"
                        min="0"
                        max="10"
                        step="0.1"
                        placeholder="Ex: 7.5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                        value={nota1}
                        onChange={(e) => setNota1(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="nota2"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Segunda nota:
                    </label>

                    <input
                        type="number"
                        id="nota2"
                        min="0"
                        max="10"
                        step="0.1"
                        placeholder="ex: 8.3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                        value={nota2}
                        onChange={(e) => setNota2(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    calcular média
                </button>

            </form>

            <section
                aria-live="polite"
                className="mt-6 p-4 bg-green-50 rounded-md text-gray-700"
            >

                <h2 className="font-semibold text-green-900 mb-1">
                    resultado:
                </h2>

                <p>
                    média final:
                    <span className="font-bold text-green-700">
                        {" "}{media}
                    </span>
                </p>

            </section>

        </Card>
    )
}