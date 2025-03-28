const fs = require('fs');
const path = require('path');

// Fonction pour supprimer un répertoire récursivement
const deleteFolderRecursive = folderPath => {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(file => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log(`Supprimé : ${folderPath}`);
  } else {
    console.log(`Le dossier ${folderPath} n'existe pas.`);
  }
};

// Chemins des dossiers à supprimer
const pathsToDelete = [
  './android/build',
  './node_modules/react-native-reanimated/android/build',
  './node_modules/react-native-reanimated/android/downloads',
];

// Supprimer chaque dossier spécifié
pathsToDelete.forEach(deleteFolderRecursive);

console.log('Nettoyage terminé !');
