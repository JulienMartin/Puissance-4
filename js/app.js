 // on identifie chaque cellule de la grille par son id
 let celluleCible = new Array(42);

 // l'indice 'i' parcourt l'ensemble des lignes
 for (let i = 1; i < 7; i++) {
    celluleCible[i] = new Array(7);
    // l'indice 'j' parcourt l'ensemble des colonnes
    for (let j = 1; j < 8; j++) {
        celluleCible[i][j] = document.getElementById('cell' + i + j);  
    }
}

// on définit maintenant les 69 façons d'avoir 4 cellules 'consécutives' dans cette grille de taille 6*7
let solutions = new Array(69);

    // d'abord à l'horizontale : 4 façons sur chacune des 6 lignes : 24 possibilités

        // ligne 1
        solutions[0] = [celluleCible[1][1], celluleCible[1][2], celluleCible[1][3], celluleCible[1][4]];
        solutions[1] = [celluleCible[1][2], celluleCible[1][3], celluleCible[1][4], celluleCible[1][5]];
        solutions[2] = [celluleCible[1][3], celluleCible[1][4], celluleCible[1][5], celluleCible[1][6]];
        solutions[3] = [celluleCible[1][4], celluleCible[1][5], celluleCible[1][6], celluleCible[1][7]];

        // ligne 2
        solutions[4] = [celluleCible[2][1], celluleCible[2][2], celluleCible[2][3], celluleCible[2][4]];
        solutions[5] = [celluleCible[2][2], celluleCible[2][3], celluleCible[2][4], celluleCible[2][5]];
        solutions[6] = [celluleCible[2][3], celluleCible[2][4], celluleCible[2][5], celluleCible[2][6]];
        solutions[7] = [celluleCible[2][4], celluleCible[2][5], celluleCible[2][6], celluleCible[2][7]];

        // ligne 3
        solutions[8] = [celluleCible[3][1], celluleCible[3][2], celluleCible[3][3], celluleCible[3][4]];
        solutions[9] = [celluleCible[3][2], celluleCible[3][3], celluleCible[3][4], celluleCible[3][5]];
        solutions[10] = [celluleCible[3][3], celluleCible[3][4], celluleCible[3][5], celluleCible[3][6]];
        solutions[11] = [celluleCible[3][4], celluleCible[3][5], celluleCible[3][6], celluleCible[3][7]];

        // ligne 4
        solutions[12] = [celluleCible[4][1], celluleCible[4][2], celluleCible[4][3], celluleCible[4][4]];
        solutions[13] = [celluleCible[4][2], celluleCible[4][3], celluleCible[4][4], celluleCible[4][5]];
        solutions[14] = [celluleCible[4][3], celluleCible[4][4], celluleCible[4][5], celluleCible[4][6]];
        solutions[15] = [celluleCible[4][4], celluleCible[4][5], celluleCible[4][6], celluleCible[4][7]];

        // ligne 5
        solutions[16] = [celluleCible[5][1], celluleCible[5][2], celluleCible[5][3], celluleCible[5][4]];
        solutions[17] = [celluleCible[5][2], celluleCible[5][3], celluleCible[5][4], celluleCible[5][5]];
        solutions[18] = [celluleCible[5][3], celluleCible[5][4], celluleCible[5][5], celluleCible[5][6]];
        solutions[19] = [celluleCible[5][4], celluleCible[5][5], celluleCible[5][6], celluleCible[5][7]];

        // ligne 6
        solutions[20] = [celluleCible[6][1], celluleCible[6][2], celluleCible[6][3], celluleCible[6][4]];
        solutions[21] = [celluleCible[6][2], celluleCible[6][3], celluleCible[6][4], celluleCible[6][5]];
        solutions[22] = [celluleCible[6][3], celluleCible[6][4], celluleCible[6][5], celluleCible[6][6]];
        solutions[23] = [celluleCible[6][4], celluleCible[6][5], celluleCible[6][6], celluleCible[6][7]];

    // ensuite à la verticale : 3 façons sur chacune des 7 colonnes : 21 possibilités

        // colonne 1
        solutions[24] = [celluleCible[1][1], celluleCible[2][1], celluleCible[3][1], celluleCible[4][1]];
        solutions[25] = [celluleCible[2][1], celluleCible[3][1], celluleCible[4][1], celluleCible[5][1]];
        solutions[26] = [celluleCible[3][1], celluleCible[4][1], celluleCible[5][1], celluleCible[6][1]];
    
        // colonne 2
        solutions[27] = [celluleCible[1][2], celluleCible[2][2], celluleCible[3][2], celluleCible[4][2]];
        solutions[28] = [celluleCible[2][2], celluleCible[3][2], celluleCible[4][2], celluleCible[5][2]];
        solutions[29] = [celluleCible[3][2], celluleCible[4][2], celluleCible[5][2], celluleCible[6][2]];

        // colonne 3
        solutions[30] = [celluleCible[1][3], celluleCible[2][3], celluleCible[3][3], celluleCible[4][3]];
        solutions[31] = [celluleCible[2][3], celluleCible[3][3], celluleCible[4][3], celluleCible[5][3]];
        solutions[32] = [celluleCible[3][3], celluleCible[4][3], celluleCible[5][3], celluleCible[6][3]];

        // colonne 4
        solutions[33] = [celluleCible[1][4], celluleCible[2][4], celluleCible[3][4], celluleCible[4][4]];
        solutions[34] = [celluleCible[2][4], celluleCible[3][4], celluleCible[4][4], celluleCible[5][4]];
        solutions[35] = [celluleCible[3][4], celluleCible[4][4], celluleCible[5][4], celluleCible[6][4]];

        // colonne 5
        solutions[36] = [celluleCible[1][5], celluleCible[2][5], celluleCible[3][5], celluleCible[4][5]];
        solutions[37] = [celluleCible[2][5], celluleCible[3][5], celluleCible[4][5], celluleCible[5][5]];
        solutions[38] = [celluleCible[3][5], celluleCible[4][5], celluleCible[5][5], celluleCible[6][5]];

        // colonne 6
        solutions[39] = [celluleCible[1][6], celluleCible[2][6], celluleCible[3][6], celluleCible[4][6]];
        solutions[40] = [celluleCible[2][6], celluleCible[3][6], celluleCible[4][6], celluleCible[5][6]];
        solutions[41] = [celluleCible[3][6], celluleCible[4][6], celluleCible[5][6], celluleCible[6][6]];

        // colonne 7
        solutions[42] = [celluleCible[1][7], celluleCible[2][7], celluleCible[3][7], celluleCible[4][7]];
        solutions[43] = [celluleCible[2][7], celluleCible[3][7], celluleCible[4][7], celluleCible[5][7]];
        solutions[44] = [celluleCible[3][7], celluleCible[4][7], celluleCible[5][7], celluleCible[6][7]];

    // enfin en diagonale

        // les diagonales de longueur 4 : 1 possibilité chacune => 4*1 = 4 possibilités au total
        solutions[45] = [celluleCible[4][1], celluleCible[3][2], celluleCible[2][3], celluleCible[1][4]];
        solutions[46] = [celluleCible[6][4], celluleCible[5][5], celluleCible[4][6], celluleCible[3][7]];
        solutions[47] = [celluleCible[3][1], celluleCible[4][2], celluleCible[5][3], celluleCible[6][4]];
        solutions[48] = [celluleCible[1][4], celluleCible[2][5], celluleCible[3][6], celluleCible[4][7]];

        // les diagonales de longueur 5 : 2 possibilités chacune => 4*2 = 8 possibilités au total
        solutions[49] = [celluleCible[5][1], celluleCible[4][2], celluleCible[3][3], celluleCible[2][4]];
        solutions[50] = [celluleCible[4][2], celluleCible[3][3], celluleCible[2][4], celluleCible[1][5]];
        solutions[51] = [celluleCible[6][3], celluleCible[5][4], celluleCible[4][5], celluleCible[3][6]];
        solutions[52] = [celluleCible[5][4], celluleCible[4][5], celluleCible[3][6], celluleCible[2][7]];
        solutions[53] = [celluleCible[2][1], celluleCible[3][2], celluleCible[4][3], celluleCible[5][4]];
        solutions[54] = [celluleCible[3][2], celluleCible[4][3], celluleCible[5][4], celluleCible[6][5]];
        solutions[55] = [celluleCible[1][3], celluleCible[2][4], celluleCible[3][5], celluleCible[4][6]];
        solutions[56] = [celluleCible[2][4], celluleCible[3][5], celluleCible[4][6], celluleCible[5][7]];

        // les diagonales de longueur 6 : 3 possibilités chacune => 4*3 = 12 possibilités au total
        solutions[57] = [celluleCible[6][1], celluleCible[5][2], celluleCible[4][3], celluleCible[3][4]];
        solutions[58] = [celluleCible[5][2], celluleCible[4][3], celluleCible[3][4], celluleCible[2][5]];
        solutions[59] = [celluleCible[4][3], celluleCible[3][4], celluleCible[2][5], celluleCible[1][6]];
        solutions[60] = [celluleCible[6][2], celluleCible[5][3], celluleCible[4][4], celluleCible[3][5]];
        solutions[61] = [celluleCible[5][3], celluleCible[4][4], celluleCible[3][5], celluleCible[2][6]];
        solutions[62] = [celluleCible[4][4], celluleCible[3][5], celluleCible[2][6], celluleCible[1][7]];
        solutions[63] = [celluleCible[1][1], celluleCible[2][2], celluleCible[3][3], celluleCible[4][4]];
        solutions[64] = [celluleCible[2][2], celluleCible[3][3], celluleCible[4][4], celluleCible[5][5]];
        solutions[65] = [celluleCible[3][3], celluleCible[4][4], celluleCible[5][5], celluleCible[6][6]];
        solutions[66] = [celluleCible[1][2], celluleCible[2][3], celluleCible[3][4], celluleCible[4][5]];
        solutions[67] = [celluleCible[2][3], celluleCible[3][4], celluleCible[4][5], celluleCible[5][6]];
        solutions[68] = [celluleCible[3][4], celluleCible[4][5], celluleCible[5][6], celluleCible[6][7]];

        
