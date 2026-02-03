
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, ClipboardList, CheckCircle2, Clock, AlertCircle, FileText, ArrowUpRight, Wallet } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

export default function OrdersPage() {
  const orders = [
    {
      id: "CMD-2024-042",
      client: "Mme. Tremblay",
      project: "Aménagement Cour Arrière - Piscine & Pavé",
      status: "in_progress",
      startDate: "2024-05-15",
      total: 35000,
      paid: 15000,
      progress: 45,
      nextStep: "Coulage Béton (J-2)"
    },
    {
      id: "CMD-2024-045",
      client: "M. Gagnon",
      project: "Taille de Haies & Nettoyage",
      status: "planned",
      startDate: "2024-06-01",
      total: 1200,
      paid: 360,
      progress: 0,
      nextStep: "Début Chantier"
    },
    {
      id: "CMD-2024-039",
      client: "Ville de Québec",
      project: "Entretien Parc Floral",
      status: "completed",
      startDate: "2024-04-10",
      total: 15000,
      paid: 15000,
      progress: 100,
      nextStep: "Facturation Finale"
    },
    {
      id: "CMD-2024-051",
      client: "Sophie Leduc",
      project: "Plantation Arbres (x10)",
      status: "pending_deposit",
      startDate: "-",
      total: 2800,
      paid: 0,
      progress: 0,
      nextStep: "Attente Dépôt (30%)"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_progress": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">En cours</Badge>;
      case "planned": return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200">Planifié</Badge>;
      case "completed": return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">Terminé</Badge>;
      case "pending_deposit": return <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">Attente Dépôt</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Commandes & Chantiers</h1>
          <p className="text-muted-foreground mt-1">Suivi de l'avancement des projets et des paiements clients.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Filtres
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Créer Commande
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chantiers Actifs</CardTitle>
            <ClipboardList className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 retards potentiels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">À Venir (7j)</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Nouveaux démarrages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Attente Dépôt</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Total: 12,500 $</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Encaissé ce mois</CardTitle>
            <Wallet className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45k $</div>
            <p className="text-xs text-muted-foreground">Objectif: 60k $ (75%)</p>
          </CardContent>
        </Card>
      </div>

      {/* Main List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Liste des Commandes</CardTitle>
            <div className="relative w-72">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Client, Projet, ID..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
            <Tabs defaultValue="active" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="active">En Cours</TabsTrigger>
                    <TabsTrigger value="planned">Planifiés</TabsTrigger>
                    <TabsTrigger value="pending">Finances</TabsTrigger>
                    <TabsTrigger value="all">Tout</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active" className="mt-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Commande</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Avancement</TableHead>
                                <TableHead>Finances (Payé / Total)</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>
                                        <div className="font-bold text-foreground">{order.client}</div>
                                        <div className="text-xs text-muted-foreground">{order.project}</div>
                                        <div className="text-[10px] text-muted-foreground mt-1 font-mono">{order.id}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1 items-start">
                                            {getStatusBadge(order.status)}
                                            {order.status === 'in_progress' && <span className="text-[10px] text-muted-foreground">Prochaine étape: {order.nextStep}</span>}
                                        </div>
                                    </TableCell>
                                    <TableCell className="w-[200px]">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium">{order.progress}%</span>
                                        </div>
                                        <Progress value={order.progress} className="h-2" />
                                    </TableCell>
                                    <TableCell>
                                         <div className="font-medium text-sm">
                                            {order.paid.toLocaleString()} $ <span className="text-muted-foreground">/ {order.total.toLocaleString()} $</span>
                                         </div>
                                         <div className="text-xs text-muted-foreground mt-0.5">
                                            {Math.round((order.paid / order.total) * 100)}% encaissé
                                         </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                         <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                            <ArrowUpRight className="h-4 w-4" />
                                         </Button>
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
