<h1>Bigotes-Felices</h1>

<h2>Descripción</h2>
<p>Plataforma web que permite dar a conocer a nuestros peludos amigos los gatos, y bucarles el mejor hogar con la mejor familia.</p>
<hr />

<h1>Historias de usuario</h1>

<h2>Historia Nº1: Página de inicio visual 🚀</h2>

<p><strong>Prioridad: ALTA</strong></p>

<p>
  <strong>Como</strong> visitante de la app, <br><br>
  <strong>quiero</strong> ver una página de inicio visual con un slider de fotos de gatitos, <br><br>
  <strong>para</strong> descubrir fácilmente a los gatos disponibles para adopción.
</p>

<p><strong>Descripción: </strong>La página de inicio debe mostrar un carrusel (slider) con imágenes atractivas de gatos. Este slider debe ser fácil de navegar y adaptarse a dispositivos móviles, tablets y PC. Servirá como primer punto de contacto para captar el interés de los visitantes.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>El slider debe mostrar al menos 5 imágenes de gatitos.</li>
  <li>Debe ser responsive y funcionar correctamente en móviles, tablets y desktop.</li>
  <li>Las imágenes deben cargarse en menos de 2 segundos para no afectar la experiencia del usuario.</li>
  <li>Cada imagen debe tener un enlace que lleve a la página de la tarjeta del gatito con el botón “Adóptame”.</li>
</ol>

<hr />

<h2>Historia Nº2: Tarjeta de gatito 🐈‍⬛</h2>

<p><strong>Prioridad: ALTA</strong></p>

<p>
  <strong>Como</strong> usuario interesado en adoptar, <br><br>
  <strong>quiero</strong> ver una tarjeta con la foto y un botón llamativo de adopción para cada gatito, <br><br>
  <strong>para</strong> iniciar el proceso de adopción de forma sencilla.
</p>

<p><strong>Descripción: </strong>Cada gato debe mostrarse en una tarjeta individual que incluya:</p>
<ul>
  <li>Foto del gato</li>
  <li>Nombre del gato</li>
  <li>Botón destacado "Adoptame"</li>
</ul>
<p>Esto hará que el proceso de exploración sea intuitivo y visualmente atractivo.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>Cada tarjeta debe mostrar la foto, nombre y botón de adopción.</li>
  <li>El botón debe destacar visualmente (color vibrante, tamaño adecuado).</li>
  <li>Al hacer clic en el botón, el usuario será redirigido a la página de adopción (aunque inicialmente solo muestre un mensaje de "Próximamente").</li>
</ol>

<hr />

<h2>Historia Nº3: Página de adopción en construcción 🐈‍⬛</h2>

<p><strong>Prioridad: ALTA</strong></p>

<p>
  <strong>Como</strong> visitante de la web, <br><br>
  <strong>quiero</strong> acceder a una página de adopción, aunque esté en construcción, <br><br>
  <strong>para</strong> entender que pronto habrá una forma de contactar para adoptar.
</p>

<p><strong>Descripción: </strong>Esta página mostrará un mensaje temporal que indique que próximamente habrá un formulario para iniciar la adopción, manteniendo informados a los usuarios.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>La página debe incluir un mensaje claro: "Formulario de adopción próximamente disponible."</li>
  <li>Debe mostrar un botón para volver a la página de inicio.</li>
  <li>El diseño debe ser consistente con el resto de la web.</li>
</ol>

<hr />

<h2>Historia Nº4: Funcionalidad de favoritos 🐈‍⬛</h2>

<p><strong>Prioridad: MEDIA</strong></p>

<p>
  <strong>Como</strong> usuario, <br><br>
  <strong>quiero</strong> marcar mis gatos favoritos, <br><br>
  <strong>para</strong> poder volver a verlos más tarde sin tener que buscarlos de nuevo.
</p>

<p><strong>Descripción: </strong>Cada tarjeta de gatito tendrá un ícono (corazón) para agregarlo a la lista de favoritos. Esta lista se guardará localmente en el navegador, sin necesidad de crear una cuenta al inicio.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>El usuario puede marcar o desmarcar gatitos como favoritos.</li>
  <li>Los favoritos deben mantenerse aunque el usuario recargue la página (usando localStorage).</li>
  <li>Debe existir una sección para visualizar solo los favoritos.</li>
  <li>El icono debe cambiar de color cuando el gato esté marcado como favorito.</li>
