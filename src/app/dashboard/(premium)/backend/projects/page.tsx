import Submission from "@/components/submission";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Projects",
  description:
    "Selamat datang di projek akhir kita!, disini kamu hanya disuruh untuk menyempurnakan program library API yang telah kita buat tadi.",
};

export default function Home() {
  return (
    <>
      <h1>Penyempurnaan</h1>
      <Submission id="be" />
      <blockquote>
        Sebelum upload, hapus folder <b>node_modules</b>
      </blockquote>
      <p>
        Selamat datang di projek akhir kita!, disini kamu hanya disuruh untuk
        menyempurnakan program library API yang telah kita buat tadi. Dengan
        menerapkan step #1 dan #2 dibawah ini!
      </p>
      <ul>
        <li>
          <b>#1</b> Tambahkan route <b>DELETE</b> untuk menghapus buku
          berdasarkan id
        </li>
        <li>
          <b>#2</b> Tambahkan route <b>GET</b> untuk mengembalikan buku secara
          spesifik sesuai id
        </li>
        <li>
          <b>#3</b> Tambahkan status code di setiap responnya. Yang paling umum
          digunakan:{" "}
          <pre className="language-js">
            <code>{`res.status([status code]).json({message: '...'})`}</code>
          </pre>
          <table>
            <thead>
              <tr>
                <th>Status code</th>
                <th>Kapan digunakan?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>200</td>
                <td>Sukses menampilkan data</td>
              </tr>
              <tr>
                <td>201</td>
                <td>Sukses membuat data baru</td>
              </tr>
              <tr>
                <td>404</td>
                <td>Data tidak ditemukan</td>
              </tr>
              <tr>
                <td>500</td>
                <td>Server error</td>
              </tr>
            </tbody>
          </table>
          Untuk lengkapnya bisa dicek di{" "}
          <a href="https://www.hostinger.com/id/tutorial/http-status-code">
            Daftar Status Code
          </a>
        </li>
        <li>
          <b>#4</b> Di setiap routenya tambahkan try catch block untuk error
          handling
          <pre>
            <code className="language-js">
              {`app.post('/books', async (req, res) => {
	const { nama, peminjam } = req.body
  try {
	await db.books.create({
		data: { nama, peminjam },
	})
	res.json({message: "Buku telah berhasil di tambahkan!"})
  } catch (err){
   console.log(err.message)
   res.status(500).json({message: err.message})
  }
})`}
            </code>
          </pre>
        </li>
      </ul>
    </>
  );
}
