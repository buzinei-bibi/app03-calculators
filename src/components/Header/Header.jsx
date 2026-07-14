import { Link } from "react-router-dom"

export default function Header({
  title = 'HOME',
  navigationLinks = [{name: 'CONTATO', link: '#' }],
  socialMediaButtons = ''
}) {
  
  return (
    
    <header className="py-4 bg-blue-950 text-black h-16 shrink-0 font-bold">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            {
              navigationLinks.map((link, index)=>{
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
