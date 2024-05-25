import Event from "./Event";

export default function Events({ compact = false }) {
  const ourEvents = [
    {
      id: 1,
      title: "NGOBARv1.0",
      subTitle:
        "Mengenal Google Drivenya programmer and version control introduction",
      tgl: "2022-07-26",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar1.0.jpg",
    },
    {
      id: 2,
      title: "NGOBARv2.0",
      subTitle: "Fundamental Web",
      tgl: "2022-08-04",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar2.0.jpg",
    },
    {
      id: 3,
      title: "NGOBARv3.0",
      subTitle: "Web Design : Styling & Layoting with CSS3",
      tgl: "2022-09-03",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar3.0.jpg",
    },
    {
      id: 4,
      title: "NGOBARv4.0",
      subTitle: "Web Programming : Javascript for Advanced Developer",
      tgl: "2022-09-17",
      pemateri: 2,
      kategori: "NGOBAR",
      poster: "ngobar4.0.jpg",
    },
    {
      id: 5,
      title: "NGOBARv5.0",
      subTitle: "Mencari Kebenaran pada Sistem Digital",
      tgl: "2022-10-22",
      pemateri: 3,
      kategori: "NGOBAR",
      poster: "ngobar5.0.jpg",
    },
    {
      id: 6,
      title: "NGOBARv6.0",
      subTitle: "JavaScript Beginner : Make Your Game",
      tgl: "2023-01-21",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar6.0.jpg",
    },
    {
      id: 7,
      title: "NGEBARv1.0",
      subTitle: "Microsoft Excel Advenced",
      tgl: "2023-03-17",
      pemateri: 1,
      kategori: "NGEBAR",
      poster: "ngebar1.0.jpg",
    },
    {
      id: 8,
      title: "NGOBARv7.0",
      subTitle: "Introduction React",
      tgl: "2023-05-27",
      pemateri: 4,
      kategori: "NGOBAR",
      poster: "ngobar7.0.jpg",
    },
    {
      id: 9,
      title: "NGOBARv1.1",
      subTitle: "Belajar Web Dari Nol",
      tgl: "2023-12-02",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar1.1.jpg",
    },
    {
      id: 10,
      title: "NGOBARv8.0",
      subTitle: "Membuat Aplikasi Android dengan React Native",
      tgl: "2024-01-27",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar8.0.jpg",
    },
    {
      id: 11,
      title: "NGOBARBURITv1.0",
      subTitle: "PHP Object Oriented Programming",
      tgl: "2024-03-17",
      pemateri: 1,
      kategori: "NGOBARBURIT",
      poster: "ngobarburit1.0.jpg",
    },
  ];

  let newestEvents = ourEvents
    .sort((a, b) => new Date(b.tgl) - new Date(a.tgl))
    .slice(0, 3);

  newestEvents = compact ? newestEvents : ourEvents;

  return (
    <div
      className="bg-base-100 text-center px-10 py-20"
      id="events"
    >
      <h2 className="font-bold text-3xl">UMSIDA.dev&apos;s Events</h2>
      <a
        href="/events"
        className="text-secondary hover:text-primary hover:underline"
      >
        view all events
      </a>
      <div className="flex flex-wrap justify-center">
        {newestEvents.map((workshop, index) => (
          <div
            key={index}
            className="mx-24 flex-1 lg:w-1/4 lg:mx-10"
          >
            <Event workshop={workshop} />
          </div>
        ))}
      </div>
    </div>
  );
}
