---
sidebar_label: "Diseño Componentes de Software"
sidebar_position: 3
---

# Módulo de Control de Movimiento

**Objetivo:**

* 🛠️ Coordinar los movimientos del robot asistente de forma segura y eficiente en entornos institucionales (oficinas, hospitales, etc.).
* 🤝 Garantizar la interacción suave y segura con personas y objetos en el entorno.
* 🔄 Adaptar los movimientos a las diferentes tareas y escenarios que el robot pueda enfrentar.

**Funcionalidades Principales:**

* **Control de bajo nivel:**
  * 🖥️ Gestión de la comunicación con los controladores de los motores (DC, servo, paso a paso).
  * 📊 Implementación de algoritmos de control PID, fuzzy logic o aprendizaje por refuerzo para regular la velocidad, posición y fuerza de los actuadores.
  * ⚙️ Consideración de las características específicas de cada tipo de motor y actuador.
* **Planificación de trayectorias:**
  * 🗺️ Conversión de las trayectorias planificadas por el módulo de navegación en una secuencia de comandos para los actuadores, teniendo en cuenta las restricciones físicas del robot y el entorno.
  * 🚶 Interpolación de los puntos de trayectoria para generar movimientos suaves y continuos, evitando aceleraciones bruscas que puedan dañar el robot o el entorno.
  * ⚡ Adaptación de la velocidad de movimiento en función de las condiciones del entorno y de las tareas a realizar.
* **Control de seguridad:**
  * 🛡️ Implementación de múltiples capas de seguridad para evitar colisiones, caídas y otros peligros.
  * 🚨 Uso de sensores de fuerza, proximidad y seguridad para detectar obstáculos y detener el movimiento en caso de emergencia.
  * 🔍 Monitoreo continuo del estado del robot y del entorno para garantizar la seguridad.
* **Calibración:**
  * ⚖️ Procedimientos de calibración regulares para garantizar la precisión de los movimientos y compensar el desgaste de los componentes.
  * 🔧 Calibración de los sensores y actuadores en diferentes condiciones de carga y temperatura.

**Arquitectura:**

```mermaid
classDiagram
  class RobotController {
    - motores: [Motor]
    - sensores: [Sensor]
    - controlador: Controlador
    - planificadorTrayectoria: PlanificadorTrayectoria
  }

  class Motor {
    + setVelocidad(velocidad: Number)
    + setPosicion(posicion: Number)
    + getEstado()
  }

  class Sensor {
    + obtenerValor()
  }

  class Controlador {
    + calcularSalida(error: Number)
  }

  class PlanificadorTrayectoria {
    + planificarTrayectoria(puntoInicial, puntoFinal)
  }
  ```

  ### Consideraciones Específicas para Robots Asistentes Institucionales

* **Interacción con humanos:**
  * 👥 Detección y seguimiento de personas en el entorno.
  * 🚶 Adaptación de velocidad y trayectoria para evitar colisiones.
  * 🤖 Diseño de movimientos suaves y predecibles.

* **Navegación en entornos dinámicos:**
  * 🚧 Manejo de obstáculos móviles.
  * 🔄 Adaptación a cambios en el entorno.

* **Tareas específicas:**
  * 📦 Adaptación a tareas como transporte de objetos, apertura de puertas, interacción con dispositivos.

* **Normativas de seguridad:**
  * 📜 Cumplimiento de normas de seguridad para robots móviles en entornos institucionales.

### Ampliaciones Posibles

* **Aprendizaje por refuerzo:** Mejora del rendimiento del controlador en tareas específicas.
* **Control adaptativo:** Ajuste de parámetros en tiempo real.
* **Control de fuerza:** Realización de tareas delicadas.

# Módulo de Movimiento 🤖

**Objetivo:**

- 🚀 Proporcionar al robot asistente la capacidad de moverse de manera segura y eficiente en entornos institucionales (oficinas, hospitales, etc.).
- 🎯 Garantizar la precisión y la suavidad en los movimientos del robot.
- 🔧 Adaptar los movimientos a diferentes tareas y escenarios.

**Funcionalidades Principales:**

* **Control de Movimiento: 🚀**
  - Gestión de la comunicación con los controladores de los motores (DC, servo, paso a paso). 🛠️
  - Implementación de algoritmos de control PID, fuzzy logic o aprendizaje por refuerzo para regular la velocidad, posición y fuerza de los actuadores. ⚙️
  - Consideración de las características específicas de cada tipo de motor y actuador. 📊

* **Planificación de Trayectorias: 🗺️**
  - Conversión de las trayectorias planificadas por el módulo de navegación en una secuencia de comandos para los actuadores, teniendo en cuenta las restricciones físicas del robot y el entorno. 🏗️
  - Interpolación de los puntos de trayectoria para generar movimientos suaves y continuos, evitando aceleraciones bruscas que puedan dañar el robot o el entorno. 📏
  - Adaptación de la velocidad de movimiento en función de las condiciones del entorno y de las tareas a realizar. ⏱️

* **Control de Seguridad: 🛡️**
  - Implementación de múltiples capas de seguridad para evitar colisiones, caídas y otros peligros. ⚠️
  - Uso de sensores de fuerza, proximidad y seguridad para detectar obstáculos y detener el movimiento en caso de emergencia. 🚨
  - Monitoreo continuo del estado del robot y del entorno para garantizar la seguridad. 🕵️‍♂️

