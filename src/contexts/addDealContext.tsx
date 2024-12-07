'use client';

import {
  Children,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  newDealInitialValuesSchema,
  NewDealInitialValuesType,
  NewDealType,
} from '@/schemas';

const defaultDeal: NewDealInitialValuesType = {
  name: '',
  link: '',
  coupon: '',
  discount: undefined,
  contactName: '',
  contactEmail: '',
};

type AddDealContextType = {
  newDealData: NewDealInitialValuesType;
  updateNewDealDetails: (dealDetails: Partial<NewDealType>) => void;
  dataLoaded: boolean;
  resetData: () => void;
};

const LOCAL_STORAGE_KEY = 'multi-page-form-newDealData';

export const AddDealContext =
  createContext<AddDealContextType | null>(null);

export const AddDealContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newDealData, setNewDealData] =
    useState<NewDealInitialValuesType>(defaultDeal);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    readFromLocalStorage();
    setDataLoaded(true);
  }, []);

  const writeToLocalStorage = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(newDealData)
    );
  }, [newDealData]);

  useEffect(() => {
    if (dataLoaded) {
      writeToLocalStorage();
    }
  }, [newDealData, dataLoaded, writeToLocalStorage]);

  const readFromLocalStorage = () => {
    console.log('readFromLocalStorage');
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log('dataString', dataString);

    if (!dataString) {
      return setNewDealData(defaultDeal);
    }

    const validated = newDealInitialValuesSchema.safeParse(
      JSON.parse(dataString)
    );
    console.log('validated', validated);

    if (validated.success) {
      setNewDealData(validated.data);
    } else {
      setNewDealData(defaultDeal);
    }
  };

  const updateNewDealDetails = (
    dealDetails: Partial<NewDealType>
  ) => {
    setNewDealData((prev) => ({
      ...prev,
      ...dealDetails,
    }));
  };

  const resetData = () => {
    setNewDealData(defaultDeal);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(defaultDeal)
    );
  };

  return (
    <AddDealContext.Provider
      value={{
        newDealData,
        updateNewDealDetails,
        dataLoaded,
        resetData,
      }}
    >
      {children}
    </AddDealContext.Provider>
  );
};

export function useAddDealContext() {
  const context = useContext(AddDealContext);
  if (!context) {
    throw new Error(
      'useAddDealContext must be used within a AddDealContextProvider'
    );
  }
  return context;
}
