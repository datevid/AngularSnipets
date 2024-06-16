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
