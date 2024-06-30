import { useGetItemsQuery } from "api/services/item";

const ItemForm: React.FC = () => {
  const { data } = useGetItemsQuery();
  return (
    <div>
      teste
      <ul>
        {data?.map((item) => (
          <li>{`${item.name} - ${item.description} - ${item.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemForm;
