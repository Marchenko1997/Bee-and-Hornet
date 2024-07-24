// PopupManager.js
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartPopup from '../../components/BuyingPopup/CartPopup/CartPopup/CartPopup';
import Product from '../../components/HoneyPopup/Product/Product';


const PopupManager = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseAllPopups = () => {
    navigate('/'); 
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const popup = query.get('popup');
    const productId = query.get('product');

    if (popup === 'product' && productId) {
      // Предположим, у вас есть функция для получения продукта по ID
      const product = getProductById(productId);
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
  }, [location.search]);

  const query = new URLSearchParams(location.search);
  const popup = query.get('popup');

  const isCartPopupOpen = popup === 'cart';
  const isProductPopupOpen = popup === 'product' && selectedProduct;

  return (
    <div>
      {isCartPopupOpen && <CartPopup onClose={handleCloseAllPopups} />}
      {isProductPopupOpen && (
        <Product product={selectedProduct} onClose={handleCloseAllPopups} />
      )}
    </div>
  );
};

export default PopupManager;
