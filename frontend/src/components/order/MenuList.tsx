import React from 'react';
import { List, Card, Button, notification } from 'antd';
import { FoodItem } from '../../types/orderType';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

const MenuList = ({ addToCart }: { addToCart: (item: FoodItem) => void }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement, item: FoodItem) => {
    api.info({
      message: `Thank you for ordering ${item.name}`,
      // description:
      //   'This is the content of the notification.',
      placement,
      duration: 1,
    });
  };
  //TODO: Fetch food from database

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    openNotification('top', item);
  };
  // Sample
  const foodData = [
    { id: 1, name: 'Pizza', description: 'Delicious pizza with assorted toppings', price: 10, image: 'https://example.com/pizza.jpg' },
    { id: 2, name: 'Burger', description: 'Juicy burger with cheese and veggies', price: 8, image: 'https://example.com/burger.jpg' },
    { id: 3, name: 'Salad', description: 'Fresh salad with mixed greens and dressing', price: 6, image: 'https://example.com/salad.jpg' },
    { id: 4, name: 'Sushi', description: 'Assorted sushi rolls with soy sauce and wasabi', price: 12, image: 'https://example.com/sushi.jpg' },
    { id: 5, name: 'Pasta', description: 'Spaghetti pasta with marinara sauce and meatballs', price: 9, image: 'https://example.com/pasta.jpg' },
  ];
  return (
    <>
      {contextHolder}
      <List
        grid={{ column: 1 }}
        dataSource={foodData}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.name}
              style={{ width: 300 }}
              cover={<img alt={item.name} src={item.image} style={{ height: 200, objectFit: 'cover' }} />}
            >
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <Button type="primary" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default MenuList;
