import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Video, MessageCircle, FileText } from "lucide-react";

export const Bonus = () => {
  const bonuses = [
    {
      icon: Bot,
      title: "GPT Custom Premium",
      description: "Akses eksklusif ke GPT yang sudah dikonfigurasi khusus untuk kebutuhan akademis Anda. Tidak perlu setup ribet, langsung pakai!",
      highlight: "Nilai: Rp 500.000"
    },
    {
      icon: Video,
      title: "Video Tutorial Lengkap",
      description: "Panduan step-by-step dari mulai instalasi hingga penggunaan advanced. Cocok untuk pemula maupun yang sudah berpengalaman.",
      highlight: "20+ Video Tutorial"
    },
    {
      icon: MessageCircle,
      title: "Konsultasi Gratis",
      description: "Dapatkan support langsung dari tim kami via WhatsApp. Tanya jawab, troubleshooting, dan tips-tips produktif.",
      highlight: "30-90 Hari"
    },
    {
      icon: FileText,
      title: "Template Dokumen",
      description: "Ratusan template siap pakai untuk berbagai format akademis: proposal, jurnal, presentasi, dan laporan penelitian.",
      highlight: "100+ Templates"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent font-medium">
            🎁 Bonus Eksklusif
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
            Yang Anda Dapatkan <span className="text-accent">Lebih Dari Sekadar Prompt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setiap pembelian Prompt Sakti dilengkapi dengan bonus bernilai jutaan rupiah!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <Card 
                key={index}
                className="shadow-md hover:shadow-elegant transition-all duration-300 border-2 border-accent/20"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {bonus.description}
                  </p>
                  <div className="inline-block rounded-md bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {bonus.highlight}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block rounded-xl bg-gradient-hero p-8 text-white shadow-elegant max-w-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Total Nilai Bonus: <span className="text-primary-glow">Rp 2.500.000+</span>
            </h3>
            <p className="text-white/90">
              Semua ini GRATIS untuk Anda! Investasi terbaik untuk masa depan akademis Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
