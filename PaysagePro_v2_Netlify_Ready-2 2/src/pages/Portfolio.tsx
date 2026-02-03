
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Share2, Image as ImageIcon, Video, Facebook, Instagram, Linkedin, MapPin, Calendar, Heart, Plus } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const projects = [
  {
    id: 1,
    client: "Famille Tremblay",
    title: "Oasis Urbaine avec Piscine",
    location: "Laval, QC",
    date: "Juin 2024",
    category: "Piscine & Pavé",
    budget: "45k $",
    likes: 124,
    images: [
      "/placeholder-pool-1.jpg",
      "/placeholder-pool-2.jpg",
      "/placeholder-pool-3.jpg"
    ]
  },
  {
    id: 2,
    client: "M. Gagnon",
    title: "Façade Moderne et Entrée",
    location: "Québec, QC",
    date: "Mai 2024",
    category: "Pavé Uni",
    budget: "15k $",
    likes: 85,
    images: [
      "/placeholder-front-1.jpg",
      "/placeholder-front-2.jpg"
    ]
  },
  {
    id: 3,
    client: "Résidence des Chênes",
    title: "Jardin Zen et Fontaine",
    location: "Boucherville, QC",
    date: "Août 2023",
    category: "Aménagement",
    budget: "28k $",
    likes: 210,
    images: [
      "/placeholder-garden-1.jpg"
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Portfolio & Réalisations</h1>
          <p className="text-muted-foreground mt-1">Vitrine de vos projets pour attirer de nouveaux clients.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Filtrer par Type
          </Button>
          <Button>
            <ImageIcon className="w-4 h-4 mr-2" /> Ajouter un Projet
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all">
            <div className="relative">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                {/* Image Placeholder - In real app, use actual <img> */}
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                    <ImageIcon className="w-12 h-12 opacity-20" />
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary" size="sm" className="h-8">
                                <Share2 className="w-4 h-4 mr-2" /> Partager
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Partager sur les réseaux</DialogTitle>
                                <DialogDescription>
                                    Publiez ce projet pour générer des leads qualifiés.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-3 gap-4 py-4">
                                <Button variant="outline" className="flex flex-col gap-2 h-24 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700">
                                    <Facebook className="w-8 h-8 text-blue-600" />
                                    Facebook
                                </Button>
                                <Button variant="outline" className="flex flex-col gap-2 h-24 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-700">
                                    <Instagram className="w-8 h-8 text-pink-600" />
                                    Instagram
                                </Button>
                                <Button variant="outline" className="flex flex-col gap-2 h-24 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-800">
                                    <Linkedin className="w-8 h-8 text-blue-800" />
                                    LinkedIn
                                </Button>
                            </div>
                            <div className="bg-muted p-3 rounded text-xs text-muted-foreground">
                                <strong>Suggestion de texte :</strong> "✨ Transformation incroyable pour la famille {project.client.split(' ')[1]} ! Un projet {project.category} réalisé avec passion à {project.location}. Contactez-nous pour votre soumission gratuite ! 🏡 #Paysagisme #Transformation"
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
              </AspectRatio>
              <Badge className="absolute top-2 right-2 bg-black/70 hover:bg-black/80 border-0">{project.category}</Badge>
            </div>
            
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {project.location}
                    </CardDescription>
                </div>
                <Avatar className="w-8 h-8 border">
                    <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {project.client.substring(0,2).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {project.date}</span>
                    <span className="font-medium text-foreground">{project.budget}</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t bg-muted/20 flex justify-between items-center h-10">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> {project.images.length} photos
                </div>
                <div className="text-xs font-medium flex items-center gap-1 text-pink-600">
                    <Heart className="w-3 h-3 fill-current" /> {project.likes}
                </div>
            </CardFooter>
          </Card>
        ))}
        
        {/* Add New Project Card */}
        <Card className="flex flex-col items-center justify-center border-dashed bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer min-h-[300px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Plus className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-lg">Nouveau Projet</h3>
            <p className="text-sm text-muted-foreground mt-1">Ajouter des photos avant/après</p>
        </Card>
      </div>
    </div>
  );
}
