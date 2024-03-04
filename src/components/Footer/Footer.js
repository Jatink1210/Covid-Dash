import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => (
  <div className="container-fluid footer-container pt-5">
    <div className="row footer-container">
      <Link to="/" className="nav-link custom-navbar-brand text-center col-12">
        COVID19<span className="navbar-india-text">INDIA</span>
      </Link>
      <p className="footer-tag-line col-12 text-center">
        we stand with everyone fighting on the front lines,
      </p>
      <div className="text-center col-12">
        <a
          href="https://github.com/Jatink1210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="33"
            height="36"
            className="footer-icons"
            viewBox="0 0 33 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path */}
          </svg>
        </a>
        <a
          href="https://www.instagram.com/jatink1210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="33"
            height="32"
            className=" footer-icons"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path */}
          </svg>
        </a>
        <a
          href="https://www.twitter.com/jatink1210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="30"
            height="25"
            className="footer-icons"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path */}
          </svg>
        </a>
      </div>
    </div>
  </div>
)

export default Footer
