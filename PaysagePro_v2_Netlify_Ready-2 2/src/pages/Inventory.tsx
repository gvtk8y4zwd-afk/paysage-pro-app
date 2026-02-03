
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, AlertTriangle, Package, Filter, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function InventoryPage() {
  const stockItems = [
    { id: 1, name: "Pavé Uni - Gris Classique", sku: "PAV-001", type: "Unitaire", qty: 1250, unit: "u", status: "ok", category: "Minéral" },
    { id: 2, name: "Tourbe en rouleau", sku: "TRB-X20", type: "Unitaire", qty: 45, unit: "rouleaux", status: "low", category: "Végétal" },
    { id: 3, name: "Terre noire tamisée", sku: "VRAC-TERRE", type: "Vrac", qty: 8, unit: "verges³", status: "ok", category: "Vrac" },
    { id: 4, name: "Sable Polymère - Beige", sku: "SBL-POLY", type: "Unitaire", qty: 0, unit: "sacs", status: "critical", category: "Chimique" },
    { id: 5, name: "Paillis Cèdre Rouge", sku: "VRAC-PAIL", type: "Vrac", qty: 12, unit: "verges³", status: "ok", category: "Vrac" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Stocks</h1>
          <p className="text-muted-foreground mt-1">Suivi des matériaux, alertes de réapprovisionnement et catalogue.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Filtres
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Nouvel Article
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valeur Totale</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,500 $</div>
            <p className="text-xs text-muted-foreground">Est. coût achat</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertes Stock Bas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">3 Articles</div>
            <p className="text-xs text-muted-foreground">À commander cette semaine</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ruptures (Critique)</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">1 Article</div>
            <p className="text-xs text-muted-foreground">Bloque 2 chantiers</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <CardTitle>Catalogue & Inventaire</CardTitle>
                <div className="relative w-72">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Rechercher par nom, SKU..." className="pl-8" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="all">Tous</TabsTrigger>
                    <TabsTrigger value="vrac">Vrac & Terre</TabsTrigger>
                    <TabsTrigger value="unit">Unitaires</TabsTrigger>
                    <TabsTrigger value="low">Alertes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Article</TableHead>
                            <TableHead>SKU</TableHead>
                            <TableHead>Catégorie</TableHead>
                            <TableHead className="text-right">Quantité</TableHead>
                            <TableHead className="text-center">Statut</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {stockItems.map((item) => (
                            <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{item.sku}</TableCell>
                            <TableCell>
                                <Badge variant="outline">{item.category}</Badge>
                            </TableCell>
                            <TableCell className="text-right font-bold">
                                {item.qty} <span className="text-xs text-muted-foreground font-normal">{item.unit}</span>
                            </TableCell>
                            <TableCell className="text-center">
                                {item.status === 'ok' && <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">En stock</Badge>}
                                {item.status === 'low' && <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-100">Bas</Badge>}
                                {item.status === 'critical' && <Badge variant="destructive">Rupture</Badge>}
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Ajuster quantité</DropdownMenuItem>
                                        <DropdownMenuItem>Voir mouvements</DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
