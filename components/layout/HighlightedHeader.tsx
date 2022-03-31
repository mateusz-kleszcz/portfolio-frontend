import React from "react";

interface highlightedHeaderProps {
  content: string;
}

const HighlightedHeader = ({ content }: highlightedHeaderProps) => {
  return (
    <div className="highlightedHeaderContainer">
      <div className="highlightedHeader">
        <h1>{content}</h1>
        <h1>{content}</h1>
      </div>
    </div>
  );
};

export default HighlightedHeader;
