// ** React Imports
import { createContext, useState } from "react";
import { ISettings, ISettingsProviderProps } from "../interface";

// ** ThemeConfig Import
const initialSettings: ISettings = {
  search: "",
};

// ** Create Context
export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (updatedSettings: ISettings) => {},
});

export const SettingsProvider = ({ children }: ISettingsProviderProps) => {
  // ** State
  const [settings, setSettings] = useState({ ...initialSettings });

  const saveSettings = (updatedSettings: ISettings) => {
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