* **Calibración: 🔧**
  - Procedimientos de calibración regulares para garantizar la precisión de los movimientos y compensar el desgaste de los componentes. 📏
  - Calibración de los sensores y actuadores en diferentes condiciones de carga y temperatura. 🌡️

**Arquitectura:**

```mermaid
classDiagram
  class MotionModule {
    - motores: [Motor]
    - sensores: [Sensor]
    - controlador: Controlador
    - planificadorTrayectoria: PlanificadorTrayectoria
  }

  class Motor {
    + setVelocidad(velocidad: Number)
    + setPosicion(posicion: Number)
    + getEstado()
  }

  class Sensor {
    + obtenerValor()
  }

  class Controlador {
    + calcularSalida(error: Number)
  }

  class PlanificadorTrayectoria {
    + planificarTrayectoria(puntoInicial, puntoFinal)
  }
  ```

 ### Consideraciones Específicas para Robots Asistentes Institucionales 🏢

**Interacción con humanos:**
- 👤 Detección y seguimiento de personas en el entorno.
- ⚠️ Adaptación de velocidad y trayectoria para evitar colisiones.
- 🕵️‍♂️ Diseño de movimientos suaves y predecibles.

**Navegación en entornos dinámicos:**
- 🚧 Manejo de obstáculos móviles.
- 🌍 Adaptación a cambios en el entorno.

**Tareas específicas:**
- 📦 Adaptación a tareas como transporte de objetos, apertura de puertas, interacción con dispositivos.

**Normativas de seguridad:**
- 🛡️ Cumplimiento de normas de seguridad para robots móviles en entornos institucionales.

# Módulo de Control de Voz 🎤🤖

## Objetivo 🎯

- Permitir la interacción natural y eficiente entre los usuarios y el robot asistente mediante comandos de voz.
- Garantizar la precisión y la rapidez en la interpretación y ejecución de comandos de voz.
- Adaptar el sistema de control de voz a diferentes entornos y usuarios.

## Funcionalidades Principales ⚙️

* **Reconocimiento de Voz 🎙️:**
  - Captura de audio mediante micrófonos de alta calidad.
  - Conversión de audio a texto utilizando algoritmos avanzados.
  - Soporte para múltiples idiomas y acentos.
* **Procesamiento de Lenguaje Natural (NLP) 🧠:**
  - Interpretación de comandos de voz utilizando técnicas de NLP.
  - Identificación de intenciones y entidades.
  - Manejo de contexto y diálogos continuos.
* **Síntesis de Voz 🔊:**
  - Conversión de texto a voz utilizando algoritmos de síntesis.
  - Soporte para múltiples idiomas y voces.
  - Ajuste de parámetros de voz como tono, volumen y velocidad.
* **Integración con Sistemas de Control 🔄:**
  - Comunicación con otros módulos del robot para ejecutar comandos.
  - Sincronización de respuestas de voz con acciones físicas.
  - Manejo de errores y confirmaciones.
* **Seguridad y Privacidad 🔐:**
  - Encriptación de datos de voz para proteger la privacidad del usuario.
  - Implementación de mecanismos de autenticación.
  - Monitoreo y auditoría de comandos de voz.

## Arquitectura 🏗️

```mermaid
classDiagram
  class VoiceController {
    - micrófono: Micrófono
    - reconocedorVoz: ReconocedorVoz
    - procesadorNLP: ProcesadorNLP
    - sintetizadorVoz: SintetizadorVoz
    - integradorSistemas: IntegradorSistemas
  }

  class Micrófono {
    + capturarAudio()
  }

  class ReconocedorVoz {
    + convertirAudioATexto(audio: Audio)
  }

  class ProcesadorNLP {
    + interpretarComando(texto: String)
  }

  class SintetizadorVoz {
    + convertirTextoAVoz(texto: String)
  }

  class IntegradorSistemas {
    + ejecutarComando(comando: Comando)
  }
  ```

## Consideraciones Específicas para Robots Asistentes Institucionales 🏢

* **Interacción con humanos 👥:**
  - Detección y seguimiento de personas en el entorno.
  - Adaptación de velocidad y trayectoria para evitar colisiones.
  - Diseño de movimientos suaves y predecibles.

* **Navegación en entornos dinámicos 🚶‍♂️🏃‍♀️:**
  - Manejo de obstáculos móviles.
  - Adaptación a cambios en el entorno.

* **Tareas específicas 🎯:**
  - Transporte de objetos, apertura de puertas, interacción con dispositivos.

* **Normativas de seguridad 🛡️:**
  - Cumplimiento de normas de seguridad para robots móviles en entornos institucionales.

### Ampliaciones Posibles

* **Aprendizaje por refuerzo 🤖:**
  - Mejora del rendimiento del controlador en tareas específicas.

* **Control adaptativo 🔧:**
  - Ajuste de parámetros en tiempo real.

* **Control de fuerza 💪:**
  - Realización de tareas delicadas.
### Gráficos y Diagramas 📊

Para una visualización más detallada, revisa los siguientes gráficos y diagramas:

3. **Proceso de vos:**

![alt text](img/voz.png)
 