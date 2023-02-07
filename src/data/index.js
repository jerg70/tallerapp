export const tasksMock = [
  {
    id: 1,
    title: 'Cita Dr',
    description: 'Ir al Dr a las 2:30pm',
    priority: 'high',
    done: false
  },
  {
    id: 2,
    title: 'Junta en Empresa',
    description: 'Junta en Empresa a las 3:30pm',
    priority: 'medium',
    done: false
  },
  {
    id: 3,
    title: 'Comida con Juan',
    description: 'Ir a comer a las 12:30pm',
    priority: 'low',
    done: false
  }
]

export const remindersMock = [
  {
    id: 1,
    title: 'Sacar al perro',
    description: 'Sacar al perro',
    time: new Date('2023-01-25T16:30:00'),
    notifications: true
  },
  {
    id: 2,
    title: 'Video llamada empresarial mañana',
    description: 'Video llamada con Ing. Reyes mañana',
    time: new Date('2023-01-25T11:45:00'),
    notifications: true
  }
]
