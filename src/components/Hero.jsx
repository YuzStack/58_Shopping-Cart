function Hero() {
  return (
    <section className='relative h-[calc(100vh-64px)] bg-[url(hero.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 z-10 flex items-center justify-center bg-black/40'>
        <div className='max-w-xl text-center'>
          <h1 className='mb-3 text-6xl font-bold tracking-wider text-white uppercase'>
            Elevate Your Everyday
          </h1>
          <p className='text-lg text-neutral-200'>
            Thoughtfully curated goods designed to bring beauty and function to
            your daily rituals.
          </p>
          <button className='bg-primary-accent mx-auto mt-6 flex rounded-lg px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-102 hover:bg-teal-400'>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
