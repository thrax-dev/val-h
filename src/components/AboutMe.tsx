const AboutMe: React.FC = () => {
  return (
    <section className="w-full max-w-sm md:max-w-full h-96 flex flex-wrap md:flex-nowrap mt-3 md:mt-4">
      <figure className="flex flex-wrap justify-center md:block md:mr-10 mb-4 md:mb-0">
        <img
          src="https://ih1.redbubble.net/image.544972187.2859/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg"
          alt="Picture of myself :D"
          className="w-96 border rounded-full object-contain"
        />
        <figcaption className="text-grayish text-center w-full">
          ^ <i>Thats me</i> ^
        </figcaption>
      </figure>

      <article className="max-w-5xl w-96 md:w-full flex flex-col justify-center">
        <h1 className="text-xl text-secondary mb-4 md:mb-0">
          A wholesome<i>(i hope)</i> web developer focusing on the front end
          world.
        </h1>
        <p className="text-pf tracking-wide">
          <b>Hello</b>, dear reader! My name is <span className="text-primary">Valentin</span> and I am a software engineer based in Bulgaria
          that is building usefull tools and creating beutiful user interfaces.
          My background consists of the generic origin story of how I discovered
          programming at X age, was instantly captivated and inspired by it and
          had been doing that ever since. FrontEnd, BackEnd, GameDev,
          microcontrollers, electronics and anything in between is my field and
          the place i thrive in.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
