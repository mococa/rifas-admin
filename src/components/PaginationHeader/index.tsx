// External
import React from 'react';

// Icons
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

// Components
import { RoundButton } from 'components/RoundButton';

// Styles
import { PaginationHeaderContainer } from './styles';

// Interfaces
interface Props {
  onNext(): void;
  onPrevious(): void;
  pagesCount: number;
  currentPage: number;
}

export const PaginationHeader: React.FC<Props> = ({
  onNext,
  onPrevious,
  pagesCount,
  currentPage,
}) => {
  return (
    <PaginationHeaderContainer>
      <div>
        <RoundButton onClick={onPrevious} disabled={currentPage === 0}>
          <MdOutlineNavigateBefore />
        </RoundButton>
        <RoundButton onClick={onNext} disabled={currentPage >= pagesCount - 1}>
          <MdOutlineNavigateNext />
        </RoundButton>
      </div>

      <span>
        Pág. {currentPage + 1}/{pagesCount}
      </span>
    </PaginationHeaderContainer>
  );
};
