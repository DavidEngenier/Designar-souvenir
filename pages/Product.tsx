"Use client"
import React, { useState, useEffect } from 'react';
import ListingCard from '@/components/listing-card/listing-card';
import categoryProductsData from '@/public/data/category-products.json';
import Toolbar from '@/components/toolbar/toolbar';
import ProgressComponent from '@/components/pagination/Pagination';
import Navbar2 from '@/components/navbar2';
import Breadcrum from '@/components/breadcums/breadcrumsligth';
import GaleryProduct from '@/components/product/product-gallery';
import InfoProdcut from '@/components/product/prodcut-info';
import Comentarios from '@/components/Reviews/reviews';
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
<div className='bg-white'>
<Navbar2/>
    {/* Page Content Goes Here */}
    {/* Breadcrumbs*/}
    <div className="bg-dark py-6 ">
    <div className="container-fluid">
       <Breadcrum category="T-Shirts" page="Osaka Japan Mens T-Shirt"/>
    </div>
    </div>
    {/* / Breadcrumbs*/}
    <div className="container-fluid mt-5">
    {/* Product Top Section*/}
    <div className="row g-9" data-sticky-container="">
        {/* Product Images*/}
        <div className="col-12 col-md-6 col-xl-7">
        <GaleryProduct/>
        </div>
        {/* /Product Images*/}
        {/* Product Information*/}
        <div className="col-12 col-md-6 col-lg-5">
        <div className="sticky-top top-5">
        <InfoProdcut/>
        </div>
        </div>
        {/* / Product Information*/}
    </div>
    {/* / Product Top Section*/}
    <div className="row g-0">
        {/* Related Products*/}
        <div className="col-12" data-aos="fade-up">
        {/*{{> product/product-related }}*/}
        </div>
        {/* / Related Products*/}
        {/* Reviews*/}
        <div className="col-12" data-aos="fade-up">
        <Comentarios/>
        </div>
        {/* / Reviews*/}
    </div>
    </div>
    {/* /Page Content */}
{/* / Main Section*/}
  {/* Footer */}
</div>
  );
};

export default CategoryProductsComponent;
