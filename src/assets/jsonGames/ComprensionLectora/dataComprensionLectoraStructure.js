export default {

  levelIndex: 0,
  levels:
    [{
      id: 1,
      title: 'Nivel 1',
      description: '100 Palabras y algo mas ...',
      consigna: 'Lea el texto y luego responda, seleccionando la respuesta correcta.',
      titulotexto: 'Llega el circo',
      texto: 'Cerca de la casa de Anita se está instalando un circo. Ella, con mucha curiosidad, ha visto cómo han levantado la carpa de colores y cómo han traído toda clase de animales encerrados en enormes jaulas. Todos están allí, desde los alegres monos hasta los rugientes leones. La plaza se ha llenado de actividad. Payasos, acróbatas y domadores ensayan para el gran día. Anita, que nunca ha ido al circo, espera ansiosa su inauguración.',
      cantidadpreguntas:3,
      preguntas: [
        { id: 1, value:'¿Dónde se está instalando el circo?', rta_correcta:'op1'},
        { id: 2, value:'¿Qué animales hay en el circo?',      rta_correcta:'op1'},
        { id: 3, value:'¿Dónde ensaya para el gran día?',     rta_correcta:'op1'}
      ],
      opciones: [
        { id: 1, op1:'Al lado de la casa de Anita', op2:'Cerca de la casa de Anita', op3:'A una cuadra de la casa de Anita', },
        { id: 2, op1:'Leones y Tigres',             op2:'Leones y Monos',            op3:'Jirafas y Monos', },
        { id: 3, op1:'En la calle',                 op2:'En la plaza',               op3:'En la cancha de futbol', }
      ]
    },
    {
      id: 2,
      title: 'Nivel 2',
      description: '200 Palabras y algo mas ...',
      consigna: 'Lea y luego responda, seleccionando la respuesta correcta.',
      titulotexto: 'Colatiesa y Castañuela',
      texto: 'Cerca de la casa de Anita se está instalando un circo. Ella, con mucha curiosidad, ha visto cómo han levantado la carpa de colores y cómo han traído toda clase de animales encerrados en enormes jaulas. Todos están allí, desde los alegres monos hasta los rugientes leones. La plaza se ha llenado de actividad. Payasos, acróbatas y domadores ensayan para el gran día. Anita, que nunca ha ido al circo, espera ansiosa su inauguración.',
      cantidadpreguntas:3,
      preguntas: [
        { id: 1, value:'Colatiesa y Castañuela son dos:',     rta_correcta: 'op3'},
        { id: 2, value:'En el nido de Castañuela: ',          rta_correcta: 'op1'},
        { id: 3, value:'¿Por qué los ambos buscan comida?',   rta_correcta: 'op2'}
      ],
      opciones: [
        { id: 1, op1: 'Niños',                            op2: 'Amigos',                    op3: 'Animalitos', },
        { id: 2, op1: 'Hay avellanas, nueces, bellotas…', op2: 'Está Colatiesa. ',          op3: 'Hay dos animalitos. ', },
        { id: 3, op1: 'Para entretenerse',                op2: 'Para pasar el invierno',    op3: 'Porque tiene hambre', }
      ]
    },
    {
      id: 3,
      title: 'Nivel 3',
      description: '300 Palabras y algo mas ...',
      consigna: 'Lea y luego responda, seleccionando la respuesta correcta.',
      titulotexto: 'Los girasoles',
      texto: 'Los girasoles son flores hermosas y, también, son plantas muy útiles. Por este motivo, los pueblos indígenas de América las consideraban plantas sagradas. Los girasoles han sido cultivados con diferentes motivos: para producir aceite, medicinas, alimentos, tinturas y además, para ser usados como adornos. Actualmente, se usan para hacer aceite y comida para mascotas. Sus semillas, llamadas pipas, son frutos secos que se pueden comer solos o en ensaladas. La planta del girasol vive solo un año, pero deja miles de semillas que se pueden plantar al año siguiente. Otra de sus características es que la flor siempre mira hacia donde está el sol: así, en la mañana, se orienta hacia donde sale el sol y luego va girando hasta que queda mirando hacia el lugar donde el sol se pone.',
      cantidadpreguntas:3,
      preguntas: [
        { id: 1, value:'¿Por qué los pueblos indígenas consideraban que los girasoles eran plantas sagradas?',     rta_correcta: 'op2'},
        { id: 2, value:'¿Qué son las pipas y para qué se utilizan?',                                               rta_correcta: 'op2'},
        { id: 3, value:'¿Hacia dónde gira la flor de esta planta?',                                                rta_correcta: 'op3'}
      ],
      opciones: [
        { id: 1, op1: 'Son colores sagrados', op2: 'Son plantas útiles y hermosas', op3: 'Solo la encuentran en el campo', },
        { id: 2, op1: 'Son las hojas del girasol y se usan para comer.', op2: 'Son sus semillas del girasol y se usa para plantar.', op3: 'Son los tallos del girasol y se utiliza para plantar más girasoles.', },
        { id: 3, op1: 'Sempre mira al norte', op2: 'Siempre mira a donde sopla el viento', op3: 'Siempre mira hacia el sol.', }
      ]
    },
  
  ]
};
