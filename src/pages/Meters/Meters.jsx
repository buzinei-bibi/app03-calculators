import { useState } from "react";
import Card from "../../components/Card/Card";
import Result from "../../components/Results/Results";


export default function Meters() {
  const [meters, setMeters] = useState("")
  const [result, setResult ] = useState({cm: "-", mm: "-"})

  // função para evitar o comportamendo padrão do submit
  function handleSubmit(e){
      e.preventDefault()
  }

  function calculate(){
    let metersValue = parseFloat(meters)

    if(isNaN(metersValue)){
       setResult({cm: "-", mm: "-"})
       return
    }

    let cm = metersValue * 100
    let mm = metersValue * 1000
    setResult({cm: cm.toFixed(2), mm: mm.toFixed(2)})
    setMeters("")
  }

  return (
    <>
      <Card 
        title = 'conversor de metros'
        description = 'insira o valor em metros para descobrir a conversão automática em centímetros e milímetros.' 
      >
        {/* Children */}
        <form id="form-conversor" onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="metros" className="block text-sm font-medium text-gray-700 mb-1">
                    valor em metros (m):
                </label>
                <input 
                    type="number" 
                    id="metros" 
                    name="metros" 
                    step="0.01" 
                    required 
                    placeholder="ex: 1.5" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    value={meters}
                    onChange={(e)=> setMeters(e.target.value)}
                />
            </div>

            <button 
                type="submit" 
                id="btn-converter" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                onClick={calculate}
            >
                converter medidas
            </button>
        </form>

        {/* <!-- área de Resultados --> */}
        <section className="mt-8 border-t border-gray-200 pt-6" aria-live="polite">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">resultados:</h2>
            <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <p className="text-gray-700">
                    centímetros: <span id="resultado-cm" className="font-bold text-blue-600">{result.cm}</span> cm
                </p>
                <p className="text-gray-700">
                    milímetros: <span id="resultado-mm" className="font-bold text-blue-600">{result.mm}</span> mm
                </p>
            </div>
        </section>

      </Card>
    </>
  )
}
