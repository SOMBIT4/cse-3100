import { useEffect, useState } from 'react';
import FilterByBreed from '../component/filter_by_breed';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
  { name: 'Tommy', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
        ));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);

        const uniqueBreeds = [...new Set(availableCats.map((cat) => cat.breed))];
        setBreeds(uniqueBreeds);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilterChange = (breed) => {
    if (breed) {
      setFilteredCats(cats.filter((cat) => cat.breed === breed));
    } else {
      setFilteredCats(cats);
    }
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <div className="d-flex mt-2 mb-4">
        <div className="col-md-3">
          <FilterByBreed breeds={breeds} onFilterChange={handleFilterChange} />
        </div>
        <div className="col-md-9">
          <div className="col-md-8"><p>Meet our adorable cats looking for their forever home!</p></div>
          
          <div className="mt-2 row g-5 cats-container" id="cats-container">
            {filteredCats.map((cat, i) => (
              <div key={i} className="col-md-4">
                <div className="cat-card">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid mb-2"
                    style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                  />
                  <div className="cat-info">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
