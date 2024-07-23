/** Variable js : var,let const
 * 
 * var : c'est une variable globale
 * let : c'est une variable locale
 * const : c'est une variable constante

var : c'est à proscrire depuis ES6 
let quand votre variable est voué à changer (exemple : let age = 25;)
const quand votre variable est voué à rester constante ( exemple : const pi = 3.14;)

**/

//  stocker de l'information

//function displayAge() {

// 1. Récuperation de l'information

//let age = document.getElementById("age").value;

// 2. Traitement

//const textAge = "Vous avez " + age + " ans";  /** ou const textAge = `Vous avez ${age} ans`;	**/


//3. Afficher l'information

//document.getElementById("textAge").innerHTML = textAge;
//}



//-----------------------------------------------------------------------------------------------------



/**    TABLEAU JS
 * 
 * 
 * 
 * Array Methods
 * 
 * tostring()
 * join()
 * pop()
 * push()
 * shift()
 * unshift()
 * 
 */


//to string
//array.toString() : convertit un tableau en une chaîne de caractères et renvoie cette chaîne de caractères.
//let languages = ["HTML", "CSS", "JavaScript", "PHP"];
//console.log(languages.toString());

//join()
//array.join(separator) : convertit un tableau en une chaîne de caractères et renvoie cette chaîne de caractères.
//let languages = ["HTML", "CSS", "JavaScript", "PHP"];
//plusieurs séparateurs
//console.log(languages.join(" - "));
//console.log(languages.join(""));
//console.log(languages.join(", "));
//console.log(languages.join(" | "));
//console.log(languages.join(" / "));

//pop()
//array.pop() : supprime le dernier élément d'un tableau et renvoie cet élément.
//let languages = ["HTML", "CSS", "JavaScript", "PHP"];
//console.log(languages.pop());
//console.log(languages);
//push()

//array.push() : ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau.
//let languages = ["HTML", "CSS", "JavaScript", "PHP"];
//console.log(languages.push("Python"));
//console.log(languages);

//shift()
//array.shift() : supprime le premier élément d'un tableau et renvoie cet élément.
//let languages = ["HTML", "CSS", "JavaScript", "PHP"];
//console.log(languages.shift());
//console.log(languages);

//unshift()
//array.unshift() : ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.
//let languages = ["HTML", "CSS", "JavaScript", "PHP"];
//console.log(languages.unshift("Python"));
//console.log(languages);

