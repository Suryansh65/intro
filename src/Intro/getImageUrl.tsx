// import type { AvatarProps } from "./props";

export function getImageUrl(imageId:string,size:string= 's'){
    const url = 'https://react.dev/images/docs/scientists/' + imageId + size + '.jpg';
    console.log("url",url);
    return url;
}