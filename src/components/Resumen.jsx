import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../docs/01_resumen_scaagu.md";

export default function Resumen() {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{resumen}</ReactMarkdown>
    </div>
  );
}

