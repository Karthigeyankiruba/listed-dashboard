import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const Datatable = () => {
  const [products, setProducts] = useState([]);
  const userColumns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "title",
      headerName: "Title",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 90,
      type: "number",

      valueGetter: (params) => params.row.rating.rate,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(products);

  return (
    <div style={{ height: 400, width: "100%" }} className="datatable">
      <DataGrid
        rows={products}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
