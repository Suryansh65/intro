// import type { AvatarProps } from "./props";

export function getImageUrl(imageId:string,size:string | null = 's'){
    console.log("size: ",size);
    const url = 'https://react.dev/images/docs/scientists/' + imageId + size + '.jpg';
    return url;
}