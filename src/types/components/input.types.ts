// Types
import { ReactNode } from 'react';

export interface InputProps {
  id: string;
  label: string;
  defaultValue: string;
  children?: ReactNode;
  onChangeText?: ((text: string) => void) | undefined;
}
