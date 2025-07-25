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
          "Participa Autoridades, Consejo Técnico y directivos de Médica Sur.",
      },
      {
        time: "09:30 - 10:00",
        title: "Conferencia Magistral",
        desc:
          "Consejo de Salubridad General.",
      },
      {
        time: "10:00 - 10:30",
        title: "Conferencia: La leche materna en la prevención de IAAS. Caso de estudio.",
        desc:
          "",
      },
      {
        time: "10:30 - 11:15",
        title: "Panel: Ahorros por prevención de IAAS más allá del hospital",
        desc: `Asociación Nacional de Hospitales Privados, Asociación de Hospitales Privados de Jalisco, Dr. Jorge Azpiri, TecSalud
<br/> <strong>Modera:</strong> Centro de Investigación Económica y Presupuestaria, CIEP`,
      },
      {
        time: "11:15 - 11:45",
        title: "Networking",
        desc: ``,
      },
      {
        time: "11:45 - 12:30",
        title: "Panel: El papel de la enfermería en la prevención de infecciones intrahospitalarias",
        desc:
          "Dra. Gudelia Bautista (Centro Médico ABC), Mtra. Martha Huertas (INCMNSZ),<br/> Mtra. Fabiola Casas, Mtra. Rosa Amarilis Zárate (FENO UNAM) <br/> <strong>Modera:</strong> Mtra. Margarita Torres, AMEIN.",
      },
      {
        time: "12:30 - 13:00",
        title: "Conferencia: Uso de catéter y el riesgo de infecciones en procedimientos ambulatorios",
        desc: "",
      },
      {
        time: "13:00 - 13:45",
        title: "Panel: El incremento de infecciones fúngicas en la era post COVID",
        desc:
          "",
      },
      {
        time: "13:45 - 14:15",
        title: "Aguas residuales como elemento para estrategias de detección oportuna de brotes",
        desc:
          "",
      },
      {
        time: "14:15 - 14:45",
        title: "Conferencia: Actualización de NOM 045 sobre vigilancia epidemiológica",
        desc: "Miguel Ángel Lezana, titular Dirección General de Epidemiología",
      },
      {
        time: "14:45 - 15:00",
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
        time: "09:30 - 10:15",
        title: "Panel: El riesgo de sobre prescripción de antibióticos en consultorios externos",
        desc:
          "FUNSALUD, <br/>Asociación Mexicana para el Estudio de las Infecciones Nosocomiales, <br/>Programa Universitario de Investigación sobre Riesgos Epidemiológicos y Emergentes, PUIREE UNAM <br/> <strong>Modera:</strong> Universidad",
      },
      {
        time: "10:15 - 10:45",
        title: "Conferencia: Cómo trabajar más y mejor en sitio quirúrgico contra las IAAS",
        desc:
          "Dr. Antonio Ramos-De la Medina, Hospital Español de Veracruz.",
      },
      {
        time: "10:45 - 11:15",
        title: "Networking",
        desc: "",
      },
      {
        time: "11:15 - 12:00",
        title: "Panel",
        desc: "Por definir.",
      },
      {
        time: "12:00 - 12:30",
        title: "Conferencia: La vacunación como instrumento coadyuvante preventivo a la Resistencia Antimicrobiana",
        desc: "",
      },
      {
        time: "12:30 - 13:15",
        title: "Panel: La vigilancia de enfermedades zoonóticas",
        desc: `SENASICA<br/>
Instituto Farmacéutico Veterinario <br/>
<strong>Modera:</strong> Universidad (Facultad de Veterinaria)`,
      },
      {
        time: "13:15 - 13:30",
        title: "Networking",
        desc: "",
      },
      {
        time: "13:30 - 14:00",
        title: "Conferencia: La importancia de una política pública en Infecciones Asociadas a la Atención de la Salud",
        desc:
          "",
      },
      {
        time: "14:00 - 14:45",
        title: "Panel: Programa de Optimización de antibióticos en Hospitales",
        desc:
          "Ponentes: Dr. Michel Martínez (TecSalud). Representantes hospitalarios.",
      },
      {
        time: "14:45 - 15:30",
        title: "Control ambiental microbiano en áreas críticas hospitalarias",
        desc:
          "Especialista por definir. <br/><strong>Modera:</strong> Santiago March, FUNSALUD.",
      },
      
      {
        time: "15:30",
        title: "Acto de clausura y brindis",
        desc:
          "Autoridades, Directivos Médica Sur, Hospitales sin Infecciones.",
      },
    ],
  },
];

export default function AgendaTabsIsland() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPanels, setExpandedPanels] = useState(
    agendaData.map((day) => day.events.map(() => false))
  );
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const handleTabClick = (idx: number) => {
    if (idx === activeTab) return;
    setFadeState('out');
    setTimeout(() => {
      setActiveTab(idx);
      setExpandedPanels(agendaData.map((day) => day.events.map(() => false)));
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
