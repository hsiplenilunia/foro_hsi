import React, { useState } from "react";

const agendaData = [
  {
    label: "Día 1",
    id: "agenda-dia1",
    events: [
      {
        time: "09:00 - 09:30",
        title: "Acto Inaugural",
        desc:
          "Participa Consejo Técnico y directivos de Médica Sur.",
      },
      {
        time: "09:35 - 10:05",
        title: "Conferencia Magistral",
        desc:
          "",
      },
      {
        time: "10:10 - 10:40",
        title: "La vacunación como instrumento coadyuvante preventivo a la Resistencia Antimicrobiana",
        desc: "",
      },
      {
        time: "10:45 - 11:30",
        title: "Los beneficios de invertir en prevención en el ámbito hospitalario, y más allá.",
        desc: `Asociación Nacional de Hospitales Privados, 
        <br/> Asociación de Hospitales Particulares de Jalisco, 
        <br/>Dr. Jorge Azpiri, Director de Desarrollo y Expansión de TecSalud,
        <br/>Dra. Judith Mendez, Directora adjunta de investigación y especialista en salud y finanzas públicas del Centro de Investigación Económica y Presupuestaria (CIEP)
<br/> <strong>Modera:</strong> Carlos Contreras, Experto en prevención y salud ocupacional`,
      },
      {
        time: "11:35 - 11:55",
        title: "Networking",
        desc: ``,
      },
      {
        time: "12:00 - 12:45",
        title: "Panel: El papel de la enfermería en la prevención de infecciones intrahospitalarias",
        desc:
          "Mtra. Martha Huertas, Subdirectora de Enfermería del Instituto Nacional de Ciencias Médicas y Nutrición,<br/> Universidad del Valle de México, <br/>Universidad Panamericana, <br/>UNITEC, <br/>Universidad La Salle,  <strong>Modera:</strong> Mtra. Margarita Torres, AMEIN.",
      },
      {
        time: "12:50 - 13:20",
        title: "Conferencia: Uso de catéter y el riesgo de infecciones en procedimientos ambulatorios",
        desc: "",
      },
      {
        time: "13:25 - 14:10",
        title: "Panel: El incremento de infecciones fúngicas en la era post COVID",
        desc:"",
      },
      {
        time: "14:15 - 14:45",
        title: "Networking",
        desc:
          "",
      },
      {
        time: "14:50 - 15:20",
        title: "Aguas residuales como elemento para estrategias de detección oportuna de brotes",
        desc: "Dra. Celia Alpuche",
      },
      {
        time: "15:25 - 15:55",
        title: "Conferencia: NOM045: actualización y retos",
        desc: "Dr. Miguel Ángel Lezana, titular Dirección General de Epidemiología",
      },
      {
        time: "15:25 - 15:55",
        title: "Conclusiones y cierre",
        desc: "Hospital sin infecciones",
      },
    ],
  },
  {
    label: "Día 2",
    id: "agenda-dia2",
    events: [
      {
        time: "08:30 - 09:00",
        title: "Registro y bienvenida",
        desc: "",
      },
      {
        time: "09:00 - 09:30",
        title: "Conferencia",
        desc: "Prof. Victor D. Rosenthal, MD, PhD <br> Fundador y CEO, International Nosocomial Infection Control Consortium (INICC). ",
      },
      {
        time: "09:35 - 10:20",
        title: "Panel: Detección de brotes y manejo de resistencias bacterianas utilizando soluciones IT",
        desc:
          "",
      },
      {
        time: "10:25 - 10:55",
        title: "Conferencia: Cómo trabajar más y mejor en sitio quirúrgico contra las IAAS",
        desc:
          "Dr. Antonio Ramos-De la Medina, Director de Investigación del Centro México del Global Surgery Unit del Instituto Nacional de Investigación en Salud del Reino Unido (NIHR).",
      },
      {
        time: "11:00 - 11:20",
        title: "Networking",
        desc: "",
      },
      {
        time: "11:25 - 12:10",
        title: "Panel",
        desc: "Por definir.",
      },
      {
        time: "12:15 - 12:45",
        title: "Conferencia:",
        desc: "Por definir.",
      },
      {
        time: "12:50 - 13:20",
        title: "Networking",
        desc: ``,
      },
      {
        time: "13:25 - 13:55",
        title: "Conferencia",
        desc: `Dra. Liliana Vargas Neri, jefa del Departamento de Investigación Epidemiológica
Hospital Infantil de México Federico Gómez`,
      },
      {
        time: "14:00 - 14:45",
        title: "Panel: Programas de Optimización de Antimicrobianos en Hospitales",
        desc:
          "Dr. Paulo Castañeda, Jefe de infectología Hospital Médica Sur",
      },
      {
        time: "14:50 - 15:35",
        title: "Panel: Las infecciones y el desequilibrio de la microbiota.",
        desc:
          "",
      },
      {
        time: "15:40",
        title: "Acto de clausura",
        desc:
          "",
      },
    
    ],
  },
];

