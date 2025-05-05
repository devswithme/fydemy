import {
  Atom,
  Box,
  Code2,
  Download,
  FastForward,
  FileQuestion,
  Forward,
  Frame,
  LogIn,
  Printer,
  Rocket,
  SquareTerminal,
  Wand,
  Waypoints,
  Workflow,
} from "lucide-react";

export const navItems = [
  {
    name: "UI/UX Design",
    level: "Beginner",
    duration: 20,
    items: [
      {
        title: "Warm up",
        url: "/dashboard/uiux/warm-up",
        icon: LogIn,
      },
      {
        title: "Introduction",
        url: "/dashboard/uiux/introduction",
        icon: Frame,
      },
      {
        title: "Frontend",
        url: "/dashboard/uiux/frontend",
        icon: Code2,
      },
      {
        title: "Quiz",
        url: "/dashboard/uiux/quiz",
        icon: FileQuestion,
      },
      {
        title: "Projects",
        url: "/dashboard/uiux/projects",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Front-End",
    level: "Beginner",
    duration: 60,
    premium: true,
    items: [
      {
        title: "Introduction",
        url: "/dashboard/frontend/introduction",
        icon: Frame,
      },
      {
        title: "Syntax",
        url: "/dashboard/frontend/syntax",
        icon: SquareTerminal,
      },
      {
        title: "Quiz",
        url: "/dashboard/frontend/quiz",
        icon: FileQuestion,
      },
      {
        title: "Projects",
        url: "/dashboard/frontend/projects",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Back-End",
    level: "Beginner",
    duration: 120,
    premium: true,
    items: [
      {
        title: "Introduction",
        url: "/dashboard/backend/introduction",
        icon: Frame,
      },
      {
        title: "Syntax",
        url: "/dashboard/backend/syntax",
        icon: SquareTerminal,
      },
      {
        title: "Implementation",
        url: "/dashboard/backend/implementation",
        icon: FastForward,
      },
      {
        title: "Quiz",
        url: "/dashboard/backend/quiz",
        icon: FileQuestion,
      },
      {
        title: "Projects",
        url: "/dashboard/backend/projects",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Full-Stack",
    level: "Intermediate",
    duration: 240,
    premium: true,
    items: [
      {
        title: "React.js",
        url: "/dashboard/fullstack/reactjs",
        icon: Atom,
      },
      {
        title: "Instalasi",
        url: "/dashboard/fullstack/instalasi",
        icon: Download,
      },
      {
        title: "Hello World",
        url: "/dashboard/fullstack/hello-world",
        icon: Printer,
      },
      {
        title: "Components",
        url: "/dashboard/fullstack/components",
        icon: Box,
      },
      {
        title: "Props",
        url: "/dashboard/fullstack/props",
        icon: Forward,
      },
      {
        title: "Props Quiz",
        url: "/dashboard/fullstack/quiz-props",
        icon: FileQuestion,
      },
      {
        title: "Hooks",
        url: "/dashboard/fullstack/hooks",
        icon: Wand,
      },
      {
        title: "Hooks Quiz",
        url: "/dashboard/fullstack/quiz-hooks",
        icon: FileQuestion,
      },
      {
        title: "API",
        url: "/dashboard/fullstack/api",
        icon: Waypoints,
      },
      {
        title: "API Quiz",
        url: "/dashboard/fullstack/quiz-api",
        icon: FileQuestion,
      },
      {
        title: "TVMaze",
        url: "/dashboard/fullstack/projects",
        icon: Workflow,
      },
      {
        title: "Deploy",
        url: "/dashboard/fullstack/deploy",
        icon: Rocket,
      },
    ],
  },
];

export const quizItems = [
  {
    name: "/dashboard/uiux/quiz",
    items: [
      {
        id: "one",
        question: "1. Manakah yang merupakan tanggung jawab seorang UI?",
        answers: [
          {
            value: "a",
            text: "Membuat user persona dan user flow dalam produk",
          },
          {
            value: "b",
            text: "Mengatur dan membuat desain visual/tampilan produk semenarik mungkin",
          },
          {
            value: "c",
            text: "Mengubah produk sesuai harga pasar",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "two",
        question: "	2. Berikut ini merupakan proses dari UI/UX, Yaitu?",
        answers: [
          {
            value: "a",
            text: "User Persona",
          },
          {
            value: "b",
            text: "User Journey MAP",
          },
          {
            value: "c",
            text: "Storyboarding",
          },
        ],
        img: "/uiux/1.png",
        code: "",
        point: 5,
      },
      {
        id: "three",
        question:
          "3. Siapa yang bertugas merancang proses interaksi dan pengalaman bagi pengguna pada sebuah produk (aplikasi & website)?",
        answers: [
          {
            value: "a",
            text: "User Interface",
          },
          {
            value: "b",
            text: "User Experience",
          },
          {
            value: "c",
            text: "UI/UX",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "four",
        question:
          "4. Siapa yang bertugas membangun rancangan Interface aplikasi/web untuk bisa digunakan oleh user?",
        answers: [
          {
            value: "a",
            text: "Frontend Developer",
          },
          {
            value: "b",
            text: "Backend Developer",
          },
          {
            value: "c",
            text: "UX Engineer",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "five",
        question:
          "5. Untuk mengatur struktur halaman web berupa text menggunakan dan gambar?",
        answers: [
          {
            value: "a",
            text: "CSS",
          },
          {
            value: "b",
            text: "Figma",
          },
          {
            value: "c",
            text: "HTML",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
    ],
  },
  {
    name: "/dashboard/frontend/quiz",
    items: [
      {
        id: "one",
        question: "1. Apa 3 elemen utama dalam pembuatan website sederhana?",
        answers: [
          {
            value: "a",
            text: "HTML, CSS, Javascript",
          },
          {
            value: "b",
            text: "HTML, CSS, Java",
          },
          {
            value: "c",
            text: "HTMX, CSS, Javascript",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "two",
        question:
          "2. Perhatikan kode berikut ini, apa output yang akan tampil?",
        answers: [
          {
            value: "a",
            text: "Budi",
          },
          {
            value: "b",
            text: "Yanto",
          },
          {
            value: "c",
            text: "Error",
          },
        ],
        img: "",
        code: `let nama = 'Budi' 
nama = 'Yanto'
console.log(nama)`,
        point: 10,
      },
      {
        id: "three",
        question: "3. Coba tebak output dari program ini!",
        answers: [
          {
            value: "a",
            text: "selamat",
          },
          {
            value: "b",
            text: "semoga dapat jodoh",
          },
          {
            value: "c",
            text: "sabar ya",
          },
        ],
        img: "",
        code: `const menikah = false
const umur = 28

if (menikah) {
  console.log('selamat')
} else if (!menikah && umur > 30) {
  console.log('semoga dapat jodoh')
} else {
  console.log('sabar ya')
}`,
        point: 10,
      },
      {
        id: "four",
        question: "4. Kenapa program ini salah?",
        answers: [
          {
            value: "a",
            text: "Tipe data parameter tidak sesuai",
          },
          {
            value: "b",
            text: "Jumlah parameter diluar yang sudah didefinisikan",
          },
          {
            value: "c",
            text: "Kegunaan fungsi tidak cocok",
          },
        ],
        img: "",
        code: `function add(a, b) {
  return a + b
}
console.log(add(3, 4, 5))`,
        point: 10,
      },
      {
        id: "five",
        question:
          "5. Apakah javascript bisa digunakan diluar lingkungan browser?",
        answers: [
          {
            value: "a",
            text: "Bisa",
          },
          {
            value: "b",
            text: "Ngga bisa",
          },
          {
            value: "c",
            text: "Tidak keduanya",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
    ],
  },
  {
    name: "/dashboard/backend/quiz",
    items: [
      {
        id: "one",
        question:
          "1. Apa method API yang cocok untuk return atau retrieve satu atau lebih data?",
        answers: [
          {
            value: "a",
            text: "GET",
          },
          {
            value: "b",
            text: "PUT",
          },
          {
            value: "c",
            text: "PATCH",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "two",
        question: (
          <div className="flex-1">
            2. Apa kegunaan memakai library{" "}
            <code className="language-js">Prisma</code> dibanding yang lain?{" "}
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "Aman dari SQL Injection, karena tidak langsung menulis query terang-terangan dalam kode alias sudah di handle oleh ORM libary.",
          },
          {
            value: "b",
            text: "Lebih simple pemakaiannya dalam query yang sangat kompleks",
          },
          {
            value: "c",
            text: (
              <p>
                Sama saja, tidak ada kegunaan spesial dari libary{" "}
                <code className="language-js">Prisma</code> ini
              </p>
            ),
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "three",
        question: (
          <div className="flex-1">
            3. <code className="language-js">req.body</code> mendapat nilai{" "}
            <b>nama</b> dan <b>peminjam</b> dari mana?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "Dari request url parameter yang kemudian ditangkap ke dalam nilai variabel tersebut",
          },
          {
            value: "b",
            text: "Dari nilai cookies yang di send oleh client melalui API",
          },
          {
            value: "c",
            text: "Dari request isi API yang bisa dalam bentuk format JSON atau yang lainnya",
          },
        ],
        img: "",
        code: `app.post('/books', async (req, res) => {
	const { nama, peminjam } = req.body
	...
})`,
        point: 10,
      },
      {
        id: "four",
        question: (
          <div className="flex-1">
            4. Kenapa penulis menyarankan untuk menggunakan libary{" "}
            <code className="language-js">nodemon</code> dari pada{" "}
            <code className="language-js">node [nama file]</code> dalam fase
            development?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: (
              <p>
                <code className="language-js">nodemon</code> memudahkan untuk
                debug program karena dapat mengetahui error-error
              </p>
            ),
          },
          {
            value: "b",
            text: (
              <p>
                <code className="language-js">nodemon</code> memudahkan dalam{" "}
                <b>auto-save</b> setiap kali ada perubahan dalam kode
              </p>
            ),
          },
          {
            value: "c",
            text: (
              <p>
                <code className="language-js">node [nama file]</code>
                memudahkan dalam <b>auto-save</b> setiap kali ada perubahan
                dalam kode
              </p>
            ),
          },
        ],
        img: "",
        code: ``,
        point: 5,
      },
      {
        id: "five",
        question: (
          <div className="flex-1">
            5. Kenapa kita harus menyimpan nilai variabel penting ke dalam file{" "}
            <code className="language-js">.env</code>?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: (
              <p>
                <code className="language-js">.env</code> memudahkan kita untuk
                mengelola variabel-variabel yang bisa dipakai kembali
              </p>
            ),
          },
          {
            value: "b",
            text: (
              <p>
                <code className="language-js">.env</code> akan disimpan di
                server alih-alih pada kodenya langsung jadi lebih aman
              </p>
            ),
          },
          {
            value: "c",
            text: (
              <p>
                <code className="language-js">.env</code> membuat aplikasi
                teratur dengan penempatan nilai-nilai pada satu file
              </p>
            ),
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
    ],
  },
  {
    name: "/dashboard/fullstack/quiz-props",
    items: [
      {
        id: "one",
        question: "1. Apa itu props di React?",
        answers: [
          {
            value: "a",
            text: "Sebuah fungsi yang mengubah state",
          },
          {
            value: "b",
            text: "Paket data yang dikirim dari komponen induk ke komponen anak",
          },
          {
            value: "c",
            text: "Sebuah variabel global yang bisa diubah sesuka hati",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "two",
        question: "2. Bagaimana cara mengirim props ke komponen anak?",
        answers: [
          {
            value: "a",
            text: (
              <p>
                Dengan menggunakan{" "}
                <code className="language-js">setProps()</code>
              </p>
            ),
          },
          {
            value: "b",
            text: "Dengan memberikan atribut saat memanggil komponen anak",
          },
          {
            value: "c",
            text: (
              <p>
                Dengan menulis{" "}
                <code className="language-js">{`props.nama = "Budi"`}</code>{" "}
                langsung di dalam komponen anak
              </p>
            ),
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "three",
        question: "3. Apa yang akan ditampilkan oleh kode ini?",
        answers: [
          {
            value: "a",
            text: "Halo, Dino! 👋",
          },
          {
            value: "b",
            text: "Halo, props.nama! 👋",
          },
          {
            value: "c",
            text: (
              <p>
                Error karena <code className="language-js">props</code> belum
                dideklarasikan
              </p>
            ),
          },
        ],
        img: "",
        code: `funtion Halo(props){
    return <h1>Halo, {props.nama}! 👋</h1>;
}

function App(){
    return <Halo nama="Dino" />;
}
`,
        point: 10,
      },
      {
        id: "four",
        question: "4. Props bisa berupa apa saja?",
        answers: [
          {
            value: "a",
            text: "Hanya teks dan angka",
          },
          {
            value: "b",
            text: "Hanya objek dan array",
          },
          {
            value: "c",
            text: "Teks, angka, objek, fungsi, bahkan komponen lain!",
          },
        ],
        img: "",
        code: `function add(a, b) {
	return a + b
}
console.log(add(3, 4, 5))`,
        point: 10,
      },
      {
        id: "five",
        question: "5. Kenapa props tidak boleh diubah oleh komponen anak?",
        answers: [
          {
            value: "a",
            text: "Karena React malas memperbarui UI",
          },
          {
            value: "b",
            text: "Karena props adalah satu arah (one-way binding) dari induk ke anak",
          },
          {
            value: "c",
            text: "Karena komponen anak tidak boleh punya variabel sendiri",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
    ],
  },
  {
    name: "/dashboard/fullstack/quiz-hooks",
    items: [
      {
        id: "one",
        question: "1. Apa itu state dalam React?",
        answers: [
          {
            value: "a",
            text: "Sebuah fungsi untuk mengubah halaman",
          },
          {
            value: "b",
            text: "Sebuah variabel biasa yang tidak bisa berubah",
          },
          {
            value: "c",
            text: "Sebuah nilai yang bisa berubah di dalam komponen",
          },
          {
            value: "d",
            text: "Sebuah elemen HTML",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "two",
        question: "2. Apa fungsi dari useState di React?",
        answers: [
          {
            value: "a",
            text: "Untuk membuat efek samping",
          },
          {
            value: "b",
            text: "Untuk menyimpan dan mengubah nilai state",
          },
          {
            value: "c",
            text: "Untuk menghapus elemen dari DOM",
          },
          {
            value: "d",
            text: "Untuk menghubungkan ke API",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "three",
        question:
          "3. Apa yang akan ditampilkan oleh kode berikut saat pertama kali dirender?",
        answers: [
          {
            value: "a",
            text: "Nilai: 0",
          },
          {
            value: "b",
            text: "Nilai: undefined",
          },
          {
            value: "c",
            text: "Nilai: 10",
          },
          {
            value: "d",
            text: "Tidak ada output",
          },
        ],
        img: "",
        code: `funtion Contoh(){
    const [angka, setAngka] = useState(10);
    return <h2>Nilai: {angka}</h2>;
}
`,
        point: 10,
      },
      {
        id: "four",
        question: "4. Bagaimana cara mengubah state dalam useState?",
        answers: [
          {
            value: "a",
            text: (
              <p>
                <code className="language-js">{`angka = 5;`}</code>
              </p>
            ),
          },
          {
            value: "b",
            text: (
              <p>
                <code className="language-js">{`useState(5);`}</code>
              </p>
            ),
          },
          {
            value: "c",
            text: (
              <p>
                <code className="language-js">{`setAngka(5);`}</code>
              </p>
            ),
          },
          {
            value: "d",
            text: (
              <p>
                <code className="language-js">{`changeState(5);`}</code>
              </p>
            ),
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "five",
        question: "5. Apa fungsi utama dari useEffect di React?",
        answers: [
          {
            value: "a",
            text: "Untuk mengubah nilai state secara langsung",
          },
          {
            value: "b",
            text: "Untuk menjalankan kode saat komponen berubah atau dimount",
          },
          {
            value: "c",
            text: "Untuk menambahkan event listener ke tombol",
          },
          {
            value: "d",
            text: "Untuk membuat style CSS di React",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "six",
        question: (
          <div className="flex-1">
            6. Kapan useEffect dengan dependensi kosong (
            <code className="language-js">{`useEffect(() => {}, [])`}</code>)
            akan dijalankan?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "Setiap kali state berubah",
          },
          {
            value: "b",
            text: "Setiap kali komponen di-render ulang",
          },
          {
            value: "c",
            text: "Hanya saat komponen pertama kali muncul",
          },
          {
            value: "d",
            text: "Tidak pernah dijalankan",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "seven",
        question:
          "7. Apa output dari kode berikut setelah tombol ditekan sekali?",
        answers: [
          {
            value: "a",
            text: "Tidak ada log di console",
          },
          {
            value: "b",
            text: "State berubah! Hitung: 0",
          },
          {
            value: "c",
            text: "State berubah! Hitung: 1",
          },
          {
            value: "d",
            text: '"State berubah! Hitung: 0" dan "State berubah! Hitung: 1"',
          },
        ],
        img: "",
        code: `function Contoh(){
    const [hitung, setHitung] = useState(0);

    useEffect(() => {
        console.log("State berubah! Hitung:", hitung);
    }, [hitung]);

    return (
        <div>
            <h2>Hitung: {hitung}</h2>
            <button onClick={() => setHitung(hitung + 1)}>Tambah</button>
        </div>
    );
}`,
        point: 10,
      },
      {
        id: "eight",
        question: (
          <div className="flex-1">
            8. Apa yang terjadi jika kita tidak memberikan array dependensi pada
            useEffect (
            <code className="language-js">{`useEffect(() => {...})`}</code>
            )?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "useEffect tidak akan pernah dijalankan",
          },
          {
            value: "b",
            text: "useEffect hanya dijalankan saat pertama kali render",
          },
          {
            value: "c",
            text: "State berubah! Hitung: 1",
          },
          {
            value: "d",
            text: "Error",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
    ],
  },
  {
    name: "/dashboard/fullstack/quiz-api",
    items: [
      {
        id: "one",
        question: "1. Apa fungsi utama dari Axios dalam React?",
        answers: [
          {
            value: "a",
            text: "Mengubah warna halaman",
          },
          {
            value: "b",
            text: "Mengambil dan mengirim data dari/ke API",
          },
          {
            value: "c",
            text: "Membuat animasi",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "two",
        question: (
          <div className="flex-1">
            2. Apa perbedaan utama antara{" "}
            <code className="language-js">fetch()</code> dan{" "}
            <code className="language-js">axios</code>?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: (
              <p>
                <code className="language-js">fetch()</code> lebih mudah
                digunakan daripada Axios
              </p>
            ),
          },
          {
            value: "b",
            text: "Axios otomatis mengubah response ke JSON",
          },
          {
            value: "c",
            text: (
              <p>
                <code className="language-js">fetch()</code> selalu lebih cepat
                daripada Axios
              </p>
            ),
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "three",
        question: (
          <div className="flex-1">
            3. Apa fungsi dari <code className="language-js">useEffect</code>{" "}
            dalam pengambilan data API?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "Menjalankan kode setiap kali halaman di-refresh",
          },
          {
            value: "b",
            text: "Menyimpan data di dalam komponen",
          },
          {
            value: "c",
            text: "Mempercepat proses loading",
          },
        ],
        img: "",
        code: ``,
        point: 5,
      },
      {
        id: "four",
        question: (
          <div className="flex-1">
            4. Kapan sebaiknya kita menggunakan{" "}
            <code className="language-js">useEffect</code> dengan array
            dependency kosong <code className="language-js">[]</code>?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "Setiap kali user menekan tombol",
          },
          {
            value: "b",
            text: "Hanya saat komponen pertama kali muncul",
          },
          {
            value: "c",
            text: "Setiap kali state berubah",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "five",
        question:
          "5. Apa yang terjadi jika kita tidak menangani error dalam Axios?",
        answers: [
          {
            value: "a",
            text: "Program akan tetap berjalan tanpa masalah",
          },
          {
            value: "b",
            text: "Bisa terjadi error yang tidak ditampilkan dan menyebabkan crash",
          },
          {
            value: "c",
            text: "Axios otomatis mengatasi semua error",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "six",
        question: "6. Apa yang dilakukan kode berikut? ",
        answers: [
          {
            value: "a",
            text: "Menghapus semua data dari API",
          },
          {
            value: "b",
            text: "Mengambil data dari API dan mencetaknya ke console",
          },
          {
            value: "c",
            text: "Mengubah data dalam API",
          },
        ],
        img: "",
        code: `axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data))
	.catch(error => console.error(error));`,
        point: 10,
      },
      {
        id: "seven",
        question: "7. Dalam kode berikut, di mana data API disimpan?",
        answers: [
          {
            value: "a",
            text: "Dalam sebuah file terpisah",
          },
          {
            value: "b",
            text: (
              <p>
                Di dalam state <code className="language-js">posts</code>
              </p>
            ),
          },
          {
            value: "c",
            text: "Dalam API",
          },
        ],
        img: "",
        code: `const [posts, setPosts] = useState([]);`,
        point: 10,
      },
      {
        id: "eight",
        question: "8. Apa yang ditampilkan jika API gagal dipanggil?",
        answers: [
          {
            value: "a",
            text: "Data tetap muncul",
          },
          {
            value: "b",
            text: (
              <p>
                Pesan error yang sudah diset dalam{" "}
                <code className="language-js">catch()</code>
              </p>
            ),
          },
          {
            value: "c",
            text: "Halaman akan crash",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "nine",
        question:
          "9. Bagaimana cara menampilkan hanya 5 data pertama dari API?",
        answers: [
          {
            value: "a",
            text: (
              <p>
                <code className="language-js">{`posts.slice(0, 5)`}</code>
              </p>
            ),
          },
          {
            value: "b",
            text: (
              <p>
                <code className="language-js">{`posts.filter(5)`}</code>
              </p>
            ),
          },
          {
            value: "c",
            text: (
              <p>
                <code className="language-js">{`posts.map(5)`}</code>
              </p>
            ),
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
      {
        id: "ten",
        question: (
          <div className="flex-1">
            10. Apa yang terjadi jika kita lupa menambahkan{" "}
            <code className="language-js">[]</code> di{" "}
            <code className="language-js">useEffect</code>?
          </div>
        ),
        answers: [
          {
            value: "a",
            text: "API akan dipanggil berkali-kali setiap render ulang",
          },
          {
            value: "b",
            text: "API hanya dipanggil sekali",
          },
          {
            value: "c",
            text: "Program tidak akan berjalan",
          },
        ],
        img: "",
        code: "",
        point: 5,
      },
    ],
  },
];
