import React from "react";
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export const confidencialidadArray = [
  {
      puntuacion: 1,
      nombre: "Muy Bajo",
      descripcion: "La información del activo es accesible públicamente. No hay medidas de protección implementadas."
  },
  {
      puntuacion: 2,
      nombre: "Bajo",
      descripcion: "La información del activo es parcialmente pública. Hay algunas medidas de protección implementadas, pero son débiles y fácilmente superables."
  },
  {
      puntuacion: 3,
      nombre: "Medio",
      descripcion: "La información del activo es accesible solo a un grupo amplio de personas dentro de la organización. Las medidas de protección son moderadas."
  },
  {
      puntuacion: 4,
      nombre: "Alto",
      descripcion: "La información del activo es accesible solo a un grupo limitado de personas dentro de la organización. Las medidas de protección son fuertes."
  },
  {
      puntuacion: 5,
      nombre: "Muy Alto",
      descripcion: "La información del activo es altamente confidencial y solo es accesible a unas pocas personas autorizadas. Las medidas de protección son muy fuertes y cumplen con los estándares más altos."
  }
]


export const integridadArray = [
  {
      puntuacion: 1,
      nombre: "Muy Bajo",
      descripcion: "Los datos del activo pueden modificarse fácilmente por cualquiera. No hay medidas para garantizar su integridad."
  },
  {
      puntuacion: 2,
      nombre: "Bajo",
      descripcion: "Un grupo amplio de personas dentro o fuera de la organización puede modificar los datos del activo. Las medidas para garantizar su integridad son débiles."
  },
  {
      puntuacion: 3,
      nombre: "Medio",
      descripcion: "Los datos del activo pueden ser modificados por un grupo limitado de personas dentro de la organización. Las medidas para garantizar su integridad son moderadas."
  },
  {
      puntuacion: 4,
      nombre: "Alto",
      descripcion: "Los datos del activo pueden ser modificados solo por unas pocas personas autorizadas dentro de la organización. Las medidas para garantizar su integridad son fuertes."
  },
  {
      puntuacion: 5,
      nombre: "Muy Alto",
      descripcion: "Los datos del activo pueden ser modificados solo por unas pocas personas autorizadas y se realizan auditorías regulares para garantizar su integridad. Las medidas para garantizar su integridad son muy fuertes y cumplen con los estándares más altos."
  }
]


export const disponibilidadArray = [
  {
      puntuacion: 1,
      nombre: "Muy Bajo",
      descripcion: "El acceso al activo es muy limitado o inexistente, incluso para las personas autorizadas. No hay medidas para garantizar su disponibilidad."
  },
  {
      puntuacion: 2,
      nombre: "Bajo",
      descripcion: "El acceso al activo es limitado y puede haber interrupciones frecuentes en el servicio. Las medidas para garantizar su disponibilidad son débiles."
  },
  {
      puntuacion: 3,
      nombre: "Medio",
      descripcion: "El acceso al activo es generalmente confiable con algunas interrupciones ocasionales en el servicio. Las medidas para garantizar su disponibilidad son moderadas."
  },
  {
      puntuacion: 4,
      nombre: "Alto",
      descripcion: "El acceso al activo es confiable con interrupciones mínimas en el servicio. Las medidas para garantizar su disponibilidad son fuertes."
  },
  {
      puntuacion: 5,
      nombre: "Muy Alto",
      descripcion: "El acceso al activo es altamente confiable sin interrupciones en el servicio. Las medidas para garantizar su disponibilidad son muy fuertes y cumplen con los estándares más altos."
  }
]