class Photo {
    constructor(private content: string, private timestamp: Date) {}

    getContent(): string {
        return this.content;
    }

    getTimestamp(): Date {
        return this.timestamp;
    }
}

class Camera {
    takePhoto(content: string): Photo {
        return new Photo(content, new Date());
    }
}

class Album {
    private photos: Photo[] = [];

    addPhoto(photo: Photo): void {
        this.photos.push(photo);
    }

    getPhotos(): Photo[] {
        return this.photos;
    }
}

const camera = new Camera();
const album = new Album();

// 模拟拍照
const photo1 = camera.takePhoto("Photo at the beach");
const photo2 = camera.takePhoto("Photo in the mountains");

// 将照片添加到相册
album.addPhoto(photo1);
album.addPhoto(photo2);

// 查看相册中的照片
album.getPhotos().forEach(photo => {
    console.log(`${photo.getContent()} - Taken on: ${photo.getTimestamp()}`);
});
