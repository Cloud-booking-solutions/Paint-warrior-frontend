import axios from "axios";

const DeleteImage = ({ mediaId, setImages }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this media?")) return;

    try {
      await axios.delete(`https://paint-warrior-backend.onrender.com/api/media/${mediaId}`);

      setImages((prevMedia) =>
        prevMedia.filter((item) => item._id !== mediaId)
      );
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteImage;
