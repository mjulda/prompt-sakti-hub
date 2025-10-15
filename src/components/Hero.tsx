import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMS4xLS45LTItMi0yaC02Yy0xLjEgMC0yIC45LTIgMnYxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWMTh6bTE4IDBjMC0xLjEtLjktMi0yLTJoLTZjLTEuMSAwLTIgLjktMiAydjE4YzAgMS4xLjkgMiAyIDJoNmMxLjEgMCAyLS45IDItMlYxOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Solusi Akademis Terpercaya</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl leading-tight">
              Selesaikan <span className="text-yellow-300 font-extrabold">Skripsi, Tesis & Disertasi</span> dalam Hitungan Menit!
            </h1>
            
            <p className="mb-8 text-lg text-white/90 lg:text-xl">
              Dengan <strong>Prompt Sakti</strong>, wujudkan karya ilmiah berkualitas tinggi menggunakan ChatGPT. 
              Legal, cepat, dan sesuai standar akademis kampus Anda.
            </p>
            
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg w-full sm:w-auto"
                onClick={scrollToProducts}
              >
                Lihat Produk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="w-full sm:w-auto">
                <div className="mb-3 text-center lg:text-left">
                  <p className="text-lg text-white font-semibold animate-pulse">
                    Masih ragu membeli Prompt Sakti? <span className="text-yellow-300 font-bold">Uji coba gratis</span> terlebih dahulu! 👇
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 border-0 font-bold text-lg shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 animate-bounce w-full sm:w-auto"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/DEMO_FILE_ID/view" target="_blank" rel="noopener noreferrer">
                    Uji Coba Gratis
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-glow" />
                <span>Anti Plagiarisme</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-glow" />
                <span>Sesuai Format Kampus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-glow" />
                <span>Bonus GPT Custom</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mahasiswa sukses lulus dengan Prompt Sakti" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-elegant">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Mahasiswa Terbantu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
