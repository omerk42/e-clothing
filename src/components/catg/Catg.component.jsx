import "./Catg.style.scss";
import CatgItem from "./catg-item/CatgItem.component";


const Catg = ({categories}) => {

    return (
        <div className="categories-container">
          {categories.map((category) => (
            <CatgItem
              key={category.id}
              imageUrl={category.imageUrl}
              title={category.title}
            />
          ))}
        </div>
      );
}

export default Catg