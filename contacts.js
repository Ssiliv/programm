import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import img from '../img.jpg';

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


class Contacts extends React.Component{
    render(){
        return(
            <Row>
                <Col md={{ offset: 3, span: 4}}>
                    <MyCard headerText="ВК" button="ButtonText">https://vk.com/nelexaastepa</MyCard>  
                </Col>

                <Col md={{ offset: 1, span: 4}}>
                    <MyCard headerText="Почта" button="ButtonText">stepan_silivanov@mail.ru</MyCard>
                </Col>
            </Row>
        )
    }
}

export default Contacts;
