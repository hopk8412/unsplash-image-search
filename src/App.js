import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {

    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        setImages(await searchImages(term));
    }
    return (
        <div className="container">
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;