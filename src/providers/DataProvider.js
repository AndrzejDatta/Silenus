import { createContext } from "react";
import { dataPL } from "assets/data/data";

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
});

export const DataProvider = ({ children }) => {
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
        images,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

//TODO:improve way
