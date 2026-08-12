import { Link } from "react-router-dom"
import logotipo from "../../assets/logotipo.png"

export default function Header({
  title = 'HOME',
  navigationLinks = [{name: 'CONTATO', link: '#' }],
  socialMediaButtons = ''
}) {
  
  return (
    <header className="py-4 bg-orange-200 text-black h-16 shrink-0 font-bold">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logotipo} alt="logotipo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {
              navigationLinks.map((link, index)=> {
                return(
                  <li key={index}><Link to={link.link} className="hover:text-indigo-500">{link.name}</Link></li>
                )
              })
            }
          </ul>
        </nav>
        <div>
          {socialMediaButtons}
        </div>
      </div>
    </header>
  )
}