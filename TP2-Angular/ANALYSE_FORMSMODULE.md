# Analyse du FormsModule

## Pourquoi FormsModule est nécessaire?
- `ngModel` est une directive qui fait partie du FormsModule
- Angular ne charge pas tous les modules par défaut
- Il faut explicitement importer FormsModule pour utiliser ngModel

## Rôle de l'AppModule
- Point central de configuration de l'application
- Déclare tous les composants utilisés
- Importe les modules nécessaires (FormsModule, HttpClientModule, etc.)
- Gère les dépendances de l'application

## Erreur sans FormsModule
Sans l'import de FormsModule, Angular ne reconnaît pas la directive ngModel,
ce qui provoque une erreur de compilation.