

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <>
    <h2>Contact</h2>
    <p>{JSON.stringify(contact)}</p>
    </>

  );
}

