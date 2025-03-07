import { AiFillProduct } from 'react-icons/ai';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { IoHomeSharp } from 'react-icons/io5';
import logo from './../../../assets/images/logo.png';
import { asidebarlocalization } from '../../../constants/localization/Localization';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import AsideContext from '../../context/context';

export default function Asidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const asideContext = useContext(AsideContext);
  if (!asideContext) {
    throw new Error('AsideProvider is missing.');
  }

  const { activeComponent, setActiveComponent } = asideContext;

  return (
    <div className="flex flex-col gap-32 items-center pt-16">
      <div className="flex gap-2">
        <img className="w-8 h-10 items-center" src={logo} alt="logo" />
        <p className="text-2xl font-bold">{asidebarlocalization['parmisar']}</p>
      </div>
      <div className="flex flex-col gap-8">
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'home' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('home')}
        >
          <IoHomeSharp />
          <p>{asidebarlocalization['home']}</p>
        </button>
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'products' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('products')}
        >
          <AiFillProduct />
          <p>{asidebarlocalization['products']}</p>
        </button>
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'order' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('order')}
        >
          <BiSolidMessageDetail />
          <p>{asidebarlocalization['orders']}</p>
        </button>
      </div>
      <button className="flex items-center gap-2 " onClick={handleLogout}>
        <CiLogout />
        <p>{asidebarlocalization['logOut']}</p>
      </button>
    </div>
  );
}
