// Partie 4 : Bases de TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Déclaration de variables avec types primitifs
var nom = "Jean";
var age = 25;
var estEtudiant = true;
var notes = [15, 18, 12];
var informations = "Peut être de n'importe quel type";
// 2. Fonction typée pour calculer la somme
function calculerSomme(a, b) {
    return a + b;
}
// 4. Classe Etudiant implémentant l'interface
var EtudiantClasse = /** @class */ (function () {
    function EtudiantClasse(id, nom, prenom, age, notes) {
        if (notes === void 0) { notes = []; }
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.notes = notes;
    }
    // Méthode pour afficher les informations
    EtudiantClasse.prototype.afficherInformations = function () {
        return "\u00C9tudiant: ".concat(this.prenom, " ").concat(this.nom, ", Age: ").concat(this.age, ", ID: ").concat(this.id);
    };
    // Méthode pour calculer la moyenne
    EtudiantClasse.prototype.calculerMoyenne = function () {
        if (this.notes.length === 0)
            return 0;
        return this.notes.reduce(function (a, b) { return a + b; }) / this.notes.length;
    };
    return EtudiantClasse;
}());
// Partie 5 : Concepts avancés TypeScript
// 1. Fonction générique retournant un tableau du même type
function creerTableau() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements;
}
// Utilisation de la fonction générique
var nombres = creerTableau(1, 2, 3, 4, 5);
var chaines = creerTableau("a", "b", "c");
function traiterDonnee(donnee, format) {
    if (donnee === null) {
        return "Donnée non disponible";
    }
    if (typeof donnee === "number" && format === "pourcentage") {
        return "".concat(donnee, "%");
    }
    return donnee.toString();
}
// 3. Énumérations pour représenter des valeurs constantes
var StatutEtudiant;
(function (StatutEtudiant) {
    StatutEtudiant["Inscrit"] = "INSCRIT";
    StatutEtudiant["EnCours"] = "EN_COURS";
    StatutEtudiant["Diplome"] = "DIPLOME";
    StatutEtudiant["Abandon"] = "ABANDON";
})(StatutEtudiant || (StatutEtudiant = {}));
var Niveaux;
(function (Niveaux) {
    Niveaux[Niveaux["Debutant"] = 1] = "Debutant";
    Niveaux[Niveaux["Intermediaire"] = 2] = "Intermediaire";
    Niveaux[Niveaux["Avance"] = 3] = "Avance";
})(Niveaux || (Niveaux = {}));
// Classe étendue utilisant l'énumération
var EtudiantAvance = /** @class */ (function (_super) {
    __extends(EtudiantAvance, _super);
    function EtudiantAvance(id, nom, prenom, age, statut, niveau) {
        if (statut === void 0) { statut = StatutEtudiant.Inscrit; }
        if (niveau === void 0) { niveau = Niveaux.Debutant; }
        var _this = _super.call(this, id, nom, prenom, age) || this;
        _this.statut = statut;
        _this.niveau = niveau;
        return _this;
    }
    EtudiantAvance.prototype.getStatut = function () {
        return "Statut: ".concat(this.statut, ", Niveau: ").concat(Niveaux[this.niveau]);
    };
    EtudiantAvance.prototype.promouvoir = function () {
        if (this.niveau < Niveaux.Avance) {
            this.niveau++;
        }
    };
    return EtudiantAvance;
}(EtudiantClasse));
// Tests et démonstrations
console.log("=== TESTS TYPESCRIPT ===");
// Test des variables primitives
console.log("Nom:", nom);
console.log("Âge:", age);
console.log("Est étudiant:", estEtudiant);
// Test de la fonction somme
console.log("Somme de 5 et 3:", calculerSomme(5, 3));
// Test de la classe Etudiant
var etudiant1 = new EtudiantClasse(1, "Dupont", "Marie", 22, [15, 18, 16]);
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
var etudiantAvance = new EtudiantAvance(2, "Martin", "Pierre", 24, StatutEtudiant.EnCours, Niveaux.Intermediaire);
console.log(etudiantAvance.getStatut());
etudiantAvance.promouvoir();
console.log("Après promotion:", etudiantAvance.getStatut());
// Test de l'énumération StatutEtudiant
console.log("Statuts disponibles:", Object.values(StatutEtudiant));
