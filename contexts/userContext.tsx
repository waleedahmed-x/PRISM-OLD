import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {usePrivy} from '@privy-io/expo';
import {User, UserContextType} from '@/interfaces/user';

const initialUserState: User = null;

const UserContext = createContext<UserContextType>({
  user: initialUserState,
  login: async () => {},
  logout: async () => {},
});

const saveUserToStorage = async (user: User): Promise<void> => {
  try {
    if (user) {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    }
  } catch (error) {
    console.error('Failed to save user to storage:', error);
  }
};

const loadUserFromStorage = async (): Promise<User | null> => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Failed to load user from storage:', error);
    return null;
  }
};

const removeUserFromStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error('Failed to remove user from storage:', error);
  }
};

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User>(initialUserState);
  const {logout: privyLogout} = usePrivy();

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await loadUserFromStorage();
      if (storedUser) {
        setUser(storedUser);
      }
    };
    loadUser();
  }, []);

  const login = async (userData: User) => {
    setUser(userData);
    await saveUserToStorage(userData);
  };

  const logout = async () => {
    setUser(null);
    await removeUserFromStorage();
    await privyLogout();
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
