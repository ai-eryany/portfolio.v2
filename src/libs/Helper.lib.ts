import clsx from "clsx";

function cn(...args: any) {
  return clsx(...args);
}

function preloadImages(imageUrls: string[]): Promise<void> {
  return new Promise((resolve) => {
    let loadedCount = 0;

    if (imageUrls.length === 0) {
      resolve();
      return;
    }

    imageUrls.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          resolve();
        }
      };
      img.src = src;
    });
  });
}

const Helper = {
  cn,
  preloadImages,
};

export default Helper;
