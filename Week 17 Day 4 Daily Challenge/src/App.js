import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import TaskEditor from './components/TaskEditor';

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <CategorySelector
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
      />
      {selectedCategoryId && (
        <TaskList selectedCategoryId={selectedCategoryId} />
      )}
      {/* Example task editing component, should be dynamically handled */}
      <TaskEditor task={{ id: 1, name: 'Sample Task', completed: false }} />
    </div>
  );
};

export default App;
