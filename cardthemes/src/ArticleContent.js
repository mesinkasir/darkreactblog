const articles = [
  {
    name: 'about',
    title: 'About Us',
    desc: 'Tentang kami dan bagaimana kami bekerja',
    img:
      'https://1.bp.blogspot.com/-cctI29Ia7jM/X-QXHOplqzI/AAAAAAAAMNw/A2IaXhMsWVYmnUEnfTQyvUKKnplm1_GZgCLcBGAsYHQ/s1000/aplikasi%2Bbisnis%2Binvoice%2Bakuntansi.jpg',
    content: [
      `Axcora dev adalah team developer yang terbentuk untuk kebutuhan penyedia layanan bidang industri technology dan informasi , berusaha memberikan layanan dengan harga relatif terjangkau dan berguna dalam menunjang keseluruhan kebutuhan dalam menunjang pekerjaan, mencatat pembukuan,dan lain sebagai nya`,
      `Layanan kami meliputi pembuatan website , pembuatan aplikasi untuk bekerja maupun edukasi hingga , android dalam satu kemasan, hubungi kami untuk konsultasi megenai request apps dan website sesuai kebutuhan .`
    ]
  },
  {
    name: 'schema',
    title: 'Schema App',
    desc: 'Skema layanan aplikasi dan pembuatan website',
    img:
      'https://1.bp.blogspot.com/-O7iIhwxclXM/X-QXIQX4N_I/AAAAAAAAMN4/Yl7SUBw85OA4Fk1EyFd3IW7D3ATcmcNAwCLcBGAsYHQ/s1000/aplikasi%2Bkantor%2Bfaktur%2Bpenjualan.jpg',
    content: [
      `Kami sudah memikirkan secara konsep dan terstruktur agar aplikasi yang kami ciptakan dan kembangkan berguna untuk digunakan secara maksimal dalam menunjang berbagai kebutuhan industri bidang usaha hingga edukasi .`,
      `Konsep dan skema yang tercipta untuk menunjang berbagai bidang bisnis industri dan edukasi menjadi lebih baik dalam digunakan untuk bekerja baik desktop apps , clouds computing technology dan berbagai kebutuhan lain nya untuk tujuan mobilitas, efisiensi pekerjaan .`
    ]
  },
  {
    name: 'konsep',
    title: 'Konsep Kerja',
    desc: 'Konsep kerja kebebasan technology diterapkan',
    img:
      'https://1.bp.blogspot.com/-l3N-gMeqKwo/X-QXHYvLqsI/AAAAAAAAMN0/fSL5Go5qqAYGJ1u4qCLuhIAXHZSOguJ7wCLcBGAsYHQ/s1000/aplikasi%2Bakuntansi%2Bonline.jpg',
    content: [
      `Hey... percayakan kepada team kami untuk kebutuhan pengembangan website yang terintegrasi dengan aplikasi, konsep struktur skema terbaik dalam proses development untuk menghasilkan kesempurnaan dalam delpoy website applikasi yang terintegrasi secara penuh dalam atap satu apps untuk bekerja.`,
      `Kami bukan lah team yang naif dan idealis akan suatu lang maupun framework, dengan era keterbukaan technology mengubah padangan kami untuk ikut terbuka dan kolborasi technology menjadi hal penting agar hasil terbaik tercipta dalam progress development webapp .`
    ]
  },
  {
    name: 'design',
    title: 'Desain UI/UX',
    desc: 'Desain tampilan display aplikasi website terbaik',
    img:
      'https://1.bp.blogspot.com/-eXysooc8tP8/X-MC99LYS2I/AAAAAAAAMD4/wQO1XZDgdcgCLkZxx4byL5JE9xkFQ4JfQCLcBGAsYHQ/s497/web_hosting.png',
    content: [
      `Tentunya kami memiliki team desain untuk bekerja dalam kebutuhan deploy tampilan aplikasi dan website yang keren untuk digunakan dalam proses pembuatan aplikasi dan website.`,
      `Dengan desain unik dan menarik akan menambah point kemewahan elegan untuk aplikasi dan website.`
    ]
  },
  {
    name: 'officeapp',
    title: 'Office Apps',
    desc: 'aplikasi invoice office akuntansi',
    img:
      'https://1.bp.blogspot.com/-CdSt04cw98Y/X-MC0fuTTyI/AAAAAAAAMDY/ghskpmEDFBwMikhCvFK5MKRvVLu1w9F1wCLcBGAsYHQ/s626/apps.webp',
    content: [
      `Layanan pengembangan akan technology pembuatan aplikasi invoice untuk mencetak faktur pajak penjualan maupun faktur penjualan, inventori stok management, mencatat transaksi dan pembukuan agenda project tender dengan status pengerjaan via invoice app kami .`,
      `Aplikasi akuntansi accounting untuk memudahkan akuntan bekerja dalam kebutuhan input pembukuan secara cepat plus mobile akuntansi apps menjadikan kemudahan dan mobilitas.`
    ]
  },
  {
    name: 'restoapp',
    title: 'Resto Apps',
    desc: 'Aplikasi restoran cafe rumah makan',
    img:
      'https://1.bp.blogspot.com/-4SJl3zxEmI8/X-MC7eawLPI/AAAAAAAAMDk/H_5XbaABIowyhxS547xBFZ3rP6o0rSOsgCLcBGAsYHQ/s626/APK%2Bandroid%2Bweb%2Bsekolah.jpg',
    content: [
      `Dukungan layanan pembuatan aplikasi restoran cafe rumah makan untuk kemudahan dalam pembukuan dan mempercepat transaksi maupun pembagian divisi waiters, kitchen dan kasir menjadi lebih baik dengan menggunakan aplikasi restoran cafe rumah makan kami untuk secara penuh mendukung pembukuan resto cafe.`,
      `Integrasi website menjadikan kesempurnaan untuk menampilkan secara lansgung menu makanan dan minuman via display site , update informasi mengenai agenda promosi dan event secara langsung pada website untuk memberikan informasi dan menarik animo pelanggan plus dukungan APK aplikasi android untuk staff karyawan bekerja , hingga APK android khusus pelanggan.`
    ]
  },
  {
    name: 'retailapp',
    title: 'Retail Apps',
    desc: 'Aplikasi toko minimarket shop store outlet',
    img:
      'https://1.bp.blogspot.com/-z4D2YtC4Gjk/X-MC0kVNgFI/AAAAAAAAMDg/CFywfEixd60lHyKtsBbcCl-3wuPo9PXewCLcBGAsYHQ/s626/aplikasisekolah.jpg',
    content: [
      `Pembuatan aplikasi toko minimarket shop store dan outlet unutk kemudahan dalam kontrol monitoring inventori stok management,pendapatan detail dan berbagai laporan tercipta dalam penggunaan nya, tentu dengan kemudahan bekerja dengan cepat, kemampuan secara real time update data menjadikan kestabilan untuk operasional nya.`,
      `Integrasi dengan barcode system maupun touchscreen metode menyempurnakan dalam penggunaan pos point of sale system, bukan hanya itu include website yang secara otomatis menampilkan data produk include harga dan stok pada halaman online order untuk kemudahan closing secara online.`
    ]
  },
  {
    name: 'schoolapp',
    title: 'School Apps',
    desc: 'pembuatan aplikasi sekolah, website sekolah',
    img:
      'https://1.bp.blogspot.com/-CaGGNz-9VSk/X-MC0VL9YcI/AAAAAAAAMDc/3FvrjM18IuwZ5f7LRWJmRPuPc-L3eoZrwCLcBGAsYHQ/s626/apl.jpg',
    content: [
      `Special untuk dunia edukasi dengan website sekolah yang terkonsep dengan tema yang menarik elegant dalam digunakan , plus dukungan aplikasi bekerja baik via e-learn online, pembukuan pembayaran keuangan sekolah , absensi digital , ERP integrasi all in one , rapot online dan masih banyak lagi.`,
      `Konsep web app menjadi lebih baik untuk sekolah edukasi dunia pendidikan website dan aplikasi dalam development nya untuk kemudahan masing masing divisi sekolah bekerja baik guru untuk update mata pelajaran , upload soal ujian, penilaian dan TU admin bertugas untuk pencatatan pembayaran keuangan sekolah , siswa murid login untuk memulai aktivitas belajar dan mengisi soal tugas ujian, plus APK android menjadikan semua nya lebih mobile.`
    ]
  },
  {
    name: 'staticsite',
    title: 'Static Site',
    desc: 'Pembuatan website cepat dengan static site',
    img:
      'https://1.bp.blogspot.com/-fm954TepweM/X-Hr19oKxLI/AAAAAAAAL-4/sh8efNGxAUc-IPdn-pqM1dVxlBaxolEPwCLcBGAsYHQ/s1000/pembuatan%2Bwebsite%2Bcompany%2Bprofile%2B%25282%2529.png',
    content: [
      `Static site menjadi pilihan terbaik untuk yang membutuhkan pembuatan website cepat, dengan tingkat security tinggi dalam digunakan, static site menjadi prioritas penting untuk development pembuatan website baik untuk digunakan sebagai company profile, sekolah , portfolio , restoran cafe, toko dan lain sebagai nya.`,
      `Layanan kami khusus untuk statis site dalam proses pengerjaan nya menggunakan full codding , disini anda dapat memilih menggunakan bootstrap dengan html css dan js hingga jekyll ruby on rail , atau menggunakan vue js dalam pengembangan nya, dan layanan ini cocok untuk sebuah website yang tidak membutuhkan update secara berkala artinya proses update tetap menggunakan codding untuk pengerjaan nya, sehingga team kami yang nantinya akan melakukan penambahan fitur dan desain sesuai request anda.`
    ]
  },
  {
    name: 'cmsweb',
    title: 'CMS Web',
    desc: 'Pembuatan website dengan Content Management system',
    img:
      'https://1.bp.blogspot.com/-r-wSGgqtsm0/X-Hr184zSbI/AAAAAAAAL-8/I377EooVg4gg4PMyPfh4PBIcKU0Kf83zQCLcBGAsYHQ/s625/pembuatan%2Bwebsite%2Bcompany%2Bprofile%2B%25283%2529.png',
    content: [
      `Untuk kemudahan dalam proses update website maka terciptanya sebuah content management system untuk digunakan dalam proses pembuatan website , tersedia berbagai layanan untuk digunakan mulai dari get axcora cms yang merupakan open source code project pengembangan kami , MODX revolutions sebuah content management framework , Blogspot blogger dengan full custom design , dan wordpress untuk penggunaan development online shop.`,
      `anda dapat memilih dan request content management system favorit , dengan menggunakan cms memudahkan mu dalam proses update website secara cepat dengan kreasi sendiri.`
    ]
  },

  {
    name: 'modernweb',
    title: 'Modern Web',
    desc: 'Pembuatan website technology terbaru dengan framework.',
    img:
      'https://1.bp.blogspot.com/-P87ExqhdGps/X-Hr04pLjqI/AAAAAAAAL-0/M3Vv_gcxMBM9qMzFWqXM6aRtzb8_MTa5QCLcBGAsYHQ/s624/pembuatan%2Bwebsite%2Bcompany%2Bprofile%2B%25281%2529.png',
    content: [
      `Saat nya kini beralih ke modern website dengan technology modern terbaru maka layanan ini adalah prioritas untuk digunakan dalam proses develope pembuatan website,berbagai pilihan hadir untuk digunakan : laravel php artisan populer framework di dunia PHP menjadi yang terbaik dalam progress web app stabil powerfull untuk digunakan , laravel menjadi lebih baik dalam pengerjaan sebuah project, nikmati sensasi single page app dengan angular , sebuah framework dari google ini menjadi alternatif lain untuk merasakan super nya website dengan develop menggunakan layanan pembuatan website angular. Gatbsy Next React alternatif lain untuk membangun modern website dengan cepat dan sempurna untuk digunakan, kini saat nya beralih ke website modern dan pilih framework yang tersedia untuk proses development project pembuatan website.`
    ]
  }
];

export default articles;
