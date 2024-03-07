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
```html
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
ver más validaciones en 

- https://angular.io/guide/form-validation
- https://angular.io/api/forms/Validators
- https://www.concretepage.com/angular-2/angular-2-4-minlength-and-maxlength-validation-example

### disable inputs in form using FormBuilder
```typescript
this.formFiltro = this.formBuilder.group({
      input1: new FormControl(null, [Validators.required]),
      input2: new FormControl(null, [Validators.required]),
      dni: new FormControl({value:"42539157",disabled:true}, [Validators.required]),
    })
```

if else usando ng-container y ng-template
```html
<ng-container *ngIf="item.var1==1; then estado1; else estado2"></ng-container>
<ng-template #estado1>
  <small><p-tag severity="success" value="{{item.var2}}"></p-tag></small>
</ng-template>
<ng-template #estado2>
  <small><p-tag severity="danger" value="{{item.var2}}"></p-tag></small>
</ng-template>
```
