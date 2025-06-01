import React from "react";
import Link from "next/link";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  href,
  type = "button",
  styleType = "primary",
  children,
  onClick,
}) => {
  const className = `${styles.button} ${styles[`button--${styleType}`]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;