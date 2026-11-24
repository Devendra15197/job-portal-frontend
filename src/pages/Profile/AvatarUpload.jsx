import React from 'react'
import { Camera, ImagePlus, Loader2 } from 'lucide-react'

const AvatarUpload = ({
    currentImage,
    user,
    uploading,
    onFileSelect
}) => {
    const fileRef = React.useRef(null)

    const openFileExplorer = () => {
        if (!uploading) {
            fileRef.current?.click()
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files?.[0]

        if (file) {
            onFileSelect?.(file)
        }

        // Allows the same file to be selected again later
        event.target.value = ''
    }

    const userName = user?.fullName
        ?.trim()
        .split(/\s+/)
        .map((name) => name[0])
        .join('')
        .toUpperCase() || 'U'
    return (
        <div className="relative group shrink-0">
            <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileChange}
                className="hidden"
            />

            <button
                type="button"
                onClick={openFileExplorer}
                disabled={uploading}
                className="relative h-24 w-24 rounded-2xl border-4 border-white bg-primary shadow-lg overflow-hidden cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
                {currentImage ? (
                    <img
                        src={currentImage}
                        alt={user?.fullName || 'Profile'}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="text-white text-2xl font-bold flex items-center justify-center h-full w-full">
                        {userName}
                    </span>
                )}

                <div
                    className={[
                        'absolute inset-0 flex flex-col items-center justify-center gap-1 transition-all duration-200',
                        uploading
                            ? 'bg-black/60'
                            : 'bg-black/0 group-hover:bg-black/50'
                    ].join(' ')}
                >
                    {uploading ? (
                        <Loader2 className="h-6 w-6 text-white animate-spin" />
                    ) : (
                        <>
                            <Camera className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-[10px] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Change
                            </span>
                        </>
                    )}
                </div>
            </button>

            <button
                type="button"
                title="Upload photo"
                onClick={openFileExplorer}
                disabled={uploading}
                className="absolute -bottom-1.5 -right-1.5 h-7 w-7 rounded-full bg-primary/80 border-2 border-white shadow-md flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
                {uploading ? (
                    <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                ) : (
                    <ImagePlus className="w-3.5 h-3.5 text-white" />
                )}
            </button>
        </div>
    )
}

export default AvatarUpload