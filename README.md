# Ball-Effect
Implementation of ball filter, using JavaScript and HTML

##English
# Ball Animation Project in Canvas

This project implements an animation in JavaScript using the HTML `canvas` element, where multiple balls move and connect visually with a trailing effect. Each ball can bounce off the screen edges and includes distance-based logic to optimize the connection effect between them.

## Features

- **Directional Movement:** Balls move across the canvas using a `move` function, which takes direction parameters in the `x` and `y` axes.
- **Screen Boundary Control:** Screen boundaries are implemented so that balls bounce when reaching the edges, enhancing visual dynamics.
- **Conditional Trail Effect:** Each ball creates a trail towards a second nearby ball only if it is within a 300-unit range. The distance is calculated using the `x` and `y` coordinates, which helps optimize performance and avoids filling the canvas with unnecessary trails.
- **Multiple Moving Balls:** An array of balls allows handling multiple independent ball instances moving on the canvas.
- **Animation Optimization with `requestAnimationFrame`:** The `requestAnimationFrame` method is used to create a smooth and high-performance animation.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/username/repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```
3. Open the `index.html` file in your browser to see the animation in action.

## Usage

- Modify the direction parameters in the code to change the balls' speed and direction.
- Adjust the distance range in the trail effect to experiment with different visual connections.
- Customize the number of balls to adjust the animation density.

## Project Structure

- `index.html`: Basic HTML file that loads the `canvas` and JavaScript files.
- `script.js`: Contains the logic for movement, trail effect, screen boundaries, and overall animation.

## Main Code Example

```javascript
// Move function with boundaries for bouncing within the canvas
function move(ball) {
  // Update position and check boundaries
}

// Function to calculate distance and create a conditional trail
function createTrail(ball1, ball2) {
  // Calculate distance and create trail if balls are close enough
}
```

## Future Enhancements

- Implement controls to pause or adjust the animation in real-time.
- Enable customizable colors and sizes for each ball.
- Add additional visual effects, such as color changes upon bouncing.

## Contributing

If you have suggestions or would like to contribute, open an issue or submit a pull request. Contributions are welcome!


##Español
# Proyecto de Animación de Bolas en Canvas

Este proyecto implementa una animación en JavaScript usando el elemento `canvas` de HTML, donde múltiples bolas se mueven y se conectan visualmente con un efecto de rastro. Cada bola puede rebotar en los límites de la pantalla y cuenta con una lógica de distancia para optimizar el efecto de conexión entre ellas.

## Características

- **Movimiento con Dirección:** Las bolas se mueven a través del canvas usando una función `move`, que recibe parámetros de dirección en los ejes `x` e `y`.
- **Control de Límites:** Se implementaron límites en el `canvas` para que las bolas reboten al llegar a los bordes, mejorando el dinamismo visual.
- **Efecto de Rastro Condicional:** Cada bola crea un rastro hacia una segunda bola cercana solo si esta está dentro de un rango de 300 unidades de distancia. La distancia se calcula utilizando las coordenadas `x` e `y`, lo cual ayuda a optimizar el rendimiento y evita que el canvas se llene de trazos innecesarios.
- **Múltiples Bolas en Movimiento:** Un arreglo de bolas permite manejar múltiples instancias de bolas que se mueven de forma independiente en el `canvas`.
- **Optimización de Animación con `requestAnimationFrame`:** Se usa `requestAnimationFrame` para crear una animación fluida y de alto rendimiento.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-del-repositorio.git
   ```
2. Navega hasta el directorio del proyecto:
   ```bash
   cd nombre-del-repositorio
   ```
3. Abre el archivo `index.html` en tu navegador para ver la animación en acción.

## Uso

- Modifica los parámetros de dirección en el código para cambiar la velocidad y dirección de las bolas.
- Ajusta el rango de distancia en el efecto de rastro para experimentar con diferentes conexiones visuales.
- Personaliza el número de bolas para ajustar la densidad de la animación.

## Estructura del Proyecto

- `index.html`: Archivo HTML básico que carga el `canvas` y los archivos de JavaScript.
- `script.js`: Contiene la lógica de movimiento, el efecto de rastro, la configuración de los límites de la pantalla y la animación general.

## Ejemplo de Código Principal

```javascript
// Función de movimiento con límites para rebotar en el canvas
function move(ball) {
  // Actualiza la posición y verifica límites
}

// Función para calcular distancia y crear rastro condicional
function createTrail(ball1, ball2) {
  // Calcula la distancia y crea rastro si están cerca
}
```

## Mejoras Futuras

- Implementar controles para pausar o ajustar la animación en tiempo real.
- Permitir la configuración de colores y tamaños personalizados para cada bola.
- Agregar efectos visuales adicionales, como cambio de color al rebotar.

## Contribución

Si tienes sugerencias o quieres contribuir, abre un issue o envía un pull request. ¡Las contribuciones son bienvenidas!
