
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Map as MapIcon, Truck, MapPin, Navigation, Layers, Car } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Simulated Map Component (Placeholder for Mapbox/Google Maps)
const MapView = ({ activeFilter }: { activeFilter: string }) => {
  return (
    <div className="relative w-full h-full bg-slate-100 dark:bg-slate-900 overflow-hidden rounded-md border border-border group">
      {/* Static Background Pattern representing a map */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>
      
      {/* Simulated Roads */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-slate-400 dark:stroke-slate-600" strokeWidth="2">
        <path d="M0 100 Q 300 150 600 100 T 1200 300" fill="none" />
        <path d="M200 0 L 250 600" fill="none" />
        <path d="M800 0 L 750 600" fill="none" />
        <path d="M0 400 L 1200 350" fill="none" />
      </svg>

      {/* Map Markers - Trucks */}
      {(activeFilter === 'all' || activeFilter === 'fleet') && (
        <>
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer hover:z-10">
             <div className="bg-blue-600 text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                <Truck className="w-4 h-4" />
             </div>
             <Badge className="mt-1 bg-white text-blue-800 shadow-sm text-[10px] h-5 border-blue-100 hover:bg-blue-50">T-04 (Marc)</Badge>
          </div>
          
          <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer hover:z-10">
             <div className="bg-blue-600 text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                <Truck className="w-4 h-4" />
             </div>
             <Badge className="mt-1 bg-white text-blue-800 shadow-sm text-[10px] h-5 border-blue-100 hover:bg-blue-50">T-02 (Luc)</Badge>
          </div>
        </>
      )}

      {/* Map Markers - Active Sites */}
      {(activeFilter === 'all' || activeFilter === 'sites') && (
        <>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer hover:z-10">
             <div className="bg-green-600 text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce">
                <MapPin className="w-4 h-4" />
             </div>
             <Badge className="mt-1 bg-white text-green-800 shadow-sm text-[10px] h-5 border-green-100 hover:bg-green-50">Mme. Tremblay</Badge>
          </div>

          <div className="absolute bottom-1/4 left-1/6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer hover:z-10">
             <div className="bg-green-600 text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
             </div>
             <Badge className="mt-1 bg-white text-green-800 shadow-sm text-[10px] h-5 border-green-100 hover:bg-green-50">Parc Floral</Badge>
          </div>
        </>
      )}
      
      {/* Map Markers - Opportunities */}
      {(activeFilter === 'all' || activeFilter === 'leads') && (
        <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer hover:z-10 opacity-75 hover:opacity-100">
             <div className="bg-orange-500 text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
             </div>
             <Badge className="mt-1 bg-white text-orange-800 shadow-sm text-[10px] h-5 border-orange-100 hover:bg-orange-50">Devis #402</Badge>
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button size="icon" variant="secondary" className="shadow-md bg-white hover:bg-slate-50"><Navigation className="w-4 h-4" /></Button>
        <Button size="icon" variant="secondary" className="shadow-md bg-white hover:bg-slate-50"><Layers className="w-4 h-4" /></Button>
      </div>
    </div>
  );
};

export default function GISPage() {
  return (
    <div className="space-y-4 h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Carte & GIS (Traqueur)</h1>
          <p className="text-muted-foreground mt-1">Vue satellite des opérations et suivi de flotte en temps réel.</p>
        </div>
        <div className="flex gap-2 items-center bg-card p-1 rounded-md border shadow-sm">
            <Search className="w-4 h-4 ml-2 text-muted-foreground" />
            <Input className="border-0 shadow-none focus-visible:ring-0 w-64" placeholder="Rechercher adresse, camion..." />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
        {/* Left Sidebar: Assets List */}
        <Card className="col-span-3 flex flex-col h-full bg-card border-r-0 rounded-r-none shadow-none z-10">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase text-muted-foreground font-bold">Actifs & Ressources</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto">
                <div className="px-4 pb-4 space-y-6">
                    {/* Fleet Section */}
                    <div>
                        <h3 className="text-xs font-semibold mb-3 flex items-center gap-2">
                            <Truck className="w-3 h-3 text-blue-600" /> FLOTTE ACTIVE (2/4)
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 rounded-md bg-blue-50/50 border border-blue-100 hover:bg-blue-50 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <div>
                                        <div className="font-bold text-sm">Camion T-04</div>
                                        <div className="text-xs text-muted-foreground">Marc C. • 45 km/h</div>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="text-[10px]">En route</Badge>
                            </div>
                            
                            <div className="flex items-center justify-between p-2 rounded-md bg-card border hover:bg-accent cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <div>
                                        <div className="font-bold text-sm">Camion T-02</div>
                                        <div className="text-xs text-muted-foreground">Luc B. • Arrêt (15m)</div>
                                    </div>
                                </div>
                                <Badge variant="outline" className="text-[10px]">Sur site</Badge>
                            </div>
                             <div className="flex items-center justify-between p-2 rounded-md bg-card border opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                    <div>
                                        <div className="font-bold text-sm">Pick-up F-150</div>
                                        <div className="text-xs text-muted-foreground">Garage</div>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="text-[10px]">Inactif</Badge>
                            </div>
                        </div>
                    </div>

                    {/* Sites Section */}
                    <div>
                        <h3 className="text-xs font-semibold mb-3 flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-green-600" /> CHANTIERS DU JOUR
                        </h3>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 rounded-md bg-green-50/50 border border-green-100 hover:bg-green-50 cursor-pointer transition-colors">
                                <div>
                                    <div className="font-bold text-sm">Mme. Tremblay</div>
                                    <div className="text-xs text-muted-foreground">Laval • Excavation</div>
                                </div>
                                <Navigation className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-md bg-card border hover:bg-accent cursor-pointer transition-colors">
                                <div>
                                    <div className="font-bold text-sm">Parc Floral</div>
                                    <div className="text-xs text-muted-foreground">Québec • Entretien</div>
                                </div>
                                <Navigation className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Right Panel: Map */}
        <div className="col-span-9 h-full rounded-lg border border-border shadow-sm relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur p-1 rounded-md border shadow-sm flex gap-1">
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2 hover:bg-white dark:hover:bg-slate-800">Tous</Button>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-blue-600 hover:bg-blue-50">Flotte</Button>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-green-600 hover:bg-green-50">Chantiers</Button>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-orange-600 hover:bg-orange-50">Leads</Button>
            </div>
            
            <MapView activeFilter="all" />
            
            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 border-t backdrop-blur py-2 px-4 flex justify-between items-center text-xs">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-blue-600"/> 2 en mouvement</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-green-600"/> 3 chantiers actifs</span>
                </div>
                <div className="text-muted-foreground">Dernière mise à jour: À l'instant</div>
            </div>
        </div>
      </div>
    </div>
  );
}
