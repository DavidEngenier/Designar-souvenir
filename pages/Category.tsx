"Use client"
import React, { useState, useEffect } from 'react';
import ListingCard from '@/components/listing-card/listing-card';
import categoryProductsData from '@/public/data/category-products.json';
import Toolbar from '@/components/toolbar/toolbar';
import ProgressComponent from '@/components/pagination/Pagination';
import Navbar2 from '@/components/navbar2';
interface Product {
  id: number;
  title: string;
  price: string;
  'sale-price'?: string;
  currency: string;
  options: string;
  img: string;
  new?: boolean;
  'sold-out'?: boolean;
}

const runScripts = () => {
  import('@/public/OLDS/js/theme.js')
    .then(() => {
      console.log('theme.js loaded');
    })
    .catch((err) => {
      console.error('Error loading theme.js:', err);
    });
};


const CategoryProductsComponent: React.FC = () => {

  const [amount, setAmount] = useState(10);
  const [type, setType] = useState('products');
  const [progress, setProgress] = useState(25);

  const handleLoadMore = () => {
    // Lógica para cargar más elementos
    setAmount(amount + 10);
    setProgress(Math.min(progress + 10, 100)); // Incrementar el progreso, hasta un máximo del 100%
  };


  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      if (mediaQuery.matches) {
        runScripts();
      }
    };

    // Ejecutar al montar el componente
    handleResize();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  const { entries: products } = categoryProductsData;

  return (
<>
 <Navbar2/>
  {/* Main Section*/}
  <section className="mt-0 bg-white">
    {/* Page Content Goes Here */}
    {/* Category Top Banner */}
    <div
      className="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0"
      style={{
        backgroundImage:
          "url(/OLDS/images/banners/banner-category-top.jpg)"
      }}
    >
      <div
        className="container-fluid position-relative z-index-20"
        data-aos="fade-right"
        data-aos-delay={300}
      >
        <h1 className="fw-bold display-6 mb-4 text-white">Lo Nuevo de hoy</h1>
        <div className="col-12 col-md-6">
          <p className="text-white mb-0 fs-5">
          
          </p>
        </div>
      </div>
    </div>
    {/* Category Top Banner */}
    <div className="container-fluid" data-aos="fade-in">

      <Toolbar/>
      {/* Products*/}
      <div className="row g-4">
      {products.map(product => (
        <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
          <ListingCard {...product} />
        </div>
      ))}
        <ProgressComponent
        amount={amount}
        type={type}
        progress={progress}
        onLoadMore={handleLoadMore}
      />
      </div>
      {/* /Page Content */}
    </div>
  </section>
    </>
  );
};

export default CategoryProductsComponent;
