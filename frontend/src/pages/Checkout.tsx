import React from 'react'
import { Button, List, Card } from 'antd'
import { useState, useEffect } from 'react'
import { CartItem } from '../types/orderType'
import GooglePayButton from '@google-pay/button-react'


const Checkout = () => {
  /* Showing item in the cart and payment options */
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkoutParams, setCheckoutParams] = useState({
    totalPrice: 0 
  });
  
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(Object.values(JSON.parse(storedCartItems)));
      // Calculate total price
      const totalPrice = Object.values(cartItems).reduce((acc, item) => {
        return acc + item.totalPrice;
      }, 0);
      console.log(totalPrice)
      // Update checkoutParams with total price
      setCheckoutParams({ totalPrice: totalPrice });
    }
  }, []);

  const handlePayment = () => {
    /*
      1. Process the payment
    */
    
    var res = false;
    if (res) {
      /* Successful
        2. Store the result and payment method method and status to DB 
        3. Showing result
        4. Navigate to the receipt page and showing keep ordering
      */

    } else {
      /* Fail
        2. Show fail result then disappear 
        3. stay in the checkout page  
      */

    }
  }

  const handleReturn = () => {
    window.history.back();
  }

  return (
    <div>
      <List
        grid={{ column: 1 }}
        dataSource={cartItems}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.name}
              style={{ width: 300 }}
              cover={<img alt={item.name} src={item.image} style={{ height: 200, objectFit: 'cover' }} />}
            >
              <p>{item.description}</p>
              <p>Price: {item.totalPrice}</p>
            </Card>
          </List.Item>
        )}
      />
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantName: 'Nice Restaurant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: `${checkoutParams.totalPrice}`,
            currencyCode: 'AUD',
            countryCode: 'AU',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Payment data:', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
          console.log('Payment authorized:', paymentData);
          return { transactionState: 'SUCCESS' };
        }}
        onPaymentDataChanged={paymentData => {
          console.log('Payment data changed:', paymentData);
          return {};
        }}
        onError={error => {
          console.error('Error:', error);
        }}
      />
      <Button type="primary" onClick={handlePayment}>Pay Now</Button>
      <Button onClick={handleReturn}>Keep Order</Button>      

    </div>
  )
}

export default Checkout