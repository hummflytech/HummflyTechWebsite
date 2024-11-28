import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // Optional utility for className merging

type CustomButtonProps = {
  as?: "button" | "a";
  variant?: "default" | "outline" | "primary"; 
  rounded?: string; 
  className?: string; 
  children: React.ReactNode; 
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) 
);

const CustomButton: React.FC<CustomButtonProps> = ({
  as = "button",
  variant = "default",
  rounded = "rounded-lg",
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90 border border-primary",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    primary: "bg-primary text-white hover:bg-primary/90",
  };

  const combinedClasses = cn(baseClasses, variants[variant], rounded, className);

  // Render <a> with valid anchor attributes
  if (as === "a") {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  // Render <button> with valid button attributes
  return (
    <button className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default CustomButton;
