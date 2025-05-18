import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import productsData from '../data/products.json';
import '../styles/Products.css';

function Products() {
  const { translations } = useLanguage();

  const productsByCategory = productsData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <div className="products-container">
        <h1 className="products-title">
          {translations.products.title}
        </h1>

        <div className="productos-por-tipo">
          {Object.entries(productsByCategory).map(([category, products]) => (
            <div key={category} className="categoria-fila">
              <h2 className="categoria-titulo">
                {translations.products.categories[category]}
              </h2>
              <div className="productos-grid">
                {products.map((product) => (
                  <div key={product.id} className="producto-card">
                    <img 
                      src={product.image} 
                      alt={translations.products.items[product.id]} 
                      className="producto-imagen" 
                    />
                    <p className="producto-nombre">
                      {translations.products.items[product.id]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;