</ol>

<hr />

<h2>Historia Nº5: Diseño responsive y moderno 🎨</h2>

<p><strong>Prioridad: MEDIA</strong></p>

<p>
  <strong>Como</strong> visitante, <br><br>
  <strong>quiero</strong> que la web se vea bien en cualquier dispositivo, <br><br>
  <strong>para</strong> tener una experiencia visual agradable y moderna.
</p>

<p><strong>Descripción: </strong>El diseño debe adaptarse a diferentes tamaños de pantalla (responsive), con una estética moderna, usando tipografía limpia, colores agradables y botones accesibles.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>El diseño debe verse correctamente en móviles, tablets y desktop.</li>
  <li>Ningún elemento debe quedar cortado o desalineado.</li>
  <li>La velocidad de carga debe ser menor a 3 segundos en conexiones promedio.</li>
</ol>

<hr />

<h2>Historia Nº6: Modo oscuro/claro 🎨</h2>

<p><strong>Prioridad: BAJA</strong></p>

<p>
  <strong>Como</strong> usuario, <br><br>
  <strong>quiero</strong> poder alternar entre modo oscuro y claro, <br><br>
  <strong>para</strong> tener una mejor experiencia visual según mi preferencia.
</p>

<p><strong>Descripción: </strong>Se agregará un botón para que los usuarios cambien el tema visual de la aplicación sin afectar la funcionalidad.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>La preferencia de modo debe guardarse en localStorage.</li>
  <li>El cambio debe aplicarse en toda la app de forma inmediata.</li>
</ol>

<hr />

<h2>Historia Nº7: Detalle de cada gatito 🐈‍⬛</h2>

<p><strong>Prioridad: BAJA</strong></p>

<p>
  <strong>Como</strong> usuario interesado, <br><br>
  <strong>quiero</strong> ver más información sobre cada gato y su raza, <br><br>
  <strong>para</strong> conocer mejor a mi posible futura mascota.
</p>

<p><strong>Descripción: </strong>Cada tarjeta llevará a una página individual con detalles como edad, raza, vacunas, y carácter.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>Mostrar foto, edad, raza, estado de salud y una breve descripción.</li>
  <li>Botón de “¡Adóptame!” visible en la página de detalle.</li>
</ol>

<hr />

<h2>Historia Nº8: Formulario de adopción 🐈‍⬛</h2>

<p><strong>Prioridad: BAJA</strong></p>

<p>
  <strong>Como</strong> usuario interesado en adoptar, <br><br>
  <strong>quiero</strong> rellenar un formulario en línea, <br><br>
  <strong>para</strong> enviar mi solicitud de adopción de forma rápida.
</p>

<p><strong>Descripción: </strong>El formulario recogerá datos básicos (nombre, contacto, experiencia con mascotas, etc.) y tendrá validaciones para evitar errores.</p>

<p><strong>Criterios de aceptación: </strong></p>
<ol>
  <li>Todos los campos obligatorios deben estar claramente indicados.</li>
  <li>El formulario no debe poder enviarse si hay errores de validación.</li>
  <li>Mostrar un mensaje de confirmación al enviarlo correctamente.</li>
</ol>

<hr />

<h2>Maquetación del proyecto</h2>
<p>Link al figma --> <a href="https://www.figma.com/design/cl11mubs4lMi8EZ64wEm45/Web-de-adoptaci%C3%B3n-de-gatitos?node-id=0-1&m=dev&t=ywyk6D4ParK4FOOz-1">Figma</a></p>

<h2>Organización del equipo</h2>
<ul>
  <li><h3>Data Flow</h3></li>

  <li>
    <h3>Planificación Trello</h3>
    <p>Link de Trello --> <a href="https://trello.com/invite/b/68bff927b207e7411f57af54/ATTIb0654ccc8d6512641054c3e367cd1775CF116375/adopta-un-gatito-inc">Trello</a></p>
  </li>
</ul>
