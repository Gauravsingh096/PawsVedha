// import React from 'react';

// const Sidebar = ({ categories, onCategorySelect }) => {
//   return (
//     <div className="sidebar">
//       <h2>Pet Accessories</h2>
//       <ul>
//         {categories.map((category, index) => (
//           <li key={index} onClick={() => onCategorySelect(category)}>
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';

const Sidebar = ({ categories, onCategorySelect }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
