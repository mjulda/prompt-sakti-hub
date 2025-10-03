export const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Prompt Sakti
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Solusi cerdas untuk menyelesaikan karya ilmiah Anda dengan bantuan teknologi AI ChatGPT
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="https://api.whatsapp.com/send?phone=6282167808647" 
              className="text-white/80 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kontak
            </a>
            <a 
              href="#products" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Produk
            </a>
            <a 
              href="https://drive.google.com/file/d/DEMO_FILE_ID/view" 
              className="text-white/80 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Gratis
            </a>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/60">
              © 2025 Prompt Sakti. All rights reserved.
            </p>
            <p className="text-xs text-white/50 mt-2">
              Produk ini adalah tools bantu penulisan. Tetap diperlukan review dan penyesuaian sesuai kebutuhan akademis Anda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
