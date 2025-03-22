import React, { ReactNode } from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green', backgroundColor: '#DFF2BF' }}
      text1Style={{ fontSize: 16, fontWeight: 'bold' }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', backgroundColor: '#FFBABA' }}
      text1Style={{ fontSize: 16, fontWeight: 'bold' }}
      text2Style={{ fontSize: 14, color: 'black' }}
    />
  ),
};

type GlobalAlertProviderProps = {
  children: ReactNode;
};

const GlobalAlertProvider: React.FC<GlobalAlertProviderProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      {children}
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export const Alert = {
  success: (title: string, message: string) => {
    Toast.show({
      type: 'success',
      text1: title,
      text2: message,
    });
  },

  error: (title: string, message: string) => {
    Toast.show({
      type: 'error',
      text1: title,
      text2: message,
    });
  },
};

export default GlobalAlertProvider;