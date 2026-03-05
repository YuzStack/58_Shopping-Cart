import { Link } from 'react-router';

function ErrorPage() {
  return (
    <div className='mt-[10%] flex min-h-screen justify-center px-3 py-2'>
      <div className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
        <h1 className='text-xl font-bold sm:text-2xl lg:text-3xl'>
          ‼️‼️ 404 Error: Page Not Found
        </h1>
        <button className='text-primary-accent mx-auto flex'>
          <Link to='/'>Go back home.</Link>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
