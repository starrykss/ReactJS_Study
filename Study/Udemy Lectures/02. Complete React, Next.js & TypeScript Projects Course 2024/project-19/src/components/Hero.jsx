import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dignissimos quae explicabo repudiandae quibusdam, eligendi totam
            facere architecto unde? Voluptates, exercitationem. Qui debitis
            aliquid esse ipsum neque voluptatem eveniet rem.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
