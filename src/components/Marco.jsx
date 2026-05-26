import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../../docs_scaagu/02_marco_scaagu.md?raw";

export default function Resumen() {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{resumen}</ReactMarkdown>
    </div>
  );
}