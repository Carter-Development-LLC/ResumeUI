import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { InternalLink } from '../utilities/Links';
import { PageProps } from './Page';

export default (props: PageProps): React.ReactElement => {
    return (
        <Container
            as={'section'}
            style={{
                marginBottom: props.footerHeight,
                marginTop: props.headerHeight,
            }}>
            <Row as={'article'}>
                <Col xs={'auto'} className={'mx-auto'}>
                    <h1 className={'h1 my-5'}>Page Not Found</h1>
                    <p>Please try one of the following links to get back on track:</p>
                    <ul>
                        <li>
                            <InternalLink to={'/'}>Home</InternalLink>
                        </li>
                        <li>
                            <InternalLink to={'/about'}>About</InternalLink>
                        </li>
                        <li>
                            <InternalLink to={'/resume'}>Resume</InternalLink>
                        </li>
                        <li>
                            <InternalLink to={'/contact'}>Contact</InternalLink>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};
