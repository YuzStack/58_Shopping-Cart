import { Link } from 'react-router';

function Hero() {
  return (
    <section className='relative h-[calc(100vh-64px)] bg-[url(/hero.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 z-10 flex items-center justify-center bg-black/40'>
        <div className='animate-fade-in max-w-xl text-center'>
          <h1 className='mb-3 text-6xl font-bold tracking-wider text-white uppercase'>
            Elevate Your Everyday
          </h1>
          <p className='text-lg text-neutral-200'>
            Thoughtfully curated goods designed to bring beauty and function to
            your daily rituals.
          </p>
          <Link to='/shop'>
            <button className='bg-primary-accent mx-auto mt-6 flex animate-bounce rounded-lg px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-102 hover:bg-teal-400 active:scale-90'>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
