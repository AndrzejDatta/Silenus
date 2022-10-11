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
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

//TODO:improve way
