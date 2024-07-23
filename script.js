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

function displayAge() {

// 1. Récuperation de l'information

let age = document.getElementById("age").value;

// 2. Traitement

const textAge = "Vous avez " + age + " ans";  /** ou const textAge = `Vous avez ${age} ans`;	**/


//3. Afficher l'information

document.getElementById("textAge").innerHTML = textAge;
}