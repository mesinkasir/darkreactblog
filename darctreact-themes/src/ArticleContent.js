const articles = [
  // {
  //   name: 'Aplikasitoko',
  //   title: 'About Larapos',
  //   desc: 'Larapos Web App technology untuk masa depan',
  //   img:
  //     'https://1.bp.blogspot.com/-O7iIhwxclXM/X-QXIQX4N_I/AAAAAAAAMN4/Yl7SUBw85OA4Fk1EyFd3IW7D3ATcmcNAwCLcBGAsYHQ/s1000/aplikasi%2Bk//antor%2Bfaktur%2Bpenjualan.jpg',
  //   content: [
  //     `larapos adalah sebuah web app technology modern yang memudahkan dan semakin mobile dengan web apps technology dalam //penggunaan nya, bukan sekedar aplikasi yang mampu menjual grosir dan eceran tetapi juga dilengkapi dengan website dengan //domain nama usaha bisnis semakin powerfull pada online mode generasi milenial saat ini.`,
  //     `Mulai digital revolusi mu dengan larapos apps untuk masa depan terbaik bagi bisnis dan usaha mu.`
  //   ]
  // },
  {
    name: 'mobileapp',
    title: 'Mobile App',
    desc: 'Sebuah technology mobile apps untuk akses tanpa batas',
    img:
      'https://1.bp.blogspot.com/-ZgThCBBOIXk/X-GyC1_93iI/AAAAAAAAL-g/KklJKtvnXhECd6PZg9vKQeHAyW0uyvowgCPcBGAYYCw/s741/aplikasisekolaherpaxcoraschool.png',
    content: [
      `Kesempurnaan dengan develope mobile application khusus dipergunakan untuk APK android upload ke google playstore agar lebih dekat dengan pelanggan memudahkan dalam berbagai kebutuhan untuk penyampaian update dan informasi mengenai usaha anda.`,
      `Bersama kami untuk proses pembuatan aplikasi android APK demi kemajuan bisnis dan usaha anda, develope menggunakan flutter dan dart dalam bekerja menjadikan nya semakin mobile untuk aplikasi android anda.`
    ]
  },
  {
    name: 'desktopapp',
    title: 'Desktop Apps',
    desc:
      'Desktop application software program kasir toko restoran invoice office akuntansi',
    img:
      'https://1.bp.blogspot.com/-EJeyP2C2wC0/X-Gx9cTy2bI/AAAAAAAAL-g/almc17ny1awHGUNG1UwZTjZUecgQsIyEQCPcBGAYYCw/s473/ftp3-1.png',
    content: [
      `Layanan untuk aplikasi berbasis desktop dalam penggunaan nya dengan kelengkapan system dan fitur yang dibutuhkan bekerja via offline mode tidak membutuhkan koneksi internet dan dapat bekerja dengan jaringan menggunakan nirkabel wifi maupun lan kabel untuk proses shared data agar dapat dipergunakan dengan berbagai divisi.`,
      `Clouds based ready dalam kebutuhan untuk mobilitas tanpa batas, dengan clouds installasi full online memudahkan karyawan bekerja secara bersamaaan dan kebutuhan untuk owner cek laporan dimana saja kapan saja via berbagai device digunakan seperti android smartphone iphone hingga pc desktop dan laptop.`
    ]
  },
  // {
  //   name: "laravelapp",
  //   title: "Laravel PHP artisan",
  //   desc: "Magican bersama sang artisan",
  //   img:
  //     "https://1.bp.blogspot.com/-5ZoKm_MPq8w/Xzt04tHFCEI/AAAAAAAALOA/StszTqDprdQrO4T18fXLqQd-_qVMJ_yYwCLcBGAsYHQ/s1000/aplikasi%2Bt//oko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25284%2529.jpg",
  //
  //   content: [
  //     `Aplikasi kasir toko penjualan dan laporan lengkap ini di develope menggunakan laravel, laravel adalah sebuah framework //software berbasis PHP yang sangat populer di dunia , khusus nya pada bahasa pemrograman PHP , hal ini dikarenakan mudah cepat //dan stabil serta powerfull nya menggunakan laravel untuk berbagai kebutuhan project`,
  //     `Laravel menjadi prioritas para developer khusus nya dalam berbagai kebutuhan baik untuk pengembangan aplikasi maupun website //hingga menciptakan sebuah website applikasi, maka jangan ragu menggunakan applikasi ini.`
  //   ]
  // },
  // {
  //   name: "pembuatanwebsite",
  //   title: "Modern website",
  //   desc: "Hei.. ada bonus website gratis",
  //   img:
  //     "https://1.bp.blogspot.com/-eZ13VXar8C8/Xzt058wV1nI/AAAAAAAALOM/9RglhUNOakwoxl3GoeANXmwX-sq1B6ukACLcBGAsYHQ/s2048/pembuatan%2B//website%2Bmodern%2Bdengan%2Blaravel.jpg",
  //   content: [
  //     `Yap.. dengan berlangganan layanan larapos apps secara otomatis kamu bisa mendapatkan sebuah website yang berguna untuk media //promosi bisnis mu di dunia online net, dan tentu sangat bermanfaat untuk digunakan sebagai media marketing digital bisnis //usaha mu, untuk memperkenalkan toko usaha mu secara luas via website milikmu.`,
  //     `Tersedia berbagai website disesuaikan dengan pilihan paket layanan, basic dengan simple website informasi , dan paket //standard dengan get axcora cms modern app kami, atau menggunakan laravel all in one menyempurnakan dalam membalut aplikasi //include dengan website plus domain nama toko mu`
  //   ]
  // },
  // {
  //   name: "getstart",
  //   title: "Lets Get Started Now",
  //   desc: "Mulai gunakan larapos sekarang",
  //   img:
  //     "https://1.bp.blogspot.com/-8TDWnq41TuE/Xzt03g86CoI/AAAAAAAALN4/RRO9T2k3or8x4xx6vBDAmdn0lIHLU6oIACLcBGAsYHQ/s1500/aplikasi%2Bt//oko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25282%2529.jpg",
  //   content: [
  //     `Dan kini saat nya memanjakan diri dengan pembukuan yang aktual dengan simple system mudah digunakan serta lengkap dalam //menunjang kebutuhan usaha dan bisnis mu, larapos menjadi solusi terbaik pada semua usaha dengan kemampuan penjualan retail //dan grosir dengan display pos tersendiri semakin memudahkan setiap transaksi baik grosir dan eceran retail.`,
  //     `Klik download untuk cek harga larapos web apps ini.`
  //   ]
  // },
  // {
  //   name: "loginaplikasitoko",
  //   title: "Login menu",
  //   desc: "Keamanan aplikasi dengan login",
  //   img:
  //     "https://1.bp.blogspot.com/-6v63PY3r1_c/Xzt0_JUmcNI/AAAAAAAALOU/oATUQmFaBVg_dj1TmqIkZVvfwJ4o2_YzwCLcBGAsYHQ/s1349/aplikasi%2Bt//oko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25285%2529.png",
  //   content: [
  //     `Hadir halaman login awal untuk akses aplikasi kasir ini, dengan multi proteksi akan penggunaan password dan username baik //via aplikasi , database dan cloud host semakin aman dan nyaman dalam menggunakan aplikasi ini`,
  //     `Dukungan penuh lets encrypt maupun cloudflare memprotkesi secara penuh security apps ini di cloud online.`
  //   ]
  // },
  // {
  //   name: "fituraplikasitoko",
  //   title: "Fitur lengkap",
  //   desc: "Kelengkapan fitur menunjang pembukuan",
  //   img:
  //     "https://1.bp.blogspot.com/-LOo12q1NWsM/Xzt0_I0l6dI/AAAAAAAALOQ/r5AgzZUOVRMN4eEw2S1UPo99pEGRTwUSwCLcBGAsYHQ/s1020/aplikasi%2Bt//oko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25284%2529.png",
  //   content: [
  //     `Dengan fitur yang lengkap memudahkan aktivitas bekerja dengan menggunakan aplikasi toko grosir dan eceran ini, master //database dalam kebutuhan input dan register pendaftaran user, satuan produk, hingga input data produk `,
  //     `Mudah digunakan dan cepat untuk proses input data.`
  //   ]
  // },
  // {
  //   name: "panelpenjualan",
  //   title: "Panel Penjualan",
  //   desc: "Memudahkan dalam penjualan grosir dan ecer",
  //   img:
  //     "https://1.bp.blogspot.com/--BsMUVZN5II/Xzt1GqD6MHI/AAAAAAAALOg/vQznUpeH5hcg5B7OwafIDxtbWSfl2ReWwCLcBGAsYHQ/s1103/aplikasi%2Bt//oko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%252814%2529.png",
  //   content: [
  //     `Semakin sempurna pada display pos point of sale penjualan yang dengan mudah untuk memilih dan melakukan transaksi via gorsir //dengan harga khusus grosir maupun retail dengan harga khusus untuk kebutuhan penjualan retail pada menu panel penjualan ini `,
  //     `Dalam pelaksanaan nya tinggal klik dan pilih panel penjualan sesuai dengan kebutuhan dalam bertransaksi, secara otomatis pos //system akan menggunakan harga sesuai dengan panel pilihan pada penjualan.`
  //   ]
  // },
  // {
  //   name: "pointofsale",
  //   title: "Point of sale",
  //   desc: "Fitur penjualan kasir display POS",
  //   img:
  //     "https://1.bp.blogspot.com/-KNIFpcGse7s/XzuGwjEI4JI/AAAAAAAALO4/W06_zV8WM5UOdBCV6yvjmqWcpWeIh0JkwCLcBGAsYHQ/s1162/aplikasi%2Bt//oko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%252813%2529.png",
  //   content: [
  //     `Point of sale kasir display yang mudah dalam penggunaan nya, dan dilengkapi dengan pencarian produk memudahkan dalam setiap //transaksi sesuai kebutuhan.`,
  //     `Dan kemudahan dalam cetak struk kasir bukti transaksi penjualan kasir kepada pelanggan menyempurnakan system mesin kasir //online ini bekerja.`
  //   ]
  // },
  {
    name: 'webapp',
    title: 'Website Application',
    desc: 'All in one aplikasi kasir office terintegrasi dengan website.',
    img:
      'https://1.bp.blogspot.com/-_t509qsqLz8/X-IOO5-R7MI/AAAAAAAAL_0/nnYc00Fig6USqy6Hw4H9IGd80cwjgwg2wCLcBGAsYHQ/s581/aplikasi.png',
    content: [
      `Saat nya mudahkan segala nya dengan technology website application dengan all in one terintegrasi baik aplikasi kerja kasir restoran toko invoice office inventori plus website hadir dalam memberikan informasi mengenai produk dan stok harga jual yang tersedia secara otomatis langsung akan di tampilkan pada halaman website online order anda, content management system semakin memudahkan untuk memberikan informasi mengenai promosi agenda event dan lain sebagai nya agar pelanggan terus memperoleh update informasi dari usaha bisnis via web apps ini.`
    ]
  }
];

export default articles;
