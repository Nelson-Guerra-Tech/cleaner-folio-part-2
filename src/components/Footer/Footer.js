import { FaReact } from 'react-icons/fa'

// styles
import './Footer.css'
import '../Skills/Skills.css'

const reactIcon = <FaReact className='project-icon react-footer rotate' />

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/rajshekhar26/cleanfolio'
      className='link footer__link'
    >
      Made with ♥️ by Nelson Guerra | built with {reactIcon}
    </a>
  </footer>
)

export default Footer
