import { ActoAdministrativoScreen } from "../../components/Screens/BloqueI/ActoAdministrativoScreen";
import { AdminLocalScreen } from "../../components/Screens/BloqueI/AdminLocalScreen";
import { ConstitucionIIIScreen } from "../../components/Screens/BloqueI/ConstitucionIIIScreen";
import { ConstitucionIIScreen } from "../../components/Screens/BloqueI/ConstitucionIIScreen";
import { ConstitucionIScreen } from "../../components/Screens/BloqueI/ConstitucionIScreen";
import { DerechoAdministrativoFuentesScreen } from "../../components/Screens/BloqueI/DerechoAdministrativoFuentesScreen";
import { EstatutoAutonomia } from "../../components/Screens/BloqueI/EstatutoAutonomia";
import { GeografiaAsturiasScreen } from "../../components/Screens/BloqueI/GeografiaAsturiasScreen";
import { HaciendasLocalesScreen } from "../../components/Screens/BloqueI/HaciendasLocalesScreen";
import { HistoriaAsturiasScreen } from "../../components/Screens/BloqueI/HistoriaAsturiasScreen";
import { PersonalServicioCorporacionesLocalesScreen } from "../../components/Screens/BloqueI/PersonalServicioCorporacionesLocalesScreen";
import { ProcedimientoAdministrativoScreen } from "../../components/Screens/BloqueI/ProcedimientoAdministrativoScreen";

export const cardDataBloques = [
  {
    title: "Constitución",
    path: "/constitucion",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "Cuerpos y Fuerzas de seguridad",
    path: "/cuerposfuerzasseguridad",
    icon: "fas fa-shield-alt",
    color: "dodgerblue",
  },
  {
    title: "Tráfico",
    path: "/trafico",
    icon: "fas fa-traffic-light",
    color: "ForestGreen",
  },
  {
    title: "Código Penal",
    path: "/codigopenal",
    icon: "fas fa-balance-scale-left",
    color: "Goldenrod",
  },
  {
    title: "Tests",
    path: "/tests",
    icon: "fas fa-tasks",
    color: "tomato",
  },
];

export const cardDataBloqueI = [
  {
    componentScreen: () => {
      return <ConstitucionIScreen />;
    },
    title: "Constitución I",
    path: "/constitucionI",
    icon: "fas fa-crown",
    color: "gold",
  },

  {
    componentScreen: () => {
      return <ConstitucionIIScreen />;
    },
    title: "Constitución II",
    path: "/constitucionII",
    icon: "fas fa-book-open",
    color: "LightSteelBlue",
  },
  {
    componentScreen: () => {
      return <ConstitucionIIIScreen />;
    },
    title: "Constitución III",
    path: "/constitucionIII",
    icon: "fas fa-bookmark",
    color: "Peru",
  },
  {
    componentScreen: () => {
      return <EstatutoAutonomia />;
    },
    title: "Estatuto de autonomía",
    path: "/estatutoAutonomia",
    icon: "fas fa-map-marked-alt",
    color: "LightSlateGray",
  },
  {
    componentScreen: () => {
      return <AdminLocalScreen />;
    },
    title: "La Administración local",
    path: "/adminLocal",
    icon: "fas fa-scroll",
    color: "Coral",
  },
  {
    componentScreen: () => {
      return <DerechoAdministrativoFuentesScreen />;
    },
    title: "El derecho administrativo y sus fuentes",
    path: "/dchoAdminFuentes",
    icon: "fas fa-gavel",
    color: "Moccasin",
  },
  {
    componentScreen: () => {
      return <ActoAdministrativoScreen />;
    },
    title: "El acto administrativo",
    path: "/actoAdministrativo",
    icon: "fas fa-file-alt",
    color: "SlateBlue",
  },
  {
    componentScreen: () => {
      return <ProcedimientoAdministrativoScreen />;
    },
    title: "Procedimiento administrativo comun",
    path: "/procedimientoAdminComun",
    icon: "fas fa-envelope-open-text",
    color: "MediumSpringGreen",
  },
  {
    componentScreen: () => {
      return <PersonalServicioCorporacionesLocalesScreen />;
    },
    title: "Personal al servicio de las corporaciones locales",
    path: "/personalServicioCorpLocales",
    icon: "fas fa-user-edit",
    color: "SpringGreen",
  },
  {
    componentScreen: () => {
      return <HaciendasLocalesScreen />;
    },
    title: "Haciendas locales",
    path: "/haciendaslocales",
    icon: "fas fa-tractor",
    color: "olive",
  },
  {
    componentScreen: () => {
      return <HistoriaAsturiasScreen />;
    },
    title: "Historia de Asturias",
    path: "/historiaAsturias",
    icon: "fas fa-history",
    color: "CadetBlue",
  },
  {
    componentScreen: () => {
      return <GeografiaAsturiasScreen />;
    },
    title: "Geografia de asturias",
    path: "/geografiaAsturias",
    icon: "fas fa-mountain",
    color: "SaddleBrown",
  },
];

export const cardDataBloqueII = [
  {
    title: "L.O. 2/86, 13 Marzo Cuerpos y fuerzas de seguridad I",
    path: "/ccffsI",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "L.O. 2/86, 13 Marzo Cuerpos y fuerzas de seguridad II",
    path: "/ccffsII",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "L.O. 2/86, 13 Marzo Cuerpos y fuerzas de seguridad III",
    path: "/ccffsIII",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "L.O. 2/86, 13 Marzo Cuerpos y fuerzas de seguridad IV",
    path: "/ccffsIV",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "L.O. 4/2015, 30 Marzo,  Seguridad Ciudadna ",
    path: "/segCiudadana",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "Protección Civil ",
    path: "/Pcivil",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "Ley de coordinación de las policías locales",
    path: "/leycoordinacion",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title:
      "Ley del P.Asturias 8/2002, 21 octubre, espectaculos publicos y actividades recreativas",
    path: "/lepar",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "Normativa autonomica",
    path: "/autonomica",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "Colectivos de riesgo",
    path: "/colectivosriesgo",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "reglamento de armas",
    path: "/armas",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
  {
    title: "Policia medioambiental",
    path: "/medioambiental",
    icon: "fas fa-scroll",
    color: "PaleGoldenrod",
  },
];

export const cardDataBloqueIII = [
  {
    title:
      "La ley sobre tráfico circulación de vehículos a motor y seguridad vial",
    path: "/leyTraficoysegvial",
    icon: "fas fa-car",
    color: "PaleGoldenrod",
  },
  {
    title: "Normas de comportamiento en la circulación",
    path: "/normasCirculacion",
    icon: "fas fa-car",
    color: "PaleGoldenrod",
  },
  {
    title: "La circulación de vehiculos I",
    path: "/circulacionI",
    icon: "fas fa-car",
    color: "PaleGoldenrod",
  },
  {
    title: "La circulación de vehiculos II",
    path: "/circulacionI",
    icon: "fas fa-car",
    color: "PaleGoldenrod",
  },
];

export const cardDataBloqueIV = [
  {
    title: "Penal I",
    path: "",
    icon: "fas fa-gavel",
    color: "PaleGoldenrod",
  },
  {
    title: "Penal II",
    path: "",
    icon: "fas fa-gavel",
    color: "PaleGoldenrod",
  },
  {
    title: "Penal III",
    path: "",
    icon: "fas fa-gavel",
    color: "PaleGoldenrod",
  },
];
