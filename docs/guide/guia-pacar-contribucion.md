# Guía para Contribuir al Proyecto HORIZON

## 1. Clonar el Repositorio

Para comenzar a trabajar en el proyecto HORIZON, sigue estos pasos:

1. **Asegúrate de tener Git instalado**: Si aún no lo tienes, descárgalo e instálalo desde [Git](https://git-scm.com/).

2. **Clona el repositorio**:
   Abre una terminal Git Bash y ejecuta el siguiente comando:

    ```bash title="Bash"
    git clone https://github.com/SENATI-ASSISTENT/desarrollo-senati.git
    ```

## 2. Configuración del Entorno

### 2.1. Configuración del Entorno Python

- **Instala Python 3.12**: Descárgalo desde [Python.org](https://www.python.org/).

- **Configura el entorno virtual**:
  Navega al directorio del proyecto y ejecuta los siguientes comandos para crear y activar un entorno virtual, luego instala las dependencias:

    ```bash title="Bash"
    python -m venv env
    source env/bin/activate   # En Windows usa `env\Scripts\activate`
    pip install -r requirements.txt
    ```

### 2.2. Configuración del Entorno Arduino

- **Instala el Arduino IDE**: Descárgalo desde [Arduino](https://www.arduino.cc/en/software).

- **Abre el proyecto en el Arduino IDE**:
  - Navega al directorio del proyecto.
  - Abre el archivo de código fuente de Arduino (.ino) desde el IDE de Arduino.

- **Configura la Placa y el Puerto**:
  - En el Arduino IDE, selecciona `Placa` > `Arduino Mega`.
  - Selecciona el puerto adecuado en `Herramientas` > `Puerto`.

## 3. Compilación del Código

### 3.1. Compilación del Código Python

- **Verifica que el entorno virtual esté activo**.

- **Compila y ejecuta el código Python**:
  - Ejecuta el script principal para verificar que todo funcione correctamente. 

### 3.2. Compilación del Código Arduino

- **Compila el código**:
  - En el Arduino IDE, haz clic en el botón de Verificación (icono de una marca de verificación) para compilar el código.

- **Sube el código a la placa**:
  - Una vez compilado sin errores, haz clic en el botón Subir (icono de una flecha hacia la derecha) para cargar el código en la placa Arduino.

## 4. Pruebas

### 4.1. Pruebas del Código Python

- **Ejecuta las pruebas**:
  - Ejecuta los scripts de prueba o utiliza herramientas de prueba automatizadas si están disponibles:

    ```bash title="Bash"
    python -m unittest discover tests/
    ```

- **Verifica la salida**:
  - Asegúrate de que todas las pruebas se ejecuten correctamente y no haya errores.

### 4.2. Pruebas del Código Arduino

- **Conecta el Arduino Mega** al sistema.

- **Realiza pruebas funcionales**:
  - Asegúrate de que los sensores ultrasónicos, el Bluetooth y el micrófono funcionen correctamente.
  - Utiliza la aplicación móvil para enviar comandos y verificar la respuesta del robot.

## 5. Contribuir al Proyecto

- **Crea una rama para tu trabajo**:
    ```bash title="Bash"
    git checkout -b nombre-de-tu-rama
    ```

- **Haz tus cambios y realiza commits**:
  - Realiza los cambios necesarios en el código.
  - Agrega los archivos modificados y haz commit:

    ```bash title="Bash"
    git add .
    git commit -m "Descripción de los cambios realizados"
    ```

- **Envía tus cambios al repositorio remoto**:
    ```bash title="Bash"
    git push origin nombre-de-tu-rama
    ```

- **Crea un Pull Request**:
  - Ve a la página del repositorio en GitHub (o plataforma similar) y abre un Pull Request para solicitar la integración de tus cambios.
