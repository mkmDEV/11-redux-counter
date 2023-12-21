import { useSelector } from 'react-redux';

import { Auth, Counter, Header, UserProfile } from '@components';

const App = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
};

export default App;
