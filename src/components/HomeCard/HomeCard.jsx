import { useState } from "react";
import "./HomeCard.css";

export default function HomeCard({ image, title, price, tags = [], photos = [] }) {
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

	const allPhotos = photos.length > 0 ? photos : [image];
	const totalPhotos = allPhotos.length;

	const handleOpenGallery = () => {
		setIsGalleryOpen(true);
		setCurrentPhotoIndex(0);
	};

	const handleCloseGallery = () => {
		setIsGalleryOpen(false);
	};

	const handleNextPhoto = () => {
		setCurrentPhotoIndex((prev) => (prev + 1) % totalPhotos);
	};

	const handlePrevPhoto = () => {
		setCurrentPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Escape") handleCloseGallery();
		if (e.key === "ArrowRight") handleNextPhoto();
		if (e.key === "ArrowLeft") handlePrevPhoto();
	};

	return (
		<>
			<div className="home-card">
				<div className="home-card-image-wrapper">
					<img className="home-card-image" src={image} alt={title} />

					{totalPhotos > 1 && (
						<button className="home-card-photo-button" onClick={handleOpenGallery} aria-label={`View all ${totalPhotos} photos`}>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<rect x="3" y="3" width="18" height="18" rx="2" />
								<circle cx="9" cy="9" r="2" />
								<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
							</svg>
							See All {totalPhotos} Photos
						</button>
					)}
				</div>

				<div className="home-card-body">
					<h4 className="home-card-title">{title}</h4>
					<p className="home-card-price">{price}</p>

					<div className="home-card-tags">
						{tags.map((tag, i) => (
							<span key={i} className="home-card-tag">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			{isGalleryOpen && (
				<div className="gallery-overlay" onClick={handleCloseGallery} onKeyDown={handleKeyDown} role="dialog" aria-modal="true">
					<div className="gallery-container" onClick={(e) => e.stopPropagation()}>
						<button className="gallery-close-button" onClick={handleCloseGallery} aria-label="Close gallery">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</button>

						{totalPhotos > 1 && (
							<>
								<button className="gallery-nav-button gallery-nav-prev" onClick={handlePrevPhoto} aria-label="Previous photo">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<polyline points="15 18 9 12 15 6" />
									</svg>
								</button>

								<button className="gallery-nav-button gallery-nav-next" onClick={handleNextPhoto} aria-label="Next photo">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<polyline points="9 18 15 12 9 6" />
									</svg>
								</button>
							</>
						)}

						<img src={allPhotos[currentPhotoIndex]} alt={`${title} - Photo ${currentPhotoIndex + 1} of ${totalPhotos}`} className="gallery-image" />

						<div className="gallery-counter">
							{currentPhotoIndex + 1} / {totalPhotos}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
