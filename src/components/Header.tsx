import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { InternalLink } from '../utilities/Links';

export default (props: any): React.ReactElement => {
    const linkStyle: React.CSSProperties = {
        textTransform: 'uppercase',
    }

    return (
        <Navbar bg={'dark'} expand={'sm'} fixed='top' variant={'dark'}>
            <InternalLink to={'/'}>
                <Navbar.Brand>
                    <img
                        src={
                            process.env.PUBLIC_URL + '/media/profile-circle.png'
                        }
                        alt={"Brian Carter's profile"}
                        width='60'
                        height='60'
                    />
                    &nbsp;Brian Carter
                </Navbar.Brand>
            </InternalLink>
            <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
            <Navbar.Collapse
                id={'basic-navbar-nav'}
                className={'justify-content-end'}>
                <InternalLink className={'nav-link'} style={linkStyle} to={'/about'}>
                    About
                </InternalLink>
                <InternalLink className={'nav-link'} style={linkStyle} to={'/resume'}>
                    Resume
                </InternalLink>
                <InternalLink className={'nav-link'} style={linkStyle} to={'/contact'}>
                    Contact
                </InternalLink>
            </Navbar.Collapse>
        </Navbar>
    );
};
