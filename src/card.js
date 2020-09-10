import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

const MyCard = ({headerText,children,button}) =>{
    return(<Card
    bg="primary"
    text='white'
    style={{ width: '100%', height:"200px" }}>
    <Card.Header>{headerText}</Card.Header>
    <Card.Body>
        <Card.Text>
            {children}
        </Card.Text>
    </Card.Body>
</Card>
);
    }
export default Card;
