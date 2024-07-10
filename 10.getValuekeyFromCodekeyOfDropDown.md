El siguiente método permite encontrar el valueKey a partir del codeKey

Supongamos que EstudianteList tiene la siguiente estructura:
```ts
interface Estudiante {
  id: number;
  nombre: string;
}

```
Ahora, implementamos el método genérico en un componente que trabaja con esta estructura:

```ts
export class YourComponent {
  // Lista de estudiantes
  estudianteList: Estudiante[] = [
    { id: 1, nombre: 'Juan Perez' },
    { id: 2, nombre: 'Maria Lopez' },
    // Añade más estudiantes según sea necesario
  ];

  constructor() {
    // Llamar al método aquí para probarlo
    const result = this.findValueByCode(this.estudianteList, 1, 'id', 'nombre');
    console.log(result); // Debería imprimir 'Juan Perez'
  }

  // Método genérico para encontrar el valor basado en el código
  findValueByCode<T>(items: T[], code: any, codeKey: keyof T, valueKey: keyof T): any {
    const item = items.find(i => i[codeKey] === code);
    return item ? item[valueKey] : undefined;
  }
}

```
El método findValueByCode permite encontrar el valueKey a partir del codeKey

A continuación tenemos un codigo ligeramente modificado retiranro el any:
```ts
/**
 * Busca un elemento en un array de objetos por un código específico y devuelve el valor de una propiedad determinada.
 * 
 * @template T El tipo de los objetos en el array.
 * @template K El tipo de la clave del código (debe ser una clave de T).
 * 
 * @param {T[]} items - El array de objetos en el que buscar.
 * @param {T[K]} code - El valor del código a buscar.
 * @param {K} codeKey - La clave del objeto que contiene el código.
 * @param {keyof T} valueKey - La clave del objeto cuyo valor se quiere obtener.
 * 
 * @returns {T[keyof T] | undefined} El valor de la propiedad especificada del objeto encontrado, o undefined si no se encuentra.
 * 
 * @example
 * // Definir un array de estudiantes
 * const estudiantes: Estudiante[] = [
 *   { codigo: "E001", nombre: "Ana García", edad: 20 },
 *   { codigo: "E002", nombre: "Carlos López", edad: 22 },
 *   { codigo: "E003", nombre: "María Rodríguez", edad: 21 }
 * ];
 * 
 * // Usar la función para obtener el nombre de un estudiante por su código
 * const nombreEstudiante = getValueByCodeInDropdown(estudiantes, "E002", "codigo", "nombre");
 * console.log(nombreEstudiante); // Output: "Carlos López"
 * 
 * // Usar la función para obtener la edad de un estudiante por su código
 * const edadEstudiante = getValueByCodeInDropdown(estudiantes, "E001", "codigo", "edad");
 * console.log(edadEstudiante); // Output: 20
 * 
 * // Intentar obtener información de un estudiante que no existe
 * const noExiste = getValueByCodeInDropdown(estudiantes, "E004", "codigo", "nombre");
 * console.log(noExiste); // Output: undefined
 */
function getValueByCodeInDropdown<T, K extends keyof T>(
  items: T[], 
  code: T[K], 
  codeKey: K, 
  valueKey: keyof T
): T[keyof T] | undefined {
    const item = items.find(i => i[codeKey] === code);
    return item ? item[valueKey] : undefined;
}
```
