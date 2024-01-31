# AngularSnipets
Angular Snipets

https://angular.io/cli/generate

### create new component
```
ng generate component [name]
```

### create new service

```
ng generate service MiServicio
```

validation form
```javascript
<div class="flex flex-column gap-2">
      <label for="nombre">Nombre</label>
      <input pInputText formControlName="nombre" aria-describedby="nombre-help" 
      [class.ng-invalid]="formGroupAddApp.get('nombre').invalid"
      type="email"
      />
      <small *ngIf="formGroupAddApp.get('nombre').invalid&&formGroupAddApp.get('nombre').errors?.['required']">Este campo es requerido</small>
      <small *ngIf="formGroupAddApp.get('nombre').invalid&&formGroupAddApp.get('nombre').errors?.['minlength']">Pequeño</small>
      <small></small>
  </div>
```
