export const menu = [
  {
    name: "Propósito",
    link: "#que-es",
  },
  {
    name: "¿Por qué asistir?",
    link: "#porque-asistir",
    className: "w-[120px] text-center", // 👈 Ancho y alineación personalizada
  },
  {
    name: "Agenda y Speakers",
    link: "#agenda",
    className: "w-[130px] text-center",
  },
  {
    name: "Medios",
    subOptions: [
      { name: "Prensa", link: "#prensa" },
      { name: "Galería", link: "#galeria" },
      { name: "Video", link: "#video" },
    ],
  },
  {
    name: "Aliados & patrocinadores",
    link: "#aliados",
    className: "w-[180px] text-center", // 👈 Este también en dos líneas
  },
  {
    name: "Foros Anteriores",
    link: "#foros-anteriores",
  },
  {
    name: "Social Media",
    subOptions: [
      { name: "Facebook", link: "https://www.facebook.com/HospitalSinInfecciones/" },
      { name: "X", link: "https://www.facebook.com/HospitalSinInfecciones/" },
      { name: "LinkedIn", link: "https://www.linkedin.com/company/68233946/admin/dashboard/" },
      { name: "YouTube", link: "https://www.youtube.com/@hospitalsininfecciones7009" },
      { name: "WhatsApp", link: "https://api.whatsapp.com/send/?phone=5215511355967&text=%C2%BFPodemos+ayudarte%3F&type=phone_number&app_absent=0" },
    ],
  },
];
