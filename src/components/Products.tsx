import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import productIcon from "@/assets/product-icon.jpg";
import { CountdownTimer } from "./CountdownTimer";

export const Products = () => {
  const products = [
    {
      title: "Prompt Sakti Skripsi",
      level: "S1",
      price: "Rp 297.000",
      originalPrice: "Rp 500.000",
      description: "Sempurna untuk mahasiswa tingkat sarjana yang ingin menyelesaikan skripsi dengan cepat dan efisien.",
      features: [
        "Template lengkap Bab I - V",
        "Panduan metodologi penelitian",
        "Format APA Style 7",
        "Analisis data otomatis",
        "Referensi & sitasi auto",
        "Anti plagiarisme",
      ],
      bonus: [
        "GPT Custom Skripsi",
        "Video tutorial lengkap",
        "Konsultasi gratis (30 hari)",
      ],
      popular: true
    },
    {
      title: "Prompt Sakti Tesis",
      level: "S2",
      price: "Rp 497.000",
      originalPrice: "Rp 800.000",
      description: "Dirancang khusus untuk mahasiswa pascasarjana dengan standar penelitian yang lebih mendalam.",
      features: [
        "Template komprehensif Bab I - V",
        "Metode penelitian advanced",
        "Format akademis lengkap",
        "Analisis kualitatif & kuantitatif",
        "Literature review builder",
        "Framework teori otomatis",
      ],
      bonus: [
        "GPT Custom Tesis Premium",
        "Video tutorial + webinar",
        "Konsultasi gratis (60 hari)",
      ],
      popular: false
    },
    {
      title: "Prompt Sakti Disertasi",
      level: "S3",
      price: "Rp 797.000",
      originalPrice: "Rp 1.200.000",
      description: "Solusi ultimate untuk kandidat doktor dengan riset kompleks dan kontribusi ilmiah tingkat tinggi.",
      features: [
        "Template premium Bab I - VII",
        "Metodologi riset doktoral",
        "Multi-metode research",
        "Analisis data kompleks",
        "State of the art review",
        "Contribution to knowledge builder",
      ],
      bonus: [
        "GPT Custom Disertasi Elite",
        "Video tutorial + mentoring",
        "Konsultasi unlimited (90 hari)",
      ],
      popular: false
    }
  ];

  const handleBuyClick = (productName: string) => {
    // Integration with Xendit will be added here
    window.open(`https://api.whatsapp.com/send?phone=6282167808647&text=Hai%20kak%2C%20saya%20mau%20beli%20${encodeURIComponent(productName)}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary font-medium">
            <Sparkles className="h-4 w-4" />
            <span>3 Produk Unggulan</span>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
            Pilih Paket Sesuai Kebutuhan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua paket dilengkapi dengan bonus eksklusif GPT Custom untuk memaksimalkan hasil karya ilmiah Anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <CountdownTimer />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden ${product.popular ? 'border-primary border-2 shadow-glow' : 'shadow-elegant'}`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  TERPOPULER
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="mb-4">
                  <img 
                    src={productIcon} 
                    alt={product.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                
                <div className="mb-2">
                  <span className="inline-block rounded-md bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">
                    {product.level}
                  </span>
                </div>

                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {product.description}
                </CardDescription>

                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-xs text-accent font-medium mt-1">
                    Hemat {Math.round((1 - parseInt(product.price.replace(/[^0-9]/g, '')) / parseInt(product.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">Fitur Utama:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-accent/10 p-4">
                  <h4 className="font-semibold mb-2 text-sm flex items-center gap-2 text-accent">
                    <Sparkles className="h-4 w-4" />
                    Bonus Eksklusif:
                  </h4>
                  <ul className="space-y-1">
                    {product.bonus.map((bonus, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={product.popular ? "hero" : "default"}
                  size="lg"
                  onClick={() => handleBuyClick(product.title)}
                >
                  Beli Sekarang
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            💳 Pembayaran aman dengan <strong>Xendit</strong> - Mendukung berbagai metode pembayaran
          </p>
        </div>
      </div>
    </section>
  );
};
