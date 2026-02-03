
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Truck, Phone, Mail, MapPin, Star, Clock, AlertCircle, MoreHorizontal, Filter } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

export default function SuppliersPage() {
  const suppliers = [
    { 
      id: 1, 
      name: "Matériaux Québec Inc.", 
      category: "Général", 
      contact: "Jean-Pierre", 
      email: "commandes@materiauxqc.ca",
      phone: "(418) 555-0101",
      leadTime: "24h", 
      rating: 95, 
      status: "active",
      nextDelivery: "Demain, 8:00"
    },
    { 
      id: 2, 
      name: "Pépinière Verte Vallée", 
      category: "Végétal", 
      contact: "Sophie", 
      email: "pro@vertevallee.com",
      phone: "(418) 555-0123",
      leadTime: "3 jours", 
      rating: 88, 
      status: "active",
      nextDelivery: "Mercredi"
    },
    { 
      id: 3, 
      name: "Pavé Design & Co", 
      category: "Minéral", 
      contact: "Service Client", 
      email: "info@pavedesign.ca",
      phone: "(514) 555-0999",
      leadTime: "7 jours", 
      rating: 75, 
      status: "warning",
      nextDelivery: "-"
    },
    { 
      id: 4, 
      name: "Outillage Nord", 
      category: "Équipement", 
      contact: "Marc", 
      email: "ventes@outillagenord.com",
      phone: "(418) 555-0777",
      leadTime: "48h", 
      rating: 98, 
      status: "active",
      nextDelivery: "-"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fournisseurs</h1>
          <p className="text-muted-foreground mt-1">Annuaire des partenaires, délais de livraison et performances.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Filtres
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Nouveau Fournisseur
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Partenaires Actifs</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Dont 2 nouveaux ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commandes en cours</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <p className="text-xs text-muted-foreground">3 livraisons attendues demain</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Score Moyen</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Fiabilité globale (12 mois)</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Répertoire</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom / Catégorie</TableHead>
                      <TableHead>Contact Principal</TableHead>
                      <TableHead>Délai Moyen</TableHead>
                      <TableHead className="text-center">Fiabilité</TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell>
                          <div className="font-medium">{supplier.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal">{supplier.category}</Badge>
                            {supplier.status === 'warning' && <span className="text-orange-500 flex items-center gap-0.5"><AlertCircle className="w-3 h-3"/> Attention</span>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{supplier.contact}</div>
                          <div className="text-xs text-muted-foreground">{supplier.phone}</div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="secondary">{supplier.leadTime}</Badge>
                        </TableCell>
                        <TableCell className="text-center w-[100px]">
                           <div className="flex flex-col items-center gap-1">
                                <span className={cn("text-xs font-bold", supplier.rating < 80 ? "text-red-500" : "text-green-600")}>
                                    {supplier.rating}%
                                </span>
                                <Progress value={supplier.rating} className="h-1.5 w-16" />
                           </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Voir fiche</DropdownMenuItem>
                              <DropdownMenuItem>Historique commandes</DropdownMenuItem>
                              <DropdownMenuItem>Évaluer</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
             <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                <CardHeader>
                    <CardTitle className="text-blue-900 dark:text-blue-100 flex items-center gap-2">
                        <Truck className="w-5 h-5"/> Livraisons à venir
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-3 items-start p-3 bg-white dark:bg-background rounded-lg border border-blue-100 dark:border-blue-900 shadow-sm">
                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 w-10 h-10 rounded flex items-center justify-center shrink-0">
                            <span className="font-bold text-xs">J-1</span>
                        </div>
                        <div>
                            <p className="font-medium text-sm">Matériaux Québec</p>
                            <p className="text-xs text-muted-foreground">3 Palettes Pavé Gris</p>
                            <Badge variant="outline" className="mt-1 text-[10px] bg-blue-50 text-blue-700 border-blue-200">Demain 08:00</Badge>
                        </div>
                    </div>
                    
                    <div className="flex gap-3 items-start p-3 bg-white dark:bg-background rounded-lg border border-blue-100 dark:border-blue-900 shadow-sm">
                        <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 w-10 h-10 rounded flex items-center justify-center shrink-0">
                            <span className="font-bold text-xs">Mer</span>
                        </div>
                        <div>
                            <p className="font-medium text-sm">Pépinière Verte V.</p>
                            <p className="text-xs text-muted-foreground">15 Arbustes (Cèdres)</p>
                             <Badge variant="outline" className="mt-1 text-[10px] bg-green-50 text-green-700 border-green-200">Mercredi PM</Badge>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" className="w-full text-blue-700 hover:text-blue-800 hover:bg-blue-100 dark:text-blue-300">
                        Voir calendrier logistique
                    </Button>
                </CardFooter>
             </Card>

             <Card>
                 <CardHeader>
                     <CardTitle>Actions Rapides</CardTitle>
                 </CardHeader>
                 <CardContent className="grid gap-2">
                     <Button variant="outline" className="justify-start">
                         <Mail className="w-4 h-4 mr-2" /> Email Groupé
                     </Button>
                     <Button variant="outline" className="justify-start">
                         <Star className="w-4 h-4 mr-2" /> Noter livraison récente
                     </Button>
                 </CardContent>
             </Card>
        </div>
      </div>
    </div>
  );
}

// Utility for class merging locally if needed, though usually imported
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
