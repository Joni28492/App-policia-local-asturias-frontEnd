const BloquesTemario = {
  BloqueI: "Constitución",
  BloqueII: "Cuerpos y Fuerzas de seguridad",
  BloqueIII: "Tráfico",
  BloqueIV: "Código Penal",
};

const BloqueI = {
  temaI: "constitucion I",
  temaII: "constitucion II",
  temaIII: "constitucion III",
  temaIV: "Estatuto de autonomia",
  temaV: "-----------",
  temaVI: "Administracion I",
  temaVII: "Administracion II",
  temaVIII: "--------",
  temaIX: "--------",
  temaX: "Haciendas locales",
  temaXI: "constitucion",
  temaXII: "constitucion",
};

const BloqueII = {
  temaI: "",
  temaII: "",
  temaIII: "",
  temaIV: "",
  temaV: "",
  temaVI: "",
  temaVII: "",
  temaVIII: "",
  temaIX: "",
  temaX: "",
  temaXI: "",
  temaXII: "",
};

const BloqueIII = {
  temaI: "",
  temaII: "",
  temaIII: "",
  temaIV: "",
  temaV: "",
  temaVI: "",
  temaVII: "",
  temaVIII: "",
  temaIX: "",
  temaX: "",
  temaXI: "",
  temaXII: "",
};

const BloqueIV = {
  temaI: "",
  temaII: "",
  temaIII: "",
  temaIV: "",
  temaV: "",
  temaVI: "Delitos contra Salud publica",
  temaVII: "Delitos contra la seguridad vial",
  temaVIII: "",
  temaIX: "",
  temaX: "",
  temaXI: "",
  temaXII: "",
};

const paths = {
  bloquesTemarioPaths: [
    "/constitucion",
    "/cuerposfuerzasseguridad",
    "/trafico",
    "/codigopenal",
    "/tests",
  ],
  constitucionPaths: [],
  fuerzasPaths: [],
  traficoPaths: [],
  penalPaths: [],
};

const icons = {
  bloquesTemarioIcons: [
    "fas fa-scroll",
    "fas fa-shield-alt",
    "fas fa-traffic-light",
    "fas fa-balance-scale-left",
    "fas fa-tasks",
  ],
  constitucionIcons: [],
  fuerzasIcons: [],
  traficoIcons: [],
  penalIcons: [],
};

let store = {
  bloques: BloquesTemario,
  BloqueI,
  BloqueII,
  BloqueIII,
  BloqueIV,
  paths,
  icons,
};

export default store;
