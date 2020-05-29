import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
};

const LinkStyle: React.CSSProperties = {
    color: '#b0e0e6',
};

export const InternalLink = (props: LinkProps): React.ReactElement => {
    const { children, style, ...properties } = props;
    return (
        <Link style={{ ...LinkStyle, ...style }} {...properties}>
            {children}
        </Link>
    );
};

export const InternalButtonLink = (props: LinkProps): React.ReactElement => {
    const { children, ...properties } = props;
    return <Link style={{color: 'inherit'}} {...properties}>{children}</Link>;
};

export const ExternalLink = (props: LinkProps): React.ReactElement => {
    const { children, style, to, ...properties } = props;
    return (
        <a
            href={to}
            rel={'noopener noreferrer'}
            style={{ ...LinkStyle, ...style }}
            target={'_blank'}
            {...properties}>
            {children}
            &nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
    );
};
