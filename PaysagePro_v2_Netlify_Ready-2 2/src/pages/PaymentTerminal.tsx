
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, ScanLine, DollarSign, CheckCircle2, QrCode, Camera, Wifi, ShieldCheck, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock Active Order for Payment
const activeOrder = {
  id: "OT-24-101",
  client: "Mme. Tremblay",
  total: 4500.00,
  deposit: 1500.00,
  balance: 3000.00,
  description: "Solde final - Excavation Piscine"
};

export default function PaymentTerminalPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleProcessPayment = () => {
    setIsProcessing(true);
    // Simulate API delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsProcessing(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-green-200 bg-green-50/50 dark:bg-green-950/20">
          <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Paiement Approuvé</h2>
            <p className="text-muted-foreground mb-6">La transaction de {activeOrder.balance.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD' })} a été traitée avec succès.</p>
            
            <div className="bg-background rounded-lg p-4 w-full border mb-6 text-left text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Numéro Ref:</span>
                <span className="font-mono">TXN-884920</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Méthode:</span>
                <span className="capitalize">{paymentMethod === 'card' ? 'Carte Crédit' : paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reçu:</span>
                <span>Envoyé par courriel</span>
              </div>
            </div>

            <Button onClick={handleReset} className="w-full bg-green-600 hover:bg-green-700">Retour au Terminal</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-foreground">Terminal de Paiement</h1>
        <p className="text-muted-foreground mt-1">Encaissement sécurisé sur chantier (POS).</p>
      </div>

      <Card className="overflow-hidden border-2 shadow-lg">
        {/* Header - Order Context */}
        <div className="bg-slate-900 text-white p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Commande Client</p>
              <h2 className="text-xl font-bold mt-1">{activeOrder.client}</h2>
              <p className="text-sm text-slate-300">{activeOrder.description}</p>
            </div>
            <Badge variant="outline" className="text-white border-white/20 bg-white/10 font-mono">
              {activeOrder.id}
            </Badge>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold tracking-tight">
              {activeOrder.balance.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD' })}
            </span>
            <span className="text-slate-400 mb-1.5 text-sm">à payer</span>
          </div>
        </div>

        <CardContent className="p-0">
          <Tabs defaultValue="card" className="w-full" onValueChange={setPaymentMethod}>
            <div className="bg-muted/50 border-b p-1">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card" className="flex flex-col gap-1 py-3 h-auto">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs">Carte (NFC)</span>
                </TabsTrigger>
                <TabsTrigger value="cheque" className="flex flex-col gap-1 py-3 h-auto">
                  <ScanLine className="w-5 h-5" />
                  <span className="text-xs">Scan Chèque</span>
                </TabsTrigger>
                <TabsTrigger value="interac" className="flex flex-col gap-1 py-3 h-auto">
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs">Interac</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB: TAP TO PAY (NFC) */}
            <TabsContent value="card" className="p-6 space-y-6 focus-visible:ring-0 mt-0">
              <div className="flex flex-col items-center justify-center py-8 space-y-6 relative">
                {/* Visual Simulation of Tap Zone */}
                <div className="w-48 h-48 rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center relative overflow-hidden animate-[pulse_3s_infinite]">
                   <div className="absolute inset-0 bg-primary/5 rounded-full"></div>
                   <Wifi className="w-16 h-16 text-primary rotate-90" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">Prêt pour Tap to Pay</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Approchez la carte ou le téléphone du client au dos de votre appareil.
                  </p>
                </div>

                <div className="flex gap-3 justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all" alt="Mastercard"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all" alt="Visa"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-6 opacity-70 dark:invert" alt="Apple Pay"/>
                </div>
              </div>
            </TabsContent>

            {/* TAB: CHEQUE SCAN */}
            <TabsContent value="cheque" className="p-6 space-y-6 focus-visible:ring-0 mt-0">
               <div className="bg-slate-900 rounded-lg aspect-[2/1] relative flex items-center justify-center overflow-hidden border-2 border-primary/50">
                  <Camera className="w-12 h-12 text-white/50" />
                  <div className="absolute inset-x-8 inset-y-4 border-2 border-dashed border-white/30 rounded"></div>
                  <div className="absolute bottom-2 text-white/70 text-xs font-medium">Aligner le chèque ici</div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="chk-amount">Montant détecté</Label>
                    <div className="relative">
                        <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="chk-amount" defaultValue="3000.00" className="pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="chk-num">Numéro Chèque</Label>
                    <Input id="chk-num" placeholder="#001" />
                  </div>
               </div>
            </TabsContent>

            {/* TAB: INTERAC QR */}
            <TabsContent value="interac" className="p-6 space-y-6 focus-visible:ring-0 mt-0">
               <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border">
                     <QrCode className="w-48 h-48 text-black" />
                  </div>
                  <div>
                      <p className="font-semibold">Scanner pour payer</p>
                      <p className="text-xs text-muted-foreground mt-1">Montant pré-rempli: 3 000,00 $</p>
                  </div>
               </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="p-6 bg-muted/20 border-t flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground w-full">
            <ShieldCheck className="w-3 h-3 text-green-600" />
            Paiement sécurisé chiffré de bout en bout (PCI-DSS)
          </div>
          
          <Button 
            size="lg" 
            className="w-full text-lg h-12 font-bold shadow-md" 
            onClick={handleProcessPayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Traitement...
              </>
            ) : (
              `Encaisser ${activeOrder.balance.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD' })}`
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
