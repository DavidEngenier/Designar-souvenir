import React from 'react';

interface FacebookImageProps {
  src: string;
}

const FacebookImage: React.FC<FacebookImageProps> = ({ src }) => (
  <div className="facebook-image" style={{ marginBottom: '20px', width: 'auto' }}>
    <img 
      src={src}
      
      alt="Facebook Image"
    />
  </div>
);

const FacebookImagesPage = () => (
 <div className="facebook-images-page">
      <h1>Imágenes de Facebook</h1>
      <div className="images-container">
        <div className="images-column">
          <FacebookImage src="/images/Comentario4.png" />
        </div>
        <div className="images-column">
          <FacebookImage src="/images/comentario1.png" />
        </div>
        <div className="images-column">
          <FacebookImage src="/images/Comentario3.png" />
        </div>
        <div className="images-column">
          <FacebookImage src="/images/Comentario2.png" />
        </div>
      </div>
    </div>
);

export default FacebookImagesPage;
