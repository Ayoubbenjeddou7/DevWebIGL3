// Exercice 1
function ex1() {
  var a = 1;
  let b = 2;
  const c = 3;
  console.log("Avant bloc:", a, b, c);

  {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("Dans bloc:", a, b, c);
  }
  console.log("Après bloc:", a, b, c);
  try { c = 99; } catch (e) { console.error("Erreur en réaffectant const:", e.message); }
}

// Exercice 2
function ex2() {
  function sommeClassic(a, b) { return a + b; }
  const somme = (a, b) => a + b;
  console.log("sommeClassic(2,3)=", sommeClassic(2,3));
  console.log("somme(2,3)=", somme(2,3));
}

// Exercice 3
function ex3() {
  const user = { name: "Noor", age: 10, city: "Tunis" };
  const { name, age } = user;
  console.log("name, age:", name, age);
}

// Exercice 4
function ex4() {
  const a = [1,2,3], b = [4,5,6];
  console.log("fusion:", [...a, ...b]);
  const origine = { nom: "Ali", ville: "Tunis" };
  console.log("copie modifiée:", { ...origine, ville: "Sfax" });
}

// Exercice 5
function ex5() {
  const livre = { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943,
    getInfo() { return `${this.titre} — ${this.auteur} (${this.annee})`; }
  };
  console.log(livre.getInfo());
}

// Exercice 6
function ex6() {
  class Etudiant {
    constructor(nom, note) { this.nom = nom; this.note = note; }
    getMention() {
      if (this.note >= 16) return "Très bien";
      if (this.note >= 14) return "Bien";
      if (this.note >= 10) return "Passable";
      return "Échec";
    }
    toString() { return `${this.nom} — ${this.note} (${this.getMention()})`; }
  }
  const e1 = new Etudiant("Samir", 17);
  const e2 = new Etudiant("Leila", 15);
  const e3 = new Etudiant("Rami", 9);
  console.log(e1.toString(), e2.toString(), e3.toString());
}

// Exercice 7
function ex7() {
  const notes = [12, 5, 17, 9, 20];
  const somme = notes.reduce((acc,n)=>acc+n,0);
  console.log("Moyenne:", somme/notes.length);
  console.log("Tri décroissant:", [...notes].sort((a,b)=>b-a));
  console.log("Notes >= 10:", notes.filter(n=>n>=10));
}


ex1();
ex2();
ex3();
ex4();
ex5();
ex6();
ex7();