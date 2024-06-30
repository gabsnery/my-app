import { useGetItemsQuery } from "@api/services/item";

const ItemForm = () =>{
    const {data}= useGetItemsQuery();
    return <ul>
{data?.map(item =>(<li>{`${item.name} - ${item.description} - ${item.quantity}`}</li>))}
    </ul>
}

export default ItemForm