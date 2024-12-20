import { useState } from 'react';
import PropTypes from 'prop-types'; 

export default function FilterByBreed({ breeds, onFilterChange }) {
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleChange = (event) => {
    const breed = event.target.value;
    setSelectedBreed(breed);
    onFilterChange(breed);
  };

  return (
    <div className="filter-box mb-4">
      <label htmlFor="breed-filter" className="form-label">Filter by Breed:</label>
      <select
        id="breed-filter"
        className="form-select"
        value={selectedBreed}
        onChange={handleChange}
      >
        <option value="">All Breeds</option>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>{breed}</option>
        ))}
      </select>
    </div>
  );
}

// Add PropTypes for validation
FilterByBreed.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensures breeds is an array of strings
  onFilterChange: PropTypes.func.isRequired, // Ensures onFilterChange is a function
};
