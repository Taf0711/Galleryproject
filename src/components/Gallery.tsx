import React from "react";


const images = [
    '6B9B0072-E0CA-445D-8E2A-690BAD7DC6D8.jpg',
    '61F3FCC7-1064-4DB5-A85B-11B8E39CE161.jpg',
    'IMG_1002.jpg',
    'IMG_1699.jpg',
    'IMG_2023.jpg',
    'IMG_2327.jpg',
];

function Gallery() {
    return (
        <div className="gallery">
            {images.map((image,index) => (
                <div key={index} className="gallery-item">
                    <img src={`/images/${image}`} alt={`Image ${index}`} />
                </div>
            ))} 
        </div>
    );
}

export default Gallery; 


