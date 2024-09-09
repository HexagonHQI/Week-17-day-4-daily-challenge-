import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryById } from '../redux/selectors/taskSelectors';
import { addCategory, editCategory, deleteCategory } from '../redux/actions/taskActions';

const CategorySelector = ({ selectedCategoryId, onSelectCategory }) => {
  const categories = useSelector(state => state.tasks.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Select Category</h2>
      <select
        value={selectedCategoryId}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
