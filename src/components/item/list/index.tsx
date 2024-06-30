import { useGetItemsQuery } from "api/services/item";

const ItemList: React.FC = () => {
  const { data } = useGetItemsQuery();
  return (
    <ul>
      {data?.map((item) => (
        <li>{`${item.name} - ${item.description} - ${item.quantity}`}</li>
      ))}
    </ul>
  );
};

export default ItemList;
