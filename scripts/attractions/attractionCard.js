
export const attractionCard = (obj) => {
    let x = `
   <section
        <h2> ${obj.name} </h2>
        <p> ${obj.description}</p>
        <p> ${obj.city}, ${obj.state}</p>
    </section>
    `
    return x;
}