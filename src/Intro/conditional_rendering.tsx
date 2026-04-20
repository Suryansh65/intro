export function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  // Conditional Rendering based on isPacked boolean
  //   if(isPacked){
  //     return <li className="list">{name}✅</li>
  //   }
  //   return <li className="list">{name}</li>;

  /*
    USING TERNARY OPERATOR FOR CONDITINAL RENDERING
*/
  // return (
  //     <li className="list" >
  //         {isPacked ? name + "✅" : name}
  //     </li>
  // )

  /*
    USING JSX INSIDE TERNARY OPEARTOR
*/
  // return (
  //     <li className="list" >
  //         {isPacked ? (
  //             <del>
  //                 {name + ' ✅'}
  //             </del>
  //         ):name}
  //     </li>
  // )

  /* 
        USING LOGICAL && OPEARTOR 
    */
  //    return (
  //     <li className="list" >
  //         {name}{isPacked && ' ✅'}
  //     </li>
  //    )
  /*
   ⚠️ PITFALL: DO NOT USE NUMBER WITH && OPERATOR, SUPPOSE YOU USE 0 AS LEFT SIDE STATEMENT AND IT WILL CONSIDER IT AS FALSE AND RETURN 0 INSTEAD CONVERT THAT INTO BOOLEAN FIRST
   */

  /*
    USING A VARIABLE: THIS WORKS BOTH FOR TEXT AND FOR JSX ALSO
   */
  //   let itemContent = name;
  //   if(isPacked){
  //     itemContent = name + ' ✅'
  //   }else{
  //     itemContent = name + ' ❌'
  //   }
  //   return (
  //     <li className="list" >
  //         {itemContent}
  //     </li>
  //   )

  /*
    CHALLENGE1:
*/
  return (
    <li className="list">
      {name} {isPacked ? " ✅" : " ❌"}
    </li>
  );
}


// Item2 for challenge 2
export function Item2({name, importance}:{name:string, importance:number}){
    return (
        <li className="list">
            {name}
            {importance > 0 && ' '}
            {importance > 0 && (
                <i>
                    (Importance: {importance})
                </i>
            )}
        </li>
    )
}
export function PackingList() {
  return (
    <section>
      <h1>Suryansh Packing list</h1>
      <ul>
        {/* <Item isPacked={true} name="Space Suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" /> */}

        <Item2 importance={9} name="Space suit" />
        <Item2 importance={0} name="Helmet with a golden leaf" />
        <Item2 importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
}
type DrinkName = 'tea' | 'coffee';
function Drink({ name }:{name:DrinkName}) {
    const obj = {
        tea: {
            part: 'leaf',
            caffinecontent: '15-70 mg/cup',
            age: '4,000+ years'
        },
        coffee: {
            part: 'bean',
            caffinecontent: '80-185 mg/cup',
            age: '1,000+ years'
        }
    };
    const info = obj[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffinecontent}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

