export interface IPokemon {
   id: number,
   name: string
   names: [{ name: string, language: { name:string }}]
}