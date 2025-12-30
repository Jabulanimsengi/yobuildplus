'use client';

// Simple types for Cloudinary widget
declare global {
  interface Window {
    cloudinary: any;
  }
}

interface CloudinaryUploadWidgetProps {
    onUpload: (result: any) => void;
    uploadPreset?: string;
    children?: React.ReactNode;
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ onUpload, uploadPreset = "yobuild_unsigned", children }) => {
    const handleUploadClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (!window.cloudinary) {
            alert("Cloudinary script not loaded yet.");
            return;
        }

        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dw8dqd5tj',
                uploadPreset: uploadPreset,
                sources: ['local', 'url', 'camera'],
                multiple: false,
                maxFiles: 1,
            },
            (error: any, result: any) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    onUpload(result.info);
                }
            }
        );

        widget.open();
    };

    return (
        <div onClick={handleUploadClick}>
            {children}
        </div>
    );
};

export default CloudinaryUploadWidget;
