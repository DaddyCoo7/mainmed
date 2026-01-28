import React, { createContext, useContext, useState, useEffect } from 'react';
import { RegionConfig, getRegionByCode } from '../config/regions';

interface RegionContextType {
  region: RegionConfig;
  setRegion: (code: string) => void;
  isLoading: boolean;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};

interface RegionProviderProps {
  children: React.ReactNode;
  initialRegion?: string;
}

export const RegionProvider: React.FC<RegionProviderProps> = ({ children, initialRegion = 'us' }) => {
  const [region, setRegionState] = useState<RegionConfig>(getRegionByCode(initialRegion));
  const [isLoading, setIsLoading] = useState(false);

  const setRegion = (code: string) => {
    const newRegion = getRegionByCode(code);
    setRegionState(newRegion);
    localStorage.setItem('preferredRegion', code);
  };

  useEffect(() => {
    const savedRegion = localStorage.getItem('preferredRegion');
    if (savedRegion && savedRegion !== region.code) {
      setRegionState(getRegionByCode(savedRegion));
    }
  }, []);

  return (
    <RegionContext.Provider value={{ region, setRegion, isLoading }}>
      {children}
    </RegionContext.Provider>
  );
};
