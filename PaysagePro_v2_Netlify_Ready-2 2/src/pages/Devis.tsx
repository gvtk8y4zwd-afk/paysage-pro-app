
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, Plus, Calculator, FileDown, Send, Construction, Waves, Ruler, Trees, Axe, Scissors, ChefHat, Droplets, Umbrella } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function DevisPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Générateur de Devis</h1>
          <p className="text-muted-foreground mt-1">Créez des soumissions précises pour l'aménagement, la construction et l'arboriculture.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileDown className="w-4 h-4 mr-2" /> Exporter PDF
          </Button>
          <Button>
            <Send className="w-4 h-4 mr-2" /> Envoyer au client
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Colonne gauche : Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations Client & Projet</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Select defaultValue="new">
                  <SelectTrigger id="client">
                    <SelectValue placeholder="Sélectionner un client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">+ Nouveau Client</SelectItem>
                    <SelectItem value="c1">Jean Tremblay</SelectItem>
                    <SelectItem value="c2">Marie Dupont</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date de validité</Label>
                <Input type="date" id="date" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address">Adresse du chantier</Label>
                <Input id="address" placeholder="123 Rue Exemple, Ville, QC" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Détail des Ouvrages</CardTitle>
                <CardDescription>Ajoutez des services d'entretien, de construction ou d'arboriculture.</CardDescription>
              </div>
              <Button size="sm" variant="secondary"><Plus className="w-4 h-4 mr-2"/> Ajouter une ligne</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Service / Item</TableHead>
                    <TableHead>Spécification</TableHead>
                    <TableHead>Qté/Dim</TableHead>
                    <TableHead className="text-right">Prix Unit.</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  
                   {/* TECHNICAL SECTION (NEW) */}
                   {/* Item 1: Cuisine Extérieure */}
                   <TableRow className="bg-slate-50/50 dark:bg-slate-900/10">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ChefHat className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">Cuisine Extérieure</span>
                      </div>
                      <Select defaultValue="structure">
                         <SelectTrigger className="w-full mt-2 h-7 text-xs border-0 bg-transparent p-0 shadow-none">
                            <SelectValue />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="structure">Structure Linéaire (Comptoir)</SelectItem>
                             <SelectItem value="bbq">Intégration BBQ (Encastré)</SelectItem>
                             <SelectItem value="gaz">Connexion Gaz (Tranchée)</SelectItem>
                         </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-sm">
                        <Badge variant="outline" className="font-normal text-xs">Finition: Béton poli</Badge>
                        <div className="text-[10px] text-muted-foreground mt-1">Inclus: Substrat & Découpes</div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-1">
                            <Input type="number" className="h-8 w-16" defaultValue="12" />
                            <span className="text-xs text-muted-foreground">pi.lin</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">650.00 $</TableCell>
                    <TableCell className="text-right font-medium">7,800.00 $</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>

                   {/* Item 2: Irrigation */}
                   <TableRow className="bg-slate-50/50 dark:bg-slate-900/10">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">Système d'Irrigation</span>
                      </div>
                      <Select defaultValue="zone">
                         <SelectTrigger className="w-full mt-2 h-7 text-xs border-0 bg-transparent p-0 shadow-none">
                            <SelectValue />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="zone">Zone Gazon (Spray)</SelectItem>
                             <SelectItem value="drip">Zone Goutte-à-goutte</SelectItem>
                             <SelectItem value="controller">Contrôleur WiFi (IoT)</SelectItem>
                         </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-sm">
                        <Badge variant="outline" className="font-normal text-xs bg-blue-50 text-blue-700 border-blue-200">Sonde pluie incluse</Badge>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-1">
                            <Input type="number" className="h-8 w-16" defaultValue="4" />
                            <span className="text-xs text-muted-foreground">Zones</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">850.00 $</TableCell>
                    <TableCell className="text-right font-medium">3,400.00 $</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>

                   {/* Item 3: Drainage */}
                   <TableRow className="bg-slate-50/50 dark:bg-slate-900/10">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Umbrella className="w-4 h-4 text-purple-600" />
                        <span className="font-medium">Drainage & Imperm.</span>
                      </div>
                      <Select defaultValue="drain">
                         <SelectTrigger className="w-full mt-2 h-7 text-xs border-0 bg-transparent p-0 shadow-none">
                            <SelectValue />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="drain">Drain Français (Excavation)</SelectItem>
                             <SelectItem value="membrane">Membrane Delta-MS</SelectItem>
                             <SelectItem value="puits">Puits de Captation</SelectItem>
                         </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-sm">
                        <Badge variant="outline" className="font-normal text-xs">Gravier 3/4 net inclus</Badge>
                        <div className="text-[10px] text-muted-foreground mt-1">Profondeur: 4 pieds</div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-1">
                            <Input type="number" className="h-8 w-16" defaultValue="140" />
                            <span className="text-xs text-muted-foreground">pi.lin</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">65.00 $</TableCell>
                    <TableCell className="text-right font-medium">9,100.00 $</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>

                   {/* ARBORICULTURE SECTION (Existing) */}
                   <TableRow className="bg-green-50/50 dark:bg-green-900/10 border-t-2 border-dashed">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Scissors className="w-4 h-4 text-green-600" />
                        <span className="font-medium">Taille de Formation</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                        <Badge variant="outline" className="font-normal text-xs">H: 10-12 pi (Escabeau)</Badge>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-1">
                            <Input type="number" className="h-8 w-16" defaultValue="85" />
                            <span className="text-xs text-muted-foreground">pi.lin</span>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">8.50 $</TableCell>
                    <TableCell className="text-right font-medium">722.50 $</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Colonne droite : Résumé Financier */}
        <div className="space-y-6">
          <Card className="bg-muted/30 sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" /> 
                Sommaire
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sous-total (Technique)</span>
                <span className="font-medium">20,300.00 $</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sous-total (Arboriculture)</span>
                <span className="font-medium">722.50 $</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Frais fixes (Machinerie)</span>
                <span className="font-medium">1,250.00 $</span>
              </div>
              <div className="border-t border-border my-2"></div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">TPS (5%)</span>
                <span>1,113.63 $</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">TVQ (9.975%)</span>
                <span>2,221.68 $</span>
              </div>
              <div className="border-t-2 border-primary my-2 pt-2 flex justify-between items-center">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-2xl text-primary">25,607.81 $</span>
              </div>
              
              <div className="pt-4 space-y-2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-xs text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-900">
                    <strong>Note Technique :</strong> Drain Français
                    <p className="mt-1 opacity-80">Inclure membrane Delta-MS recommandée pour garantie 20 ans.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full size-lg text-lg">Valider le Devis</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
