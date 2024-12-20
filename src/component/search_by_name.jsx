
import  { useState } from 'react';
import PropTypes from 'prop-types';
const SearchByName = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};
SearchByName.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchByName;
