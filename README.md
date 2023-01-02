# Graphic-Bar
Ejercicio Alura

A través de gráficos podemos expresar visualmente datos o valores numéricos, y así facilitar la comprensión de la información que estamos presentando.

Existen varios tipos de gráficos, entre los más famosos están los gráficos de barras, que será objeto de estudio en este ejercicio. Encontramos algunos datos relevantes en internet sobre la evolución de uso de navegadores o exploradores en los últimos 10 años, el resultado fue el siguiente.

    En 2009: 6% Chrome, 47% Firefox, 41% Internet Explorer/Edge*, 3% Safari, 3% Otros.
    En 2019: 81% Chrome, 9% Firefox, 3% Internet Explorer/Edge*, 3% Safari, 4% Otros. 

*Para simplificar nuestro gráfico sumamos los valores de Internet Explorer e IE Edge, los dos navegadores son de la misma empresa, Microsoft.

Como podrán ver en los datos la relevancia que ganó el navegador de Google (Chrome), teniendo una supremacía del 81% en 2019.

Existen varios tipos de gráficos de barras, en este ejemplo, vamos usar las barras verticales apiladas, nuestros datos graficados se verían así:

<img width="134" alt="1739-Logica+de+Programacion+parte3_Logica+en+la+practica-imagen2 2-grafico_barras" src="https://user-images.githubusercontent.com/62489511/210263564-05347587-5294-4ec0-8cbc-0514655f96ba.png">

Tú ya aprendiste a dibujar rectángulos y ya creamos una función con ese propósito, ingresar texto dentro de nuestro canvas es sencillo también, a continuación sigue el código con la función dibujarRectangulo y escribirTexto:

```js
<canvas width="600" height="400"></canvas>

<script>

    function dibujarRectangulo(x, y, base, altura, color) {
        var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");

        pincel.fillStyle=color;
        pincel.fillRect(x,y, base, altura);
        pincel.strokeStyle="black";
        pincel.strokeRect(x,y, base, altura);
    }

    function escribirTexto(x , y, texto) {
        var pantalla = document.querySelector("canvas");
        var pincel = pantalla.getContext("2d");

        pincel.font="15px Georgia";
        pincel.fillStyle="black";
        pincel.fillText(texto, x, y);    
    }


    //Aquí viene el texto faltante

</script>
```

Ya vimos también cómo representar varios valores dentro de un array. Así podemos guardar los valores de los porcentuales de cada año. En el mundo de gráficos los valores son llamados de series: 

```js
    var serie2009 = [6, 47, 41, 3, 3];
    var serie2019 = [81, 9, 3, 3, 4];

```
Cada valor en el array representa un %.

Igualmente, podemos crear otro array con los colores usados en el gráfico: 

```js
   var colores = ["blue","green","yellow", "red","gray"];
```

<img width="237" alt="1739-Logica+de+Programacion+parte3_Logica+en+la+practica-imagen2 3-grafico_barras-2" src="https://user-images.githubusercontent.com/62489511/210263895-faa9821c-4593-4160-a085-e221e8835ccf.png">

Ahora viene el desafío: escribe una función dibujarBarra que cree una barra (5 rectángulos, el primero azul, el segundo verde, etc., igual al gráfico de arriba)

La llamada a la función puede ser: 

```js
    dibujarBarra(50, 50, serie2009, colores, "2009");
    dibujarBarra(150, 50, serie2019, colores, "2019");
```

La primer barra comienza en X=50 y Y=50, y recibe la serie del 2009, los colores y el texto 2009. Basado en eso ya podemos tener una idea de cómo será nuestra función:

```js
    function dibujarBarra(x, y, serie, colores, texto) {

        //Aquí necesitamos escribir el texto y dibujar los rectángulos

    }

```

Dentro de esa función necesitas implementar un Loop (ciclo for o while) y acumular el valor de la serie que sería la altura de cada rectángulo de nuestra barra.

Implementa la función dibujarBarra y llámala dos veces para diseñar las dos barras.

Seguramente ya habrás visto que a nuestro gráfico le falta un ítem importante que son las leyendas del gráfico (Chrome es azul, Firefox verde, Internet Explorer amarillo, Safari rojo y otros plomo). Por el momento, vamos a dejar de lado las leyendas para no agregar más complejidad a nuestro gráfico.
