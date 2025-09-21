// Tableau pour stocker les tâches
let taches = [];

// Sélection des éléments HTML
const input = document.getElementById("tacheInput");
const boutonajout = document.getElementById("ajouterBtn");
const boutonsuppr = document.getElementById("supprimerBtn");
const liste = document.getElementById("listeTaches");
const stats = document.getElementById("stats");
const searchInput = document.getElementById("searchInput");

// Fonction pour afficher les tâches
function afficherTaches() {
  liste.innerHTML = "";
  let recherche = searchInput.value.toLowerCase();

  taches.forEach((tache, index) => {
    if (tache.texte.toLowerCase().includes(recherche)) {
      let li = document.createElement("li");

      // Texte
      let span = document.createElement("span");
      span.textContent = tache.texte;
      if (tache.terminee) span.classList.add("terminee");

      // Bouton terminer
      let btnTerminer = document.createElement("button");
      btnTerminer.textContent = "✔";
      btnTerminer.onclick = () => terminerTache(index);

      // Bouton supprimer
      let btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "🗑";
      btnSupprimer.onclick = () => supprimerTache(index);

      li.appendChild(span);
      li.appendChild(btnTerminer);
      li.appendChild(btnSupprimer);
      liste.appendChild(li);
    }
  });

  // Sauvegarde localStorage
  localStorage.setItem("taches", JSON.stringify(taches));

  // Mise à jour du compteur
  majStats();
}

// Fonction compteur
function majStats() {
  let total = taches.length;
  let terminees = taches.filter((t) => t.terminee).length;
  let enCours = total - terminees;
  stats.textContent = `Total: ${total} | En cours: ${enCours} | Terminées: ${terminees}`;
}

// Ajouter une tâche
function ajouterTache() {
  const texte = input.value.trim();
  if (texte !== "") {
    taches.push({ texte: texte, terminee: false });
    input.value = "";
    afficherTaches();
  }
}

// Supprimer une tâche
function supprimerTache(index) {
  taches.splice(index, 1);
  afficherTaches();
}

// Supprimer toutes les tâches
function supprimerToutesTaches() {
  // Vérification si la liste est vide
  if (taches.length === 0) {
    alert("Aucune tâche à supprimer.");
    return;
  }
  // Confirmation avant suppression
  if (!confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) return;
  taches = [];
  afficherTaches();
}

// Terminer une tâche
function terminerTache(index) {
  taches[index].terminee = !taches[index].terminee;
  afficherTaches();
}

// Charger les tâches sauvegardées
window.onload = () => {
  const data = localStorage.getItem("taches");
  if (data) taches = JSON.parse(data);
  afficherTaches();
};

// Events
boutonajout.addEventListener("click", ajouterTache);
boutonsuppr.addEventListener("click", supprimerToutesTaches);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") ajouterTache();
});
searchInput.addEventListener("input", afficherTaches);
