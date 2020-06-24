import imgSol from '../../Images/Silabas/sol.png'
import imgRey from '../../Images/Silabas/rey.png'
import imgCasa from '../../Images/Silabas/casa.png'
import imgSal from '../../Images/Silabas/sal.png'
import imgAgua from '../../Images/Silabas/agua.png'
import imgPerro from '../../Images/Silabas/perro.png'
import imgPez from '../../Images/Silabas/pez.png'
import imgLlave from '../../Images/Silabas/llave.png'
import imgGato from '../../Images/Silabas/gato.png'
import imgLuz from '../../Images/Silabas/luz.png'
import imgRio from '../../Images/Silabas/rio.png'
import imgRadio from '../../Images/Silabas/radio.png'
import imgCelular from '../../Images/Silabas/celular.png'
import imgZapato from '../../Images/Silabas/zapato.png'
import imgReloj from '../../Images/Silabas/reloj.png'
import imgMiel from '../../Images/Silabas/miel.png'
import imgPerfume from '../../Images/Silabas/perfume.png'
import imgMar from '../../Images/Silabas/mar.jpg'
import imgSilla from '../../Images/Silabas/silla.png'
import imgTeclado from '../../Images/Silabas/teclado.png'
import imgComputadora from '../../Images/Silabas/computadora.png'
import imgAlmohada from '../../Images/Silabas/almohada.png'
import imgCampera from '../../Images/Silabas/campera.png'
import imgParaguas from '../../Images/Silabas/paraguas.png'
import imgBotas from '../../Images/Silabas/botas.png'
import imgVentilador from '../../Images/Silabas/ventilador.png'
import imgMedias from '../../Images/Silabas/medias.png'
import imgControl from '../../Images/Silabas/control.png'
import imgHerramienta from '../../Images/Silabas/herramientas.png'
import imgMedico from '../../Images/Silabas/medico.png'

export default {

  levelIndex: 0,
  levels:
    [{
      id: 1,
      title: 'Nivel 1',
      description: 'Palabras Monosílabas y Bísilabas',
      statement: 'Seleccioná si la palabra de la imagen es Monosílaba o Bisílaba!',
      wordIndex: 0,
      words: [
        { id: 1, word: 'Sol', value: 1, img: imgSol },
        { id: 2, word: 'Rey', value: 1, img: imgRey },
        { id: 3, word: 'Casa', value: 2, img: imgCasa },
        { id: 4, word: 'Sal', value: 1, img: imgSal },
        { id: 5, word: 'Agua', value: 2, img: imgAgua },
        { id: 6, word: 'Perro', value: 2, img: imgPerro },
        { id: 7, word: 'Pez', value: 1, img: imgPez },
        { id: 8, word: 'Llave', value: 2, img: imgLlave },
        { id: 14, word: 'Gato', value: 2, img: imgGato },
        { id: 10, word: 'Luz', value: 1, img: imgLuz }
      ],
      options: [
        { id: 1, text: 'Monosílaba', value: [1], color: 'primary' },
        { id: 2, text: 'Bisílaba', value: [2], color: 'secondary' }
      ]
    },
    {
      id: 2,
      title: 'Nivel 2',
      description: 'Palabras Monosílabas, Bísilabas o Trisílabas',
      statement: 'Seleccioná si la palabra de la imagen es Monosílaba, Bisílaba o Trisílaba!',
      wordIndex: 0,
      words: [
        
        { id: 1, word: 'Río', value: 1, img: imgRio },
        { id: 2, word: 'Radio', value: 2, img: imgRadio },
        { id: 3, word: 'Celular', value: 3, img: imgCelular },
        { id: 4, word: 'Zapato', value: 3, img: imgZapato },
        { id: 5, word: 'Reloj', value: 2, img: imgReloj },
        { id: 6, word: 'Miel', value: 1, img: imgMiel },
        { id: 7, word: 'Perfume', value: 3, img: imgPerfume },
        { id: 8, word: 'Mar', value: 1, img: imgMar },
        { id: 9, word: 'Silla', value: 2, img: imgSilla },
        { id: 10, word: 'Teclado', value: 3, img: imgTeclado }
      ],
      options: [
        { id: 1, text: 'Monosílaba', value: [1], color: 'primary', words: [] },
        { id: 2, text: 'Bisílaba', value: [2], color: 'secondary', words: [] },
        { id: 3, text: 'Trísilaba', value: [3], color: 'default', words: [] }
      ]
    },
    {
      id: 3,
      title: 'Nivel 3',
      description: 'Palabras Bísilabas, Trisílabas o Polisílabas',
      statement: 'Seleccioná si la palabra de la imagen es Bisílaba, Trisílaba o Polisílaba!',
      wordIndex: 0,
      words: [
        
        { id: 1, word: 'Computadora', value: 5, img: imgComputadora },
        { id: 2, word: 'Almohada', value: 4, img: imgAlmohada },
        { id: 3, word: 'Campera', value: 3, img: imgCampera },
        { id: 4, word: 'Paraguas', value: 3, img: imgParaguas },
        { id: 5, word: 'Botas', value: 2, img: imgBotas },
        { id: 6, word: 'Ventilador', value: 4, img: imgVentilador },
        { id: 7, word: 'Medias', value: 2, img: imgMedias },
        { id: 8, word: 'Control', value: 2, img: imgControl },
        { id: 9, word: 'Herramienta', value: 4, img: imgHerramienta },
        { id: 10, word: 'Médico', value: 3, img: imgMedico },
      ],
      options: [
        { id: 1, text: 'Bísilaba', value: [2], color: 'primary', words: [] },
        { id: 2, text: 'Trisílaba', value: [3], color: 'secondary', words: [] },
        { id: 3, text: 'Polisílaba', value: [4, 5], color: 'default', words: [] }
      ]
    }]
};
