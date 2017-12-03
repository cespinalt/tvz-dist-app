/*
*
* @flow
*
*/

import Button from '../button/Button.js';
import CardComponent from '../card/Card.js';
import Image from '../image/Image.js';
import LayoutComponent from '../layout/Layout.js';
import Text from '../text/Text.js';

import React from 'react';

const { Card, CardSection } = CardComponent;
const { Layout, LayoutColumn }  = LayoutComponent;

const LoginMenu = () => {
  return (
    <Layout className="center-wrapper">
      <LayoutColumn>
        <Card className="login-item">
          <CardSection>
            <Text className="h3" case="upper">Owner access</Text>
            <Image
              alt="Owner login"
              className="center"
              src="../images/owner-thumb.png" />
              <Button use="default">Login</Button>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card className="login-item">
          <CardSection>
            <Text size="h3" case="upper">Place an order</Text>
              <Image
                alt="Shop access"
                className="center"
                src="../images/shop-thumb.png" />
                <Button use="default">Start</Button>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card className="login-item">
          <CardSection>
            <Text className="h3" case="upper">Schedules deliveries</Text>
            <Image
              alt="Delivery status"
              className="center"
              src="../images/truck-thumb.png" />
              <Button use="default">Make Delivery</Button>
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  );
};

export default LoginMenu;
