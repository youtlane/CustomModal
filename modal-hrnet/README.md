custom-modal-react-hy by Hanane Youtlane


Introduction
Ce composant Modal est un composant React simple et réutilisable qui permet d'afficher une fenêtre modale personnalisée dans votre application.

Installation
Pour installer ce composant, utilisez la commande suivante :

    npm install custom-modal-react-hy   

puis importez le composant Modal dans votre composant parent :

    import { CustomModal } from "custom-modal-react-hy";



le composant CustomModal accepte les props suivantes :
    1-isOpen :

    Type : boolean
    Description : Indique si le modal doit être affiché ou non. Lorsque true, le modal est ouvert, et lorsqu'il est false, il est fermé.

    2-onClose :

        Type : function
        Description : Fonction de rappel qui est appelée pour fermer le modal. Généralement, cette fonction est appelée lors d'une      action comme un clic sur un bouton de fermeture ou une interaction hors du modal.

    3-children :
        Type : ReactNode (c'est-à-dire tout contenu JSX)
        Description : Représente le contenu à afficher à l'intérieur du modal. Cela peut être du texte, des composants React ou tout autre élément JSX.