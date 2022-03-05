import { Button } from "components/Button";
import { RoundButton } from "components/RoundButton";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { DialogProps } from "_types/Dialog";

import {
  DialogBodyContainer,
  DialogContainer,
  DialogFooter,
  DialogHeaderContainer,
  DialogParentContainer,
} from "./styles";

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
              onClick={async () => {
                if (button.onClick) await button.onClick();
                if (onClose) onClose();
              }}
            //   variant={button.variant || "text"}
            >
              {button.text}
            </Button>
          ))}
        </DialogFooter>
      </DialogContainer>
    </DialogParentContainer>
  );
};
