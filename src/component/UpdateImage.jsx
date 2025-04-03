import axios from "axios";

export default function UpdateImage({ mediaId, setImages }) {
  const handleUpdateImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = async (event) => {
      try {
        const file = event.target.files[0];
        if (!file) return;

        if (!mediaId) {
          console.error("Invalid image ID");
          return;
        }

        console.log("Uploading file for Image ID:", mediaId);

        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.put(
          `https://paint-warrior-backend.onrender.com/api/media/${mediaId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        console.log("Response from server:", response.data);

        // Ensure the correct image is updated in state
        setImages((prev) =>
          prev.map((img) =>
            img._id === mediaId ? { ...img, ...response.data } : img
          )
        );
      } catch (error) {
        console.error("Error updating image:", error.response?.data || error.message);
      }
    };

    fileInput.click();
  };

  return (
    <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleUpdateImage}>
      Update
    </button>
  );
}
