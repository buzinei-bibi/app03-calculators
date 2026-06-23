import { useState } from "react";
import Card from "../../components/Card/Card";
import Result from "../../components/Results/Results";


export default function Sequencia() {

    const [numero, setNumero] = useState("");
    const [resultado, setResultado] = useState("-");

    function handleSubmit(e) {
        e.preventDefault();

        const num = parseInt(numero);

        if (isNaN(num) || num < 0) {
            setResultado("-");
            return;
        }

        const sequencia = [];

        for (let i = 0; i <= num; i++) {
            sequencia.push(i);
        }

        setResultado(sequencia.join(", "));
        setNumero("");
    }

    return (
        <Card
            title="gerador de sequência"
            description="veja todos os números de zero até o número informado"
        >

            {/* Children */}

            <form
                id="form-sequencia"
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <div>

                    <label
                        htmlFor="numero-limite"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        informe um número inteiro positivo:
                    </label>

                    <input
                        type="number"
                        id="numero-limite"
                        min="1"
                        step="1"
                        placeholder="ex: 7"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    gerar números anteriores
                </button>

            </form>

            <section
                aria-live="polite"
                className="mt-6 p-4 bg-indigo-50 rounded-md text-gray-700"
            >

                <h2 className="font-semibold text-indigo-900 mb-2">
                    números anteriores (desde o 0):
                </h2>

                <div
                    className="font-mono text-indigo-700 text-lg font-bold bg-white p-3 rounded border border-indigo-100 min-h[44px"
                >
                    {resultado}
                </div>

            </section>

        </Card>
    );
}