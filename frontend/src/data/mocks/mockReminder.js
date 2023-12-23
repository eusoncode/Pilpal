import image02 from '../../assets/image-02.png';
import image03 from '../../assets/image-03.png';
import image04 from '../../assets/image-04.png';
import image05 from '../../assets/image-05.png';

const mockReminder = [
  {
    id: 1,
    type: 'intake',
    name: 'Omega-3 (Gold Nutrition)',
    time: '3:00pm',
    intakeQuantity: 1,
    image: { src: image02 },
  },
  {
    id: 2,
    type: 'intake',
    name: 'Vitamin C (Sports Research)',
    time: '5:35pm',
    intakeQuantity: 2,
    image: { src: image03 },
  },
  {
    id: 3,
    type: 'restock',
    name: `Vitamin D (Doctor's Best)`,
    time: '5:35pm',
    stockQuantity: 2,
    image: { src: image04 },
  },
  {
    id: 4,
    type: 'intake',
    name: `Probiotics (Gold Nutrition)`,
    time: '9:05pm',
    stockQuantity: 2,
    image: { src: image05 },
  },
];

export default mockReminder;
