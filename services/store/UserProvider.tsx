import { useBoolean, useLocalStorage } from 'usehooks-ts';

import { UserContext, UserContextInterface } from './UserContext';

const UserContextProvider = ({ children }) => {
  const { value: isAuthBlockDisplay, setValue: setIsAuthBlockDisplay } = useBoolean(true);
  const { value: isLoading, setValue: setIsLoading } = useBoolean(false);
  const [profile, setProfile] = useLocalStorage('profile', undefined);

  const store: UserContextInterface = {
    profile: { profile, setProfile },
    loading: {
      isLoading,
      setIsLoading,
    },
    navbar: {
      isAuthBlockDisplay,
      setIsAuthBlockDisplay,
    },
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
