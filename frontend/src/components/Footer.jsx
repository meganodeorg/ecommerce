import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const COMPANY_ITEMS = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '/about' },
  { title: 'Delivery', link: '/delivery' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
];

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {COMPANY_ITEMS.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="">{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Address: 1234 Street Name, City Name, United States</li>
            <li>Phone: +1234567890</li>
            <li>
              Email:
              <a href="mailto:admin@abc.org" className="text-blue-500" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright @2024</p>
      </div>
    </div>
  );
};

export default Footer;
