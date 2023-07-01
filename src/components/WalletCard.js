import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

function WalletCard(props) {
  const { wallet } = props;

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Card.Text>{wallet.name}</Card.Text>
            <Card.Text>This is the new balance</Card.Text>
          </Col>
        </Row>
      </Card.Header>
    </Card>
  )
}

WalletCard.propTypes = {
  wallet: PropTypes.object.isRequired
}

export default WalletCard;
