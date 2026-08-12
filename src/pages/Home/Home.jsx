import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const EXPRESSOES = [
  { conta: "1284 + 756", resultado: "2040" },
  { conta: "18% de 350", resultado: "63" },
  { conta: "12 m → cm", resultado: "1200" },
  { conta: "100 °f → °c", resultado: "37.7" },
  { conta: "2, 4, 8, ...", resultado: "16" },
]

const CALCULADORAS = [
  { nome: "tinta", tecla: "rgb", rota: "/tinta", desc: "quantidade de tinta por área a pintar" },
  { nome: "meters", tecla: "m", rota: "/meters", desc: "conversão entre unidades de comprimento" },
  { nome: "matemática", tecla: "+ −", rota: "/matematica", desc: "operações básicas e expressões" },
  { nome: "sequência", tecla: "1,2,3", rota: "/sequencia", desc: "termos e padrões de uma sequência" },
  { nome: "celsius", tecla: "°c", rota: "/celsius", desc: "conversão entre celsius, fahrenheit e kelvin" },
  { nome: "escolar", tecla: "edu", rota: "/escolar", desc: "média, nota e cálculos do dia a dia escolar" },
]

function Home() {
  const [indice, setIndice] = useState(0)
  const [digitado, setDigitado] = useState("")
  const [mostrarResultado, setMostrarResultado] = useState(false)

  useEffect(() => {
    const atual = EXPRESSOES[indice].conta
    let i = 0
    const reset = setTimeout(() => {
      setDigitado("")
      setMostrarResultado(false)
    }, 0)

    const digitar = setInterval(() => {
      i++
      setDigitado(atual.slice(0, i))
      if (i >= atual.length) {
        clearInterval(digitar)
        setTimeout(() => setMostrarResultado(true), 400)
        setTimeout(() => setIndice((prev) => (prev + 1) % EXPRESSOES.length), 2200)
      }
    }, 90)

    return () => {
      clearTimeout(reset)
      clearInterval(digitar)
    }
  }, [indice])

  return (
    <div className="min-h-screen bg-orange-200 text-black">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">

        {/* topo: aparelho + texto, tudo à esquerda */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="w-full max-w-55 shrink-0 rounded-3xl bg-[#2A2A2E] p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-[#3D3D42]">
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#8A8A8E] lowercase">calculadora</span>
              <span className="h-2 w-2 rounded-full bg-[#FF7A45]" />
            </div>
            <div className="rounded-xl bg-white px-4 py-6 text-right">
              <p className="min-h-6 font-mono text-lg tracking-widest text-[#263821]/70 lowercase">
                {digitado}
              </p>
              <p className="min-h-10 font-mono text-3xl font-bold tracking-widest text-[black]">
                {mostrarResultado ? EXPRESSOES[indice].resultado : "\u00A0"}
              </p>
            </div>
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lowercase">
              toda calculadora que você precisa,{" "}
              <span className="text-[#f85311]">num só lugar</span>.
            </h1>
            <p className="mt-5 max-w-md text-base text-[black] lowercase">
                sem enrolação. escolha uma calculadora abaixo e resolva sua conta em segundos.
            </p>
          </div>
        </div>

        {/* grade fixa 3 colunas x 2 linhas */}
        <div className="mt-16 grid grid-cols-3">
          {CALCULADORAS.map((calc, index) => {
            const col = index % 3
            const row = Math.floor(index / 3)
            return (
              <Link
                key={calc.nome}
                to={calc.rota}
                className={`group flex flex-col justify-between gap-6 p-5 transition hover:bg-purple-700
                  ${col !== 2 ? "border-r" : ""}
                  ${row !== 1 ? "border-b" : ""}
                  border-white`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-bold text-[#FF7A45] lowercase">
                    {calc.tecla}
                  </span>
                  <span className="text-[black] transition group-hover:translate-x-1 group-hover:text-[black]">
                    →
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold lowercase">{calc.nome}</p>
                  <p className="mt-0.5 text-sm text-[black] lowercase">{calc.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home