### Controlar el cierre de un modal.

[https://stackoverflow.com/questions/43848250/how-to-call-angular-function-when-click-p-dialog-closex-button](https://stackoverflow.com/a/43849126)

Ejemplo 1
```html
<p-dialog header="Header" [(visible)]="isVisibleModal" [style]="{width: '50vw'}" (onHide)="onCloseModal()">
    <p>Contenido</p>
</p-dialog>
```

Ejemplo 2
```html
<p-dialog header="Header" [(visible)]="isVisibleModal" [style]="{width: '50vw'}" (onHide)="onCloseModal()">
    <p-button icon="pi pi-times" styleClass="p-button-danger" class="close__document"
        (click)="onCloseModal()"></p-button>
    <p>Contenido</p>
</p-dialog>
```
css
```
.close__document{
    position: absolute;
    top: 13px;
    right: 13px;
    cursor: pointer;
  }
```


