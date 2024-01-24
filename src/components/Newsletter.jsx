export default function Newsletter() {
  return (
    <form>
      <h4>Our Newsletter</h4>
      {/* name */}
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" defaultValue="Juan" required />
      </div>
      {/* last name */}
      <div>
        <label htmlFor="lastname">Last Name: </label>
        <input type="text" id="lastname" name="lastname" defaultValue="Dela Cruz" required />
      </div>
      {/* email address */}
      <div>
        <label htmlFor="email">Email Address: </label>
        <input type="text" id="email" name="email" defaultValue="juandelacruz@email.com" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
