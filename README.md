<div align="left" style="position: relative;">
<h1>eFCT</h1>
<p align="left">
	<em><code>❯ Solución all-in-one para los periodos de prácticas de Formación Profesional</code></em> 
</p>
<p align="left">Construido con las siguientes herramientas y tecnologías:</p>
<p align="left">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=tailwind,typescript,react,python,git,npm,github">
	</a></p>
</div>
<br clear="right">

## Tabla de Contenidos

- [ Visión General](#visión-general)
- [ Funcionalidades](#funcionalidades)
- [ Estructura del Proyecto](#estructura-del-proyecto)
  - [ Índice del Proyecto](#índice-del-proyecto)
- [ Primeros Pasos](#primeros-pasos)
  - [ Requisitos Previos](#requisitos-previos)
  - [ Instalación](#instalación)
  - [ Uso](#uso)
  - [ Pruebas](#pruebas)
- [ Hoja de Ruta del Proyecto](#hoja-de-ruta-del-proyecto)
- [ Contribuir](#contribuir)
- [ Licencia](#licencia)
- [ Agradecimientos](#agradecimientos)

---

## Visión General

<code>❯ eFCT es una herramienta de gestión de prácticas orientado tanto a la subida de fichas semanales, como a la escritura de la memoria de prácticas por parte del alumnado,la comunicación entre las distintas partes implicadas por mensajes directos, así como la firma y corrección de los documentos antes mencionados.</code>

---

## Funcionalidades

- Crear ficha semanal firmable por las partes afectadas y guardarla como pdf.
- Escribir diario de prácticas en vista calendario y vista página.
- Login y gestión de usuarios donde el profesor autorizado puede registrarse y crear clases donde ahí se unirán alumnos y tutores laborales.
- Firma y consulta de fichas semanales.
- Consulta al diario de prácticas y posterior exportación como pdf para entrega.
- Mensajes directos entre alumnos tutores y tutores de empresa.

---

## Estructura del Proyecto

```sh
└── TFG/
	├── GUIA Proyecto DAW_22-23.docx
	├── back
	│   └── index.py
	├── front
	│   ├── .flowbite-react
	│   ├── .gitignore
	│   ├── .vscode
	│   ├── README.md
	│   ├── eslint.config.js
	│   ├── index.html
	│   ├── package-lock.json
	│   ├── package.json
	│   ├── public
	│   ├── src
	│   ├── tailwind.config.js
	│   ├── tsconfig.app.json
	│   ├── tsconfig.json
	│   ├── tsconfig.node.json
	│   └── vite.config.ts
	├── package-lock.json
	└── package.json
```

### Índice del Proyecto

<details open>
	<summary><b><code>TFG/</code></b></summary>
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ Archivo de bloqueo de dependencias para la gestión de paquetes del proyecto principal.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ Archivo de configuración de dependencias y scripts del proyecto principal.</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details>
		<summary><b>back</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/back/index.py'>index.py</a></b></td>
				<td><code>❯ Script principal del backend, punto de entrada para la API y lógica del servidor.</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- front Submodule -->
		<summary><b>front</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td><code>❯ Configuración de TypeScript para el entorno Node.js en el frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ Archivo de bloqueo de dependencias para el frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ Configuración principal de TypeScript para el frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td><code>❯ Configuración de Tailwind CSS para estilos personalizados.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td><code>❯ Configuración específica de TypeScript para la aplicación frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/package.json'>package.json</a></b></td>
				<td><code>❯ Archivo de configuración de dependencias y scripts del frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/vite.config.ts'>vite.config.ts</a></b></td>
				<td><code>❯ Configuración de Vite para el bundling y desarrollo del frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/index.html'>index.html</a></b></td>
				<td><code>❯ Archivo HTML principal del frontend.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>❯ Configuración de ESLint para el linting del código frontend.</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/main.tsx'>main.tsx</a></b></td>
						<td><code>❯ Punto de entrada principal de la aplicación React.</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/index.css'>index.css</a></b></td>
						<td><code>❯ Archivo de estilos globales para la aplicación.</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/App.css'>App.css</a></b></td>
						<td><code>❯ Estilos específicos para el componente principal de la app.</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/App.tsx'>App.tsx</a></b></td>
						<td><code>❯ Componente principal de la aplicación React.</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
						<td><code>❯ Declaraciones de tipos para el entorno Vite.</code></td>
					</tr>
					</table>
					<details>
						<summary><b>types</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/types/chat.ts'>chat.ts</a></b></td>
								<td><code>❯ Definiciones de tipos TypeScript para el módulo de chat.</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/types/ficha.ts'>ficha.ts</a></b></td>
								<td><code>❯ Definiciones de tipos TypeScript para las fichas semanales.</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/PageNotFound.tsx'>PageNotFound.tsx</a></b></td>
								<td><code>❯ Componente para mostrar página no encontrada (404).</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/Tiptap.tsx'>Tiptap.tsx</a></b></td>
								<td><code>❯ Editor de texto enriquecido basado en Tiptap.</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/Home.tsx'>Home.tsx</a></b></td>
								<td><code>❯ Componente de la página principal de la aplicación.</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/landing.tsx'>landing.tsx</a></b></td>
								<td><code>❯ Componente de la landing page.</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/aboutus.tsx'>aboutus.tsx</a></b></td>
								<td><code>❯ Componente de la sección "Sobre nosotros".</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/Dashboard.tsx'>Dashboard.tsx</a></b></td>
								<td><code>❯ Componente principal del panel de usuario.</code></td>
							</tr>
							</table>
							<details>
								<summary><b>AboutUsComponents</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/AboutUsComponents/ProfilesGrid.tsx'>ProfilesGrid.tsx</a></b></td>
										<td><code>❯ Componente para mostrar la cuadrícula de perfiles del equipo.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/AboutUsComponents/ContactUs.tsx'>ContactUs.tsx</a></b></td>
										<td><code>❯ Componente de formulario de contacto.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/AboutUsComponents/AboutUsComponent.tsx'>AboutUsComponent.tsx</a></b></td>
										<td><code>❯ Componente principal de la sección "Sobre nosotros".</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>dashboardsComponents</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/dashboardsComponents/chats.tsx'>chats.tsx</a></b></td>
										<td><code>❯ Componente para la gestión y visualización de chats.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/dashboardsComponents/fichaSemanal.tsx'>fichaSemanal.tsx</a></b></td>
										<td><code>❯ Componente para la gestión de fichas semanales.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/dashboardsComponents/Profile.tsx'>Profile.tsx</a></b></td>
										<td><code>❯ Componente de perfil de usuario.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/dashboardsComponents/memoriaPracticas.tsx'>memoriaPracticas.tsx</a></b></td>
										<td><code>❯ Componente para la memoria de prácticas.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/dashboardsComponents/RoleIcon.tsx'>RoleIcon.tsx</a></b></td>
										<td><code>❯ Icono representativo del rol del usuario.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/dashboardsComponents/perfilChat.tsx'>perfilChat.tsx</a></b></td>
										<td><code>❯ Componente de perfil dentro del chat.</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>loginComponents</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/loginComponents/SignUp.tsx'>SignUp.tsx</a></b></td>
										<td><code>❯ Componente de registro de nuevos usuarios.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/loginComponents/ForgottenPassword.tsx'>ForgottenPassword.tsx</a></b></td>
										<td><code>❯ Componente para recuperación de contraseña olvidada.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/loginComponents/NewPassword.tsx'>NewPassword.tsx</a></b></td>
										<td><code>❯ Componente para establecer una nueva contraseña.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/loginComponents/LogIn.tsx'>LogIn.tsx</a></b></td>
										<td><code>❯ Componente de inicio de sesión de usuarios.</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>ProfileComponents</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/ProfileComponents/TutorLaboral.tsx'>TutorLaboral.tsx</a></b></td>
										<td><code>❯ Componente de perfil para el tutor laboral.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/ProfileComponents/Alumno.tsx'>Alumno.tsx</a></b></td>
										<td><code>❯ Componente de perfil para el alumno.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/ProfileComponents/TutorDePrácticas.tsx'>TutorDePrácticas.tsx</a></b></td>
										<td><code>❯ Componente de perfil para el tutor de prácticas.</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Commons</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/Commons/Footer.tsx'>Footer.tsx</a></b></td>
										<td><code>❯ Componente de pie de página común.</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/src/components/Commons/Header.tsx'>Header.tsx</a></b></td>
										<td><code>❯ Componente de cabecera común.</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>.flowbite-react</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/.flowbite-react/class-list.json'>class-list.json</a></b></td>
						<td><code>❯ Listado de clases CSS utilizadas por Flowbite React.</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>public</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/paurosmoleon/TFG/blob/master/front/public/_redirects'>_redirects</a></b></td>
						<td><code>❯ Archivo de configuración de redirecciones para despliegue.</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Primeros Pasos

### Requisitos Previos

Antes de comenzar con eFCT, asegúrate de que tu entorno cumpla los siguientes requisitos:

- **Lenguajes de Programación:** Python
- **Gestor de Paquetes:** Npm
- **IDE:** Visual Studio Code o similares
- **Navegador:** Cualquiera compatible con JavaScript1

### Instalación

Instala eFCT usando uno de los siguientes métodos:

**Compilar desde el código fuente:**

1. Clona el repositorio de eFCT:

```sh
❯ git clone https://github.com/paurosmoleon/TFG
```

2. Abre los entornos de front y back:

```sh
❯ cd TFG/front
		- npm install
		- npm run dev
❯ cd TFG/back
		- pip install -r requirements.txt
		- python main.py
		- python manage.py runserver
		
```

## Hoja de Ruta del Proyecto

- [x] **`Tarea 1`**: <strike>Funcionalidad completa.</strike>
- [ ] **`Tarea 2`**: Implementación de plantillas de Fichas Semanales + default.
- [ ] **`Tarea 3`**: Chatbot.

---

## Contribuir

- **💬 [Únete a las discusiones](https://github.com/paurosmoleon/TFG/discussions)**: Comparte tus ideas, da feedback o haz preguntas.
- **🐛 [Reporta problemas](https://github.com/paurosmoleon/TFG/issues)**: Informa de errores o solicita nuevas funcionalidades para el proyecto `eFCT`.

<details closed>
<summary>Gráfico de Contribuidores</summary>
<br>
<p align="left">
   <a href="https://github.com{/paurosmoleon/TFG/}graphs/contributors">
	  <img src="https://contrib.rocks/image?repo=paurosmoleon/TFG">
   </a>
</p>
</details>

---

## Agradecimientos

- Queremos expresar nuestro agradecimiento a todos nuestros profesores por su acompañamiento y dedicación durante estos dos años. Su apoyo y enseñanzas han dejado una huella significativa en nuestro desarrollo personal y profesional.

- Jose Ortega Valiente <a href="https://www.linkedin.com/in/jose-ortega-valiente/">
  <img src="https://skillicons.dev/icons?i=linkedin">
  </a>
- Javier Martín Gómez <a href="https://www.linkedin.com/in/javier-martín-gómez-73349a12a/">
  <img src="https://skillicons.dev/icons?i=linkedin">
  </a>
- Evelyn García Dionisio <a href="https://www.linkedin.com/in/evelyngadi/">
  <img src="https://skillicons.dev/icons?i=linkedin">
  </a>
- María del Mar Escobar Angulo
- Luis Robles García <a href="https://www.linkedin.com/in/luisroblesperito/">
  <img src="https://skillicons.dev/icons?i=linkedin">
  </a>

---
