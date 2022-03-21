import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text Button',
  variant: 'text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size="large">Large</Button>
        <Button size="default">Default</Button>
        <Button size="small">Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant="text" size="large">
          Large
        </Button>
        <Button variant="text" size="default">
          Default
        </Button>
        <Button variant="text" size="small">
          Small
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant="secondary" size="large">
          Large
        </Button>
        <Button variant="secondary" size="default">
          Default
        </Button>
        <Button variant="secondary" size="small">
          Small
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button disabled size="large">
          Large
        </Button>
        <Button disabled size="default">
          Default
        </Button>
        <Button disabled size="small">
          Small
        </Button>
      </ButtonRow>
    </>
  );
};
