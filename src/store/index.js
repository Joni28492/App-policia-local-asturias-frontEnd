const BloqueI = [
  "constitucion I",
  "constitucion II",
  "constitucion III",
  "Estatuto de autonomía",
  "La Administración local",
  "El derecho administrativo y sus fuentes",
  "El acto administrativo",
  "Procedimiento administrativo comun",
  "Personal al servicio de las corporaciones locales",
  "Haciendas locales",
  "Historia de Asturias",
  "Geografia de asturias",
];
const BloqueII = ["", "", "", "", "", "", "", "", "", "", "", ""];

const BloqueIII = ["", "", "", "", "", "", "", "", "", "", "", ""];
const BloqueIV = [
  "",
  "",
  "",
  "",
  "",
  "Delitos contra Salud publica",
  "Delitos contra la seguridad vial",
  "",
  "",
  "",
  "",
  "",
];
const paths = [
  [
    "/constitucion",
    "/cuerposfuerzasseguridad",
    "/trafico",
    "/codigopenal",
    "/tests",
  ],
  [
    "/constitucionI",
    "/constitucionII",
    "/constitucionIII",
    "/estatutoAutonomia",
    "/adminLocal",
    "/dchoAdminFuentes",
    "/actoAdministrativo",
    "/procedimientoAdminComun",
    "/personalServicioCorpLocales",
    "/haciendaslocales",
    "/historiaAsturias",
    "/geografiaAsturias",
  ],
  [],
  [],
  [],
];

const icons = [
  [
    "fas fa-scroll",
    "fas fa-shield-alt",
    "fas fa-traffic-light",
    "fas fa-balance-scale-left",
    "fas fa-tasks",
  ],
  [],
  [],
  [],
  [],
];

let styleColorOrder = [
  ["PaleGoldenrod", "dodgerblue", "ForestGreen", "Goldenrod", "tomato"],
  [],
  [],
  [],
  [],
];

let store = [
  BloqueI,
  BloqueII,
  BloqueIII,
  BloqueIV,
  paths,
  icons,
  styleColorOrder,
];

export default store;
