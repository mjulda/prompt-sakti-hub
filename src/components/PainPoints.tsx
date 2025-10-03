import { AlertCircle, Clock, DollarSign, FileX } from "lucide-react";

export const PainPoints = () => {
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Bingung Mulai dari Mana?",
      description: "Kesulitan menulis latar belakang, rumusan masalah, hingga metodologi yang sesuai standar."
    },
    {
      icon: FileX,
      title: "Revisi Tiada Henti",
      description: "Dosen selalu minta revisi? Frustasi karena draft tidak pernah disetujui?"
    },
    {
      icon: DollarSign,
      title: "Biaya Joki Mahal",
      description: "Mengeluarkan jutaan rupiah untuk jasa joki, tapi hasilnya tidak memuaskan."
    },
    {
      icon: Clock,
      title: "Deadline Mendesak",
      description: "Sidang sudah dekat tapi karya ilmiah belum juga selesai? Stres tingkat maksimal!"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 lg:text-4xl">
            Masalah yang Sering Dihadapi Mahasiswa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apakah Anda mengalami salah satu masalah ini?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-xl bg-gradient-hero p-8 text-white shadow-elegant">
            <h3 className="text-2xl font-bold mb-3">
              🎉 Tenang, Sekarang Ada Solusinya!
            </h3>
            <p className="text-lg text-white/90">
              <strong>Prompt Sakti</strong> hadir sebagai solusi cerdas, legal, dan terpercaya untuk menyelesaikan semua masalah di atas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
