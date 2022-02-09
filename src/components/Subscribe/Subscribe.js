import "./Subscribe.css";

export default function Subscribe() {
  return (
    <form className="subscribe-form" action="">
      <p className="subscribe-form__title">JOIN OUR MAILING LIST!</p>
      <p>Sign up for special updates on events, deals, and more!</p>
      <input className="email" type="text" placeholder="Email address" />
      <p>Please select all the ways you would like to hear from :</p>
      <input className="subscribe-form__checkbox" type="checkbox" id="email" />
      <label htmlFor="email">Email</label>
      <button>Subscribe</button>
    </form>
  );
}
