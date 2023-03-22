Simulando el escenario en un entorno NetSuite, utilizo un script de tipo restlet para nuestra API de Fibonacci

Hago un audit a la request recibida para dejar registro en el log

Validamos que se haya recibido un valor númerico para nuestro indice a utilizar, caso contrario, le notificamos al usuario que ha enviado un dato invalido

Llamo a la funcion *getFib* para calcular el número fibonacci con base al indice recibido

Una vez obtenido el resultado lo agregamos al response y si todo marchó sin problemas, al final de la ejecucion del restlet se envia nuestro response

Optimizaciones futuras:
- Se podria modificar para que genere los numeros fibonacci de n indices, en otras palabras, el usuario podria mandar un arreglo de indices y de nuestro lado le generariamos los numeros de dichos indices

- Mejorar la validacion del valor numerico recibido, ya que aunque en esta primera version si mandan un valor negativo, sigue regresando 0, se podria agregar un mensaje al usuario notificandole de la situacion, o parsear directamente los valores negativos a positivos como una segunda opcion

- Aterrizando un poco mas en terreno Netsuite, se podria agregar una validacion donde se detectara si el indice solicitado es demasiado grande como para gastar la metrica del restlet, por lo que si dicho caso se presentara definir que camino seguir, si parar el calculo del mismo y notificarle de la situacion al usuario, o indicarle que el proceso se llevara acabo en segundo plano (como pasar el calculo a un map) y que debera consultar el resultado en algun registro personalizado pasado un tiempo, por decir algo.
