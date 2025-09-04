import React from "react";
import Link from "next/link";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "outline";
  target?: "_blank" | "_self";
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  href,
  type = "button",
  styleType = "primary",
  target = "_self",
  text,
  className = "",
  onClick,
}) => {
  const btnClassName = `${styles.button} ${styles[`button--${styleType}`]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={btnClassName}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={btnClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;