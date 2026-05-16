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
        isNetworking: false,
        participants: `<span class="block font-bold text-[#00b0e4]">Consejo Técnico Hospitales sin Infecciones</span>
          Dr. José Gerardo Moya Medina<br/>
          <span class="text-gray-500">Consejo de Salubridad General </span><br/>
          Consejo Técnico Hospitales sin Infecciones <br/>
           <span class="text-gray-500">Representante de la OPS/OMS en México</span>`,
      },
      {
        time: "9:30 - 10:00",
        type: "CONFERENCIA MAGISTRAL",
        title: "Impacto de la Estrategia Nacional contra la Resistencia Antimicrobiana",
        isNetworking: false,
        participants: `Nombre del Participante<br/><span class="text-gray-500">Consejo de Salubridad General </span>`,
      },
      {
        time: "10:00 - 10:45",
        type: "PANEL",
        title: "Vigilancia epidemiológica 360. Modelo Una Salud en México: Integración multisectorial",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500"></span><br/>
          <br/><span class="font-bold text-[#00b0e4]"></span><br/>
         <br/>
          <span class="text-gray-500">Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria, SENASICA</span><br/>
          <span class="text-gray-500">Centro Nacional de Prevención y Control de Enfermedades, CENAPRECE</span><br/>
          <span class="text-gray-500">Red Hospitalaria de Vigilancia Epidemiológica, RHOVE</span><br/>
          <span class="text-gray-500">Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria, SENASICA</span>`,
        
      },
      {
        time: "10:45 - 11:30",
        type: "PANEL",
        title: "¿Quién paga la factura de las infecciones? Impacto en aseguradoras, hospitales y pacientes",
        isNetworking: false,  
        participants: `Mtro. Dr. Omar Galil Barrientos Salas<br/><span class="text-gray-500">Director de Calidad Médica Sur </span><br/>
        <span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Dra. Mariana Barraza Llórens <br/>
          <span class="text-gray-500">Socia Fundadora Blutitude</span>`,
        
      },
 {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },

      {
        time: "12:00 - 12:45",
        type: "PANEL",
        title: "El impacto de la vacunación en la Resistencia Antimicrobiana",
        isNetworking: false,
        participants: `Dr. Rafael Franco Cendejas<br/>
          <span class="text-gray-500">Subdirector de Investigación Biomédica, Instituto Nacional de Rehabilitación </span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Dr. Luis Fernando Pérez González <br/>
          <span class="text-gray-500">Jefe del Departamento de Pediatría de la Facultad de Medicina de la Universidad Autónoma de San Luis Potosí</span>`,
      },
      {
        time: "12:45 - 13:30",
        type: "PANEL",
        title: "Diagnóstico rápido: cómo la inteligencia de datos puede salvar vidas y bajar costos",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500"></span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
            Nombre<br/>
          <span class="text-gray-500"></span>`,
      },
      {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },
      {
        time: "14:00 - 14:45",
        type: "PANEL",
        title: "¿Qué incentivos hacen falta para invertir en prevención de infecciones?",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Corporativo San Ángel Inn</span><br/>
          <span class="text-gray-500">Asociación Nacional de Hospitales de Jalisco</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Dra. Cristina Gonzalez de Jesús<br/>
          <span class="text-gray-500">Presidenta Colegio Médico de Especialistas en Calidad de la Atención Clinica</span>`,
      },
      {
        time: "14:45 - 15:15",
        type: "PANEL",
        title: "¿Porque las farmacéuticas ya no desarrollan antibióticos? Innovación disruptiva contra infecciones difíciles de tratar.",
        isNetworking: false,
        participants: `Nombre<br/>
          <span class="text-gray-500">Asociación Mexicana de Industrias de Investigación Farmacéutica, AMIIF</span><br/>
          <span class="text-gray-500">Cámara Nacional de la Industria Farmacéutica, CANIFARMA</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          Dra. Liliana Vargas Neri<br/>
          <span class="text-gray-500">Jefa del Departamento de Investigación Epidemiológica,  Hospital Infantil de México Federico Gómez (HIMFG)</span>`,
      },
    ],
  },
  {
    label: "DÍA 2 | 28 DE AGOSTO",
    id2: "agenda-dia2",
    day: "28",
    month: "AGOSTO",
    events: [
      {
        time: "09:00 - 09:45",
        type: "PANEL",
        title: "La pandemia invisible: rastreando la resistencia desde el ambiente hasta el paciente.",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "09:45 - 10:30",
        type: "PANEL",
        title: "Invertir en higiene, no en errores: La ciencia de la desinfección proactiva",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "10:30 - 11:15",
        type: "PANEL",
        title: "Hospitales más sustentables: reduciendo el impacto ambiental de la atención médica",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "11:15 - 12:00",
        type: "PANEL",
        title: "Uso responsable de antibióticos: de la farmacia hasta el paciente",
        isNetworking: false,
        participants:`Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
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
        time: "12:30 - 13:00",
        type: "PANEL",
        title: "La vacunación en poblaciones vulnerables y la prevención de infecciones",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "13:00 - 13:45",
        type: "PANEL",
        title: "Uso y prescripción de antibióticos en consultorios externos.",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "13:00 - 13:30",
        type: "CONFERENCIA",
        title: "Plan de Acción Mundial y Marco de Monitoreo sobre Prevención y Control de Infecciones",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
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
        time: "14:15 - 15:00",
        type: "CONFERENCIA",
        title: "Aguas residuales como elemento para estrategias de detección oportuna de brotes.",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
      },
      {
        time: "15:00 - 15:30",
        type: "PANEL",
        title: "El equilibrio de la microbiota intestinal y su impacto en el desarrollo de infecciones",
        isNetworking: false,
        participants: `Nombre del participante<br/>
          <span class="text-gray-500">Cargo del participante</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          Nombre<br/>
          <span class="text-gray-500">Cargo</span>`,
          },
      {
        time: "",
        type: "",
        title: "Acto de clausura",
        isNetworking: true,
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
      {/* TABS — colores por día */}
      {agendaData.map((tab, idx) => {
       const isActive = activeTab === idx;
        const isDay2 = idx === 1;

  return (
    <button
      key={tab.id}
      role="tab"
      aria-selected={isActive}
      aria-controls={tab.id}
      id={`tab-${tab.id}`}
      onClick={() => handleTabClick(idx)}
      className="px-6 py-2 rounded-full font-bold text-sm md:text-base tracking-wider transition-all duration-200 border-2"
      style={{
        backgroundColor: isActive
          ? isDay2 ? "#3aaa5c" : "#00b0e4"
          : "white",
        borderColor: isDay2 ? "#3aaa5c" : "#00b0e4",
        color: isActive ? "white" : isDay2 ? "#3aaa5c" : "#00b0e4",
      }}
    >
      {tab.label}
    </button>
  );
})}
        
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
    className="rounded-xl mb-5 px-6 py-3 flex items-center justify-center"
    style={{ backgroundColor: activeTab === 1 ? "#3aaa5c" : "#00b0e4" }}
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
                <div className="p-5 flex gap-4 items-start">

                  {/* Fecha grande — solo en la primera card */}
                  {isFirst && (
                    <div className="flex flex-col items-center min-w-[60px] text-center">
                      <span
                        className="font-black leading-none"
                        style={{
                          fontSize: "clamp(40px, 5vw, 64px)",
                            color: activeTab === 1 ? "#3aaa5c" : "#00b0e4",
                            }}
                            >
                              {currentDay.day}
                                  </span>
                      <span
                            className="font-bold text-xs tracking-widest uppercase"
                          style={{ color: activeTab === 1 ? "#3aaa5c" : "#00b0e4" }}
                          >
                             {currentDay.month}
                            </span>
                      
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
                      <span
                        className="font-bold text-xs tracking-widest uppercase mb-1"
                        style={{ color: activeTab === 1 ? "#3aaa5c" : "#00b0e4" }}
                        >
                         {event.type}
                          </span>
                    )}
                    <h3 className="text-[#204356] font-bold text-sm md:text-base leading-snug">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Divisor vertical — solo desktop */}
                <div className="hidden md:block border-l border-white pl-5 pr-5 py-5">
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