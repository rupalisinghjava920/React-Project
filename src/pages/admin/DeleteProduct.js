import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hasRun = useRef(false); // ✅ Add this

  useEffect(() => {
    if (hasRun.current) return; // ✅ Prevent second execution
    hasRun.current = true;

    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:8080/products/${id}`)
        .then(() => {
          navigate("/admin/productListing");
        })
        .catch((error) => {
          console.error("Delete error:", error);
        });
    } else {
      navigate("/admin/productListing");
    }
  }, [id, navigate]);

  return null;
}

export default DeleteProduct;
