import Event from "./Event";

export default function Events() {
  const ourEvents = [
    {
      id: 1,
      title: "NGOBARv1.0",
      subTitle:
        "Mengenal Google Drivenya programmer and version control introduction",
      tgl: "26 Juli 2022",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar1.0.jpg",
    },
    {
      id: 2,
      title: "NGOBARv2.0",
      subTitle: "Fundamental Web",
      tgl: "4 Agustus 2022",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar2.0.jpg",
    },
    {
      id: 3,
      title: "NGOBARv3.0",
      subTitle: "Web Design : Styling & Layoting with CSS3",
      tgl: "3 September 2022",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar3.0.jpg",
    },
    {
      id: 4,
      title: "NGOBARv4.0",
      subTitle: "Web Programming : Javascript for Advanced Developer",
      tgl: "17 September 2022",
      pemateri: 2,
      kategori: "NGOBAR",
      poster: "ngobar4.0.jpg",
    },
    {
      id: 5,
      title: "NGOBARv5.0",
      subTitle: "Mencari Kebenaran pada Sistem Digital",
      tgl: "22 Oktober 2022",
      pemateri: 3,
      kategori: "NGOBAR",
      poster: "ngobar5.0.jpg",
    },
    {
      id: 6,
      title: "NGOBARv6.0",
      subTitle: "JavaScript Beginner : Make Your Game",
      tgl: "21 Januari 2023",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar6.0.jpg",
    },
    {
      id: 7,
      title: "NGEBARv1.0",
      subTitle: "Microsoft Excel Advenced",
      tgl: "17 Maret 2023",
      pemateri: 1,
      kategori: "NGEBAR",
      poster: "ngebar1.0.jpg",
    },
    {
      id: 8,
      title: "NGOBARv7.0",
      subTitle: "Introduction React",
      tgl: "27 Mei 2023",
      pemateri: 4,
      kategori: "NGOBAR",
      poster: "ngobar7.0.jpg",
    },
    {
      id: 9,
      title: "NGOBARv1.1",
      subTitle: "Belajar Web Dari Nol",
      tgl: "2 Desember 2023",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar1.1.jpg",
    },
    {
      id: 10,
      title: "NGOBARv8.0",
      subTitle: "Membuat Aplikasi Android dengan React Native",
      tgl: "27 Januari 2024",
      pemateri: 1,
      kategori: "NGOBAR",
      poster: "ngobar8.0.jpg",
    },
  ];

  return (
    <div className="bg-base-100 text-center px-10 py-20" id="events">
      <h2 className="font-bold text-3xl">UMSIDA.dev&apos;s Events</h2>
      <p className="text-secondary">NGOBAR [Ngoding Bareng]</p>
      <div className="flex flex-wrap justify-center">
        {ourEvents.map((workshop, index) => (
          <div key={index} className="mx-24 flex-1 lg:w-1/4 lg:mx-10">
            <Event workshop={workshop} />
          </div>
        ))}
      </div>
    </div>
  );
}
