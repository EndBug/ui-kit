import type { KeyboardEvent, MouseEvent, ReactElement, ReactNode } from 'react';
import { useIntl, type MessageDescriptor } from 'react-intl';
import styled from '@emotion/styled';
import AccessibleButton from '@commercetools-uikit/accessible-button';
import CollapsibleMotion from '@commercetools-uikit/collapsible-motion';
import Card from '@commercetools-uikit/card';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import { CloseIcon } from '@commercetools-uikit/icons';
import { designTokens } from '@commercetools-uikit/design-system';

type TSettingsContainerProps = {
  title: MessageDescriptor & {
    values?: Record<string, React.ReactNode>;
  };
  closeButtonLabel: MessageDescriptor & {
    values?: Record<string, React.ReactNode>;
  };
  onClose: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
  primaryButton?: ReactElement;
  secondaryButton?: ReactElement;
  children: ReactNode;
  containerTheme?: 'light' | 'dark';
};

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const CardContentWrapper = styled.div`
  padding: ${designTokens.paddingForTableManagerSettingsPanel};
`;

const SettingsContainer = (props: TSettingsContainerProps) => {
  const intl = useIntl();

  return (
    <CollapsibleMotion isDefaultClosed={false}>
      {({ registerContentNode, containerStyles }) => (
        <Card type="raised" insetScale="none" theme={props.containerTheme}>
          <CardContentWrapper>
            <Spacings.Stack scale="xl">
              <HeaderContainer>
                <Text.Headline as="h2" intlMessage={props.title} />
                <AccessibleButton
                  onClick={props.onClose}
                  label={intl.formatMessage(props.closeButtonLabel)}
                >
                  <CloseIcon size="medium" />
                </AccessibleButton>
              </HeaderContainer>
              <Spacings.Stack scale="l">
                <Spacings.Inset scale="s">
                  <div style={containerStyles}>
                    <div ref={registerContentNode}>{props.children}</div>
                  </div>
                </Spacings.Inset>
                {(props.secondaryButton || props.primaryButton) && (
                  <Spacings.Inline justifyContent="flex-end">
                    {props.secondaryButton}
                    {props.primaryButton}
                  </Spacings.Inline>
                )}
              </Spacings.Stack>
            </Spacings.Stack>
          </CardContentWrapper>
        </Card>
      )}
    </CollapsibleMotion>
  );
};

SettingsContainer.displayName = 'SettingsContainer';

const defaultProps: Pick<TSettingsContainerProps, 'containerTheme'> = {
  containerTheme: 'dark',
};
SettingsContainer.defaultProps = defaultProps;

export default SettingsContainer;
