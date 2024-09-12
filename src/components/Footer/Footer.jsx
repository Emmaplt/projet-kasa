import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './_footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
          <p>@ 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;