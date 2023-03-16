import "./Main.css";
//import EntryForm from "./EntryForm/EntryForm";
//import EntriesSection from "./EntriesSection/EntriesSection";
export default function Main() {
  return (
    <div className="main">
      NEW ENTRY
      <form>
        <fieldset>
          <label htmlFor="title-input">Motto</label>
          <input></input>
        </fieldset>

        <fieldset>
          <label htmlFor="title-input">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows="4"
            cols="50"
            maxLength="150"
          ></textarea>
        </fieldset>

        <button type="submit" className="submitbutton">
          Create
        </button>
      </form>
    </div>
  );
}
