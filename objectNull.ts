/**
 * Tipo utilitario que convierte todas las propiedades de un tipo T a T | null
 */
export type NullifyProperties<T> = {
  [P in keyof T]: T[P] | null;
};

/**
 * Crea un objeto proxy donde todas las propiedades no definidas se inicializan como null
 * @template T - El tipo de objeto a nullificar
 * @returns Un objeto proxy donde todas las propiedades no definidas devuelven null
 *
 * // Ejemplo de uso:
 * // import { objectNull } from './util';
 * //
 * // interface MyInterface {
 * //   prop1: string;
 * //   prop2: number;
 * // }
 * //
 * // const obj = objectNull<MyInterface>();
 * // console.log(obj.prop1); // null
 * // obj.prop1 = "Hello";
 * // console.log(obj.prop1); // "Hello"
 */
export function objectNull<T extends object>(): NullifyProperties<T> {
  // 1. Declaración de la función genérica

  return new Proxy({} as T, {
    // 2. Creación de un nuevo Proxy

    get: (target, prop) => {
      // 3. Definición del handler 'get'
      if (!(prop in target)) {
        // 4. Comprobación de la existencia de la propiedad
        return null;
        // 5. Retorno de null si la propiedad no existe
      }
      return (target as any)[prop];
      // 6. Retorno del valor de la propiedad si existe
    },

    set: (target, prop, value) => {
      // 7. Definición del handler 'set'
      (target as any)[prop] = value;
      // 8. Asignación del valor a la propiedad
      return true;
      // 9. Indicación de que la asignación fue exitosa
    }
  }) as NullifyProperties<T>;
  // 10. Aserción de tipo del Proxy devuelto
}


// Ejemplo de uso:
// import { objectNull } from './util';
//
// interface MyInterface {
//   prop1: string;
//   prop2: number;
// }
//
// const obj = objectNull<MyInterface>();
// console.log(obj.prop1); // null
// obj.prop1 = "Hello";
// console.log(obj.prop1); // "Hello"
