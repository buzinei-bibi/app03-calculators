import { useState } from "react";
import Card from "../../components/Card/Card";
import Result from "../../components/Results/Results";

export default function Tinta() {

    const [largura, setLargura] = useState("")
    const [altura, setAltura] = useState("")
    const [area, setArea] = useState("-")
    const [tinta, setTinta] = useState("-")

    function handleSubmit(e) {
        e.preventDefault()

        const larguraValue = parseFloat(largura)
        const alturaValue = parseFloat(altura)

        if (isNaN(larguraValue) || isNaN(alturaValue)) {
            setArea("-")
            setTinta("-")
            return
        }

        const areaParede = larguraValue * alturaValue
        const litros = areaParede / 2

        setArea(areaParede.toFixed(2))
        setTinta(litros.toFixed(2))

        setLargura("")
        setAltura("")
    }

    return (
        <Card
            title="calculadora de tinta"
            description="calcule a quantidade de tinta necessária para pintar uma parede."
        >

            {/* Children */}

            <form
                id="form-pintura"
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <div>
                    <label
                        htmlFor="largura"
                        className="block text-sm font-medium text-white mb-1"
                    >
                        largura da parede (em metros):
                    </label>

                    <input
                        type="number"
                        id="largura"
                        step="0.01"
                        placeholder="ex: 4.0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                        value={largura}
                        onChange={(e) => setLargura(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="altura"
                        className="block text-sm font-medium text-white mb-1"
                    >
                        altura da parede (em metros):
                    </label>

                    <input
                        type="number"
                        id="altura"
                        step="0.01"
                        placeholder="Ex: 2.8"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black hover:bg-red-950 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    calcular tinta
                </button>

            </form>

            <section
                aria-live="polite"
                className="mt-6 p-4 bg-teal-50 rounded-md text-gray-700 space-y-2"
            >

                <h2 className="font-semibold text-black mb-1">
                    dimensionamento:
                </h2>

                <p>
                    área da parede:
                    <span className="font-bold text-black">
                        {" "} {area}
                    </span> m²
                </p>

                <p>
                    tinta necessária:
                    <span className="font-bold text-black">
                        {" "} {tinta}
                    </span> litro(s)
                </p>

            </section>

        </Card>
    )
}