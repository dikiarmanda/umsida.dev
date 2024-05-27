import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import TimelineHorizontal from '../components/TimelineHorizontal'
import Acordion from '../components/Acordion'

export default function RoadmapSkripsi() {
  const roadmap = [
    {
      title: 'Proposal',
      body: [
        'Template Proposal Skripsi download di fst.umsida.ac.id',
        'Penulisan bab 1 - 3',
        'Sitasi minimal 5 dengan sumber tidak lebih dari 5 tahun yang lalu.',
      ],
    },
    {
      title: 'Seminar Proposal',
      body: [
        'Cek Plagiasi Bab 1 - 3',
        'Melampirkan 1x foto copy kwitansi pembayaran sebesar Rp. 200.000,- yang telah dibayarkan ke Bank BSI (wajib divalidasi ke Direktorat Keuangan kampus 1)',
        'Soft copy bukti pendaftaran test atau sertifikat TOEFL dari UMSIDA (bayar Rp. 60.000 ke BSI kampus 1 untuk pendaftaran)',
        'Menyerahkan 1x soft copy Point, minimal 75% sudah terpenuhi (Validasi Kemahasiswaan Fakultas)',
        'Melampirkan transkrip sementara dari BAA Telah lulus 100 SKS (Bebas nilai D dan E, Nilai PKL dan KKN sudah muncul di transkrip)',
        '[SAPUJAGAD] Bimbingan minimal 5x',
        '[SAPUJAGAD] Daftar Seminar Proposal',
      ],
    },
    {
      title: 'Seminar Hasil',
      body: [
        'Cek plagiasi full',
        '[SAPUJAGAD] Bimbingan 16x',
        '[CETAK] Lembar pengesahan',
        '[CETAK] Berita acara',
        '[CETAK] Dokumen Bimbingan',
      ],
    },
    {
      title: 'Yudisium',
      body: [
        'Mengumpulkan berkas ke classroom',
        '[SAPUJAGAD] Upload tanda terima pengumpulan classroom',
        '[SAPUJAGAD] Validasi sudah upload Archive',
        '[SAPUJAGAD] Validasi keuangan ke Direktorat Keuangan',
        'Bayar yudisium Rp. 75.000 ke admin saintek',
      ],
    },
    {
      title: 'Wisuda',
      body: [
        'Aktivasi VA ke BAK untuk pembayaran wisuda',
        '[U-PAY] Bayar biaya wisuda',
        '[SAPUJAGAD] Isi formulir pendaftaran wisuda',
        '[CETAK] Formulir pendaftaran wisuda',
        '[CETAK] Foto 3x4 2 lembar',
      ],
    }
  ]
  return (
    <div className="container mx-auto lg:max-w-7xl">
      <Navbar />
      <main className="pt-20">
        <h1 className="text-center text-3xl font-bold">Roadmap Skripsi</h1>
        <p className="text-center text-secondary">update 27 Mei 2024</p>
        {/* <div className="mx-auto">
          <TimelineHorizontal />
        </div> */}
        <div className="mt-10 flex flex-col justify-center rounded-lg bg-gray-800 py-10">
          {roadmap.map((item, index) => (
            <Acordion key={index} step={item.title} body={item.body} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
