

function generateNewFolderName(existingFolders) {
    // Write your code here
    let count = existingFolders.length;
    let folders = {};
    if (!existingFolders.includes('New Folder')) return 'New Folder';
    for (let i = 0; i < existingFolders.length; i++) {
      let curr = existingFolders[i].split(' ');
      folders[curr[curr.length - 1]] = existingFolders[i];
    }
    for (let i = 2; i <= count + 1; i++) {
      if (!folders[`(${i})`]) {
        return `New Folder (${i})`;
      }
    }
}
  
  // Should print: "New Folder (2)"
  console.log(generateNewFolderName(["New Folder", "New Folder (3)", "New Folder (4)"]));