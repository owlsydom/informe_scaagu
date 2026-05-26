import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../../docs_scaagu/01_resumen_scaagu.md?raw";
import marco from "../../docs_scaagu/02_marco_scaagu.md?raw";
import delitos from "../../docs_scaagu/03_delitos_scaagu.md?raw";
import comparacion from "../../docs_scaagu/04_comparacion_scaagu.md?raw";
import responsabilidades from "../../docs_scaagu/05_responsabilidades_scaagu.md?raw";
import datos from "../../docs_scaagu/06_datos_scaagu.md?raw";
import conclusiones from "../../docs_scaagu/07_conclusiones_scaagu.md?raw";
import prompts from "../../docs_scaagu/08_prompts_scaagu.md?raw";

const sections = [
  { id: "resumen", title: "Resumen", content: resumen },
  { id: "marco", title: "Marco", content: marco },
  { id: "delitos", title: "Delitos", content: delitos },
  { id: "comparacion", title: "Comparación", content: comparacion },
  { id: "responsabilidades", title: "Responsabilidades", content: responsabilidades },
  { id: "datos", title: "Datos", content: datos },
  { id: "conclusiones", title: "Conclusiones", content: conclusiones },
  { id: "prompts", title: "Prompts", content: prompts },
];

export default function Informe() {
  return (
    <div className="informe-page">
      <header className="page-header">
        <h1 className="page-title">Hackeo empresa IFX Networks</h1>
      </header>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="markdown-section">
          <h2>{section.title}</h2>
          <div className="markdown-container">
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        </section>
      ))}
    </div>
  );
}
