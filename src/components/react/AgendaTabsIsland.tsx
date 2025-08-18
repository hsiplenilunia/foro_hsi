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
          `Dra. María Enriqueta Baridó Murguía, Coordinadora de la Comisión de Infectología Quirúrgica de la Asociación Mexicana de Cirugía General. 
          <br/ >Dr. Samuel Ponce de León Rosales, Coordinador Programa Universitario de Investigación sobre Riesgos Epidemiológicos y Emergentes (PUIREE)
          <br/ >Dr. José Ignacio Santos Preciado, Presidente Comité Normativo Nacional de Consejos de Especialidades Médicas
          <br />Dr. Luis Fernando Pérez González, Jefe del Departamento de Pediatría UASLP.
          <br />Dr. Octavio González Chon, Director General de Médica Sur.`
      },
      {
        time: "09:35 - 10:05",
        title: "Conferencia Magistral",
        desc: "",
      },
      {
        time: "10:10 - 10:40",
        title: "Vacunación: un pilar en la lucha contra la resistencia bacteriana y las infecciones",
        desc: "Dr. Rafael Franco Cendejas, Subdirector de Investigación Biomédica del Instituto Nacional de Rehabilitación Luis Guillermo Ibarra Ibarra, INRLGII",
      },
      {
        time: "10:45 - 11:30",
        title: "Los beneficios de invertir en prevención en el ámbito hospitalario, y más allá.",
        desc: ` 
        <br/>Dr. Jorge Azpiri, Director de Desarrollo y Expansión de TecSalud,
        <br/>Dr. Octavio González Chon, Director General de Médica Sur,
        <br/>Ing. Roberto Bonilla, director corporativo de Grupo San Ángel Inn Dalinde,
        <br/><strong>Modera:</strong> Carlos Contreras, Colegio de Medicina Interna de México / American College of Physicians`,
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
          "Mtra. Martha Huertas, Subdirectora de Enfermería del Instituto Nacional de Ciencias Médicas y Nutrición,<br/> Universidad del Valle de México, <br/>Universidad Panamericana, <br/>UNITEC, <br/>Universidad La Salle,<br/>  <strong>Modera:</strong> Mtra. Margarita Torres, Presidenta Asociación Mexicana para el Estudio de las Infecciones Nosocomiales, AMEIN.",
      },
      {
        time: "12:50 - 13:20",
        title: "Conferencia: Uso de catéter y el riesgo de infecciones en procedimientos ambulatorios",
        desc: ``,
      },
      {
        time: "13:25 - 14:10",
        title: "Panel: El incremento de infecciones fúngicas durante y después de  COVID",
        desc: `Dra. Patricia Cornejo, Jefa del departamento de infectología del Instituto Nacional de Cancerología
        <br />Dra. Fernanda González Lara, Jefa del laboratorio de microbiología del Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán.
        <br /><strong>Modera:&nbsp;</strong>Dr. Alfredo Ponce de León, jefe de infectología del Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán`,
      },
      {
        time: "14:15 - 14:45",
        title: "Networking",
        desc: ``,
      },
      {
        time: "14:50 - 15:20",
        title: "Aguas residuales como elemento para estrategias de detección oportuna de brotes",
        desc: "Dra. Celia Alpuche, Especialista en enfermedades infecciosas",
      },
      {
        time: "15:25 - 15:55",
        title: "Conferencia: NOM 045, Actualización y retos",
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
        desc: ``,
      },
      {
        time: "09:00 - 09:30",
        title: "Conferencia Magistral",
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
        title: "Conferencia: Vigilancia del Consumo de Antimicrobianos, en el Sistema Global de Vigilancia de la Resistencia a los Antimicrobianos (GLASS)",
        desc: `Dra. Liliana Vargas Neri, jefa del Departamento de Investigación Epidemiológica
Hospital Infantil de México Federico Gómez`,
      },
      {
        time: "14:00 - 14:45",
        title: "Panel Infecciones invisibles, consecuencias visibles: la amenaza creciente de la resistencia bacteriana",
        desc:
          "Dra. Patricia Rodríguez Zulueta, Jefa de infectología, Hospital General Dr. Manuel Gea González <br/>Dr. Paulo Castañeda, Jefe de infectología Hospital Médica Sur",
      },
      {
        time: "14:50 - 15:35",
        title: "Panel: Las infecciones y el desequilibrio de la microbiota.",
        desc:`Dra. Rosa Salgado Brito, Directora de la Facultad de Ciencia y Tecnología Universidad Simón Bolivar,
        <br/>Dr. Max Julio Schmulson Wasserman, jefe de Unidad de Medicina Experimental, Hospital General de México`,
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
        <h2 className="font-bold text-center text-5xl mb-4">Programa Preliminar</h2>
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
