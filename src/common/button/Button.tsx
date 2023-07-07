import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "filled" | "outlined";
  className?: string;
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  btnWidth?: string;
}

function Button({
  variant = "filled",
  className,
  textColor,
  borderColor,
  bgColor,
  btnWidth,
  children,
  ...rest
}: ButtonProps) {

  const buttonStyle = {
    color: textColor,
    borderColor: borderColor,
    backgroundColor: variant === "filled" ? bgColor : "transparent",
    "--button-width": btnWidth,
  } as React.CSSProperties;

  return (
    <button className={`button ${variant} ${className}`} style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
