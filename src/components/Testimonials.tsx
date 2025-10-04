import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rina Wulandari",
      role: "Mahasiswa S1 Manajemen - Universitas Indonesia",
      content: "Luar biasa! Skripsi saya yang mandek 6 bulan, selesai dalam 2 minggu dengan Prompt Sakti. Dosen pembimbing pun terkesan dengan kualitas penulisannya. Highly recommended!",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      role: "Mahasiswa S2 Teknik Informatika - ITB",
      content: "Sebagai pekerja yang kuliah sambil bekerja, Prompt Sakti sangat membantu. Tesis saya bisa selesai tepat waktu tanpa mengganggu pekerjaan. Worth it banget!",
      rating: 5
    },
    {
      name: "Dewi Lestari",
      role: "Mahasiswa S3 Pendidikan - UGM",
      content: "Awalnya ragu dengan produk prompt, tapi setelah coba demo gratisnya langsung yakin. Disertasi saya yang kompleks jadi lebih terstruktur dan mudah dikembangkan. Terima kasih Prompt Sakti!",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa S1 Akuntansi - Unair",
      content: "Hemat waktu dan biaya! Daripada bayar joki jutaan rupiah, mending pakai Prompt Sakti. Hasilnya malah lebih memuaskan karena saya yang mengerjakannya sendiri dengan panduan yang jelas.",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Mahasiswa S2 Psikologi - Unpad",
      content: "GPT Custom-nya keren banget! Bikin analisis data kualitatif jadi gampang. Konsultasi gratis juga sangat membantu ketika ada yang bingung. Pelayanan 10/10!",
      rating: 5
    },
    {
      name: "Rangga Permana",
      role: "Mahasiswa S1 Hukum - Undip",
      content: "Prompt Sakti saved my life! Deadline sidang tinggal 3 minggu, skripsi masih kosong. Alhamdulillah dengan bantuan produk ini, saya bisa lulus tepat waktu. Terima kasih banyak!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimoni nyata dari mahasiswa yang telah terbantu dengan Prompt Sakti
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="mt-4 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-4 border border-primary/20">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-xl bg-primary/10 px-6 py-4">
            <p className="text-primary font-semibold">
              🎉 Bergabunglah dengan 1000+ mahasiswa yang telah terbantu!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
