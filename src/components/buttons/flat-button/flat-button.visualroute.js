import React from 'react';
import FlatButton from '@commercetools-frontend/ui-kit/dist/esm/FlatButton';
import InformationIcon from '@commercetools-frontend/ui-kit/dist/esm/InformationIcon';
import { Suite, Spec } from '../../../../test/percy';

export const routePath = '/flat-button';

export const component = () => (
  <Suite>
    <Spec label="regular">
      <FlatButton tone="primary" label="A label text" onClick={() => {}} />
    </Spec>
    <Spec label="disabled">
      <FlatButton
        tone="primary"
        label="A label text"
        onClick={() => {}}
        isDisabled={true}
      />
    </Spec>
    <Spec label="with icon left (default)">
      <FlatButton
        tone="primary"
        label="A label text"
        onClick={() => {}}
        icon={<InformationIcon />}
      />
    </Spec>
    <Spec label="with icon right">
      <FlatButton
        tone="primary"
        label="A label text"
        onClick={() => {}}
        icon={<InformationIcon />}
        iconPosition="right"
      />
    </Spec>
    <Spec label="secondary">
      <FlatButton
        tone="secondary"
        label="A label text"
        onClick={() => {}}
        icon={<InformationIcon />}
      />
    </Spec>
  </Suite>
);
