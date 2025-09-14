import React from "react";

interface RenderTextWithEmailLinksProps {
  emailText: string;
  index: number;
  emailLinkClassName?: string;
  linkClassName?: string;
}

export const renderTextWithEmailLinks = ({
  emailText,
  index,
  emailLinkClassName,
  linkClassName,
}: RenderTextWithEmailLinksProps): React.ReactElement => {
  // Combined regex to match both emails and URLs
  const combinedRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|https?:\/\/[^\s]+)/g;
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  
  const parts = emailText.split(combinedRegex);

  return React.createElement(
    "p",
    { key: index },
    parts.map((part, partIndex) => {
      // Check if it's an email
      if (emailRegex.test(part)) {
        return React.createElement(
          "a",
          {
            key: partIndex,
            href: `mailto:${part}`,
            className: emailLinkClassName,
          },
          part
        );
      }
      
      // Check if it's a URL
      if (part.match(/^https?:\/\//)) {
        return React.createElement(
          "a",
          {
            key: partIndex,
            href: part,
            className: linkClassName,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          part
        );
      }
      
      // Return plain text
      return part;
    })
  );
};