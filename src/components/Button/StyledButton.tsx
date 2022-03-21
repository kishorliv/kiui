import styled from 'styled-components';

import { ButtonVariant } from '.';
import { ComponentSize } from '../../config/sizes';

type StateColors = {
  hue: string;
  saturation: string;
  lightness: string;
  hueBottom: string;
  saturationBottom: string;
  lightnessBottom: string;
};

const typeColors: { [key in ButtonVariant]: StateColors } = {
  primary: {
    hue: '340deg',
    saturation: '100%',
    lightness: '32%',
    hueBottom: '345deg',
    saturationBottom: '100%',
    lightnessBottom: '47%',
  },
  secondary: {
    hue: '340deg',
    saturation: '100%',
    lightness: '32%',
    hueBottom: '345deg',
    saturationBottom: '100%',
    lightnessBottom: '47%',
  },
  text: {
    hue: '340deg',
    saturation: '100%',
    lightness: '32%',
    hueBottom: '345deg',
    saturationBottom: '100%',
    lightnessBottom: '47%',
  },
};

interface StyledButtonProps {
  variant: ButtonVariant;
  size: ComponentSize;
  withText: boolean;
  disabled: boolean;
}

export const StyledButtonFrontSpan = styled.span<StyledButtonProps>`
  display: block;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  transform: translateY(-6px);
  padding: 12px 42px;

  background: ${(props) =>
    `hsl(${typeColors[props.variant].hueBottom} ${typeColors[props.variant].saturationBottom} ${
      typeColors[props.variant].lightnessBottom
    })`};

  & > *:nth-child(1) {
    margin-left: ${(props) => (props.withText ? 7 : 0)}px;
  }

  ${(props) =>
    props.disabled
      ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;
        transform: translateY(-2px);
        `
      : ''}
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  background: ${(props) =>
    `hsl(${typeColors[props.variant].hue} ${typeColors[props.variant].saturation} ${
      typeColors[props.variant].lightness
    })`};

  ${(props) =>
    props.disabled
      ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;
        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `
      : ''}

  &:active ${StyledButtonFrontSpan} {
    transform: translateY(-2px);
  }
`;

export const StyledIcon = styled.div`
  height: 20px;
`;
