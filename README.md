### :point_right: This starter repo has moved to the [ionic-team/starters](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/blank) repo! :point_left:

La aplicación se utiliza para crear, modificiar, listar y borrar los empleados de una empresa en un registro.

Trabaja con los servicios que se nos suministra en:

http://dummy.restapiexample.com/

El proyecto está realizado en ionic 3, angular...
para trabajar con él además de las herramientas necesarias debemos:

- Descargar los archivos o clonar el repositorio
- Abrir la consola de comandos, navegar a la carpeta y ejecutar npm install

se han añadido las siguientes funcionalidades

La aplicación tiene dos diferentes metodos para obtener el listado general: -Para realizar la carga inicial se ha utilizado Angular en el método. -Se puede realizar el refresco del listado cuando se desee simplemente desplazando el listado hacia abajo... pero en esta ocasión se ha utilizado los plugin nativos HTTP de Ionic para realizar la petición, (el inconveniente que tiene es que tiene que probarse en un movil para que se vea el funcionamiento pero si lo instalan lo verán funcionando...) Lo he hecho así para dejar constancia de las dos formas de realizar peticiones.
2-3) Se ha añadido el poder crear, editar y borrar registros de empleados de diferentes formas:

Desde el listado de registros, pulsar el "+" para añadir un nuevo registro y para editar/borrar un registro existente deslizar hacia la izquierda el registro para que aparezcan los botones opcionales
O desde la misma pantalla de detalle si hemos abierto los detalles de un registro para consultarlos, simplemente pulsando los botones de arriba a la derecha
Por último se ha implementado de forma diferente las acciones al terminar de trabajar con un registro ya que:

- Cuando se cree/borre un registro se haga una petición de refresco y recargue el listado al volver.

Pero como a veces no nos interesa tener el listado completo actualizado porque queremos trabajar en varios seguidos para no estar ejecutando refrescos continuamente se ha implementado que:

-Cuando se editen/actualicen datos solo se actualice el listado general local... aunque se haga la petición igual al back y quede grabado allí, al regresar que no haga una petición de refresco de listado al back sino localmente se actualicen los datos nuevos en la lista del dispositivo que disponemos.. ya que si quieren pueden recargar la lista completa cuando deseen simplemente desplazando hacia abajo tal y como he indicado antes...

