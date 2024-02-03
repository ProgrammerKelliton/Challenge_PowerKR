// Types
import { ReactNode } from 'react';
import { InputProps as TextInputProps } from 'tamagui';

export interface InputProps {
  id: string;
  label: string;
  defaultValue: string;
  children?: ReactNode;
  onChangeText?: ((text: string) => void) | undefined;
  props?: TextInputProps;
}
