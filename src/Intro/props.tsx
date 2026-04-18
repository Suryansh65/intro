/*
Props are the information that we pass to a JSX tag. eg: className, src, alt, width, height are all props
*/
import { getImageUrl } from "./getImageUrl";
import Card from "./card/card";
export interface AvatarProps {
  person: {
    name: string;
    imageId: string;
  };
  size: number | string;
}
export function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      //remember to use curly braces for JavaScript expression in JSX
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile({
  name,
  imageId,
  size,
  profession,
  awardsCount,
  awards,
  discovery,
}: {
  name: string;
  imageId: string;
  size: number;
  profession: string;
  awardsCount: string;
  awards: string[];
  discovery: string;
}) {
  return (
    <>
      {/* <Avatar person={{name: "Lin Lanying" , imageId: "1bX5QH6"}} size={50} /> */}

      <Card>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId, size <= 90 ? 's' : 'b')}
          alt="Maria Skłodowska-Curie"
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardsCount} </b>
            <ul>
            {awards.map((award,index)=>(
                <li key={index} >{award}</li>
            ))}

            </ul>
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
      </Card>
    </>
  );
}
/*
Props are immutable: You cannot modify Parent given prompt in children component, they are just for reading not editing.

If you want to change prop value on the basis of User interation then use useState in parent component: then pass that updated values in the child component, but still the prop is only readable.
*/

// Challenge:1
export function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageId={"szV5sdG"}
        size={100}
        profession={"physicist and chemist"}
        awardsCount="4"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovery="polonium (chemical element)"
      />

         <Profile
        name={"Katsuko Saruhashi"}
        imageId={"YfeOqp2"}
        size={70}
        profession={"geochemist"}
        awardsCount="2"
        awards={[
          "Miyake Prize for geochemistry", 
          "Tanaka Prize"
        ]}
        discovery="a method for measuring carbon dioxide in seawater"
      />

      {/* <Profile name={"Katsuko Saruhashi"} imageId={"YfeOqp2"} size={70} /> */}

    </div>
  );
}
