import umsidadev from "../assets/umsidadev.png";

export default function Hero() {
  return (
    <div className="hero h-screen text-center bg-base-200" id="hero">
      <div className="hero-content flex-col w-full lg:justify-around lg:flex-row-reverse">
        <div>
          <img
            src={umsidadev}
            className="max-w-sm mask mask-hexagon shadow-2xl"
          />
        </div>
        <div className="lg:text-start">
          <h1 className="text-5xl font-bold">UMSIDA.dev</h1>
          <p className="py-6">Berbagi ilmu akan membuatmu semakin ahli dalam bidangmu.</p>
          <button className="btn btn-secondary">Join Now</button>
        </div>
      </div>
    </div>
  );
}
