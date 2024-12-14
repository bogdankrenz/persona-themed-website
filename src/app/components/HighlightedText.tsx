import React from "react";

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  return <span className="text-white mix-blend-difference">{text}</span>;
};

export default HighlightedText;
