import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:8080/products/${id}`)
        .then(() => {
          // alert("Product deleted successfully!");
          navigate("/admin/productListing");
        })
        .catch((error) => {
          console.error("Delete error:", error);
          // alert("Failed to delete product.");
        });
    } else {
      navigate("/admin/productListing");
    }
  }, [id, navigate]);

  return null;
}

export default DeleteProduct;
