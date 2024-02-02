// Types
import { ReactNode } from 'react';

export interface SettingOptionProps {
  children?: ReactNode;
}

export interface SettingOptionRootProps extends SettingOptionProps {
  label: string;
}

export interface SettingOptionRedirectProps extends SettingOptionProps {
  text?: string;
}
