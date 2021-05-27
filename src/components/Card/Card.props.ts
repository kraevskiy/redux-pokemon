import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  arg: any;
  click?: (arg: any) => void;
  img?: string;
  name: string;
}
