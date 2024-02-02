// Types
import { ReactNode } from 'react';
import { ViewProps } from 'tamagui';

export default interface ContainerProps {
  children?: ReactNode;
  props?: ViewProps;
}
