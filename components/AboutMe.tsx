import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I'm{" "}
          <span className="font-bold tracking-wider text-white">
          Mehejerin Marji 
          </span>{" "}
          and I'm a freelance{" "}
          <span className="font-bold text-white">Web Designer</span>.I studied from Dhaka Polytechnic Institute. Now i am doing interny on ui/ux design from People and tech academy Dhaka,Bangladesh.
        </p>
        <div className="lg:w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web design" />
          <AboutList title="Graphic & print" />
          <AboutList title="iOS design" />
          <AboutList title="User experience" />
          <AboutList title="Branding" />
          <AboutList title="Responsive" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
