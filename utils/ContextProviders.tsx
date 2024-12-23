import {AlertProvider} from '@/contexts/alertContext';
import {GameProvider} from '@/contexts/gameContext';
import {UserProvider} from '@/contexts/userContext';
import React from 'react';

export default function ContextProviders({children}: any) {
  return (
    <UserProvider>
      <AlertProvider>
        <GameProvider>{children}</GameProvider>
      </AlertProvider>
    </UserProvider>
  );
}
