// Partie 4 : Bases de TypeScript

// 1. Déclaration de variables avec types primitifs
let nom: string = "Jean";
let age: number = 25;
let estEtudiant: boolean = true;
let notes: number[] = [15, 18, 12];
let informations: any = "Peut être de n'importe quel type";

// 2. Fonction typée pour calculer la somme
function calculerSomme(a: number, b: number): number {
    return a + b;
}

// 3. Interface Etudiant
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    notes?: number[]; // Propriété optionnelle
}

// 4. Classe Etudiant implémentant l'interface
class EtudiantClasse implements Etudiant {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public age: number,
        public notes: number[] = []
    ) {}

    // Méthode pour afficher les informations
    afficherInformations(): string {
        return `Étudiant: ${this.prenom} ${this.nom}, Age: ${this.age}, ID: ${this.id}`;
    }

    // Méthode pour calculer la moyenne
    calculerMoyenne(): number {
        if (this.notes.length === 0) return 0;
        return this.notes.reduce((a, b) => a + b) / this.notes.length;
    }
}

// Partie 5 : Concepts avancés TypeScript

// 1. Fonction générique retournant un tableau du même type
function creerTableau<T>(...elements: T[]): T[] {
    return elements;
}

// Utilisation de la fonction générique
const nombres = creerTableau<number>(1, 2, 3, 4, 5);
const chaines = creerTableau<string>("a", "b", "c");

// 2. Unions de types et types optionnels
type Resultat = number | string | null;

function traiterDonnee(donnee: Resultat, format?: string): string {
    if (donnee === null) {
        return "Donnée non disponible";
    }
    
    if (typeof donnee === "number" && format === "pourcentage") {
        return `${donnee}%`;
    }
    
    return donnee.toString();
}

// 3. Énumérations pour représenter des valeurs constantes
enum StatutEtudiant {
    Inscrit = "INSCRIT",
    EnCours = "EN_COURS",
    Diplome = "DIPLOME",
    Abandon = "ABANDON"
}

enum Niveaux {
    Debutant = 1,
    Intermediaire,
    Avance
}

// Classe étendue utilisant l'énumération
class EtudiantAvance extends EtudiantClasse {
    private statut: StatutEtudiant;
    private niveau: Niveaux;

    constructor(
        id: number,
        nom: string,
        prenom: string,
        age: number,
        statut: StatutEtudiant = StatutEtudiant.Inscrit,
        niveau: Niveaux = Niveaux.Debutant
    ) {
        super(id, nom, prenom, age);
        this.statut = statut;
        this.niveau = niveau;
    }

    getStatut(): string {
        return `Statut: ${this.statut}, Niveau: ${Niveaux[this.niveau]}`;
    }

    promouvoir(): void {
        if (this.niveau < Niveaux.Avance) {
            this.niveau++;
        }
    }
}

// Tests et démonstrations
console.log("=== TESTS TYPESCRIPT ===");

// Test des variables primitives
console.log("Nom:", nom);
console.log("Âge:", age);
console.log("Est étudiant:", estEtudiant);

// Test de la fonction somme
console.log("Somme de 5 et 3:", calculerSomme(5, 3));

// Test de la classe Etudiant
const etudiant1 = new EtudiantClasse(1, "Dupont", "Marie", 22, [15, 18, 16]);
console.log(etudiant1.afficherInformations());
console.log("Moyenne:", etudiant1.calculerMoyenne());

// Test des fonctions génériques
console.log("Tableau de nombres:", nombres);
console.log("Tableau de chaines:", chaines);

// Test des unions de types
console.log("Traitement nombre:", traiterDonnee(85, "pourcentage"));
console.log("Traitement chaine:", traiterDonnee("Hello"));
console.log("Traitement null:", traiterDonnee(null));

// Test des énumérations
const etudiantAvance = new EtudiantAvance(2, "Martin", "Pierre", 24, StatutEtudiant.EnCours, Niveaux.Intermediaire);
console.log(etudiantAvance.getStatut());
etudiantAvance.promouvoir();
console.log("Après promotion:", etudiantAvance.getStatut());

// Test de l'énumération StatutEtudiant
console.log("Statuts disponibles:", Object.values(StatutEtudiant));