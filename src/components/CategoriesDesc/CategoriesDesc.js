import "./CategoriesDesc";

const CategoriesDesc = ({ selectedCategory }) => {
    return (
        <div>
            <h3>Selected Category: <span className="category_name">{selectedCategory}</span></h3>
        </div>
    );
};

export default CategoriesDesc;