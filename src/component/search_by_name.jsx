import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchByName = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-box">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

SearchByName.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchByName;
