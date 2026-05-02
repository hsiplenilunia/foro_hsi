import React, { useState } from "react";

const agendaData = [
  {
    label: "DÍA 1 | 27 DE AGOSTO",
    id: "agenda-dia1",
    day: "27",
    month: "AGOSTO",
    events: [
      {
        time: "9:00 - 9:30",
        type: "APERTURA",
        title: "Academia y sociedad civil: trabajando juntos contra las infecciones resistentes",
        title: "trabajando juntos",
        title: "contra las infecciones resistentes",
        isNetworking: false,
        participants: `<span class="block font-bold text-[#3aaa5c]">Consejo Técnico Hospitales sin Infecciones</span>
          Dra. Mercedes Juan López<br/>
          Dra. María Enriqueta Baridó Murguía<br/>
          Dr. José Ignacio Santos Preciado<br/>
          Dr. Samuel Ponce de León Rosales<br/>
          Dr. Luis Fernando Pérez<br/>
          Dra. Daniela de la Rosa Zamboni<br/>
          Dra. Juana Jiménez Sánchez<br/>
          Dr. Paulo Castañeda<br/>
          Mtra. Enf. Martha A. Huertas Jiménez<br/>
          Dra. Isabel Villegas Mota<br/>
          Dra. Liliana Vargas Neri<br/>
          Maribel Ramírez Coronel`,
      },
      {
        time: "9:30 - 10:00",
        type: "CONFERENCIA MAGISTRAL",
        title: "Gobernanza y seguridad clínica: el sistema mexicano ante la Resistencia a los Antibióticos",
        isNetworking: false,
        participants: `Dra. Patricia Clark<br/><span class="text-gray-500">(CSG)</span>`,
      },
      {
        time: "10:00 - 10:30",
        type: "CONFERENCIA",
        title: "¿Quién paga la factura de las infecciones hospitalarias? Impacto en aseguradoras y pacientes",
        isNetworking: false,
        participants: `AMIS, AMASFAC<br/>Directores de siniestros<br/><span class="text-gray-500">(AXA | GNP)</span>`,
      },
      {
        time: "10:30 - 11:15",
        type: "PANEL",
        title: "¿Qué incentivos hacen faltan para invertir en prevención de infecciones?",
        isNetworking: false,
        participants: `Médica Sur, San Ángel Inn, CMH, Asociación de Hospitales Privados de Jalisco.<br/>
          Directores de siniestros (AXA | GNP)<br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          CMECAC<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },
      {
        time: "11:45 - 12:30",
        type: "PANEL",
        title: "Diagnóstico rápido: cómo la inteligencia de datos puede salvar vidas y bajar costos",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "12:30 - 13:15",
        type: "PANEL",
        title: "El impacto de la vacunación en la Resistencia Antimicrobiana",
        isNetworking: false,
        participants: `Dr. Rafael Franco Cendejas<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          CMECAC<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "13:15 - 14:00",
        type: "PANEL",
        title: "Zonas de alto riesgo: el costo de un error en Cuidados Intensivos y quirófano",
        isNetworking: false,
        participants: `Sepsis México, Academia Mexicana de Cirugía<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },
      {
        time: "14:30 - 15:15",
        type: "PANEL:",
        title: "Vigilancia epidemiológica 360. Modelo Una Salud en México: Integración multisectorial",
        isNetworking: false,
        participants: `Nombre<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          INVIFAR<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "15:15 - 15:30",
        type: "PANEL:",
        title: "¿Porque las farmacéuticas ya no desarrollan antibióticos? Innovación disruptiva contra infecciones difíciles de tratar.",
        isNetworking: false,
        participants: `Nombre<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          CANIFARMA / AMIIF / AMEPRES<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
    ],
  },
  {
    label: "DÍA 2 | 28 DE AGOSTO",
    id: "agenda-dia2",
    day: "28",
    month: "AGOSTO",
    events: [
      {
        time: "08:30 - 09:00",
        type: "REGISTRO",
        title: "Registro y bienvenida",
        isNetworking: false,
        participants: "",
      },
      {
        time: "09:00 - 09:30",
        type: "CONFERENCIA",
        title: "Desafío del Manejo del Paciente con Sepsis",
        isNetworking: false,
        participants: `Dr. Miguel Ángel Flores<br/><span class="text-gray-500">Especialista en Soporte Multiorgánico</span>`,
      },
      {
        time: "09:45 - 10:30",
        type: "PANEL",
        title: "Detección de brotes y manejo de resistencias bacterianas utilizando soluciones IT",
        isNetworking: false,
        participants: `Dr. Edgar González Villalobos<br/>
          <span class="text-gray-500">Profesor Depto. Salud Pública, Facultad de Medicina UNAM</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Dra. Liliana Vargas Neri<br/>
          <span class="text-gray-500">Hospital Infantil de México Federico Gómez</span>`,
      },
      {
        time: "10:35 - 11:05",
        type: "CONFERENCIA",
        title: "Investigación y prevención de infecciones de sitio quirúrgico en países de bajos y medianos ingresos",
        isNetworking: false,
        participants: `Dr. Antonio Ramos-De la Medina<br/>
          <span class="text-gray-500">Director de Investigación, Centro México, Global Surgery Unit, NIHR</span>`,
      },
      {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },
      {
        time: "11:35 - 12:20",
        type: "PANEL",
        title: "Infecciones invisibles, consecuencias visibles: la amenaza creciente de la resistencia bacteriana.",
        isNetworking: false,
        participants: `Dra. Patricia Rodríguez Zulueta<br/>
          <span class="text-gray-500">Jefa de infectología, Hospital General Dr. Manuel Gea González</span><br/>
          Dr. Paulo Castañeda<br/>
          <span class="text-gray-500">Jefe de infectología, Hospital Médica Sur</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Mtra. Juanita Jiménez<br/>
          <span class="text-gray-500">Red Latinoamericana de Enfermería, Secretaría de Salud</span>`,
      },
      {
        time: "12:25 - 12:55",
        type: "CONFERENCIA",
        title: "Uso y prescripción de antibióticos en consultorios externos.",
        isNetworking: false,
        participants: `Dra. Daniela de la Rosa<br/>
          <span class="text-gray-500">Líder de Resistencia Antimicrobiana, CENAPRECE</span>`,
      },
      {
        time: "13:00 - 13:30",
        type: "CONFERENCIA",
        title: "Plan de Acción Mundial y Marco de Monitoreo sobre Prevención y Control de Infecciones",
        isNetworking: false,
        participants: `Prof. Victor D. Rosenthal, MD, PhD<br/>
          <span class="text-gray-500">Fundador y presidente del Consorcio Internacional de Infecciones Hospitalarias</span>`,
      },
      {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },
      {
        time: "14:05 - 14:35",
        type: "CONFERENCIA",
        title: "Aguas residuales como elemento para estrategias de detección oportuna de brotes.",
        isNetworking: false,
        participants: `Dra. Celia Alpuche<br/>
          <span class="text-gray-500">Investigadora del Instituto Nacional de Salud Pública</span>`,
      },
      {
        time: "14:40 - 15:25",
        type: "PANEL",
        title: "El equilibrio de la microbiota intestinal y su impacto en el desarrollo de infecciones",
        isNetworking: false,
        participants: `Dra. Rosa Salgado Brito<br/>
          <span class="text-gray-500">Directora, Facultad de Ciencia y Tecnología, Universidad Simón Bolivar</span><br/>
          Dr. Max Julio Schmulson Wasserman<br/>
          <span class="text-gray-500">Jefe de Unidad de Medicina Experimental, Hospital General de México</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Dr. Santiago March<br/>
          <span class="text-gray-500">Coordinador Consejo Promotor de Nuevas Tecnologías, FUNSALUD</span>`,
      },
      {
        time: "15:30",
        type: "CLAUSURA",
        title: "Acto de clausura",
        isNetworking: false,
        participants: "",
      },
    ],
  },
];

export default function AgendaTabsIsland() {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  const handleTabClick = (idx: number) => {
    if (idx === activeTab) return;
    setFadeState("out");
    setTimeout(() => {
      setActiveTab(idx);
      setFadeState("in");
    }, 250);
  };

  const currentDay = agendaData[activeTab];

  return (
    <section className="font-sans px-4 md:px-8 py-8 bg-white text-black-text" id="hsi-agenda">

      {/* Tabs */}
      <nav
        aria-label="Selector de día"
        className="flex justify-center gap-3 mb-8 flex-wrap"
        role="tablist"
      >
        {agendaData.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => handleTabClick(idx)}
            className={`
              px-6 py-2 rounded-full font-bold text-sm md:text-base tracking-wider
              transition-all duration-200 border-2
              ${activeTab === idx
                ? "bg-gradient-hsi border-transparent text-white shadow-md"
                : "bg-white border-[#00b0e4] text-[#00b0e4] hover:bg-[#00b0e4] hover:text-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Cabecera PARTICIPANTES */}
      <div className="hidden md:grid grid-cols-[1fr_1.2fr] gap-4 mb-2 px-2">
        <div />
        <div>
          <span className="text-[#00b0e4] font-bold text-sm tracking-widest uppercase">
            PARTICIPANTES
          </span>
        </div>
      </div>

      {/* Cards con fade */}
      <div
        className={`transition-opacity duration-300 ${fadeState === "in" ? "opacity-100" : "opacity-0"}`}
        id={currentDay.id}
        role="tabpanel"
        aria-labelledby={`tab-${currentDay.id}`}
      >
        {currentDay.events.map((event, idx) => {

          /* Card especial Networking */
          if (event.isNetworking) {
            return (
              <div
                key={idx}
                className="bg-gradient-hsi rounded-xl mb-3 px-6 py-3 flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg tracking-wide">
                  {event.title}
                </span>
              </div>
            );
          }

          const isFirst = idx === 0;

          return (
            <article
              key={idx}
              className="bg-[#f5f7f8] rounded-xl mb-3 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0">

                {/* Columna izquierda — fecha + horario + tipo + título */}
                <div className="p-4 flex gap-4 items-start">

                  {/* Fecha grande — solo en la primera card */}
                  {isFirst && (
                    <div className="flex flex-col items-center min-w-[60px] text-center">
                      <span className="text-[#00b0e4] font-black leading-none"
                        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
                        {currentDay.day}
                      </span>
                      <span className="text-[#00b0e4] font-bold text-xs tracking-widest uppercase">
                        {currentDay.month}
                      </span>
                      {event.time && (
                        <span className="mt-2 bg-[#204356] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          {event.time}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Horario badge — para cards que no son la primera */}
                  {!isFirst && event.time && (
                    <div className="min-w-[100px]">
                      <span className="bg-[#204356] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        {event.time}
                      </span>
                    </div>
                  )}

                  {/* Tipo + Título */}
                  <div className="flex flex-col">
                    {event.type && (
                      <span className="text-[#00b0e4] font-bold text-xs tracking-widest uppercase mb-1">
                        {event.type}
                      </span>
                    )}
                    <h3 className="text-[#204356] font-bold text-sm md:text-base leading-snug">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Divisor vertical — solo desktop */}
                <div className="hidden md:block border-l border-gray-200 pl-4 pr-4 py-4">
                  {event.participants ? (
                    <p
                      className="text-sm leading-relaxed text-[#204356]"
                      dangerouslySetInnerHTML={{ __html: event.participants }}
                    />
                  ) : (
                    <span className="text-gray-400 text-sm italic">—</span>
                  )}
                </div>

                {/* Participantes mobile */}
                {event.participants && (
                  <div className="md:hidden px-4 pb-4">
                    <p
                      className="text-sm leading-relaxed text-[#204356]"
                      dangerouslySetInnerHTML={{ __html: event.participants }}
                    />
                  </div>
                )}

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}