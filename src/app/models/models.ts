
export interface Category {
    id:number,
    category: string,
    subcategory: string,
}

export interface SuggestedProduct{
    banerimage : string;
    category : Category;
}

//nous allons creer une Classe Specialement pour les listes Déroulante

export class NavigationItem{
    category! : string;
    subcategories!:string[];
}