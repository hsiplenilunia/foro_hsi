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
          "Participan autoridades, Consejo Técnico y directivos de Médica Sur. Modera: Maribel Ramírez Coronel.",
      },
      {
        time: "09:30 - 10:00",
        title: "Conferencia Magistral: Plan de Acción Mundial y Marco de Monitoreo",
        desc:
          "Programa de Control de Infecciones y Centro de Colaboración de la OMS.",
      },
      {
        time: "10:00 - 10:45",
        title: "Panel: El potencial en ahorros por prevención de IAAS",
        desc:
          "Participan Dirección General de Epidemiología, ANHP, Hospitales de Jalisco y CIEP. Modera: Mtra. Mariana Barraza Lloréns.",
      },
      {
        time: "10:45 - 11:15",
        title: "Conferencia",
        desc: "Por definir.",
      },
      {
        time: "11:40 - 12:25",
        title: "Panel: El papel de la enfermería en la toma de decisiones preventivas IAAS-RAM",
        desc:
          "Dra. Gudelia Bautista, Mtra. Juanita Jiménez, Mtra. Fabiola Casas, Mtra. Margarita Torres. Modera: Maribel Ramírez Coronel.",
      },
      {
        time: "12:25 - 12:55",
        title: "Conferencia: Uso de catéter y el riesgo de infecciones en procedimientos ambulatorios",
        desc: "Especialista por definir.",
      },
      {
        time: "13:15 - 14:00",
        title: "Panel: El incremento de infecciones fúngicas en la era post COVID",
        desc:
          "IMSS Bienestar / Dr. Alejandro Sassoe, Dr. Eric Ochoa / INCMNSZ.",
      },
      {
        time: "14:00 - 14:30",
        title: "Conferencia: La leche materna en la prevención de IAAS",
        desc:
          "Dr. Iván Castillo, Jefe de Epidemiología Christus Muguerza Alta Especialidad.",
      },
      {
        time: "14:30 - 14:40",
        title: "Conclusiones y cierre del día",
        desc: "Hospitales sin Infecciones",
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
        time: "09:00 - 09:45",
        title: "Panel: Prescripción de antibióticos en Consultorios Adyacentes a Farmacias (CAF's)",
        desc:
          "FUNSALUD, Dr. Miguel Ángel González Block, AMEIN, PUIREE UNAM. Modera: Dr. Samuel Ponce de León.",
      },
      {
        time: "09:45 - 10:15",
        title: "Conferencia: Cómo trabajar más y mejor en sitio quirúrgico contra las IAAS",
        desc:
          "Dr. Antonio Ramos-De la Medina, Hospital Español de Veracruz.",
      },
      {
        time: "10:15 - 11:00",
        title: "Panel",
        desc: "Por definir.",
      },
      {
        time: "11:20 - 11:50",
        title: "Conferencia: La vacunación como instrumento coadyuvante preventivo a la Resistencia Antimicrobiana",
        desc: "",
      },
      {
        time: "11:50 - 12:35",
        title: "Panel: Tecnología e inteligencia artificial en Infecciones Intrahospitalarias (IAAS)",
        desc: "Dr.Gustavo Ross y especialistas de Harvard & MIT.",
      },
      {
        time: "12:35 - 13:05",
        title: "Conferencia: La vigilancia de enfermedades zoonóticas",
        desc:
          "SENASICA, Instituto Farmacéutico Veterinario, Facultades de Veterinaria.",
      },
      {
        time: "13:05 - 13:50",
        title: "Panel: Programa de Optimización de antibióticos en Hospitales",
        desc:
          "Ponentes: Dra. Anahí Dresser (INSP), Dr. Michel Martínez (TecSalud). Representantes hospitalarios.",
      },
      {
        time: "13:50 - 14:20",
        title: "Panel: Las infecciones y el desequilibrio de la microbiota",
        desc:
          "Especialista por definir. Modera: Santiago March, FUNSALUD.",
      },
      {
        time: "14:20 - 14:40",
        title: "Dinámica interactiva",
        desc: "Por definir.",
      },
      {
        time: "14:40 - 15:10",
        title: "Conferencia: La importancia de una política pública en Infecciones Intrahospitalarias.",
        desc: "Ponente por definir.",
      },
      {
        time: "15:10",
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

  const handleTabClick = (idx: number) => {
    console.log(`Tab ${idx} clicked`);
    setActiveTab(idx);
    // Al cambiar de tab, colapsar todos los paneles de todos los días
    setExpandedPanels(agendaData.map((day) => day.events.map(() => false)));
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
    <section className="font-sans p-8 bg-white text-black" id="hsi-agenda">
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
                activeTab === idx ? "bg-[#3b7d42]" : "hover:bg-blue-700"
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
        {/* Only render the active tab's content */}
        <section
          aria-labelledby={`tab-${agendaData[activeTab].id}`}
          className="block"
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
                <p className="text-base leading-relaxed m-0">
                  {event.desc}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
