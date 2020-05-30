import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { ExternalLink } from '../utilities/Links';

export default (props: any): React.ReactElement => {
    const footerStyle: React.CSSProperties = {
        bottom: 0,
        position: 'fixed',
    };
    const phoneIconStyle: React.CSSProperties = { color: '#53d769' };
    const mailIconStyle: React.CSSProperties = { color: '#d44638' };
    const githubIconStyle: React.CSSProperties = { color: '#f5f5f5' };
    const linkedInIconStyle: React.CSSProperties = { color: '#2867B2' };

    return (
        <Container as={'footer'} className={'bg-dark'} fluid style={footerStyle}>
            <Row className={'text-center py-2'}>
                <Col className={'py-2'} xs={12} sm={6} lg>
                    <ExternalLink to={'tel:8018089168'}>
                        <FontAwesomeIcon icon={faPhone} style={phoneIconStyle} />
                        &nbsp;(801)&nbsp;808-9168
                    </ExternalLink>
                </Col>
                <Col className={'py-2'} xs={12} sm={6} lg>
                    <ExternalLink to={'mailto:brian@briancarter.dev'}>
                        <FontAwesomeIcon icon={faEnvelope} style={mailIconStyle} />
                        &nbsp;brian@briancarter.dev
                    </ExternalLink>
                </Col>
                <Col className={'py-2'} xs={12} sm={6} lg>
                    <ExternalLink to={'https://github.com/Carter-Development-LLC/ResumeUI'}>
                        <FontAwesomeIcon icon={faGithub} style={githubIconStyle} />
                        &nbsp;Source Code
                    </ExternalLink>
                </Col>
                <Col className={'py-2'} xs={12} sm={6} lg>
                    <ExternalLink to={'https://linkedin.com/in/brianrichardcarter'}>
                        <FontAwesomeIcon icon={faLinkedin} style={linkedInIconStyle} />
                        &nbsp;LinkedIn
                    </ExternalLink>
                </Col>
            </Row>
        </Container>
    );
};
