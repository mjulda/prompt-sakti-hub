import { BookOpen, FileCheck, Zap, Shield, Users, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Hemat Waktu Hingga 90%",
      description: "Yang biasanya butuh berbulan-bulan, kini selesai dalam hitungan hari atau bahkan jam!"
    },
    {
      icon: Shield,
      title: "Anti Plagiarisme",
      description: "Konten disusun dengan parafrase cerdas, dijamin lolos Turnitin dan software pendeteksi lainnya."
    },
    {
      icon: BookOpen,
      title: "Sesuai Format Akademis",
      description: "Mengikuti standar APA Style 7, lengkap dengan sitasi dan referensi yang rapi."
    },
    {
      icon: FileCheck,
      title: "Lengkap & Sistematis",
      description: "Dari proposal, Bab I hingga penutup, semua tersusun rapi dan mudah dipahami."
    },
    {
      icon: Users,
      title: "Support Konsultasi",
      description: "Tim kami siap membantu Anda melalui WhatsApp dan video tutorial lengkap."
    },
    {
      icon: Award,
      title: "Terbukti Efektif",
      description: "Sudah membantu 1000+ mahasiswa dari berbagai kampus di Indonesia lulus tepat waktu."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
            Kenapa <span className="text-primary">Prompt Sakti?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keunggulan yang membuat Prompt Sakti menjadi pilihan terbaik mahasiswa Indonesia
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-hero shadow-md group-hover:shadow-glow transition-shadow duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
