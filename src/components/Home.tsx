import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { OutlineButton } from '../utilities/Buttons';
import { InternalButtonLink } from '../utilities/Links';

export default (props: any): React.ReactElement => {
    const centeredContainerStyle: React.CSSProperties = {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const heroStyle: React.CSSProperties = {
        backgroundAttachment: 'fixed',
        backgroundImage: 'url("/media/hero.jpg")',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    };

    const overlayStyle: React.CSSProperties = {
        background: 'black',
        height: 'inherit',
        opacity: '0.85',
    };

    return (
        <Container as={'section'} fluid style={heroStyle}>
            <Row as={'article'} style={overlayStyle}>
                <Col xs={12} style={centeredContainerStyle}>
                    <Row>
                        <Col>
                            <h1 className={'h1 text-white'}>Developer</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={'auto'} className={'mx-auto py-2'}>
                            <InternalButtonLink to='/resume'>
                                <OutlineButton light={true} size={'lg'}>
                                    View My Resume
                                </OutlineButton>
                            </InternalButtonLink>
                        </Col>
                        <Col xs={'auto'} className={'mx-auto py-2'}>
                            <InternalButtonLink to='/contact'>
                                <OutlineButton light={true} size={'lg'}>
                                    Contact Me
                                </OutlineButton>
                            </InternalButtonLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
