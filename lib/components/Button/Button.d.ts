import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize } from '../../config/sizes';
export declare type ButtonVariant = 'primary' | 'secondary' | 'text';
interface BaseButtonProps {
    variant?: ButtonVariant;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export declare type ButtonProps = HTMLButtonProps & BaseButtonProps;
declare const _default: React.ForwardRefExoticComponent<HTMLButtonProps & BaseButtonProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Button.d.ts.map