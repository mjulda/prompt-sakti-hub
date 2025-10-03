import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Apakah Prompt Sakti legal dan aman digunakan?",
      answer: "Ya, 100% legal! Prompt Sakti adalah tools bantu penulisan yang menggunakan teknologi ChatGPT. Anda tetap yang menulis dan mengembangkan karya ilmiah Anda sendiri dengan panduan dari prompt ini. Ini seperti memiliki asisten pribadi yang membantu menyusun struktur dan konten."
    },
    {
      question: "Apakah hasil dari Prompt Sakti bisa lolos plagiarisme?",
      answer: "Ya! Prompt Sakti dirancang untuk menghasilkan konten yang unik dengan parafrase cerdas. Namun, kami selalu menyarankan Anda untuk melakukan review, edit, dan menyesuaikan dengan gaya bahasa dan kebutuhan riset Anda agar hasilnya maksimal dan original."
    },
    {
      question: "Apakah cocok untuk semua jurusan?",
      answer: "Absolutely! Prompt Sakti dirancang fleksibel untuk semua jurusan dan bidang studi, baik sosial, sains, teknik, kesehatan, ekonomi, hukum, dan lainnya. Anda tinggal input topik dan metodologi yang sesuai dengan jurusan Anda."
    },
    {
      question: "Bagaimana cara menggunakan GPT Custom yang diberikan?",
      answer: "Setelah pembelian, Anda akan mendapatkan akses ke GPT Custom yang sudah dikonfigurasi khusus untuk kebutuhan akademis Anda. Kami juga menyediakan video tutorial lengkap dan konsultasi gratis untuk memastikan Anda bisa memaksimalkan penggunaannya."
    },
    {
      question: "Berapa lama proses penyelesaian karya ilmiah dengan Prompt Sakti?",
      answer: "Tergantung kompleksitas riset Anda, tapi rata-rata mahasiswa bisa menghasilkan draft lengkap dalam 1-2 minggu. Beberapa bahkan selesai dalam hitungan hari! Yang pasti, jauh lebih cepat dibanding menulis manual."
    },
    {
      question: "Apakah ada garansi atau refund jika tidak puas?",
      answer: "Kami sangat yakin dengan kualitas Prompt Sakti. Namun, kami menyediakan demo gratis yang bisa Anda coba terlebih dahulu sebelum membeli. Dengan begitu, Anda bisa memastikan produk ini sesuai kebutuhan sebelum melakukan pembelian."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Pembayaran dilakukan melalui gateway Xendit yang aman dan terpercaya. Kami mendukung berbagai metode pembayaran seperti transfer bank, e-wallet (OVO, GoPay, DANA), dan kartu kredit. Setelah pembayaran dikonfirmasi, Anda langsung mendapatkan akses produk."
    },
    {
      question: "Apakah saya bisa konsultasi jika ada kesulitan?",
      answer: "Tentu saja! Setiap paket dilengkapi dengan periode konsultasi gratis via WhatsApp. Tim kami siap membantu Anda jika ada pertanyaan atau kesulitan dalam menggunakan Prompt Sakti."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar Prompt Sakti
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-md"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=6282167808647&text=Hai%20kak%2C%20mau%20tanya%20seputar%20Prompt%20Sakti..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Hubungi kami via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
