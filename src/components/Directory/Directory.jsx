/* eslint-disable react/prop-types */
import CategoryItem from '../CategoryItem/CategoryItem';

import './Directory.scss';

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
