import DirectoryItem from '../DirectoryItem/DirectoryItem';

import './Directory.scss';

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
