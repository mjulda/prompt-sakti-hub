import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

export const CTA = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMS4xLS45LTItMi0yaC02Yy0xLjEgMC0yIC45LTIgMnYxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWMTh6bTE4IDBjMC0xLjEtLjktMi0yLTJoLTZjLTEuMSAwLTIgLjktMiAydjE4YzAgMS4xLjkgMiAyIDJoNmMxLjEgMCAyLS45IDItMlYxOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <Gift className="h-4 w-4" />
            <span>Penawaran Terbatas - Hemat hingga 40%!</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6 lg:text-5xl">
            Siap Menyelesaikan Karya Ilmiah Anda dengan Mudah?
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Jangan biarkan skripsi, tesis, atau disertasi menjadi beban. 
            Mulai perjalanan akademis yang lebih mudah dan efisien hari ini!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg"
              onClick={scrollToProducts}
            >
              Pilih Paket Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-lg"
              asChild
            >
              <a href="https://drive.google.com/file/d/DEMO_FILE_ID/view" target="_blank" rel="noopener noreferrer">
                Coba Demo Gratis
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-8 justify-center text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-white/80">Mahasiswa Terbantu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-white/80">Rating Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">90%</div>
              <div className="text-sm text-white/80">Hemat Waktu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
