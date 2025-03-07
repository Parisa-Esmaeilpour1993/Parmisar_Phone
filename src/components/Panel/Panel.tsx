import Asidebar from './Asidebar/Asidebar';
import Headers from './Headers/Headers';
import Analysis from './Analysis/Analysis';
import Chart from './Chart/Chart';
import Information from './Information/Information';
import Products from './Products/Products';
import Profile from './Profile/Profile';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Iproduct } from '../../interfaces/interfaces';
import { InitialFocus } from '../Modal/modal';


export default function Panel() {
  
   const [products, setProducts] = useState<Iproduct[]>([]);


    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://676d5e440e299dd2ddff55b6.mockapi.io/shop'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('خطا در دریافت محصولات:', error);
      }
    };

    useEffect(() => {
      fetchProducts(); // بارگذاری محصولات هنگام بارگذاری صفحه
    }, []);

  return (
    <div>
      <div className="bg-[#f6f6f6] h-screen flex gap-5">
        <div className="w-[20%] shadow-xl">
          <Asidebar />
        </div>
        <div className="w-full">
          <Headers />
          {/* <InitialFocus
            setProducts={setProducts}
            fetchProducts={fetchProducts}
          />
          <Products formData={products} /> */}

           {/* <Analysis />
          <div className="flex">
            <Chart />
            <Information/>
          </div> */}
          <Profile/> 
        </div>
      </div>
    </div>
  );
}
