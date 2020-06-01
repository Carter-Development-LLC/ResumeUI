import React from 'react';
import { Link } from 'react-router-dom';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
};

export const InternalLink = (props: LinkProps): React.ReactElement => {
    const { children, ...properties } = props;
    return <Link {...properties}>{children}</Link>;
};

export const InternalButtonLink = (props: LinkProps): React.ReactElement => {
    const { children, ...properties } = props;
    return (
        <Link style={{ color: 'inherit' }} {...properties}>
            {children}
        </Link>
    );
};

export const ExternalLink = (props: LinkProps): React.ReactElement => {
    const { children, to, ...properties } = props;
    return (
        <a
            className={'external-link'}
            href={to}
            rel={'noopener noreferrer'}
            target={'_blank'}
            {...properties}>
            {children}
        </a>
    );
};
