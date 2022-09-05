import uuid from "react-uuid"
import Adobo from '../assets/adobo.jpg'
import ChickenInasal from '../assets/chicken-inasal.jpg'
import Dinuguan from '../assets/dinuguan.png'
import KareKare from '../assets/kare-kare.jpg'
import Kinilaw from '../assets/kinilaw.jpg'
import LecheFlan from '../assets/leche-flan.jpg'
import Longganisa from '../assets/longganisa.jpg'
import Lumpia from '../assets/lumpia.jpg'
import Pancit from '../assets/pancit.jpg'
import Pinakbet from '../assets/pinakbet.jpg'
import PorkSisig from '../assets/porksisig.jpg'
import Sinigang from '../assets/sinigang.jpg'

class cardsInfo {
    constructor(name, img) {
        this.name = name
        this.imgsrc = img
    }
}

const allInfo = [
    {
        name: 'ADOBO',
        src: Adobo,
        id: uuid()
    },
    {
        name: 'CHICKEN INASAL',
        src: ChickenInasal,
        id: uuid()
    },
    {
        name: 'DINUGUAN',
        src: Dinuguan,
        id: uuid()
    },
    {
        name: 'KARE KARE',
        src: KareKare,
        id: uuid()
    },
    {
        name: 'KINILAW',
        src: Kinilaw,
        id: uuid()
    },
    {
        name: 'LECHE FLAN',
        src: LecheFlan,
        id: uuid()
    },
    {
        name: 'LONGGANISA',
        src: Longganisa,
        id: uuid()
    },
    {
        name: 'LUMPIA',
        src: Lumpia,
        id: uuid()
    },
    {
        name: 'PANCIT',
        src: Pancit,
        id: uuid()
    },
    {
        name: 'PINAKBET',
        src: Pinakbet,
        id: uuid()
    },
    {
        name: 'PORK SISIG',
        src: PorkSisig,
        id: uuid()
    },
    {
        name: 'SINIGANG',
        src: Sinigang,
        id: uuid()
    },
]

export { cardsInfo, allInfo }