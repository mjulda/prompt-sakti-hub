# Xendit Payment Gateway Integration Guide

## Overview
Dokumentasi ini menjelaskan cara mengintegrasikan Xendit payment gateway untuk landing page Prompt Sakti.

## Prerequisites
1. Akun Xendit (https://www.xendit.co/)
2. API Key dari dashboard Xendit
3. Lovable Cloud atau Supabase untuk backend

## Steps to Integrate

### 1. Setup Xendit Account
- Daftar di https://www.xendit.co/
- Verifikasi akun dan bisnis Anda
- Dapatkan API Key dari Dashboard > Settings > API Keys
- Gunakan Test Mode untuk development

### 2. Enable Lovable Cloud
Untuk menyimpan API key dengan aman, enable Lovable Cloud terlebih dahulu.

### 3. Add Secret for Xendit API Key
Setelah Cloud enabled, tambahkan secret untuk XENDIT_API_KEY.

### 4. Create Edge Function for Payment
Buat edge function untuk handle payment creation:

```typescript
// supabase/functions/create-payment/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productName, amount, customerEmail, customerName } = await req.json();
    const XENDIT_API_KEY = Deno.env.get("XENDIT_API_KEY");

    if (!XENDIT_API_KEY) {
      throw new Error("XENDIT_API_KEY not configured");
    }

    // Create invoice with Xendit
    const response = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${btoa(XENDIT_API_KEY + ":")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        external_id: `prompt-sakti-${Date.now()}`,
        amount: amount,
        payer_email: customerEmail,
        description: `Pembelian ${productName}`,
        customer: {
          given_names: customerName,
          email: customerEmail,
        },
        success_redirect_url: `${req.headers.get("origin")}/payment-success`,
        failure_redirect_url: `${req.headers.get("origin")}/payment-failed`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Xendit error:", error);
      throw new Error("Failed to create payment");
    }

    const data = await response.json();
    
    return new Response(
      JSON.stringify({ 
        invoiceUrl: data.invoice_url,
        invoiceId: data.id 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
```

### 5. Update Products Component
Setelah edge function dibuat, update Products.tsx untuk integrate dengan function:

```typescript
const handleBuyClick = async (productName: string, price: string) => {
  try {
    // Show loading state
    const priceNumber = parseInt(price.replace(/[^0-9]/g, ''));
    
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          productName,
          amount: priceNumber,
          customerEmail: 'customer@email.com', // Collect from form
          customerName: 'Customer Name', // Collect from form
        }),
      }
    );

    const data = await response.json();
    
    if (data.invoiceUrl) {
      // Redirect to Xendit payment page
      window.location.href = data.invoiceUrl;
    } else {
      throw new Error('Failed to create payment');
    }
  } catch (error) {
    console.error('Payment error:', error);
    // Show error toast
  }
};
```

### 6. Handle Webhooks (Optional but Recommended)
Buat edge function untuk handle payment webhooks dari Xendit:

```typescript
// supabase/functions/xendit-webhook/index.ts
// Verify webhook signature and update order status in database
```

## Testing
1. Gunakan Test API Key untuk development
2. Test dengan Xendit test payment methods
3. Verifikasi redirect URLs berfungsi dengan benar

## Production Checklist
- [ ] Replace Test API Key dengan Production API Key
- [ ] Setup webhook untuk auto-update order status
- [ ] Add form untuk collect customer email & name
- [ ] Implement proper error handling dan loading states
- [ ] Test semua payment methods (Transfer, E-wallet, Cards)
- [ ] Setup email notifications untuk successful payments

## Supported Payment Methods
Xendit mendukung:
- Transfer Bank (BCA, Mandiri, BNI, BRI, Permata, dll)
- E-wallet (OVO, DANA, LinkAja, ShopeePay)
- Credit/Debit Cards (Visa, Mastercard)
- Retail Outlets (Alfamart, Indomaret)
- QRIS

## Resources
- Xendit Docs: https://developers.xendit.co/api-reference/
- Xendit Dashboard: https://dashboard.xendit.co/
- Support: support@xendit.co
