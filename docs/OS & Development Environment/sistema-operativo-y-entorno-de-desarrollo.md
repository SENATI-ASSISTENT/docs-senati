# Sistema Operativo y Entorno de Desarrollo de HORIZON

## 1. Sistema Operativo

**Nombre:** Raspberry Pi OS

Raspberry Pi OS (anteriormente conocido como Raspbian) es el sistema operativo recomendado para la Raspberry Pi, utilizado en el robot asistente para gestionar el control y procesamiento de datos.
- **Versión Utilizada:** Última versión estable disponible.
- **Razón de Elección:** Ofrece un entorno Linux sólido, compatible con Python, ideal para el desarrollo y control de aplicaciones de robótica. Es ligero, eficiente y compatible con la mayoría de los paquetes necesarios para el proyecto.

## 2. Entorno de Desarrollo

1. **Lenguaje de Programación Principal:** Python

    Python es el lenguaje principal para desarrollar las funcionalidades del robot asistente, incluyendo la comunicación con el sistema Arduino, procesamiento de datos, control de desplazamiento y evitación de obstáculos, así como la integración de inteligencia artificial.
    - **Versión Utilizada:** Python 3.12.
    - **Entorno de Desarrollo (IDE):** Visual Studio Code.

2. **Controlador de Hardware:** Arduino Mega

    Arduino Mega se encarga del control de motores y sensores del robot. Se conecta a la Raspberry Pi para comunicación y control en tiempo real.
    - **Placa Utilizada:** Arduino Mega.
    - **Entorno de Desarrollo:** Arduino IDE.

    ![Placa Arduino Mega](https://th.bing.com/th/id/OIP.-YsWUYfeb89MeskbdR1vSAAAAA?rs=1&pid=ImgDetMain)

## 3. Sensores

**Tipo de Sensor:** Sensores Ultrasónicos

Los sensores ultrasónicos permiten al robot detectar obstáculos mediante la emisión de pulsos ultrasónicos y medición del tiempo que tarda el eco en regresar, calculando así la distancia a los obstáculos.
- **Modelo Recomendado:** HC-SR04 o similar.
- **Integración:** Conectados al Arduino para medir distancias y enviar datos a la Raspberry Pi para la toma de decisiones en tiempo real.

    ![Módulo Ultrasonico](https://th.bing.com/th/id/OIP.yQpAcb7BYQvrdI4TC_EuWAAAAA?rs=1&pid=ImgDetMain)

## 4. Conectividad

**Tipo de Conexión:** Bluetooth

El robot se conecta a la aplicación móvil mediante Bluetooth, permitiendo la comunicación inalámbrica y el envío de comandos.
- **Módulo Utilizado:** HC-05 o HC-06.
- **Configuración:** Conectado al Arduino para la comunicación de datos con la Raspberry Pi y la aplicación móvil.

    ![Módulo Bluetooth HC-05](https://th.bing.com/th/id/OIP.CRbdyL4PTIPwNVtELswmKwAAAA?rs=1&pid=ImgDetMain)

## 5. Herramientas de Desarrollo Adicionales

- **Bibliotecas Utilizadas:**
    - **Python**
        - **pyserial:** Para comunicación serial con el Arduino.
        - **numpy:** Para el procesamiento de datos numéricos.
        - **nltk:** Para el procesamiento de lenguaje natural.
    
    - **Arduino**
        - **Adafruit Motor Shield Library:** Para el control de motores.
        - **NewPing Library:** Para el manejo de sensores ultrasónicos.

- **Framework de Comunicación:** MQTT para la comunicación entre el robot y la aplicación móvil.
- **Aplicación Móvil:** Desarrollada en React Native o Flutter para la interacción con el robot.
- **Fuente de Poder:** Batería de N voltios.

## 6. Componentes Adicionales

**Micrófono**

Un micrófono integrado permitirá la captura de audio para interacción por voz y funcionalidad de inteligencia artificial.

![Micrófono](https://th.bing.com/th/id/OIP.cUQHEqaZfs-YsWyfTGwteQAAAA?rs=1&pid=ImgDetMain)
