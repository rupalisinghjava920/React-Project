
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 ">
      <div className="container ">
        <div className="row">

          {/* About Section */}
          <div className="col-md-3 mb-4 non">
            <h5>ShopEasy</h5>
            <p>Your one-stop shop for quality products at great prices.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/shop" className="text-light">Shop</Link></li>
              <li><Link to="/about" className="text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="text-light">FAQs</Link></li>
              <li><Link to="/returns" className="text-light">Return Policy</Link></li>
              <li><Link to="/shipping" className="text-light">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p>123 Market Street, Delhi, India</p>
            <p>Phone: <a href="tel:+911234567890" className="text-light">+91 1234567890</a></p>
            <p>Email: <a href="mailto:support@shopeasy.com" className="text-light">support@shopeasy.com</a></p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-3 border-top border-light">
          <p className="mb-0">© 2025 ShopEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