let app = {

    init: function() {
        
        // on définit les colonnes
        let columns = document.querySelectorAll('div.column');
        
        // on définit les cellules
        let cells = document.querySelectorAll('div.cell');
       
        // on définit sur chacune des cellules de la grille un écouteur d'événement : au clic, on coloriera en jaune
        for (let index = 0; index < cells.length; index += 1) {
        cells[index].addEventListener('click', app.playerPlay);
        }
    },


    playerPlay: function(event) {

        // on identifie la cellule qui a déclenché la fonction
        let activeCell = event.currentTarget;

        // on identifie son élément parent, à savoir la colonne toute entière
        let activeColumn = activeCell.parentNode;

        // on initialise une variable qui va parcourir tous les enfants de la colonne dont la classe vaut exactement 'cell'
        let notes = null;

        // on cible cette variable 'notes' sur le dernier enfant dont la classe vaut 'cell'
        // car c'est celui-ci qu'on va colorier en jaune
        for (let i = 0; i < activeColumn.childNodes.length; i++){
            if (activeColumn.childNodes[i].className == "cell"){
                notes = activeColumn.childNodes[i];
            }
        }

        // on effectue le coloriage en jaune
        notes.style.backgroundColor = 'yellow';

        // on change la classe de l'élément en case-cliquée-jaune' de façon à ne plus avoir 'cell', en prévision des clics à venir
        notes.classList.remove('cell');
        notes.classList.add('case-cliquée-jaune');

        // on appelle la fonction 'yellowWin', qui va vérifier si l'utilisateur est vainqueur ou non après son coup
        app.yellowWin();

    },

    yellowWin: function() {

        // on parcourt l'ensemble des 'solutions[]'
        for (let k = 0; k < 69; k++){

            // on définit et on initialise à 0 une variable qui va compter le nombre de cellules d'un même ensemble 'solutions[]' coloriées en jaune
            let compteWin = 0;

                // on vérifie si chaque élément de solutions[k] est colorié en jaune ou non, si c'est le cas on ajoute 1 à notre variable
                for (let yellowColorCell of solutions[k]){
                    if (yellowColorCell.style.backgroundColor == 'yellow'){
                        compteWin += 1;
                    }
                }

                // si la variable vaut 4, le joueur a gagné et on affiche une alerte
                if (compteWin == 4){
                    for (let yellowColorCell of solutions[k]){
                        yellowColorCell.classList.remove('case-cliquée-jaune');
                        yellowColorCell.classList.add('yellow-clignote');
                    }
                    window.alert('Félicitations, vous avez gagné !');
                    return null;
                }
        }

        // si l'utilisateur n'a pas gagné, on continue et on appelle la fonction 'countdown', qui va compter 2 secondes avant de faire jouer l'ordinateur
        app.countdown();
    },

    countdown: function() {

        setTimeout(app.computerPlay, 2000);

    },

    computerPlay: function() {
        
        // on redéfinit les colonnes
        let columns = document.querySelectorAll('div.column');

        // la variable 'notes' jouera le même rôle que dans la fonction 'playerPlay', à ceci près que cette fois la colonne sera choisie au hasard
        let notes = null;

        // on va faire choisir une colonne au hasard à l'ordinateur, et on réitèrera l'opération tant que la variable 'notes' sera null
        while (notes == null) {

            // on fait choisir à l'ordinateur un entier aléatoire entre 0 et 6
            let columnIndex = (Math.floor(Math.random() * 7)).toString(10);

            // on redéfinit notre colonne active, qui est fixée cette fois par le nombre tiré au sort par l'ordinateur
            let activeColumn = columns[columnIndex];

            // on cible cette variable 'notes' sur le dernier enfant dont la classe vaut 'cell'
            // car c'est celui-ci qu'on va colorier en rouge
            for (let i = 0; i < activeColumn.childNodes.length; i++){
                if (activeColumn.childNodes[i].className == "cell"){
                    notes = activeColumn.childNodes[i];
                }
            }

            if (notes == null) {
                console.log('index tiré au sort : ' + columnIndex + ' mais la colonne est déjà pleine');
            }
        }
         
        // on effectue le coloriage en jaune
        notes.style.backgroundColor = 'red';

        // on change la classe de l'élément en 'cell case-cliquée-rouge' de façon à ne plus avoir simplement 'cell', en prévision des clics à venir
        notes.classList.remove('cell');
        notes.classList.add('case-cliquée-rouge');

        // on appelle la fonction 'redWin', qui va vérifier si l'ordinateur est vainqueur ou non après son coup
        app.redWin();
    },

    redWin: function() {

        // on parcourt l'ensemble des 'solutions[]'
        for (let k = 0; k < 69; k++){

            // on définit et on initialise à 0 une variable qui va compter le nombre de cellules d'un même ensemble 'solutions[]' coloriées en rouge
            let compteLose = 0;

                // on vérifie si chaque élément de solutions[k] est colorié en rouge ou non, si c'est le cas on ajoute 1 à notre variable
                for (let redColorCell of solutions[k]){
                    if (redColorCell.style.backgroundColor == 'red'){
                        compteLose += 1;
                    }
                }

                // si la variable vaut 4, le joueur a perdu et on affiche une alerte
                if (compteLose == 4){
                    for (let redColorCell of solutions[k]){
                        redColorCell.classList.remove('case-cliquée-rouge');
                        redColorCell.classList.add('red-clignote');
                    }
                    window.alert('rrroooohhhh dommage, vous avez perdu !');
                    return null;
                }
        }

    }
}


document.addEventListener('DOMContentLoaded', app.init);