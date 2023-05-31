import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  const handleRegisterClick = () => {
    router.push('/auth/register');
  };

  return (
    <div className="flex flex-col items-center h-full justify-center"
    style={{
      backgroundImage: 'linear-gradient(0deg,#EDF6FF  60%,#303F60 60%)',
    }}>
      <div
      style={{
        position:'absolute',
        top: '90px',
        left: '190px',
        width: '334px',
        height: '144px',
        opacity: 1,
      }}
      >
      <h1 className="text-4xl font-bold mt-8 text-center"
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '334px',
        height: '70px',
        font: 'normal normal normal 60px/74px Helvetica Neue',
        color: '#FFFFFF',
        
      }}>Welcome to</h1>
      <h1 className="text-4xl font-bold mt-8 text-center"
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '72px',
        height: '84px',
        font: 'normal normal normal 60px/74px Helvetica Neue',
        color: '#43AFFF',
        
      }}>MyJobs</h1>
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLoginClick}>
          Login
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
