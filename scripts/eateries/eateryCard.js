
export const eateryCard = (obj) => {
    let x = `
   <section
        <h2> ${obj.businessName} </h2>
        <p> ${obj.description}</p>
        <p> ${obj.city}, ${obj.state}</p>
    </section>
    `
    return x;
}