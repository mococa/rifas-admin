// External
import React from 'react';

// Components
import { Button } from 'components/Button';
import { RoundButton } from 'components/RoundButton';

// Icons
import { MdClose } from 'react-icons/md';

// Types
import { DialogProps } from '_types/Dialog';

// Styles
import {
  DialogBodyContainer,
  DialogContainer,
  DialogFooter,
  DialogHeaderContainer,
  DialogParentContainer,
} from './styles';

export const Dialog: React.FC<DialogProps> = ({
  title,
  body,
  buttons,
  onClose,
  showCross,
}) => {
  return (
    <DialogParentContainer>
      <DialogContainer>
        <DialogHeaderContainer>
          {title}
          {showCross && (
            <RoundButton onClick={onClose}>
              <MdClose />
            </RoundButton>
          )}
        </DialogHeaderContainer>
        <DialogBodyContainer>{body}</DialogBodyContainer>
        <DialogFooter>
          {buttons?.map((button) => (
            <Button
              key={button.text}
              color={button.color || 'white500'}
              onClick={async () => {
                if (button.onClick) await button.onClick();
                if (onClose) onClose();
              }}
            >
              {button.text}
            </Button>
          ))}
        </DialogFooter>
      </DialogContainer>
    </DialogParentContainer>
  );
};