export default function AgendaTabsIsland() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPanels, setExpandedPanels] = useState(
    agendaData.map((day) => day.events.map(() => true))
  );
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const handleTabClick = (idx: number) => {
    if (idx === activeTab) return;
    setFadeState('out');
    setTimeout(() => {
      setActiveTab(idx);
      setExpandedPanels(agendaData.map((day) => day.events.map(() => true)));
      setFadeState('in');
    }, 250); // Duración del fadeOut
  };

  const handleToggle = (eventIdx: number) => {
    setExpandedPanels((prev) => {
      const newPanels = prev.map((dayPanels, i) =>
        i === activeTab
          ? dayPanels.map((expanded, j) =>
              j === eventIdx ? !expanded : expanded
            )
          : dayPanels
      );
      return newPanels;
    });
  };

  return (
    <section className="font-sans p-8 text-black-text" id="hsi-agenda">
      <header className="mb-8">
        <h2 className="font-bold text-center text-5xl mb-4">Programa Foro 2025</h2>
        <nav
          aria-label="Selector de día"
          className="flex justify-center gap-4 mb-6 flex-wrap"
          role="tablist"
        >
          {agendaData.map((tab, idx) => (
            <button
              key={tab.id}
              aria-controls={tab.id}
              aria-selected={activeTab === idx}
              className={`bg-[#002b5c] text-white border-none px-6 py-3 text-3xl rounded cursor-pointer transition-colors ${
                activeTab === idx ? "bg-[#3b7d42]" : "hover:bg-celeste-hsi"
              }`}
              id={`tab-${tab.id}`}
              role="tab"
              onClick={() => handleTabClick(idx)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      <div className="relative">
        {/* Only render the active tab's content with fade transition */}
        <section
          aria-labelledby={`tab-${agendaData[activeTab].id}`}
          className={`block transition-opacity duration-300 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}
          id={agendaData[activeTab].id}
          role="tabpanel"
        >
          {agendaData[activeTab].events.map((event, eventIdx) => (
            <article
              key={`${activeTab}-${eventIdx}`}
              className="border-l-4 border-[#56c4f2] bg-[#f9fbfc] mb-4 p-3 rounded"
            >
              <button
                aria-controls={`panel-${agendaData[activeTab].id}-${eventIdx}`}
                aria-expanded={expandedPanels[activeTab] ? expandedPanels[activeTab][eventIdx] : false}
                className="w-full text-left cursor-pointer bg-transparent border-none p-0 md:pointer-events-none"
                onClick={() => handleToggle(eventIdx)}
              >
                <time className="block font-bold text-[#002b5c] text-2xl">
                  {event.time}
                </time>
                <h3 className="text-[#002b5c] text-xl font-semibold my-1">
                  {event.title}
                </h3>
              </button>
              <div
                className={`pt-2 md:block ${expandedPanels[activeTab] && expandedPanels[activeTab][eventIdx] ? 'block' : 'hidden'} md:!block`}
                id={`panel-${agendaData[activeTab].id}-${eventIdx}`}
              >
                <p
                  className="text-base leading-relaxed m-0"
                  dangerouslySetInnerHTML={{ __html: event.desc }}
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
