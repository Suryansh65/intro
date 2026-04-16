
/*
Props are the information that we pass to a JSX tag. eg: className, src, alt, width, height are all props
*/
import { getImageUrl } from "./getImageUrl";
export interface AvatarProps{
    person: {
        name: string,
        imageId: string
    },
    size: number | string
}
export function Avatar({person, size}: AvatarProps){
    return (
        <img 
            className="avatar"
            //remember to use curly braces for JavaScript expression in JSX
            src= {getImageUrl(person.imageId)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile(){
    return (
        <>
            <Avatar person={{name: "Lin Lanying" , imageId: "1bX5QH6"}} size={50} />
        </>
    )
}