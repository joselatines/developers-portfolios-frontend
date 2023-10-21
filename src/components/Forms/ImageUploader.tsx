import ImageUploading, { ImageListType } from "react-images-uploading";

interface Props {
	images: ImageListType;
	setImages: (images: ImageListType | any) => void; // initialize in []
	maxNumber?: number;
}

export function ImageUploader({ images, setImages, maxNumber = 10 }: Props) {
	// 	const [images, setImages] = useState([]);

	const onChange = (imageList: ImageListType, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

	return (
		<div className="App">
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
			>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className="upload__image-wrapper">
						<button
							style={isDragging ? { color: "red" } : undefined}
							onClick={onImageUpload}
							{...dragProps}
						>
							Click or Drop here
						</button>
						&nbsp;
						<button onClick={onImageRemoveAll}>Remove all images</button>
						{imageList.map((image, index) => (
							<div key={index} className="image-item">
								<img
									src={image["data_url"]}
									alt={image.file?.name}
									width="100"
								/>
								<div className="image-item__btn-wrapper">
									<button onClick={() => onImageUpdate(index)}>Update</button>
									<button onClick={() => onImageRemove(index)}>Remove</button>
								</div>
							</div>
						))}
					</div>
				)}
			</ImageUploading>
		</div>
	);
}
