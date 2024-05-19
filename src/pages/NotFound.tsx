import { GiSpaceship } from "react-icons/gi";

const NotFoundPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold'>404 Not Found!</h1>
      <GiSpaceship className='text-7xl' />
    </div>
  );
};

export default NotFoundPage;
