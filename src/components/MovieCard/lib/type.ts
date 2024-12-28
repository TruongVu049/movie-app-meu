import React from "react";
import { LinkProps } from "react-router-dom";

export type MovieCardProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

export type MovieCardTitleProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
};

export type MovieCardImageProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  url: string;
};
