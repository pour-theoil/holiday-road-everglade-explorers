
export const parkCard = (obj) => {
    let x = `
   <section
        <h2> ${obj.name} </h2>
        <p> ${obj.description}</p>
        <p> ${obj.addresses[0].city}, ${obj.addresses[0].stateCode}</p>
    </section>
    `
    return x;
}