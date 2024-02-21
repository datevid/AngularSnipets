Asignarle valores null a cada cada propiedad de un objeto:

```typescript
//interfaz
export interface Usuario{
    nombre:string;
    apellido:string;
}
//creacion del obj
usuarioSelected:Usuario;

//asignación de nulls a cada propiedad
this.usuarioSelected=Object.create(null)
```
