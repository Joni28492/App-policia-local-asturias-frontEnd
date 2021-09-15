const BloquesTemario = [
  "Constitución",
  "Cuerpos y Fuerzas de seguridad",
  "Tráfico",
  "Código Penal",
  "tests",
];
const BloqueI = [
  "constitucion I",
  "constitucion II",
  "constitucion III",
  "Estatuto de autonomia",
  "-----------",
  "Administracion I",
  "Administracion II",
  "--------",
  "--------",
  "Haciendas locales",
  "constitucion",
  "constitucion",
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
  [],
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
  BloquesTemario,
  BloqueI,
  BloqueII,
  BloqueIII,
  BloqueIV,
  paths,
  icons,
  styleColorOrder,
];
export default store;
