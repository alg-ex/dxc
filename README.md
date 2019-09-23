### :point_right: This starter repo has moved to the [ionic-team/starters](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/blank) repo! :point_left:

La aplicación se utiliza para crear, modificiar, listar y borrar los empleados de una empresa en un registro, en este caso

trabajamos con los servicios que nos suministra:

http://dummy.restapiexample.com/

El proyecto está realizado en Ionic 3, Angular...
para trabajar con él además de las herramientas necesarias debemos:

- Descargar los archivos o clonar el repositorio
- Abrir la consola de comandos, navegar a la carpeta y ejecutar npm install

Se han añadido las siguientes funcionalidades

1) La aplicación tiene dos diferentes metodos para obtener el listado general: 
- Carga inicial del listado, la cual realizamos con Angular.
- Posibilidad de realizar el refresco del listado cuando se desee simplemente desplazando el listado hacia abajo... en este caso se han utilizado los plugin nativos HTTP de Ionic para realizar la petición, (el inconveniente que tiene es que tiene que probarse en un movil para que se vea el funcionamiento pero si lo instalan lo verán funcionando...) Lo he hecho así para dejar constancia de las dos formas de realizar peticiones.

Una vez tengamos cargado el listado general solo tendremos que pulsar sobre un registro para que nos abra la pantalla de detalles.

2) Se ha añadido el poder crear, editar y borrar registros de empleados de diferentes formas:

Desde el listado de registros, pulsar el "+" para añadir un nuevo registro y para editar/borrar un registro existente deslizar hacia la izquierda el registro para que aparezcan los botones opcionales
O si hemos abierto los detalles de un registro para consultarlos, podemos hacerlo desde la misma pantalla de detalle, simplemente pulsando los botones de arriba a la derecha

3) Por último como a veces nos interesará tener el registro local actualizado y otras no... por ejemplo queremos trabajar en varios registros seguidos antes de refrescar pues para no estar ejecutando refrescos continuamente se ha implementado de forma diferente las acciones al terminar de trabajar con un registro entonces en la aplicación :

- Cuando se cree/borre un registro se hará una petición de refresco y recargará el listado local desde el servidor al volver.

- Cuando se editen/actualicen datos de un registro... aunque se grabarán los datos mediante una petición al back y quede grabado allí, al regresar no hará una petición de refresco de listado al back sino localmente, simplemente se actualizarán los datos nuevos del registro en la lista del dispositivo que ya disponemos.. ya que si quieren pueden recargar la lista completa cuando deseen simplemente desplazando hacia abajo tal y como he indicado antes...

