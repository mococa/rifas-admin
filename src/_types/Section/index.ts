import { CardColor } from 'enums/colors';
import { Section as ESection } from 'enums/sections';

export interface ISection {
  label: string;
  id: keyof typeof ESection;
  color: keyof typeof CardColor;
  icon: JSX.Element;
}
