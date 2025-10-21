import { useEffect, useState } from "react";
import { Gift } from "lucide-react";

const purchaseData = [
  { name: "Ani Pujiati", product: "Prompt Sakti Skripsi" },
  { name: "Budi Santoso", product: "Prompt Sakti Tesis" },
  { name: "Citra Dewi", product: "Prompt Sakti Disertasi" },
  { name: "Dimas Prasetyo", product: "Prompt Sakti Skripsi" },
  { name: "Eka Putri", product: "Prompt Sakti Tesis" },
  { name: "Fajar Hidayat", product: "Prompt Sakti Disertasi" },
  { name: "Gita Maharani", product: "Prompt Sakti Skripsi" },
  { name: "Hendra Wijaya", product: "Prompt Sakti Tesis" },
  { name: "Indah Permata", product: "Prompt Sakti Disertasi" },
  { name: "Joko Susilo", product: "Prompt Sakti Skripsi" },
];

export const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(purchaseData[0]);

  useEffect(() => {
    const showNotification = () => {
      // Pick random purchase
      const randomIndex = Math.floor(Math.random() * purchaseData.length);
      setCurrentPurchase(purchaseData[randomIndex]);
      
      // Show notification
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show notification every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 z-50 transform transition-all duration-500 ease-out ${
        isVisible
          ? "-translate-y-1/2 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg shadow-elegant p-4 max-w-sm flex items-start gap-3 border border-primary/20">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
          <Gift className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">
            Yeay! {currentPurchase.name} baru saja membeli
          </p>
          <p className="text-sm text-primary font-medium">
            {currentPurchase.product}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Beberapa detik yang lalu
          </p>
        </div>
      </div>
    </div>
  );
};
