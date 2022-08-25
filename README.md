# Movfun

Movfun es una aplicacion creada con React JS que simula una plataforma de streaming de películas.

## Descripción de la aplicación

Para utilizar esta aplicación es necesario ingresar a la misma completando el formulario de Login con el mail y la contraseña (que deben coincidir con alguno de los registrados en la API). 
Luego, se tendrá acceso a la "Home", donde se podrá elegir un género de películas, para luego acceder a un listado de películas del género seleccionado. Al hacer click en alguna de las películas de la lista, se accederá a una página que mostrará el detalle de dicha película.
Por último, el usuario podrá cerrar su sesión haciendo click en la sección "LogOut" que se encuentra en el Navbar.

### Estructura de la aplicacción

Dentro de la carpeta "src" creé dos carpetas: una llamada "components", que contiente los componentes de la aplicación, y otra llamada "styles", que contiene las hojas de estilo aplicadas. 
Cada componente cuenta con una respectiva hoja de estilos. (Las hojas de estilo cuentan con el mismo nombre que su correspondiente componente, lo que permite una rápida y fácil distinción).

La aplicación se ejecuta desde el componente principal "App.js". Allí, están importados los demás componentes y hechos los enrutamientos.

## Inicialización de la aplicación

Movfun fue creada con "npx create-react-app".

En el directorio del proyecto se puede ejecutar "npm start" para correr la aplicación en modo desarrollo. 

La url principal de la aplicación es: http://localhost:3060/ .

## Dependencias Instaladas

Para desarrollar este proyecto instalé:(siempre utilizando npm)

- Axios($ npm install axios): para hacer llamados a las APIs.

- React Router DOM (npm i react-router-dom): para realizar enrutamientos, hacer redirecciones, e insertar enlaces para navegar por la aplicación.

- React Icons (npm install react-icons --save): para insertar íconos en el Log In.

## APis consumidas

Para este proyecto consumí dos APIs locales, las cuales son APIs falsas que desarrollé con node.js, utilizando el paquete json-server. Ambas se inicializan con "npm start". Una de las APIs almacena datos de "usuarios registrados", y la otra guarda información sobre las películas. 

Repositorio de API de Usuarios: https://github.com/SolMoyano1/APIusuarios
Repositorio de API de Peliculas: https://github.com/SolMoyano1/APImovies