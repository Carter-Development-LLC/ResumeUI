import React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';

type OutlineButtonProps = ButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        light: boolean;
    };

export const OutlineButton = (
    props: OutlineButtonProps
): React.ReactElement => {
    const { light, ...properties } = props;
    let variant: ButtonProps['variant'] = 'outline-dark';
    if (light) variant = 'outline-light';

    return (
        <Button variant={variant} {...properties}>
            {props.children}
        </Button>
    );
};
