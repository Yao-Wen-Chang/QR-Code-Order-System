import React from 'react';
import { Modal, FloatButton, Button, Badge } from 'antd';
import { useState } from 'react';
import { CartItem, FoodItem } from '../../types/orderType';
import { ShoppingCartOutlined, PayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CartModal = (cartItems: CartItem[]) => {
  
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleViewCart = () => {
    setModalVisible(true);
  }

  const handleModalClose = () => {
    setModalVisible(false);
  }

  const handleClickCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/checkout")
  }

  return (
    <>
      <FloatButton 
        type="primary" 
        icon={<ShoppingCartOutlined />} 
        onClick={handleViewCart} 
        badge={{ count: Object.values(cartItems).length, color: 'red' }}
        description="View Cart"
        shape="square"
      />
  
      <Modal
        title="Your Cart"
        open={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>Close</Button>,
          <Button key="checkout" type="primary" icon={<PayCircleOutlined />} onClick={handleClickCheckout}>Checkout</Button>
        ]}
      >
        
        {Object.values(cartItems).map((cartItem, index) => (
          <p key={index}>{cartItem.name} - {cartItem.quantity} - {cartItem.totalPrice}</p>
        ))}


      </Modal>
    </>
  );
};

export default CartModal;
