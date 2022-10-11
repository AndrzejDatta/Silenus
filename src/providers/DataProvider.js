import { createContext, useState } from "react";
import { dataPL } from "assets/data/data";
import { useSearchParams } from "react-router-dom";

export const dataContext = createContext({
  startPage: {},
  loginPage: {},
  Dashboard: {},
  MojeDoniczki: {},
  DodajDoniczke: {},
  MojeRośliny: {},
  KalendarzOpieki: {},
  KontoUżytkownika: {},
  ZidentyfikujRośline: {},
  Navbar: {},
  images: {},
  navIcons: {},
  navIconsColor: [],
  setNavIconColor: {},
});

const init = [
  {
    name: "plant",
    isClicked: false,
  },
  {
    name: "calendar",
    isClicked: false,
  },
  {
    name: "camera",
    isClicked: false,
  },
  {
    name: "user",
    isClicked: false,
  },
];
export const DataProvider = ({ children }) => {
  const [navIconsColor, setNavIconColor] = useState(init);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context(
      "assets/icons/userAccountOption",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const navIcons = importAll(
    require.context("assets/icons/navIcons", false, /\.(png|jpe?g|svg)$/)
  );
  const startPage = {
    ...dataPL[0],
  };
  const loginPage = {
    ...dataPL[1],
  };
  const Dashboard = {
    ...dataPL[2],
  };
  const MojeDoniczki = {
    ...dataPL[3],
  };
  const DodajDoniczke = {
    ...dataPL[4],
  };
  const MojeRośliny = {
    ...dataPL[5],
  };
  const KalendarzOpieki = {
    ...dataPL[7],
  };
  const KontoUżytkownika = {
    ...dataPL[6],
  };
  const ZidentyfikujRośline = {
    ...dataPL[8],
  };
  const Navbar = {
    ...dataPL[9],
  };

  return (
    <dataContext.Provider
      value={{
        startPage,
        loginPage,
        Dashboard,
        DodajDoniczke,
        MojeDoniczki,
        MojeRośliny,
        KalendarzOpieki,
        KontoUżytkownika,
        ZidentyfikujRośline,
        Navbar,
        images,
        navIcons,
        navIconsColor,
        setNavIconColor,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

//TODO:improve way
