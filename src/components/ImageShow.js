function ImageShow({image}) {
    return (
        <div className="image-show">
            <img src={image.urls.small} alt={image.alt_description} className="img" />
        </div>
    );
}

export default ImageShow;