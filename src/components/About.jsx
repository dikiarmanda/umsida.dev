const About = () => {
  return (
    <div className="flex flex-wrap px-10 py-20 justify-center lg:items-center" id="about">
      <div className="lg:w-1/2 lg:pe-7">
        <h1 className="font-bold text-3xl">Apa itu UMSIDA.dev?</h1>
        <p className="mt-5">
          UMSIDA.dev adalah komunitas terbuka dari program studi Informatika
          <span className="font-bold"> Universitas Muhammadiyah Sidoarjo </span>
          bagi semua yang tertarik pada dunia informasi dan teknologi. Fokusnya
          adalah pembelajaran dan berbagi pengetahuan melalui lokakarya dan
          seminar, memungkinkan anggota dari berbagai latar belakang untuk
          saling belajar dan membangun koneksi profesional.
          <span className="font-bold block">
            so have fun and let&apos;s code.
          </span>
        </p>
      </div>
      <div className="mt-5 lg:mt-0">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  )
}

export default About