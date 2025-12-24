
import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  id: string;
  highlight?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  fullWidth?: boolean;
}
