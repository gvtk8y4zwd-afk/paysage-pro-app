
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Phone, Mail, MessageSquare, Facebook, Instagram, Video, UserPlus, Clock, CheckCircle2, XCircle, ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// Mock Data for Leads
const leads = [
  { 
    id: "L-1024", 
    name: "Marc-André Bergeron", 
    source: "facebook", 
    interest: "Drain Français", 
    status: "new", 
    date: "Il y a 10 min",
    phone: "(418) 555-0199",
    score: 85
  },
  { 
    id: "L-1023", 
    name: "Isabelle Dubois", 
    source: "instagram", 
    interest: "Piscine Creusée", 
    status: "contacted", 
    date: "Il y a 2h",
    phone: "(514) 555-0234",
    score: 92
  },
  { 
    id: "L-1022", 
    name: "Jean-Pierre Côté", 
    source: "tiktok", 
    interest: "Aménagement Complet", 
    status: "qualified", 
    date: "Hier",
    phone: "(450) 555-0888",
    score: 75
  },
  { 
    id: "L-1021", 
    name: "Sophie Lemieux", 
    source: "website", 
    interest: "Réparation Fissure", 
    status: "new", 
    date: "Hier",
    phone: "(819) 555-0765",
    score: 60
  },
  { 
    id: "L-1020", 
    name: "Patrick Roy", 
    source: "snapchat", 
    interest: "Patio Pavé", 
    status: "lost", 
    date: "Il y a 2 jours",
    phone: "(418) 555-0111",
    score: 40
  },
];

const getSourceIcon = (source: string) => {
  switch (source) {
    case 'facebook': return <Facebook className="w-4 h-4 text-blue-600" />;
    case 'instagram': return <Instagram className="w-4 h-4 text-pink-600" />;
    case 'tiktok': return <Video className="w-4 h-4 text-black" />; // TikTok icon approx
    case 'snapchat': return <MessageSquare className="w-4 h-4 text-yellow-500" />;
    default: return <Mail className="w-4 h-4 text-gray-500" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'new': return <Badge className="bg-blue-500 hover:bg-blue-600">Nouveau</Badge>;
    case 'contacted': return <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">Contacté</Badge>;
    case 'qualified': return <Badge className="bg-green-600 hover:bg-green-700">Qualifié</Badge>;
    case 'lost': return <Badge variant="secondary" className="text-muted-foreground">Perdu</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Leads (CRM)</h1>
          <p className="text-muted-foreground mt-1">Centralisation des prospects issus des campagnes publicitaires.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Filtres
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" /> Ajout Manuel
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background border-blue-100 dark:border-blue-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">Nouveaux (24h)</CardTitle>
            <UserPlus className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">12</div>
            <p className="text-xs text-muted-foreground">+4 depuis ce matin</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Réponse</CardTitle>
            <Phone className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Appel &lt; 15 min</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coût par Lead (CPL)</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34.50 $</div>
            <p className="text-xs text-muted-foreground">Cible: 40.00 $</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Estimé</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145k $</div>
            <p className="text-xs text-muted-foreground">Basé sur leads qualifiés</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main List */}
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Flux des Prospects</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Rechercher nom, tél..." className="pl-8" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="mb-4">
                            <TabsTrigger value="all">Tous</TabsTrigger>
                            <TabsTrigger value="new">Nouveaux 🔥</TabsTrigger>
                            <TabsTrigger value="todo">À Rappeler</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="all" className="mt-0">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Prospect</TableHead>
                                        <TableHead>Intérêt</TableHead>
                                        <TableHead>Source</TableHead>
                                        <TableHead>Statut</TableHead>
                                        <TableHead className="text-right">Score</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {leads.map((lead) => (
                                        <TableRow key={lead.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                                            <TableCell>
                                                <div className="font-medium">{lead.name}</div>
                                                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                                                    <Clock className="w-3 h-3" /> {lead.date}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="font-normal">{lead.interest}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-muted rounded-full">
                                                        {getSourceIcon(lead.source)}
                                                    </div>
                                                    <span className="text-sm capitalize text-muted-foreground">{lead.source}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {getStatusBadge(lead.status)}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className={lead.score > 80 ? "text-green-600 font-bold" : "text-muted-foreground"}>{lead.score}</span>
                                                    <Progress value={lead.score} className="w-12 h-1.5" />
                                                </div>
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

        {/* Quick Actions / Detail Panel Placeholder */}
        <div className="space-y-6">
            <Card className="bg-slate-50 dark:bg-slate-900/20 border-l-4 border-l-blue-500">
                <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        Actions Prioritaires
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3 p-2 bg-background rounded border shadow-sm">
                        <div className="mt-1">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">MB</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Marc-André B.</p>
                            <p className="text-xs text-muted-foreground">Drain Français • Il y a 10 min</p>
                            <div className="flex gap-2 mt-2">
                                <Button size="sm" className="h-7 text-xs w-full bg-green-600 hover:bg-green-700">
                                    <Phone className="w-3 h-3 mr-1" /> Appeler
                                </Button>
                                <Button size="sm" variant="outline" className="h-7 text-xs w-full">
                                    SMS
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-2 bg-background rounded border shadow-sm opacity-75">
                        <div className="mt-1">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-slate-100 text-slate-700 text-xs">SL</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Sophie L.</p>
                            <p className="text-xs text-muted-foreground">Relance devis • Retard 2h</p>
                            <Button size="sm" variant="secondary" className="h-7 text-xs w-full mt-2">
                                Voir fiche
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Performance Canaux</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-1"><Facebook className="w-3 h-3"/> Facebook</span>
                            <span className="font-medium">45% (Vol.)</span>
                        </div>
                        <Progress value={45} className="h-1.5 bg-blue-100 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-1"><Instagram className="w-3 h-3"/> Instagram</span>
                            <span className="font-medium">30% (Qual.)</span>
                        </div>
                        <Progress value={30} className="h-1.5 bg-pink-100 text-pink-600" />
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="flex items-center gap-1"><Video className="w-3 h-3"/> TikTok</span>
                            <span className="font-medium">15% (Viral)</span>
                        </div>
                        <Progress value={15} className="h-1.5 bg-slate-100 text-slate-800" />
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
