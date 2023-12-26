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
    intakeFrequency: 'Everyday',
    intakeQuantity: 1,
    stockQuantity: 30,
    image: { src: image02 },
    effectiveness: 'Needs more time to evaluate',
    reorderLevel: 14,
    dosageType: 'Softgel',
    startDate: 'Dec 28, 2023',
    endDate: 'Jan 31, 2024',
    price: 24,
    purchasedFrom: 'iHerb',
    additionalNotes: 'Compare prices for next purchase.',
  },
  {
    id: 2,
    type: 'intake',
    name: 'Vitamin C (Sports Research)',
    time: '5:35pm',
    intakeFrequency: 'Everyday',
    intakeQuantity: 2,
    stockQuantity: 114,
    image: { src: image03 },
    effectiveness: 'Slightly Effective',
    reorderLevel: 24,
    dosageType: 'Tablet',
    startDate: 'Dec 28, 2023',
    endDate: '',
    price: 11,
    purchasedFrom: 'Amazon',

    additionalNotes:
      'Notes 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    type: 'restock',
    name: `Vitamin D (Doctor's Best)`,
    time: '6:35pm',
    intakeFrequency: 'Everyday',
    intakeQuantity: 1,
    stockQuantity: 2,
    image: { src: image04 },
    effectiveness: 'Highly Effective',
    reorderLevel: 10,
    dosageType: 'Softgel',
    startDate: 'Dec 28, 2023',
    endDate: '',
    price: 16,
    purchasedFrom: 'iHerb',

    additionalNotes:
      'Notes 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tellus elit, sit amet dignissim dui blandit eget. Duis lorem mi.',
  },
  {
    id: 4,
    type: 'intake',
    name: `Probiotics (Gold Nutrition)`,
    time: '9:05pm',
    intakeFrequency: 'Everyday',
    intakeQuantity: 1,
    stockQuantity: 2,
    image: { src: image05 },
    effectiveness: 'Slightly Effective',
    reorderLevel: 14,
    dosageType: 'Capsule',
    startDate: 'Dec 28, 2023',
    endDate: '',
    price: 25,
    purchasedFrom: 'Alive Health Centre',

    additionalNotes:
      'Notes 4, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tellus elit.',
  },
];

export default mockReminder;
