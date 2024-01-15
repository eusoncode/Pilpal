import image02 from '../../assets/image-02.png';
import image03 from '../../assets/image-03.png';
import image04 from '../../assets/image-04.png';
import image05 from '../../assets/image-05.png';

const mockPillIntakes = [
  {
    id: 1,
    date: new Date(2024, 0, 1),
    name: 'Vitamin C',
    manufacturer: 'Sports Research',
    quantity: 2,
    dosageType: 'Pills',
    time: '8:00',
    taken: true,
    image: { src: image03 },
  },
  {
    id: 2,
    date: new Date(2024, 0, 2),
    name: 'Omega-3',
    manufacturer: "Doctor's Best",
    quantity: 1,
    dosageType: 'Softgels',
    time: '8:00',
    taken: true,
    image: { src: image02 },
  },
  {
    id: 3,
    date: new Date(2024, 0, 2),
    name: 'Probiotics',
    manufacturer: 'Sports Gold Nutrition',
    quantity: 1,
    dosageType: 'Pills',
    time: '21:05',
    taken: true,
    image: { src: image05 },
  },
  {
    id: 4,
    date: new Date(2024, 0, 2),
    name: 'Vitamin D',
    manufacturer: "Doctor's Best",
    quantity: 1,
    dosageType: 'Softgel',
    time: '10:00',
    taken: false,
    image: { src: image04 },
  },
];
export default mockPillIntakes;
