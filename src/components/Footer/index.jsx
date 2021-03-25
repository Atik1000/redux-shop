import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <>
        <Container>
            <Row>
                <Col className="text-center py-3">
                Copyright &copy; FakeShop
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Footer;