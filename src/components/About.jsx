export default function About() {
  return (
    <div className="flex flex-col p-10 justify-center lg:flex-row lg:items-center">
      <div className="lg:w-1/2 lg:pe-7">
        <h1 className="text-3xl font-bold">Apa itu UMSIDA.dev?</h1>
        <p className="mt-5">
          UMSIDA.dev adalah komunitas terbuka bagi semua yang tertarik pada
          dunia informasi dan teknologi. Fokusnya adalah pembelajaran dan
          berbagi pengetahuan melalui lokakarya dan seminar, memungkinkan
          anggota dari berbagai latar belakang untuk saling belajar dan
          membangun koneksi profesional.
          <span className="font-bold block">
            so have fun and let&apos;s code.
          </span>
        </p>
      </div>
      <div className="mt-5 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
