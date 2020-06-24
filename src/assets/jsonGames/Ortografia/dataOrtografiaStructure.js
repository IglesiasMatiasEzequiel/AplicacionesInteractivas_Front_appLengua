import imgReg from '../../Images/regla.jpg'
import imgJi from '../../Images/jirafa.jpg'
import imgTi from '../../Images/tijera.jpg'
import imgAg from '../../Images/agenda.jpg'
import imgCo from '../../Images/colegio.jpg'
import imgJu from '../../Images/jugador3.jpg'
import imgJa from '../../Images/jardin.jpg'
import imgVa from '../../Images/vaca.jpg'
import imgBa from '../../Images/bañadera.jpg'
import imgLav from '../../Images/lavadora.jpg'
import imgAbeja from '../../Images/abeja.jpg'
import imgAv from '../../Images/avion.jpg'
import imgBurro from '../../Images/burro.jpg'
import imgVacu from '../../Images/vacuna2.jpg'
import imgPla from '../../Images/playa.jpg'
import imgGa from '../../Images/galleta2.jpg'
import imgRyes from '../../Images/reyes.jpg'
import imgPaya from '../../Images/payaso.jpg'
import imgCeb from '../../Images/cebolla.jpg'
import imgArdi from '../../Images/ardilla2.jpg'
import imgCep from '../../Images/cepillo2.jpg'

export default {

  levelIndex: 0,
  levels:
    [{
      id: 1,
      title: 'Nivel 1',
      description: 'LETRAS J Y G ',
      wordIndex: 0,
      statement: 'Seleccioná la letra correcta para completar la palabra!',
      words: [

        { id: 1, word: 'Re-la', value: 2, img: imgReg },
        { id: 2, word: '-irafa', value: 1, img: imgJi },
        { id: 3, word: 'Ti-era', value: 2, img:imgTi },
        { id: 4, word: 'A-enda', value: 2, img: imgAg },
        { id: 5, word: 'Cole-io', value: 2, img: imgCo },
        { id: 6, word: '-ugador', value: 1, img: imgJu },
        { id: 7, word: '-ardin', value: 1 , img: imgJa }

      ],
      options: [
        { id: 1, text: 'J', value: [1], color: 'primary'},
        { id: 2, text: 'G', value: [2], color: 'secondary'}
      ]
     },
     {
      id: 2,
      title: 'Nivel 2',
      description: 'PALABRAS CON V Y B',
      statement: 'Seleccioná la letra correcta para completar la palabra!',
      wordIndex: 0,
      words: [
        
        { id: 1, word: '-aca', value: 1, img: imgVa },
        { id: 2, word: '-añadera', value: 2, img: imgBa },
        { id: 3, word: 'La-adora', value: 1, img: imgLav },
        { id: 4, word: 'A-eja', value: 2, img: imgAbeja },
        { id: 5, word: 'A-ión', value: 1, img: imgAv },
        { id: 6, word: '-urro', value: 2, img: imgBurro },
        { id: 7, word: '-acuna', value: 1, img: imgVacu }
      ],
      options: [
        { id: 1, text: 'V', value: [1], color: 'primary'},
        { id: 2, text: 'B', value: [2], color: 'secondary'}
      ]
    },
    {
      id: 3,
      title: 'Nivel 3',
      description: 'Palabras con Y y LL',
      statement: 'Seleccioná la letra correcta para completar la palabra!',
      wordIndex: 0,
      words: [
        
        { id: 1, word: 'Pla-a', value: 2, img: imgPla },
        { id: 2, word: 'Ga-eta', value: 1, img: imgGa },
        { id: 3, word: 'Re-es', value: 2, img: imgRyes },
        { id: 4, word: 'Pa-aso', value: 2, img: imgPaya },
        { id: 5, word: 'Cebo-a', value: 1, img: imgCeb },
        { id: 6, word: 'Ardi-a', value: 1, img: imgArdi },
        { id: 7, word: 'Cepi-o', value: 1, img: imgCep },
       
      ],
      options: [
        { id: 1, text: 'LL', value: [1], color: 'primary'},
        { id: 2, text: 'Y', value: [2], color: 'secondary'}
      ]
    }]
  
};

