import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../ProductCard/ProductCard';

import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link to={title} className="title">{title.toUpperCase()}</Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
