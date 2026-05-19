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
        participants: `<span class="font-bold text-[#204356]">Dra. Patricia Elena Clark Peralta</span><br/>
        <span class="text-gray-500">Secretaria del Consejo de Salubridad General </span><br/>
        <br/><span class="font-bold text-[#204356]">Dr. José Gerardo Moya Medina</span><br/>
        <span class="text-gray-500">Representante de la OPS/OMS en México</span><br/>
        <br/><span class="font-bold text-[#204356]">Dr. Octavio Gonzalez Chon</span><br/>
        <span class="text-gray-500">Director General de Médica Sur  </span><br/>

           <br/><span class="font-bold text-[#00b0e4]">Consejo Técnico HSI</span><br/>
           <span class="font-bold text-[#204356]">Dra. Mercedes Juan López</span><br/>
           <span class="font-bold text-[#204356]">Dra. María Enriqueta Baridó Murguía</span><br/>
           <span class="font-bold text-[#204356]">Dr. José Ignacio Santos Preciado</span><br/>
           <span class="font-bold text-[#204356]">Dr. Samuel Ponce de León Rosales</span><br/>
           <span class="font-bold text-[#204356]">Dr. Luis Fernando Pérez</span><br/>
           <span class="font-bold text-[#204356]">Dra. Daniela de la Rosa Zamboni</span><br/>
           <span class="font-bold text-[#204356]">Dra. Juana Jiménez Sánchez</span><br/>
           <span class="font-bold text-[#204356]">Dr. Paulo Francisco Castañeda Méndez</span><br/>
           <span class="font-bold text-[#204356]">Mtra. Enf. Martha A. Huertas Jiménez</span><br/>
           <span class="font-bold text-[#204356]">Dra. Isabel Villegas Mota</span><br/>
           <span class="font-bold text-[#204356]">Dra. Liliana Vargas Neri</span><br/>
           <span class="font-bold text-[#204356]">M.A.S.S. Maribel Ramírez Coronel</span><br/>`,
      },
      {
        time: "9:30 - 10:00",
        type: "CONFERENCIA MAGISTRAL",
        title: "Impacto de la Estrategia Nacional contra la Resistencia Antimicrobiana",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]">Dra. Patricia Elena Clark Peralta<br/></span><span class="text-gray-500">Secretaria, Consejo de Salubridad General </span>`,
      },
      {
        time: "10:00 - 10:45",
        type: "PANEL",
        title: "Vigilancia epidemiológica 360. Modelo Una Salud en México: Integración multisectorial",
        isNetworking: false,
        participants: `<span class="font-bold text-[#00b0e4]"></span><br/>
        <span class="font-bold text-[#204356]"><br/></span><span class="text-gray-500"></span><br/>
          <br/><span class="text-gray-500">Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria, SENASICA</span><br/>
          <span class="text-gray-500">Centro Nacional de Prevención y Control de Enfermedades, CENAPRECE</span><br/>
          <span class="text-gray-500">Red Hospitalaria de Vigilancia Epidemiológica, RHOVE</span><br/>
          <span class="text-gray-500">Red Temática de Investigación y Vigilancia de la Farmacorresistencia, INVIFAR</span>`,
        
      },
      {
        time: "10:45 - 11:30",
        type: "PANEL",
        title: "¿Quién paga la factura de las infecciones? Impacto en aseguradoras, hospitales y pacientes",
        isNetworking: false,  
        participants: `<span class="font-bold text-[#204356]"></span><br/><span class="text-gray-500">Tec Salud</span><br/>
        <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Dra. Mariana Barraza Llórens</span><br/>
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
        participants: `<span class="font-bold text-[#204356]">Dr. Rafael Franco Cendejas<br/></span>
          <span class="text-gray-500">Subdirector de Investigación Biomédica, Instituto Nacional de Rehabilitación</span><br/>
          <span class="text-gray-500">Comité Normativo Nacional de Consejos de Especialidades Médicas, CONACEM</span><br/>
          <span class="text-gray-500">Asociación Mexicana de Infectología y Microbiología</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Dr. Luis Fernando Pérez González</span> <br/>
          <span class="text-gray-500">Jefe del Departamento de Pediatría, Facultad de Medicina, Universidad Autónoma de San Luis Potosí</span>`,
      },
      {
        time: "12:45 - 13:30",
        type: "PANEL",
        title: "Diagnóstico rápido: cómo la inteligencia de datos puede salvar vidas y bajar costos",
        isNetworking: false,
        participants: `<br/>
          <span class="text-gray-500"></span><br/>
          <br/><span class="font-bold text-[#00b0e4]"></span><br/>
            <br/>
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
        participants: `<br/>
          <span class="text-gray-500">Asociación Nacional de Hospitales de Jalisco</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Dra. Cristina Gonzalez de Jesús</span><br/>
          <span class="text-gray-500">Presidenta, Colegio Médico de Especialistas en Calidad de la Atención Clinica</span>`,
      },
      {
        time: "14:45 - 15:15",
        type: "PANEL",
        title: "¿Por qué las farmacéuticas ya no desarrollan antibióticos? Innovación disruptiva contra infecciones difíciles de tratar.",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]"></span><br/>
          <span class="text-gray-500">Asociación Mexicana de Industrias de Investigación Farmacéutica, A. C AMIIF</span><br/>
          <span class="font-bold text-[#204356]">Ing. Patricia Faci Villalobos</span><br/>
          <span class="text-gray-500">Cámara Nacional de la Industria Farmacéutica, CANIFARMA</span><br/>
          <br/><span class="font-bold text-[#00b0e4]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Dra. Liliana Vargas Neri</span><br/>
          <span class="text-gray-500">Jefa del Departamento de Investigación Epidemiológica,  Hospital Infantil de México Federico Gómez, HIMFG</span>`,
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
        participants: `<br/>
          <span class="text-gray-500"></span><br/>
          <br/><span class="font-bold text-[#3aaa5c]"></span><br/>
          <span class="font-bold text-[#204356]"></span><br/>
          <span class="text-gray-500"></span>`,
      },
      {
        time: "09:45 - 10:30",
        type: "PANEL",
        title: "Invertir en higiene, no en errores: la ciencia de la desinfección proactiva",
        isNetworking: false,
        participants: `<br/>
          <span class="text-gray-500"></span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Mtra. Enf. Martha A. Huertas Jiménez</span><br/>
          <span class="text-gray-500">Subdirectora de Enfermería, Instituto Nacional de Ciencias Médicas y Nutición "Salvador Zubirán", INCMNSZ</span>`,
      },
      {
        time: "10:30 - 11:15",
        type: "PANEL",
        title: "El impacto ambiental de la atención médica.",
        isNetworking: false,
        participants: `<br/>
          <span class="text-gray-500">Comisión Coordinadora de los Institutos Nacionales de Salud y Hospitales de Alta Especialidad, CCINSHAE-SSa</span><br/>
          <span class="font-bold text-[#204356]">Enf. Rachel Campos Jimenez</span><br/>
          <span class="text-gray-500">Presidenta, Asociación Iberoamericana de Enfermeras en Gastroenterología y Endoscopia, ASIEGE</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Dra. Ma. Enriqueta Barido Murguía</span><br/>
          <span class="text-gray-500">Academia Mexicana de Cirugía AMC</span>`,
      },
      {
        time: "11:15 - 12:00",
        type: "PANEL",
        title: "Uso responsable de antibióticos: de la farmacia hasta el paciente",
        isNetworking: false,
        participants:`<br/>
          <span class="text-gray-500"></span><br/>
          <span class="text-gray-500"><span class="text-gray-500">Asociación Nacional de Farmacias de México, ANAFARMEX<br/></span><br/>
          <span class="text-gray-500"><span class="text-gray-500">Asociacion Mexicana de Farmacovigilancia, AMFV</span><br/></span><br/>
          <span class="text-gray-500"><span class="text-gray-500">Colegio de Químicos, Farmacéuticos, Biologos de Mexico, CQFBM</span><br/></span><br/>
          <br/><span class="font-bold text-[#3aaa5c]">MODERA:</span><br/>
          <span class="font-bold text-[#204356]">Dr. Paulo Francisco Castañeda Méndez</span><br/>
          <span class="text-gray-500">Jefe de Infectología, Hospital Médica Sur</span>`,
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
        type: "CONFERENCIA",
        title: "La vacunación en poblaciones vulnerables y la prevención de infecciones",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]">Dra. Sandra Rajme López<br/></span>
          <span class="text-gray-500">Departamento de Infectología, Instituto Nacional de Ciencias y Nutricion "Salvador Zubirán", INCMNSZ</span><br/>`,
      },
      {
        time: "13:00 - 13:45",
        type: "PANEL",
        title: "Intersección entre el activismo profesional y el enfoque “Una Salud”",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]">Mtra. Margarita Torres García<br/></span>
          <span class="text-gray-500">Presidenta de la Asociación Mexicana para el Estudio de las Infecciones Nosocomiales, AMEIN</span><br/>`,
      },
       {
        time: "",
        type: "",
        title: "Networking 30'",
        isNetworking: true,
        participants: "",
      },
      {
        time: "14:15 - 15:15",
        type: "PANEL",
        title: "El costo del silencio: las consecuencias de no actuar contra las infecciones resistentes.",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]"></span><br/>
          <span class="text-gray-500">Dirección General de Epidemiología, SSa</span><br/>
          <br/><span class="font-bold text-[#3aaa5c]"></span><br/>
          <br/>
          <span class="text-gray-500"></span>`,
      },

      {
        time: "15:15 - 15:45",
        type: "CONFERENCIA",
        title: "Radiografía del uso racional de antimicrobianos en América Latina",
        isNetworking: false,
        participants: `<br/>
          <span class="text-gray-500">Organización Panamericana de la Salud </span><br/>
          <br/><span class="font-bold text-[#3aaa5c]"></span><br/>
          <br/>
          <span class="text-gray-500"></span>`,
      },
      {
        time: "15:45 - 16:15",
        type: "PREMIACIÓN",
        title: "1er. Concurso “Heridas sin Infecciones“",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]">Mtra. Guillermina Vela Anaya</span><br/>
          <span class="text-gray-500">Coordinadora Normativa de la Dirección de Enfermería, SSa</span><br/>
          <span class="font-bold text-[#204356]">Dra. Daniela de la Rosa Zamboni</span><br/>
          <span class="text-gray-500">Lider del Subcomite de Resistencia a los Antimicrobianos, Centro Nacional de Prevención y Control de Enfermedades, CENAPRECE</span><br/>
          <span class="font-bold text-[#204356]">Dra. Juana Jiménez Sánchez</span><br/>
          <span class="text-gray-500">Directora Regional, U-Nursing-LatAm México, Centroamérica y El Caribe</span><br/>`,
          },
          {
        time: "",
        type: "",
        title: "Clausura",
        isNetworking: true,
        participants: "",
      },
      {
        time: "16:15 - 16:30",
        type: "",
        title: "Acto de clausura",
        isNetworking: false,
        participants: `<span class="font-bold text-[#204356]">M.A.S.S. Maribel Ramírez Coronel</span><br/>
          <span class="text-gray-500">Directora Fundadora de la iniciativa Hospitales sin Infecciones</span><br/>`,
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
              className="bg-[#f5f7f8] rounded-xl mb-5 overflow-hidden shadow-sm border border-gray-100"
             >
  {/* MOBILE: columna vertical */}
  <div className="flex flex-col md:hidden p-4 gap-2">
    
    {/* Fila superior: fecha grande (solo primera card) + badge horario */}
    <div className="flex items-center gap-3">
      {isFirst && (
        <div className="flex flex-col items-center min-w-[50px]">
          <span
            className="font-black leading-none"
            style={{
              fontSize: "clamp(36px, 8vw, 52px)",
              color: activeTab === 1 ? "#3aaa5c" : "#00b0e4",
            }}
          >
            {currentDay.day}
          </span>
          <span
            className="font-bold text-[10px] tracking-widest uppercase"
            style={{ color: activeTab === 1 ? "#3aaa5c" : "#00b0e4" }}
          >
            {currentDay.month}
          </span>
        </div>
      )}
      {event.time && (
        <span
          className="text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: activeTab === 1 ? "#3aaa5c" : "#204356" }}
        >
          {event.time}
        </span>
      )}
    </div>

    {/* Tipo + Título */}
    <div>
      {event.type && (
        <span
          className="font-bold text-xs tracking-widest uppercase block mb-1"
          style={{ color: activeTab === 1 ? "#3aaa5c" : "#00b0e4" }}
        >
          {event.type}
        </span>
      )}
      <h3 className="text-[#204356] font-bold text-sm leading-snug">
        {event.title}
      </h3>
    </div>

    {/* Participantes mobile — debajo del título */}
    {event.participants && (
      <p
        className="text-sm leading-relaxed text-[#204356] pt-1 border-t border-gray-100"
        dangerouslySetInnerHTML={{ __html: event.participants }}
      />
    )}
  </div>

  {/* DESKTOP: grid 2 columnas — sin cambios */}
  <div className="hidden md:grid grid-cols-[1fr_1.2fr] gap-0">
    <div className="p-5 flex gap-4 items-start">
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
          {event.time && (
            <span
              className="mt-2 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
              style={{ backgroundColor: activeTab === 1 ? "#3aaa5c" : "#204356" }}
            >
              {event.time}
            </span>
          )}
        </div>
      )}
      {!isFirst && event.time && (
        <div className="min-w-[100px]">
          <span
            className="text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
            style={{ backgroundColor: activeTab === 1 ? "#3aaa5c" : "#204356" }}
          >
            {event.time}
          </span>
        </div>
      )}
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
    <div className="border-l border-white pl-5 pr-5 py-5">
      {event.participants ? (
        <p
          className="text-sm leading-relaxed text-[#204356]"
          dangerouslySetInnerHTML={{ __html: event.participants }}
        />
      ) : (
        <span className="text-gray-400 text-sm italic">—</span>
      )}
    </div>
  </div>

</article>
          );
        })}
      </div>
    </section>
  );
}