# Servicios App

## Índice
- [Aspectos generales](#Aspectosgenerales)
- [Modelos utilizados](#modelosutilizados)
- [Guìa de instalaciòn](#guia)
- [Tipos de error](#Tiposdeerror)
- [Taiga](#Taiga)
- [Licencia de código](#Licencia)

# Manual Técnico

- [Aspectos generales](#Aspectosgenerales)
  - [Objetivos del documento](#objetivos)
  - [Descripción general](#desc)
  - [Requerimientos del Sistema](#req)
  - [Software utilizado](#soft)
 - [Modelos utilizados](#modelosutilizados)
   - [Patrón de diseño MVVM](#mvvm)
   - [Diagrama Relacional](#diagrama)
- [Guìa de instalación](#guia)
- [Tipos de error](#error1)

 ## Aspectos generales
 <a name="Aspectosgenerales"></a>

* **El objetivo de la presente documentación:**  Es facilitar la comprensión y detallar nuestro proyecto de forma clara y concisa, tanto para usuarios finales como para desarrolladores que deseen colaborar en el código. Abordamos aspectos clave como la descripción del proyecto, la comunicación y colaboración efectiva entre los involucrados, la guía para el desarrollo, implementación e instalación, la gestión y resolución de problemas, sobre nuestra aplicación que brinda servicios variados para cualquier profesión deseada. 

**Requisitos del Sistema**  <a name="req"></a>

* **Hardware necesario:** La aplicación puede ser ejecutada tanto Windows, Ubuntu como en MacOS. Sin embargo, se recomienda tener la versión más reciente de cada sistema operativo para evitar inconvenientes con algún paquete.
* **Software necesario:** Será necsario hacer uso de Node.js en nuestra computadora para poder utilizar npm al momento de instalar paquetes, de ahí se necesitará tener la extensión de react.
* Configuraciones mínimas y recomendadas

#### Software utilizado
* Back-end
  * **SQL:** Versión 2022 descargada desde el sitio oficial
  * **ExpressJs:** Se hará uso ExpressJs en su versión más actualizada
* Front-end:
  + **Vite-React:** Versión 5.2.13 de Vite y 18.0 de React
  + **HTML/CSS:** Versión HTML5 y de CSS es la versión 3 CCS3
  + **Javascript:** Versión ES14

### Arquitectura del software

**Patrón de diseño MVVM**  <a name="mvvm"></a>
**El patrón de diseño utilizado es MVVM**

La adopción del patrón MVC en nuestros servicios app ha traído consigo una serie de ventajas significativas, como la separación de responsabilidades para facilitar el desarrollo y la evolución del sistema, la mejora en la reutilización de componentes, la estructura del código para realizar modificaciones y mejoras de forma eficiente. Por tanto, el patrón MVC nos permite crear servicios app robustos, mantenibles y escalables, optimizando el desarrollo y brindando una mejor experiencia a los usuarios.

**Diagrama Relacional**  <a name="diagrama"></a>
Se debe a que la arquitectura que podemos seguir el patrón Modelo-Vista-Controlador (MVC). Este patrón se utiliza para separar la lLgica de programación en lo previamente detallado. 

Se anexa el pdf con la información sobre nuestra base de datos relacional, para poder leerlo de click en el enlace: 
* Enlace diagrama relacional: https://github.com/Alessandro490/ServiciosApp/blob/main/Documentos/DiagramaRelacionalServiciosApp.drawio.pdf


## Guia de instalación
<a name="guia"></a>
Nuestra guía será paso a paso de el software previamente descrito, que se puede encontrar en el siguiente enlace: 
* Guía de instalación: https://github.com/Alessandro490/ServiciosApp/tree/develop/Documentos

## **Tipos de error**  <a name="error1"></a>
La herramienta utilizada es Taiga, la cual nos ha permitido organizar y dar seguimiento a cada error de manera estructurada, visualizando cada issue de manera separada al tablero de proyectos, pues tiene su propio apartado, que se puede incluir dentro del tablero. Dentro del tablero se ha identificado tanto las épicas como las historias de usuario con  título descriptivo, etiquetas relevantes (relacionadas a la tarea en cuestión) y se ha asignado un responsable para su solución. 

Cada issue ha sido creado con el objetivo de proporcionar una descripción clara y concisa del problema encontrado, incluyendo información relevante como el mensaje de error, componente afectado, las causas identificadas. Además, se ha prestado especial atención a la claridad de los comentarios y soluciones proporcionados en cada issue. Se han utilizado términos comprensibles y se ha explicado el razonamiento detrás de cada solución implementada. 

* Link de Taiga: https://tree.taiga.io/project/alessandro490-servicios-sv/issues

#### Taiga
Se anexa el link del tablero a utilizar para tener una mejor organización al momento de desarrollar nuestro software. 
* Link de Taiga: https://tree.taiga.io/project/alessandro490-servicios-sv/kanban


### Compatibilidad de las licencias
Se hará un tabla comparando las licencias y su compatibilidad. se puede encontrar en el siguiente enlace:
* https://github.com/Alessandro490/ServiciosApp/blob/develop/Documentos/Licencias-1.pdf

#### Licencia
- MIT: https://github.com/Alessandro490/ServiciosApp/blob/main/LICENSE

